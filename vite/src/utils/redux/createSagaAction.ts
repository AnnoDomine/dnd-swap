/**
 * Creates a Redux action for Redux Sagas with an optional payload.
 * @param {string} type - The type of the action.
 * @param {any} [payload=null] - The optional payload to include in the action.
 * @returns {Object} - The created Redux action.
 */
function createSagaAction<PayloadType = null>(type: string, payload?: PayloadType) {
    if (payload !== undefined || null) return { type, payload };
    return { type };
}

export default createSagaAction;
