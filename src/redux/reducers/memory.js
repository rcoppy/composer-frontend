import {
    ERASE_RESULT,
    DELETE_CACHE,
    CACHE_RESULT,
    LOAD_CACHE
} from "../actionTypes";

const initialState = {
    cachedResult: null,
    existsCache: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ERASE_RESULT: {
            return {
                ...state,
                result: 0
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