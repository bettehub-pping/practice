import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';
import PDBoard from './PDBoard';

const INFO_NUMBER = {
  BUY_INFO: 1,
  BASIC_INFO: 2,
  DETAIL_INFO: 3,
  KC_CERTIFICATION: 4
};

export default function PDInfo({item_id, item_br_info, specinfo_title, specinfo_subtitle, specinfo_details}) {

  return (
    <div className="view_main_body_main_info">
      <h3 className="ir">상품정보</h3>
      <span className="p_code">상품번호 {item_id}</span>
      <p className="spec_info">{item_br_info}</p>
      <div className="view_main_body_main_info_spec">
        <div className="spec">
          <h4 className="tit-h4">{specinfo_title}</h4>
          <PDBoard
            specinfo_subtitle={specinfo_subtitle}
            specinfo_details={specinfo_details}
            info_number={INFO_NUMBER.BUY_INFO}
          />
          <PDBoard
            specinfo_subtitle={specinfo_subtitle}
            specinfo_details={specinfo_details}
            info_number={INFO_NUMBER.BASIC_INFO}
          />
          <PDBoard
            specinfo_subtitle={specinfo_subtitle}
            specinfo_details={specinfo_details}
            info_number={INFO_NUMBER.DETAIL_INFO}
          />
          <PDBoard
            specinfo_subtitle={specinfo_subtitle}
            specinfo_details={specinfo_details}
            info_number={INFO_NUMBER.KC_CERTIFICATION}
          />
        </div>{/*spec*/}
      </div>{/*view_main_body_main_info_spec*/}
      <Button
        goURL={()=>window.location.href='http://naver.com'}
        btnStr={'PC버전 e-브로셔 보기'}
        withIcon={true}
      />
    </div>
  );
}

PDInfo.propTypes = {
  item_id: PropTypes.number.isRequired,
  item_br_info: PropTypes.string,
  specinfo_title: PropTypes.array,
  specinfo_subtitle: PropTypes.object,
  specinfo_details: PropTypes.object,
};

Button.propTypes = {
  goURL: PropTypes.func.isRequired,
  btnStr: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
};
