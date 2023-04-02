import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../appStore";

const selectPokemonDetails = (state: RootState) => state.pokemonDetails;

const fetchedPokemon = createSelector(selectPokemonDetails, (pokemonList) => pokemonList);

const pokemonDetailsSelectorService = { fetchedPokemon };

export default pokemonDetailsSelectorService;
