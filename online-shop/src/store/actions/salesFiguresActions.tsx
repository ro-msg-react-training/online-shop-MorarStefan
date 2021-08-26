import CategorySale from "../../interfaces/CategorySale";

export const READ_SALES_REQUEST = "READ_SALES_REQUEST";
export const READ_SALES_SUCCESS = "READ_SALES_SUCCESS";
export const READ_SALES_ERROR = "READ_SALES_ERROR";

export const readSales = () => {
  return {
    type: READ_SALES_REQUEST,
  };
};

export const readSalesSuccess = (sales: Array<CategorySale>) => {
  return {
    type: READ_SALES_SUCCESS,
    payload: { sales: sales },
  };
};

export const readSalesError = (error: Error) => {
  return {
    type: READ_SALES_ERROR,
    payload: { error: error },
  };
};
