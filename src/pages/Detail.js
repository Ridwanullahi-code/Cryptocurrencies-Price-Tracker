import React from 'react';
import Table from '../components/Table';
import Navbar from '../components/Navbar';
import Crypto from '../components/Crypto';

function Detail() {
  return (
    <section>
      <Navbar />
      <Crypto />
      <Table />
    </section>
  );
}

export default Detail;
