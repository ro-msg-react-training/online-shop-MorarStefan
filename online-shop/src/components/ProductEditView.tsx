import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import Axios from "axios";
import { BACKEND_API } from "../constants";
import Category from "../interfaces/Category";
import Supplier from "../interfaces/Supplier";
import ProductDetail from "../interfaces/ProductDetail";
import PostProductDetail from "../interfaces/PostProductDetail";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/productListActions";
import { editProduct } from "../store/actions/productInformationActions";

function CategoryOption(props: { value: Category }) {
  return <option>{props.value.name}</option>;
}

function SupplierOption(props: { value: Supplier }) {
  return <option>{props.value.name}</option>;
}

function isNumber(field: string) {
  if (field.length === 0 || isNaN(Number(field))) {
    return false;
  }
  return true;
}

function isValidForm(
  productName: string,
  price: string,
  weight: string,
  description: string
) {
  if (
    productName.length < 2 ||
    !isNumber(price) ||
    !isNumber(weight) ||
    description.length < 1
  ) {
    return false;
  }
  return true;
}

function createNewProduct(
  productName: string,
  price: string,
  weight: string,
  description: string,
  categoryName: string,
  supplierName: string,
  categories: Array<Category>
) {
  const product: PostProductDetail = {
    name: productName,
    description: description,
    price: Number(price),
    weight: Number(weight),
    category: {
      name: categoryName,
      description: getCategoryDescription(categoryName, categories),
    },
    supplier: {
      name: supplierName,
    },
    imageUrl: "URL",
  };

  return product;
}

function createUpdatedProduct(
  id: string,
  productName: string,
  price: string,
  weight: string,
  description: string,
  categoryName: string,
  supplierName: string,
  categories: Array<Category>
) {
  const product: ProductDetail = {
    _id: id,
    name: productName,
    description: description,
    price: Number(price),
    weight: Number(weight),
    category: {
      name: categoryName,
      description: getCategoryDescription(categoryName, categories),
    },
    supplier: {
      name: supplierName,
    },
    imageUrl: "URL",
  };

  return product;
}

function getCategoryDescription(
  categoryName: string,
  categories: Array<Category>
) {
  for (const iterator of categories) {
    if (categoryName === iterator.name) {
      return iterator.description;
    }
  }
  return "";
}

function ProductEditView(props: {
  id: string;
  type: string;
  setOpenView: Function;
}) {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [suppliers, setSuppliers] = useState<Array<Supplier>>([]);

  const [productName, setProductName] = React.useState<string>("");
  const [categoryName, setCategoryName] = React.useState<string>("");
  const [supplierName, setSupplierName] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [weight, setWeight] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    let unmounted = false;
    async function getCategories() {
      const categoryResult = await Axios.get(BACKEND_API + "categories");
      const supplierResult = await Axios.get(BACKEND_API + "suppliers");
      if (!unmounted) {
        setCategories(categoryResult.data);
        setSuppliers(supplierResult.data);
        setCategoryName(categoryResult.data[0].name);
        setSupplierName(supplierResult.data[0].name);
      }
    }
    getCategories();
    return () => {
      unmounted = true;
    };
  }, []);

  const categoryOptions = categories.map((category) => (
    <CategoryOption key={category._id} value={category} />
  ));

  const supplierOptions = suppliers.map((supplier) => (
    <SupplierOption key={supplier._id} value={supplier} />
  ));

  return (
    <div className="popup">
      <div className="popup_inner">
        <h1 className="is-size-4">{props.type} Product</h1>
        <br></br>

        <div className="field">
          <label className="label">Product Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={productName}
              onInput={(e) =>
                setProductName((e.target as HTMLTextAreaElement).value)
              }
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select
                value={categoryName}
                onInput={(e) =>
                  setCategoryName((e.target as HTMLTextAreaElement).value)
                }
              >
                {categoryOptions}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Supplier</label>
          <div className="control">
            <div className="select">
              <select
                value={supplierName}
                onInput={(e) =>
                  setSupplierName((e.target as HTMLTextAreaElement).value)
                }
              >
                {supplierOptions}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={price}
              onInput={(e) => setPrice((e.target as HTMLTextAreaElement).value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Weight</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={weight}
              onInput={(e) =>
                setWeight((e.target as HTMLTextAreaElement).value)
              }
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              value={description}
              onInput={(e) =>
                setDescription((e.target as HTMLTextAreaElement).value)
              }
            />
          </div>
        </div>
        <p className="help is-danger">{errorMessage}</p>
        <br></br>
        <button
          className="button is-primary has-text-weight-bold mr-4"
          onClick={() => {
            props.setOpenView(false);
          }}
        >
          Cancel
        </button>
        <button
          className="button is-primary has-text-weight-bold mr-4"
          onClick={() => {
            if (isValidForm(productName, price, weight, description)) {
              if (props.type === "Edit") {
                const product: ProductDetail = createUpdatedProduct(
                  props.id,
                  productName,
                  price,
                  weight,
                  description,
                  categoryName,
                  supplierName,
                  categories
                );
                dispatch(editProduct(product));
              } else {
                const product: PostProductDetail = createNewProduct(
                  productName,
                  price,
                  weight,
                  description,
                  categoryName,
                  supplierName,
                  categories
                );
                dispatch(addProduct(product));
              }
              setErrorMessage("");
              props.setOpenView(false);
            } else {
              setErrorMessage("Invalid field(s)!");
            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ProductEditView;
