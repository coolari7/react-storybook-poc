import React from "react";
import PropTypes from "prop-types";

export function Label({ text = "Label" }) {
  return <label className="form-label">{text}</label>;
}

Label.propTypes = {
  text: PropTypes.string,
};
