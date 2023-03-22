import pokemonListReducer from "./pokemonListSlice";
import pokemonDetailsReducer from "./pokemonDetailsSlice";

const rootSlice = {
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer,
};

export default rootSlice;
