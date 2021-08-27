import axios from "axios";
import { BACKEND_API } from "../constants";
import Order from "../interfaces/Order";

export const createOrder = async (order: Order) => {
  return axios
    .post(`${BACKEND_API}/orders`, order)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
