import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export function CustomButton({
  children,
  bgColor,
  textColor,
  minWidth,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "p-2",
        "text-sm",
        "font-bold",
        "rounded-sm",
        bgColor,
        textColor
      )}
      style={{ minWidth }}
    >
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  bgColor: "bg-blue-500",
  textColor: "text-white",
  minWidth: "100px",
};
