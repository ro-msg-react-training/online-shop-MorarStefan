import axios from "axios";
import BACKEND_API from "../constants";
import PostProductDetail from "../interfaces/PostProductDetail";

export const getProducts = async () => {
  return axios
    .get(`${BACKEND_API}products`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
};

export const createProduct = async (product: PostProductDetail) => {
  return axios
    .post(`${BACKEND_API}products`, product)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.response);
    });
};
