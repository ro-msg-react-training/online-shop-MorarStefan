import axios from "axios";
import BACKEND_API from "../constants";

export const getProducts = async () => {
  return axios
    .get(BACKEND_API + "products")
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
};
