import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HappyTree from './common/HappyTree';
import Tab from './common/Tab';
import EBrochure from './common/EBrochure';
import PDInfo from './PDInfo';
// import PDReview from './PDReview';
// import PDQnA from './PDQnA';

export default class PD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      req: {
        URL: 'https://api.pping.kr/front/v1/item/ppingview/',
        cate_id: 1010100000,
        item_id: 1588633,
        idx_b_manager: 1
      },
    };
    this.events.goSelf = this.events.goSelf.bind(this);
  }

  componentDidMount() {
    this.getPD();
  }

  getPD = async () => {
    const data = await this._callApi();
    this.setState({data});
  };

  _callApi = () => {
    const req = this.state.req.URL
    + this.state.req.cate_id + '/'
    + this.state.req.item_id + '/'
    + this.state.req.idx_b_manager;
    const data = fetch(req, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(res => res.data);
    return data;
  };

  links = {
    goBack: () => { window.location.href = 'http://google.com'; },
    goEBrochure: () => { window.location.href = 'http://google.com'; },
  };

  events = {
    goSelf: (e) => {
      // Array.from(e.target.parentNode.children).map(item => console.log(item));
      [...e.target.parentNode.children].map(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
      e.preventDefault();
    },
  };

  render() {
    // console.log(this.state.data);
    const renderPD = () => {
      const item_info = this.state.data.catelog[0].item_info;
      const iteminfo = this.state.data.iteminfo;
      const specinfo_title = this.state.data.specinfo[0];
      const specinfo_subtitle = this.state.data.specinfo[1];
      const specinfo_details = this.state.data.specinfo[2];
      // console.log(specinfo_title);
      // console.log(specinfo_subtitle);
      // console.log(specinfo_details);
      return (
        <div id="wrap">
          <Header goBack={this.links.goBack} />
          <div id="container">
            <div className="container_view">
              <div className="view_main">
                <div className="view_main_top">
                  <HappyTree />
                </div>
                <div className="view_main_body">
                  <div className="view_main_body_price">&nbsp;</div>
                  <div className="view_main_body_realdatalab">&nbsp;</div>
                  <div className="view_main_body_main">
                    <Tab active={'0'} str={'상품정보|상품평|상품문의'} onTab={this.events.goSelf} />
                    <Tab active={'1'} str={'a|b'} onTab={this.events.goSelf} />
                    <Tab active={'2'} str={'탭1|탭2|탭3|탭4'} onTab={this.events.goSelf} />
                    <Tab active={'4'} str={'1|2|3|4|5'} onTab={this.events.goSelf} />
                    <PDInfo key={iteminfo.item_id}
                      item_name={iteminfo.item_name}
                      item_info={item_info}
                      item_id={iteminfo.item_id}
                      item_br_info={iteminfo.item_br_info}
                      specinfo_title={specinfo_title}
                      specinfo_subtitle={specinfo_subtitle}
                      specinfo_details={specinfo_details}
                    />
                    <EBrochure htmlStr={item_info} />
                    {/*<PDReview />*/}
                    {/*<PDQnA />*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    };

    return (
      <div>
        {this.state.data !== undefined ? renderPD() : 'Loading'}
      </div>
    );
  }
}

Header.propTypes = {
  goBack: PropTypes.func.isRequired
};

Tab.propTypes = {
  str: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onTab: PropTypes.func,
};

PDInfo.propTypes = {
  item_id: PropTypes.number.isRequired,
  item_br_info: PropTypes.string,
  specinfo_title: PropTypes.array,
  specinfo_subtitle: PropTypes.object,
  specinfo_details: PropTypes.object,
};

Tab.propTypes = {
  str: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};
