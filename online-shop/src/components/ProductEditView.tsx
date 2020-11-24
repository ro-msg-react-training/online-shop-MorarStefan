import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import Axios from "axios";
import BACKEND_API from "../constants/index";
import Category from "../interfaces/Category";
import Supplier from "../interfaces/Supplier";

function CategoryOption(props: { value: Category }) {
  return <option>{props.value.name}</option>;
}

function SupplierOption(props: { value: Supplier }) {
  return <option>{props.value.name}</option>;
}

function ProductEditView(props: { title: string; setOpenView: Function }) {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [suppliers, setSuppliers] = useState<Array<Supplier>>([]);

  useEffect(() => {
    let unmounted = false;
    async function getCategories() {
      const categoryResult = await Axios.get(BACKEND_API + "categories");
      const supplierResult = await Axios.get(BACKEND_API + "suppliers");
      if (!unmounted) {
        setCategories(categoryResult.data);
        setSuppliers(supplierResult.data);
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
        <h1 className="is-size-4">{props.title}</h1>
        <br></br>

        <div className="field">
          <label className="label">Product Name</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select>{categoryOptions}</select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Supplier</label>
          <div className="control">
            <div className="select">
              <select>{supplierOptions}</select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Weight</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea"></textarea>
          </div>
        </div>

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
          onClick={() => {}}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ProductEditView;
