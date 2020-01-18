// import { combineReducers } from "redux";
// import appending from "./appending";
// import memory from "./memory";
// import operations from "./operations";

// this is super messy; apologies.
// I originally had three reducers--but they all ended up needing access to the last computed value,
// And the pending input entry. 
// After looking at this FAQ https://redux.js.org/faq/reducers/
// Apparently the simplest (hackiest) thing to do right now, given that I'm out of time, is to just make
// one giant reducer. Not good form; but I'm in a rush. Thanks!
//
// export default combineReducers({ appending, memory, operations });

import rootReducer from './rootReducer';

export default rootReducer;