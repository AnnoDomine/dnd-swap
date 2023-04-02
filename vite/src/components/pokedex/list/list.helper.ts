import pokemonSagaService from "../../../redux/saga/fetch/pokemonSaga";

import type { AnyAction, Dispatch } from "@reduxjs/toolkit";

const handleOnPokemonNameClick = (url: string, dispatch: Dispatch<AnyAction>) => {
    dispatch(pokemonSagaService.getPokemonDetails({ name: url }));
    return null;
};
const listHelper = { handleOnPokemonNameClick };

export default listHelper;
