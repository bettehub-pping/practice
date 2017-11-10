import React from "react";
import PropTypes from 'prop-types';

export default function Header({goBack}) {
  return (
    <header className="header-m-page">
      <div className="header-m-page_body">
        <h1 className="tit-h1">상품정보</h1>

        <button onClick={goBack} className="btn_page_prev">
          <i className="icon-arrow_back" /> <span className="ir">이전</span>
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  goBack: PropTypes.func.isRequired
};
