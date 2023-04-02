import { createSlice } from "@reduxjs/toolkit";

import POKEMON_DETAILS_TYPES from "../types/pokemonDetailsTypes";

import type { ReduxAction } from "../../types/redux";

const initialState: NPokemonDetails.TPokemonDetails = {};

export const pokemonDetailsSlice = createSlice({
    name: "pokemon_details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            POKEMON_DETAILS_TYPES.SET_POKEMON_DETAILS,
            (_state: typeof initialState, action: ReduxAction<NPokemonDetails.TPokemonDetails>) => action.payload
        );
    },
});

export default pokemonDetailsSlice.reducer;
