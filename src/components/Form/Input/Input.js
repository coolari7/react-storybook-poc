import React from "react";
import PropTypes from "prop-types";

export function Input({
  type = "text",
  placeholder = "Type Here...",
  ...restProps
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
      {...restProps}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string,
};
