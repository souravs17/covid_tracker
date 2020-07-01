import axios from "axios";

export const get = (url, param, options) => axios.get(url, param, options);

const URL = "https://covid19.mathdro.id";

export function registerInterseptor() {
  axios.defaults.baseURL = URL;
}

export const getCancelToken = () => axios.CancelToken.source();
