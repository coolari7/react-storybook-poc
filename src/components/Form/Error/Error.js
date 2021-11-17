import React from "react";
import PropTypes from "prop-types";

export function Error({ message }) {
  return <span className="form-error">{message}</span>;
}

Error.propTypes = {
  message: PropTypes.string,
};
