type CreateSagaActionWithoutPayload = { type: string };
type CreateSagaActionWithPayload<PayloadType> = { type: string; payload: NonNullable<PayloadType> };

function createSagaAction<PayloadType>(
    _type: string,
    _payload: NonNullable<PayloadType>,
): CreateSagaActionWithPayload<PayloadType>;
function createSagaAction(_type: string, _payload: null): CreateSagaActionWithoutPayload;

/**
 * Creates a Redux action for Redux Sagas with an optional payload.
 * Simular to createAction from Redux-ToolKit
 * @param {string} type - The type of the action.
 * @param {any} [payload=null] - The optional payload to include in the action.
 * @returns {Object} - The created Redux action.
 */
function createSagaAction<PayloadType extends null>(
    type: string,
    payload: PayloadType | null,
): CreateSagaActionWithoutPayload | CreateSagaActionWithPayload<PayloadType> {
    if (payload !== null) return { type, payload };
    return { type };
}

export default createSagaAction;
