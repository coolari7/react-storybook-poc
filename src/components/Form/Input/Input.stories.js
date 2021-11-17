import React from "react";
import { Input } from "./Input";

export default {
  title: "UI/Forms/Input",
  component: Input,
  args: {},
};

export const Plain = (args) => {
  const [value, setValue] = React.useState("");

  return (
    <Input
      value={value}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};
