import axios from "axios";
import { SECONDARY_BACKEND_API } from "../constants";

export const getSales = async () => {
  return axios
    .get(`${SECONDARY_BACKEND_API}/sales`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
};
