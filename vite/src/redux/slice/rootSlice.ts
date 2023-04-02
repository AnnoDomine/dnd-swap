import pokemonDetailsReducer from "./pokemonDetailsSlice";
import pokemonListReducer from "./pokemonListSlice";

const rootSlice = {
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer,
};

export default rootSlice;
