import {  put, select } from "redux-saga/effects";

import createSagaAction from "../../../utils/redux/createSagaAction";
import pokemonListSelectorService from "../../selector/pokemonListSelector";
import POKEMON_DETAILS_TYPES from "../../types/pokemonDetailsTypes";
import POKEMON_LIST_TYPES from "../../types/pokemonListTypes";
import api, { cacheTimer } from "../sagaApi";

import type { ApiCtx, CreateActionWithPayload } from "saga-query/*";


const fetchLimit = 10;

const getPokemonList: CreateActionWithPayload<ApiCtx, { offset: number }> = api.get<{ offset: number }>(
    "pokemon_list",
    { saga: cacheTimer },
    function* (ctx: ApiCtx<{ offset: number }>, next) {
        const currentStoreCount: number = yield select(pokemonListSelectorService.selectPokemonCount);
        const offset = `pokemon?limit=${fetchLimit}&offset=${ctx.payload.offset}`;

        ctx.request = ctx.req({
            url: offset,
        });

        yield next();

        if (!ctx.json.ok) return;

        const { data } = ctx.json as { data: NPokemonList.IResponse };

        if (currentStoreCount === 0)
            yield put(
                createSagaAction<NPokemonList.IResponse["results"]>(POKEMON_LIST_TYPES.GET_POKEMON_LIST, data.results)
            );
        else
            yield put(
                createSagaAction<NPokemonList.IResponse["results"]>(
                    POKEMON_LIST_TYPES.ADD_POKEMON_TO_LIST,
                    data.results
                )
            );

        if (currentStoreCount === 0)
            yield put(
                createSagaAction<NPokemonList.IResponse["count"]>(POKEMON_LIST_TYPES.SET_POKEMON_COUNT, data.count)
            );
    }
);

const getPokemonDetails: CreateActionWithPayload<ApiCtx, { name: string }> = api.get<{ name: string }>(
    "pokemon_details",
    function* (ctx: ApiCtx<{ name: string }>, next) {
        const endpoint = `pokemon/${ctx.payload.name}`;

        ctx.request = ctx.req({
            url: endpoint,
        });

        yield next();

        if (!ctx.json.ok) return;

        const { data } = ctx.json as { data: NPokemonDetails.TPokemonDetails };

        yield put(createSagaAction<NPokemonDetails.TPokemonDetails>(POKEMON_DETAILS_TYPES.SET_POKEMON_DETAILS, data));
    }
);

const pokemonSagaService = { getPokemonList, getPokemonDetails };

export default pokemonSagaService;
