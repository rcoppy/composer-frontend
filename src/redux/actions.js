
export const appendDigit = digit => ({
    type: APPEND_DIGIT,
    payload: { digit }
});

export const appendDecimal = () => ({
    type: APPEND_DECIMAL,
    payload: {}
});

export const deleteDigit = () => ({
    type: DELETE_DIGIT,
    payload: {}
});

export const eraseResult = () => ({
    type: ERASE_RESULT,
    payload: {}
});

export const deleteCache = () => ({
    type: DELETE_CACHE,
    payload: {}
});

export const cacheResult = () => ({
    type: CACHE_RESULT,
    payload: {}
});

export const loadCache = () => ({
    type: LOAD_CACHE,
    payload: {}
});

export const queueOperation = operation => ({
    type: QUEUE_OPERATION,
    payload: { operation }
});
