import { configureStore } from "@reduxjs/toolkit";
import prepare from "./prepareStore";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import type { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

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
