import React from 'react';
import { useLocation } from 'react-router';
import Table from '../components/Table';
import Navbar from '../components/Navbar';
import Header1 from '../components/Header1';

function Detail() {
  const { state } = useLocation();
  const { crypto } = state;
  return (
    <section>
      <Navbar />
      <Header1 data={crypto} />
      <Table data={crypto} />
    </section>
  );
}

export default Detail;
