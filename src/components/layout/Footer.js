import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Footer.css';


export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urls: {
        '행복쇼핑 홈': 'http://google.com',
        '상품분류': 'http://daum.net',
        '검색': 'http://naver.com',
        '마이쇼핑': 'http://pping.kr',
        '고객센터': 'http://bettehub.github.io/photos',
      },
    };
  }

  render() {
    return (
      <footer className="footer-m-bar">
        <TabMenu
          str={'행복쇼핑 홈|상품분류|검색|마이쇼핑|고객센터|고객센터|고객센터'} active={'0'}
          onTabMenu={this.state.urls}
          icon={true} iconStr={'icon-bottom_home|icon-bottom_menu|icon-bottom_zoomlens|icon-bottom_user|icon-bottom_phone|icon-bottom_phone|icon-bottom_phone'}
        />
      </footer>
    );
  }
}

function TabMenu({str, active, /*onTabMenu, */icon, iconStr}) {

  const makeTabMenu = () => {
    const strs = str.split('|');
    // const onTabMenus = onTabMenu.split('|');
    const iconStrs = iconStr.split('|');

    const tabMenuArray = [];
    for(let i in strs) {
      // console.log(onTabMenu[strs[i]]);
      // console.log(strs[i]);
      const goLink = (e) => {
        // window.location.href = onTabMenu[strs[i]];
        // console.log(e.target);
        const node = e.target.parentNode;
        if(e.target.tagName === 'EM') {
          [...node.parentNode.parentNode.children].map(item => {
            item.classList.remove('active');
          });
          node.parentNode.classList.add('active');
        } else {
          [...node.parentNode.children].map(item => {
            item.classList.remove('active');
          });
          node.classList.add('active');
        }
        return false;
      };
      if(active === i) {
        // console.log(i, 'active', icon);
        if(icon) {
          tabMenuArray.push(<li key={i} className="active"><button type="button" onClick={goLink}><em className={iconStrs[i]}></em>{strs[i]}</button></li>);
        } else {
          tabMenuArray.push(<li key={i} className="active"><button type="button" onClick={goLink}>{strs[i]}</button></li>);
        }
      } else {
        // console.log(i, 'notive', icon);
        if(icon) {
          tabMenuArray.push(<li key={i}><button type="button" onClick={goLink}><em className={iconStrs[i]}></em>{strs[i]}</button></li>);
        } else {
          tabMenuArray.push(<li key={i}><button type="button" onClick={goLink}>{strs[i]}</button></li>);
        }
      }
    }
    return tabMenuArray;
  };

  return (
    <ul>{makeTabMenu()}</ul>
  );
}

TabMenu.propTypes = {
  str: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onTabMenu: PropTypes.object,
  icon: PropTypes.bool,
  iconStr: PropTypes.string,
};
