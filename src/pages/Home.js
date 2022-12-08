import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Crypto from '../components/Crypto';
import Input from '../components/Input';
import { fetchCrypto } from '../redux/features/cryptoSlice';
import Cryptos from '../components/Cryptos';

function Home() {
  const dispatch = useDispatch();
  const { cryptos } = useSelector((state) => state.cryptos);

  useEffect(() => {
    if (cryptos.length === 0) {
      dispatch(fetchCrypto());
    }
  }, []);

  return (
    <div className="Home">
      <Header />
      <Crypto />
      <Input />
      <Cryptos data={cryptos} />
    </div>
  );
}

export default Home;
