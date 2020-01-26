import { APPEND_DIGIT } from './actionTypes';
import { APPEND_DECIMAL } from './actionTypes';
import { DELETE_DIGIT } from './actionTypes';
import { ERASE_SCREEN } from './actionTypes';
import { DELETE_CACHE } from './actionTypes';
import { CACHE_RESULT } from './actionTypes';
import { LOAD_CACHE } from './actionTypes';
import { QUEUE_OPERATION} from './actionTypes';

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

export const eraseScreen = () => ({
    type: ERASE_SCREEN,
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
