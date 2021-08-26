import React from "react";
import { branch, renderComponent } from "recompose";
import Loader from "react-loader-spinner";

const Spinner = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
);

const isLoading = ({ loading }: { loading: boolean }) => loading;

export const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);
