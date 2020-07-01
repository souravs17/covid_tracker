import { DashboardInitialState } from "./DashboardInitialState";
import {
  ADD_COUNTRY_LIST,
  CHANGE_COUNTRY_NAME,
  UPDATE_COVID_DATA,
} from "./DashboardActions";

export const DashboardReducer = (state = DashboardInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNTRY_LIST:
      return {
        ...state,
        countryList: payload,
      };
    case CHANGE_COUNTRY_NAME:
      return {
        ...state,
        countryName: payload,
      };
    case UPDATE_COVID_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
