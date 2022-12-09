import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import Header from '../components/Header';
import Input from '../components/Input';
import { fetchCrypto } from '../redux/features/cryptoSlice';
import Cryptos from '../components/Cryptos';
import Crypto from '../components/Crypto';
import Filter from '../functions/filterCrypto';

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

  const message = document.querySelector('.message');
  if (state === '') {
    if (message) {
      message.style.display = 'none';
    }
  }
  if (state) {
    message.style.display = 'block';
    if (result.length > 0) {
      message.classList.add('found');
      message.classList.remove('error');
    } else {
      message.classList.add('error');
      message.classList.remove('found');
    }
  }

  return (
    <div className="Home">
      <Header />
      <Crypto data={result} />
      <Input change={handleChange} />
      <p className="message">
        {!result.length
          ? 'No Cryptos Found.'
          : `${result.length} Cryptos Found.`}
      </p>
      {result.length > 0 ? (
        <Cryptos data={result} />) : (
          <div className="loader h-flex">
            <FadeLoader color="#36d7b7" size={500} />
          </div>
      )}
    </div>
  );
}

export default Home;
