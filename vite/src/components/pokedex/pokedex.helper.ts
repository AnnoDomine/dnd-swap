import pokemonSagaService from "../../redux/saga/fetch/pokemonSaga";

import type { AnyAction, Dispatch } from "@reduxjs/toolkit";

const changePokedexListPage = (
    change: "prev" | "next",
    dispatch: Dispatch<AnyAction>,
    page: { page: number; setPage: (_page: number) => void },
) => {
    let changed = 0;
    if (change === "prev") {
        page.setPage(page.page - 1);
        changed = (page.page - 1) * 10;
    }
    if (change === "next") {
        page.setPage(page.page + 1);
        changed = (page.page + 1) * 10;
    }
    dispatch(pokemonSagaService.getPokemonList({ offset: changed }));
};

const pokedexHelper = { changePokedexListPage };

export default pokedexHelper;
