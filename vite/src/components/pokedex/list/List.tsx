import ListItem from "./listItem/ListItem";
import listHelper from "./list.helper";
import { useAppDispatch } from "../../../utils/redux/useApp";
import optimisticPokedexList from "../../../utils/static/optimisticList";

type Props = {
    list: NPokemonList.TResult[];
    isLoading: boolean;
    pokemonSelected: (name: string) => void;
};

const List = ({ list, isLoading, pokemonSelected }: Props) => {
    const dispatch = useAppDispatch();

    return (
        <>
            {(isLoading ? optimisticPokedexList : list).map((pokemon, index) => (
                <ListItem
                    key={index}
                    name={pokemon.name}
                    onClick={() => {
                        pokemonSelected(pokemon.name);
                        listHelper.handleOnPokemonNameClick(pokemon.name, dispatch);
                    }}
                />
            ))}
        </>
    );
};

export default List;
