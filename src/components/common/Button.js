import React from "react";
import PropTypes from 'prop-types';

export default function Button({goURL, btnStr, withIcon}) {
  return (
    <button type="button" onClick={goURL} className="btn_e_brochure">
      {btnStr}
      {withIcon !== undefined ? <i className="icon-angle-right"></i> : ''}
    </button>
  );
}

Button.propTypes = {
  goURL: PropTypes.func.isRequired,
  btnStr: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
};
