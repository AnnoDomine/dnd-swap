import { useEffect, useState, useRef, lazy, useCallback } from "react";
import { useLoader } from "saga-query/react";

import pokemonSagaService from "../../redux/saga/fetch/pokemonSaga";
import pokemonListSelectorService from "../../redux/selector/pokemonListSelector";
import { useAppDispatch, useAppSelector } from "../../utils/redux/useApp";
import Button from "../common/button/Button";

import pokedexHelper from "./pokedex.helper";
import pokedexStyles from "./pokedex.style";

// To code-split in vite just use lazy-load instead of using import
// import Details from "./details/Details";
// import List from "./list/List";
const Details = lazy(() => import("./details/Details"));
const List = lazy(() => import("./list/List"));

const startPage = 0;

const Pokedex = () => {
    const _isMounted = useRef(true);

    const [page, setPage] = useState<number>(startPage);
    const [pokemonSelected, setPokemonSelected] = useState<string>("");

    const dispatch = useAppDispatch();
    const selectPokemonPage = useAppSelector(pokemonListSelectorService.selectedPokemonList(page * 10));
    const selectPokemonCount = useAppSelector(pokemonListSelectorService.selectPokemonCount);

    const pageLoading = useLoader(pokemonSagaService.getPokemonList({ offset: page * 10 }));

    const totalPages = (selectPokemonCount / 10).toLocaleString(undefined, { maximumFractionDigits: 0 });

    const dispatchPokemonList = useCallback(
        () => dispatch(pokemonSagaService.getPokemonList({ offset: startPage })),
        [dispatch],
    );

    useEffect(() => {
        if (_isMounted) {
            dispatchPokemonList();
        }
        return () => {
            _isMounted.current = false;
        };
    }, [_isMounted, dispatchPokemonList]);

    return (
        <div style={{ ...pokedexStyles.pokedexWraperStyle }} data-testid="pokedex">
            <div style={{ ...pokedexStyles.pokedexListWraperStyle }}>
                <List list={selectPokemonPage} isLoading={pageLoading.isLoading} pokemonSelected={setPokemonSelected} />
                <div style={{ ...pokedexStyles.pokedexListButtons }}>
                    <Button
                        disabled={page === startPage}
                        onClick={() => pokedexHelper.changePokedexListPage("prev", dispatch, { page, setPage })}
                    >
                        &#60;
                    </Button>
                    <div>
                        {page + 1} - {totalPages}
                    </div>
                    <Button
                        disabled={page === Number(totalPages)}
                        onClick={() => pokedexHelper.changePokedexListPage("next", dispatch, { page, setPage })}
                    >
                        &#62;
                    </Button>
                </div>
            </div>
            <div style={{ ...pokedexStyles.pokedexDetailWraperStyle }}>
                <Details pokemonSelected={pokemonSelected} />
            </div>
        </div>
    );
};

export default Pokedex;
