import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import prepare from "./prepareStore";

import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const logger = createLogger({
    collapsed: true,
});

const safeMiddleware = (gDM: CurriedGetDefaultMiddleware) =>
    import.meta.env.MODE === "production"
        ? gDM().concat(...prepare.middleware)
        : gDM().concat(...prepare.middleware, logger);

const store = configureStore({
    reducer: prepare.reducer,
    devTools: import.meta.env.MODE !== "production",
    middleware: safeMiddleware,
});

prepare.run();

export default store;
