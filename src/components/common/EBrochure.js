import React from "react";
import PropTypes from 'prop-types';

export default function EBrochure({htmlStr}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlStr }} />
  );
}

EBrochure.propTypes = {
  htmlStr: PropTypes.func.isRequired
};
