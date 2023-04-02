import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
// infonts.css should get ignored
// eslint-disable-next-line import/no-unresolved
import "unfonts.css";
import Provider from "./components/Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
);
