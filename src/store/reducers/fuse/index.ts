import { combineReducers } from "redux";
import message from "./message.reducer";
import loading from "./loading.reducer";
// import { register } from "./register.reducer";

const fuseReducers = combineReducers({
  message,
  loading,
  // register,
});

export default fuseReducers;
