import { get } from "../../UtilityService/Http.js/Http";

export const fetchCountryList = async (cancelToken) => {
  try {
    const {
      data: { countries },
    } = await get("/api/countries", cancelToken);
    return countries;
  } catch (e) {
    return e;
  }
};

export const fetchCovidDataBasedOnCountry = async (
  countryName,
  cancelToken
) => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await get(`/api/countries/${countryName}`, cancelToken);
    console.log({ confirmed, recovered, deaths });
    return {
      total: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    };
  } catch (e) {
    return e;
  }
};

export const fetchOverallCovidData = async (cancelToken) => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await get(`/api`, cancelToken);
    return {
      total: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    };
  } catch (e) {
    return e;
  }
};
