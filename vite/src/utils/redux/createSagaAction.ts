import { createAction } from "@reduxjs/toolkit";

function createSagaAction<PayloadType = null>(type: string, payload?: PayloadType) {
    if (payload !== undefined || null) return { type, payload };
    return { type };
}

export default createSagaAction;
