import {
    QUEUE_OPERATION
} from "../actionTypes";

import { OPERATORS } from '../constants';

const initialState = {
    result: 0,
    queuedOperator: null
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

            let newQueuedOperator = state.operations.queuedOperator;
            let newResult = state.operations.result;
            let newInputString = state.appending.currentInputString;

            if (operation === OPERATORS.COMPUTE) {
                if (!state.operations.queuedOperator) {
                    newResult = parseFloat(state.appending.currentInputString);
                    newInputString = '' + newResult;
                } else { 
                    newResult = funcFromOp(state.operations.queuedOperator)(state.operations.result, parseFloat(state.appending.currentInputString));
                    newInputString = '' + newResult;
                    newQueuedOperator = null;
                }
            } else {
                if (!state.operations.queuedOperator) {
                    newQueuedOperator = operation;
                    newInputString = '0';
                } else {
                    newResult = funcFromOp(state.operations.queuedOperator)(state.operations.result, parseFloat(state.appending.currentInputString));
                    newInputString = '' + newResult;
                    newQueuedOperator = operation;
                }
            }

            return {
                ...state,
                appending: { currentInputString: newInputString },
                operations: {
                    result: newResult,
                    queuedOperator: newQueuedOperator
                }
            };
        }
        default: 
            return state;
    }
}