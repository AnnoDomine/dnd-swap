import { ForkEffect, put } from "redux-saga/effects";

export function* sagaErrorHandling(error: { saga: () => Generator<ForkEffect<never>, void, unknown>; error: unknown }) {
    yield console.log("Sag Error");
}