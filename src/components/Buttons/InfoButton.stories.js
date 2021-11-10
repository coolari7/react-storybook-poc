import React from "react";
import { InfoButton } from "./InfoButton";

export default {
  title: "UI/Buttons",
  component: InfoButton,
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <InfoButton {...args} />;

export const Info_Button = Template.bind({});
Info_Button.args = {
  children: "Submit",
  ...InfoButton.defaultProps,
};
