import { createSlice } from "@reduxjs/toolkit";
import POKEMON_LIST_TYPES from "../types/pokemonListTypes";
import { ReduxAction } from "../../types/redux";

const initialState: NPokemonList.IStore = { count: 0, list: [] };

export const pokemonListSlice = createSlice({
    name: "pokemon_list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                POKEMON_LIST_TYPES.GET_POKEMON_LIST,
                (state: typeof initialState, action: ReduxAction<NPokemonList.IResponse["results"]>) => {
                    const list = action.payload;
                    return {
                        ...state,
                        list,
                    };
                }
            )
            .addCase(
                POKEMON_LIST_TYPES.ADD_POKEMON_TO_LIST,
                (state: typeof initialState, action: ReduxAction<NPokemonList.IResponse["results"]>) => {
                    const list = [...state.list, ...action.payload];
                    return {
                        ...state,
                        list,
                    };
                }
            )
            .addCase(
                POKEMON_LIST_TYPES.SET_POKEMON_COUNT,
                (state: typeof initialState, action: ReduxAction<NPokemonList.IResponse["count"]>) => {
                    return {
                        ...state,
                        count: action.payload,
                    };
                }
            );
    },
});

export default pokemonListSlice.reducer;
