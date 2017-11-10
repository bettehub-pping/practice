import React from "react";
import PropTypes from 'prop-types';

export default function Tab({str, active, onTab}) {
  // console.log(str.split('|'), active);
  const makeTabs = () => {
    const strs = str.split('|');
    const tabArray = [];
    for(let i in strs) {
      if(active === i) {
        // console.log(i,'active');
        tabArray.push(<button type="button" onClick={onTab} className="btn_tab active" key={i}>{strs[i]}</button>);
      } else {
        // console.log(i,'notive');
        tabArray.push(<button type="button" onClick={onTab} className="btn_tab" key={i}>{strs[i]}</button>);
      }
    }
    return tabArray;
  };
  return (
    <div className="view_main_body_main_tab">{makeTabs()}</div>
  );
}

Tab.propTypes = {
  str: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onTab: PropTypes.func,
};
