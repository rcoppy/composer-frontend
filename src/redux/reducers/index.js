import { combineReducers } from "redux";
import appending from "./appending";
import memory from "./memory";
import operations from "./operations";

export default combineReducers({ appending, memory, operations });
