import { prepareStore } from "saga-query";

import rootSaga from "./saga/rootSaga";
import rootSlice from "./slice/rootSlice";
import { enqueueSnackbar } from "notistack";

const prepare = prepareStore({
    reducers: rootSlice,
    sagas: rootSaga,
    onError: (err) => {
        console.log(err), enqueueSnackbar(`ERROR:\n${err.cause}`, { variant: "error" });
    },
});

export default prepare;
