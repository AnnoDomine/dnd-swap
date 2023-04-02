import { render } from "@testing-library/react";

import App from "./App";
import Provider from "./components/Provider";

test("renders Pokedex component", () => {
    const { getByTestId } = render(
        <Provider>
            <App />
        </Provider>,
    );
    const pokedexComponent = getByTestId("pokedex");
    expect(pokedexComponent).toBeInTheDocument();
});
