import React from "react";
import { Error } from "./Error";

export default {
  title: "UI/Forms/Error",
  component: Error,
  args: {},
};

export const Default = (args) => {
  return <Error message="Invalid Input" />;
};
