import { LinearProgress, Typography } from "@mui/material";
import { useLoader } from "saga-query/react";

import pokemonSagaService from "../../../redux/saga/fetch/pokemonSaga";
import pokemonDetailsSelectorService from "../../../redux/selector/pokemonDetailsSelector";
import { isTypeOf } from "../../../utils/functions/typeCheck";
import { useAppSelector } from "../../../utils/redux/useApp";

type Props = {
    pokemonSelected: string;
};

const Details = ({ pokemonSelected }: Props) => {
    const selectedPokemon: NPokemonDetails.TPokemonDetails = useAppSelector(
        pokemonDetailsSelectorService.fetchedPokemon,
    );

    const selectedLoading = useLoader(pokemonSagaService.getPokemonDetails({ name: pokemonSelected }));

    if (Object.keys(selectedPokemon).length === 0) return <>Not fetched</>;
    if (!isTypeOf<NPokemonDetails.TPokemonResponse>(selectedPokemon)) return <></>;

    return (
        <>
            {selectedLoading.isLoading && (
                <LinearProgress color="inherit" sx={{ marginTop: "-3.81px", borderRadius: "5px" }} />
            )}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    alignItems: "stretch",
                    justifyContent: "space-between",
                    padding: "10px",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <Typography variant="body1">
                            {selectedPokemon.id} - {selectedPokemon.name}
                        </Typography>
                        <Typography variant="body1">Base-XP: {selectedPokemon.base_experience}</Typography>
                        <Typography variant="body1">Weight: {selectedPokemon.weight} dounats</Typography>
                    </div>
                    <img
                        alt={selectedPokemon.name}
                        src={selectedPokemon.sprites.front_default}
                        style={{ border: "0.5px dotted #0000005F", borderRadius: "5px", backgroundColor: "#0000003F" }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        margin: "10px 0px",
                        height: "100px",
                    }}
                >
                    Types:
                    {selectedPokemon.types.map((type) => (
                        <Typography key={type.type.name}>{type.type.name}</Typography>
                    ))}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        margin: "10px 0px",
                    }}
                >
                    Stats:
                    {selectedPokemon.stats.map((stat) => (
                        <div
                            key={stat.stat.name}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography>{stat.stat.name}</Typography>
                            <Typography>{stat.base_stat}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Details;
