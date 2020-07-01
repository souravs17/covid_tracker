import { combineReducers } from "redux";
import { DashboardReducer } from "./Dashboard/DashboardReducer";

export const reducer = combineReducers({
  dashboard: DashboardReducer,
});
