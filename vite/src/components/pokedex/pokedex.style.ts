const pokedexWraperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "60vw",
    margin: "auto",
    padding: "15px",
    backgroundColor: "red",
    borderRadius: "5px",
    color: "black",
};

const pokedexListWraperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "50%",
    padding: "10px",
    margin: "5px 12.5px 5px 5px",
    backgroundColor: "yellow",
    borderRadius: "5px",
};

const pokedexDetailWraperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "50%",
    padding: "10px",
    margin: "5px 5px 5px 12.5px",
    backgroundColor: "yellow",
    borderRadius: "5px",
};

const pokedexListButtons: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
};

const pokedexStyles: NGlobal.TStyleObject = {
    pokedexWraperStyle,
    pokedexListWraperStyle,
    pokedexListButtons,
    pokedexDetailWraperStyle,
};

export default pokedexStyles;
