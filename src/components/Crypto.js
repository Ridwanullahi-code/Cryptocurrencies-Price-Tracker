import React from 'react';
import PropTypes from 'prop-types';
import crypto from '../asset/crypto.png';

function Crypto(props) {
  const { data } = props;
  return (
    <div className="crypto flexbox">
      <div className="h-flex logo-container">
        <img className="crypto-logo" src={crypto} alt="crypto" />
      </div>
      <div className="total-crypto p-two white">
        <h3 className="white">CRYPTO CURRENCIES</h3>
        <p>
          {data.length}
          {' '}
          Cryptos
        </p>
      </div>
    </div>
  );
}
// props validation should be propTypes
Crypto.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Crypto;
