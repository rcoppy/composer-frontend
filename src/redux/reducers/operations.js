import {
    QUEUE_OPERATION
} from "../actionTypes";

import { OPERATORS } from '../constants';

const initialState = {
    result: 0,
    queuedOperator: null,
    currentInputString: '0',
}

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
            return (a, b=null) => a;
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
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
                    newResult = funcFromOp(state.queuedOperator)(state.result, parseFloat(currentInputString));
                    newInputString = '' + newResult;
                    newQueuedOperator = null;
                }
            } else {
                if (!state.queuedOperator) {
                    newQueuedOperator = operation;
                    newInputString = '0';
                } else {
                    newResult = funcFromOp(state.queuedOperator)(state.result, parseFloat(currentInputString));
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
        default: 
            return state;
    }
}