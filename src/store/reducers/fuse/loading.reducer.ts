import { Action } from "../../../interface/ActionInterface";
import * as fuseActions from "../../actions";

const initialState = {
  state: false,
};

const loading = (state = initialState, action: Action) => {
  switch (action.type) {
    case fuseActions.LOADING_SHOW: {
      return { state: true };
    }
    case fuseActions.LOADING_CLOSE: {
      return { state: false };
    }

    default:
      return state;
  }
};
export default loading;
