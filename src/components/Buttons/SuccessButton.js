import React from "react";
import PropTypes from "prop-types";
import { CustomButton } from "./CustomButton";

export function SuccessButton({ children, onClick, minWidth }) {
  return (
    <CustomButton
      onClick={onClick}
      bgColor="bg-green-500"
      textColor="text-white"
      minWidth={minWidth}
    >
      {children}
    </CustomButton>
  );
}

SuccessButton.propTypes = {
  children: PropTypes.string.isRequired,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
};

SuccessButton.defaultProps = {
  minWidth: CustomButton.defaultProps.minWidth,
};
