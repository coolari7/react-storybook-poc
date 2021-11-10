import React from "react";
import { SuccessButton } from "./SuccessButton";

export default {
  title: "UI/Buttons",
  component: SuccessButton,
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <SuccessButton {...args} />;

export const Success_Button = Template.bind({});
Success_Button.args = {
  children: "Done",
  ...SuccessButton.defaultProps,
};
