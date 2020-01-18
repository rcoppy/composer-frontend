import {
    APPEND_DECIMAL,
    APPEND_DIGIT,
    DELETE_DIGIT,
    QUEUE_OPERATION,
    ERASE_SCREEN,
    DELETE_CACHE,
    CACHE_RESULT,
    LOAD_CACHE

} from "../actionTypes";

import { OPERATORS } from '../constants';

const initialState = {
    currentInputString: '0',
    shouldShowResult: true,
    result: 0,
    queuedOperator: null,
    cachedResult: null,
    existsCache: false

};

// get expression for designated operator
const funcFromOp = operation => {
    switch(operation) {
        case OPERATORS.ADD: 
            return (a, b) => a + b;
        case OPERATORS.SUBTRACT: 
            return (a, b) => a - b;
        case OPERATORS.MULTIPLY: 
            return (a, b) => a * b;
        case OPERATORS.DIVIDE: 
            return (a, b) => a / b;
        default: 
            return (a, b=null) => b;
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case APPEND_DECIMAL: {

            let newInputString = state.currentInputString;
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

            let newInputString = state.currentInputString === '0' ? '' + digit : state.currentInputString + digit;

            // debug
            // console.log(`appended ${digit}`);

            return {
                ...state,
                currentInputString: newInputString,
                shouldShowResult: false
            };
        }
        case DELETE_DIGIT: {
            let newInputString = state.currentInputString.length > 0 ? state.currentInputString.slice(0, -1) : '';

            return {
                ...state,
                currentInputString: newInputString
            }
        }
        case QUEUE_OPERATION: {
            
            const { operation } = action.payload;

            let newQueuedOperator = state.queuedOperator;
            let newResult = state.result;
            let newInputString = state.currentInputString;

            if (operation === OPERATORS.COMPUTE) {
                if (!state.queuedOperator) {
                    newResult = parseFloat(state.currentInputString);
                    newInputString = '' + newResult;
                } else { 
                    newResult = funcFromOp(state.queuedOperator)(state.result, parseFloat(state.currentInputString));
                    newInputString = '' + newResult;
                    newQueuedOperator = null;
                }
            } else {
                if (!state.queuedOperator) {
                    newQueuedOperator = operation;
                    newInputString = '0';
                } else {
                    newResult = funcFromOp(state.queuedOperator)(state.result, parseFloat(state.currentInputString));
                    newInputString = '' + newResult;
                    newQueuedOperator = operation;
                }
            }

            return {
                ...state,
                currentInputString: newInputString,
                result: newResult,
                queuedOperator: newQueuedOperator
            };
        }
        case ERASE_SCREEN: {
            return {
                ...state,
                currentInputString: '0'
            }
        }
        case DELETE_CACHE: {
            return {
                ...state,
                cachedResult: null,
                existsCache: false
            }
        }
        case CACHE_RESULT: {
            return {
                ...state,
                cachedResult: state.result,
                existsCache: true
            }
        }
        case LOAD_CACHE: {
            return {
                ...state,
                currentInputString: state.existsCache ? '' + state.cachedResult : state.currentInputString
            }
        }
        default:
            return state;
    }
}