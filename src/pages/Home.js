import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';
import { fetchCrypto } from '../redux/features/cryptoSlice';
import Cryptos from '../components/Cryptos';
import Crypto from '../components/Crypto';
import Filter from '../Functions/filter';

function Home() {
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const { cryptos } = useSelector((state) => state.cryptos);

  useEffect(() => {
    if (cryptos.length === 0) {
      dispatch(fetchCrypto());
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value.toString());
  };

  const result = state && cryptos.length > 0 ? Filter(cryptos, state) : cryptos;

  return (
    <div className="Home">
      <Header />
      <Crypto data={result} />
      <Input change={handleChange} />
      <Cryptos data={result} />
    </div>
  );
}

export default Home;
