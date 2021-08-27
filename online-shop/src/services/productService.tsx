import axios from "axios";
import { BACKEND_API } from "../constants";
import PostProductDetail from "../interfaces/PostProductDetail";
import ProductDetail from "../interfaces/ProductDetail";

export const getProducts = async () => {
  return axios
    .get(`${BACKEND_API}/products`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export const getProduct = async (id: string) => {
  return axios
    .get(`${BACKEND_API}/products/${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export const createProduct = async (product: PostProductDetail) => {
  return axios
    .post(`${BACKEND_API}/products`, product)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export const updateProduct = async (product: ProductDetail) => {
  return axios
    .put(`${BACKEND_API}/products`, product)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export const removeProduct = async (id: string) => {
  return axios
    .delete(`${BACKEND_API}/products/${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export const getProductImageUrl = (id: string) => {
  return `${BACKEND_API}/products/${id}/images`;
};
