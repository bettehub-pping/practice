import React, { Component } from "react";
import fetch from 'isomorphic-fetch';
// import PropTypes from 'prop-types';

export default class PDReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://api.pping.kr/front/v1/board/reviews/list/',
      item_id: 1588633,
      idx_member: 1016854,
    };
  }

  getComentList = async () => {
    await this._callApi();
    // this.setState();
  };

  _callApi = () => {
    const data = fetch(this.state.url + this.state.item_id + '/' + this.state.idx_member + '?page=1&pageSize=10&blockPage=10&orderBy=0')
      .then(res => console.log(res));
      // .then(res => res.json())
    return data;
  };

  render() {

    return (
      <div className="view_main_body_main_reviews">
        <CommentBox />
      </div>
    );
  }
}

function CommentBox() {
  const cssNone = {
    display: 'none'
  };
  return (
    <div className="comment_box">
      <div className="comment_box_in">
        <h4 className="tit-h4">대표적인 <span>긍정</span> 상품평</h4>

        <div className="comment_box_writer">
          <span className="photo">
            <img src="//img.happyshopping.kr/img_static/img_mobile/comm/img_review_photo_none.jpg" alt="이름 이건 노이미지임" />
          </span>

          <div className="comment_box_writer_info">
            <div className="comment_box_writer_info_top">
              <strong className="name">이사람</strong>
              {/* star1 ~ star5 */}
              <span className="star_rating star1"><em className="ir">4점</em></span>
              <em className="bar"></em>
              <span className="date">2017.08.10</span>
            </div>

            <div className="comment_box_writer_info_bot">
              <span className="ip">112.***.224.91</span>
              <em className="bar"></em>
              <button type="button" className="btn_report">신고</button>
            </div>
          </div>
        </div>

        <div className="comment_box_conts">2개 주문! 상품 하자없이 검수 잘해서 보내주시길 부탁드립니다.행복 쇼핑 짱짱짱~</div>

          <div className="comment_box_bot">
            <button type="button" className="btn_comnt">댓글 1 <i className="icon-angle-down"></i></button>

            {/* 내글 */}
            <button type="button" className="btn_comnt_modify">수정</button>
            <button type="button" className="btn_comnt_modify">삭제</button>

            <div className="comment_box_bot_report">
              <span>상품평 점수</span>

              <button type="button" className="btn_review_confirm"><i className="icon-hand_like"></i> 2<span className="ir">네</span></button>
              <button type="button" className="btn_review_confirm"><i className="icon-hand_unlike"></i> 1<span className="ir">아니요</span></button>
            </div>
          </div>

          {/* 상품평 수정 확인 레이어 S */}
          <div className="layer-pop" style={cssNone}>
            <div className="layer-pop_center">
              <div className="layer-pop_comm ">
                <span className="layer-pop_msg">상품평이 수정되었습니다.</span>

                <div className="layer-pop_button">
                  <button type="button" className="btn_layer-pop_flat">확인</button>
                </div>

                <button type="button" className="btn_layer_clse"><i className="icon-close"></i><span className="ir">닫기</span></button>
              </div>
            </div>
          </div>
          {/* 상품평 수정 확인 레이어 E */}

          {/* 상품평 삭제 레이어 S */}
          <div className="layer-pop" style={cssNone}>
            <div className="layer-pop_center">
              <div className="layer-pop_comm ">
                <span className="layer-pop_msg">상품평을 삭제하시겠습니까?</span>

                <div className="layer-pop_button">
                  <button type="button" className="btn_layer-pop_border">취소</button>

                  <button type="button" className="btn_layer-pop_flat">확인</button>
                </div>

                <button type="button" className="btn_layer_clse"><i className="icon-close"></i><span className="ir">닫기</span></button>
              </div>
            </div>
          </div>
          {/* 상품평 삭제 레이어 E */}
        </div>
      </div>
  );
}
