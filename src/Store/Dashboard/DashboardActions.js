import { setUnsetLoadingSpinner } from "../Shared/SharedActions";
import {
  fetchCountryList,
  fetchCovidDataBasedOnCountry,
  fetchOverallCovidData,
} from "../../Api/Dashboard/Dashboard";

export const getCountryList = () => async (dispatch, getState) => {
  try {
    dispatch(setUnsetLoadingSpinner(!getState().shared.isLoading));
    let payload = await fetchCountryList();
    dispatch(updateCountryList(payload));
  } catch {
  } finally {
    dispatch(setUnsetLoadingSpinner(!getState().shared.isLoading));
  }
};

export const updateCountryName = (payload) => async (dispatch, getState) => {
  dispatch(changeCountryName(payload));
};

export const getCovidData = (countryName) => async (dispatch, getState) => {
  try {
    dispatch(setUnsetLoadingSpinner(!getState().shared.isLoading));

    let payload = await getDateBasedOnCountry(countryName);
    dispatch(updateCovidData(payload));
  } catch {
  } finally {
    dispatch(setUnsetLoadingSpinner(!getState().shared.isLoading));
  }
};

const getDateBasedOnCountry = async (countryName) => {
  return countryName === "Global" || !countryName
    ? await fetchOverallCovidData()
    : await fetchCovidDataBasedOnCountry(countryName);
};

export const updateCountryList = (payload) => {
  return {
    type: ADD_COUNTRY_LIST,
    payload,
  };
};
export const changeCountryName = (payload) => {
  return {
    type: CHANGE_COUNTRY_NAME,
    payload,
  };
};

export const updateCovidData = (payload) => {
  return {
    type: UPDATE_COVID_DATA,
    payload,
  };
};

export const ADD_COUNTRY_LIST = "ADD_COUNTRY_LIST";
export const CHANGE_COUNTRY_NAME = "CHANGE_COUNTRY_NAME";
export const UPDATE_COVID_DATA = "UPDATE_COVID_DATA";
