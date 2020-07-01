import { SharedInitialState } from "./SharedInitialState";
import { SET_UNSET_LOADING_SPINNER } from "./SharedActions";

export const SharedReducer = (state = SharedInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_UNSET_LOADING_SPINNER:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
