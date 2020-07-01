import { combineReducers } from "redux";
import { DashboardReducer } from "./Dashboard/DashboardReducer";
import { SharedReducer } from "./Shared/SharedReducer";

export const reducer = combineReducers({
  dashboard: DashboardReducer,
  shared: SharedReducer,
});
