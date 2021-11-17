import React from "react";
import { Form } from "./Form";
import { Label } from "./Label/Label";
import { Input } from "./Input/Input";
import { Error } from "./Error/Error";

export default {
  title: "UI/Forms",
  component: Form,
  args: {},
};

export const FormInput = (args) => {
  const [value, setValue] = React.useState("");

  return (
    <Form>
      <Label text="First Name" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter first name..."
        type="text"
      />
      <Error message="Invalid Input" />
    </Form>
  );
};
