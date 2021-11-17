import React from "react";
import { WarningButton } from "./WarningButton";

export default {
  title: "UI/Buttons/Warning",
  component: WarningButton,
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <WarningButton {...args} />;

export const Warning_Button = Template.bind({});
Warning_Button.args = {
  children: "Cancel",
  ...WarningButton.defaultProps,
};
