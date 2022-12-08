import React from 'react';
import crypto from '../asset/crypto.png';

function Crypto() {
  return (
    <div className="crypto flexbox">
      <div className="h-flex logo-container">
        <img className="crypto-logo" src={crypto} alt="crypto" />
      </div>
      <div className="total-crypto v-flex p-two white">
        <h2 className="font-4 white">CRYPTO CURRENCIES</h2>
        <p>50 Cryptos</p>
      </div>
    </div>
  );
}

export default Crypto;
