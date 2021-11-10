import React from "react";
import PropTypes from "prop-types";
import { CustomButton } from "./CustomButton";

export function WarningButton({ children, onClick, minWidth }) {
  return (
    <CustomButton
      onClick={onClick}
      bgColor="bg-red-500"
      textColor="text-white"
      minWidth={minWidth}
    >
      {children}
    </CustomButton>
  );
}

WarningButton.propTypes = {
  children: PropTypes.string.isRequired,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
};

WarningButton.defaultProps = {
  minWidth: CustomButton.defaultProps.minWidth,
};
