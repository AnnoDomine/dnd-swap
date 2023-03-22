import { useEffect, useState, useRef } from "react";
import { useLoader, useQuery } from "saga-query/react";
import { useAppDispatch, useAppSelector } from "../../utils/redux/useApp";
import pokemonSagaService from "../../redux/saga/fetch/pokemonSaga";
import pokemonListSelectorService from "../../redux/selector/pokemonListSelector";
import List from "./list/List";
import pokedexStyles from "./pokedex.style";
import pokedexHelper from "./pokedex.helper";
import Button from "../common/button/Button";
import Details from "./details/Details";

type Props = {};

const startPage = 0;

const Pokedex = (props: Props) => {
    const _isMounted = useRef(true);

    const [page, setPage] = useState<number>(startPage);
    const [pokemonSelected, setPokemonSelected] = useState<string>("");

    const dispatch = useAppDispatch();
    const selectPokemonPage = useAppSelector(pokemonListSelectorService.selectedPokemonList(page * 10));
    const selectPokemonCount = useAppSelector(pokemonListSelectorService.selectPokemonCount);

    const pageLoading = useLoader(pokemonSagaService.getPokemonList({ offset: page * 10 }));

    const totalPages = (selectPokemonCount / 10).toLocaleString(undefined, { maximumFractionDigits: 0 });

    useEffect(() => {
        if (_isMounted) {
            dispatch(pokemonSagaService.getPokemonList({ offset: startPage }));
        }
        return () => {
            _isMounted.current = false;
        };
    }, [_isMounted]);

    return (
        <div style={{ ...pokedexStyles.pokedexWraperStyle }}>
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
