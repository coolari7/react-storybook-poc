import React from "react";
import PropTypes from "prop-types";
import { CustomButton } from "./CustomButton";

export function InfoButton({ children, onClick, minWidth }) {
  return (
    <CustomButton
      onClick={onClick}
      bgColor="bg-blue-500"
      textColor="text-white"
      minWidth={minWidth}
    >
      {children}
    </CustomButton>
  );
}

InfoButton.propTypes = {
  children: PropTypes.string.isRequired,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
};

InfoButton.defaultProps = {
  minWidth: CustomButton.defaultProps.minWidth,
};
