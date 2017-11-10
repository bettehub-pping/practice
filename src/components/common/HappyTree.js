import React from "react";

export default function HappyTree() {
  return (
    <div className="happytree_box">
      <a href="//happytree.io/" htmltarget="_blank">
        <span className="happytree_logo">
          <img
            src="//img.happyshopping.kr/img_static/img_mobile/comm/img_happytree.png"
            alt="Happytree"
          />
        </span>

        <div className="happytree_box_txt">
          <span className="fc1">해피트리</span>는 차별화된<br />
          <span className="fc2">전문 디자인 서비스</span>를 제공합니다!
        </div>

        <i className="icon-angle-right" />
      </a>
    </div>
  );
}
