import { render, waitFor } from "@testing-library/react";
import { Suspense } from "react";

import App from "./App";
import Provider from "./components/Provider";

test("renders Pokedex component", async () => {
    const { getByTestId } = render(
        <Provider>
            <Suspense fallback={<div>LOADING</div>}>
                <App />
            </Suspense>
        </Provider>,
    );

    await waitFor(
        () => {
            const pokedexComponent = getByTestId("pokedex");
            expect(pokedexComponent).toBeInTheDocument();
        },
        { timeout: 5000 },
    );
});
