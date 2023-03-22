import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../appStore";

const selectPokemonList = (state: RootState) => state.pokemonList;

const selectListOfFetchedPokemon = createSelector(selectPokemonList, (pokemonList) => pokemonList.list);

const selectedPokemonList = (offset: number) =>
    createSelector(selectListOfFetchedPokemon, (list) => list.slice(offset, offset + 10));

const selectPokemonCount = createSelector(selectPokemonList, (pokemonList) => pokemonList.count);

const pokemonListSelectorService = { selectedPokemonList, selectPokemonCount, selectListOfFetchedPokemon };

export default pokemonListSelectorService;
