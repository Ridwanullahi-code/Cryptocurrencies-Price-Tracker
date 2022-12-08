import React from 'react';
import PropTypes from 'prop-types';
import crypto from '../asset/crypto2.png';

function Header1(props) {
  const { data } = props;
  return (
    <div className="crypto flexbox">
      <div className="h-flex logo-container">
        <img className="crypto-logo" src={crypto} alt="crypto" />
      </div>
      <div className="total-crypto detail v-flex p-two white">
        <h2 className="font-4 rank">{data[0].rank}</h2>
        <h2 className="font-4">{data[0].name}</h2>
        <p className="font-3">
          {data[0].change}
          {data[0].change > 0 ? (
            <i className="fa fa-caret-up" aria-hidden="true" />
          ) : (
            <i className="fa fa-caret-down" aria-hidden="true" />
          )}
        </p>
      </div>
    </div>
  );
}

// props validation should be propTypes
Header1.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Header1;
