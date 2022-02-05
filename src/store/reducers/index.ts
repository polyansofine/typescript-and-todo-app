import { combineReducers } from "redux";
import fuseReducers from "./fuse/index";

// import { metadata } from "./nft.reducers";
const createReducer = (asyncReducers: any) =>
  combineReducers({
    fuseReducers,
    // metadata,
    ...asyncReducers,
  });

export default createReducer;
