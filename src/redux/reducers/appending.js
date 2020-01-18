import {
    APPEND_DECIMAL,
    APPEND_DIGIT,
    DELETE_DIGIT
} from "../actionTypes";

const initialState = {
    currentInputString: '0',
    shouldShowResult: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case APPEND_DECIMAL: {

            let newInputString = currentInputString;
            const regexp = /.*\./
            if (!regexp.test(state.currentInputString)) {
                newInputString += '.';
            }

            return {
                ...state,
                currentInputString: newInputString,
                shouldShowResult: false
            };
        }
        case APPEND_DIGIT: {
            const { digit } = action.payload;

            let newInputString = currentInputString === '0' ? '' + digit : currentInputString + digit;

            return {
                ...state,
                currentInputString: newInputString,
                shouldShowResult: false
            };
        }
        case DELETE_DIGIT: {
            let newInputString = currentInputString.length > 0 ? currentInputString.slice(0, -1) : '';

            return {
                ...state,
                currentInputString: newInputString
            }
        }
        default:
            return state;
    }
}