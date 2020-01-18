
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

