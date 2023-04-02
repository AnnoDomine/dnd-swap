import { createApi, requestMonitor, fetcher, timer } from "saga-query";

import type { ApiCtx } from "saga-query";

// Initial basic api config for saga-query
const api = createApi<ApiCtx>();

api.use(requestMonitor());
api.use(api.routes());
api.use(fetcher({ baseUrl: "https://pokeapi.co/api/v2/" }));

// this will only activate the endpoint at most once every 5 minutes.
export const cacheTimer = timer(5 * 60 * 1000);

export default api;
