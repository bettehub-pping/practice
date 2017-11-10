import React from 'react';
import PropTypes from 'prop-types';

const inlineStyle = {
  width: '130px'
};

export default function PDBoard({specinfo_subtitle, specinfo_details, info_number}) {

  const makeRows = (_info_number) => {
    let rowsArray = [];
    for(let i in specinfo_details[_info_number]) {
      let rowTH = specinfo_details[_info_number][i].split('|',2)[0];
      let rowTD = specinfo_details[_info_number][i].split('|',2)[1];
      // console.log(rowTH, rowTD);
      rowsArray.push(<Rows rowTH={rowTH} rowTD={rowTD} key={i} />);
    }
    return rowsArray;
  };

  return (
    <div className="spec_board">
      {/*INFO_NUMBER.BASIC_INFO*/}
      <h5 className="tit-h5">{specinfo_subtitle[info_number]}</h5>
      <div className="spec_board_info">
        <table className="spec_board_info_baord">
          <caption><span>정보</span></caption>
          <colgroup>
            <col style={inlineStyle} />
            <col />
          </colgroup>
          <tbody>
          {makeRows(info_number)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Rows({rowTH, rowTD}) {
  return (
    <tr>
      <th scope="row"><span>{rowTH}</span></th>
      <td>{rowTD}</td>
    </tr>
  );
}

PDBoard.propTypes = {
  specinfo_subtitle: PropTypes.object,
  specinfo_details: PropTypes.object,
  info_number: PropTypes.number,
};

Rows.propTypes = {
  rowTH: PropTypes.string,
  rowTD: PropTypes.string,
};
