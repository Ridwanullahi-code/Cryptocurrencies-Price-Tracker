const Filter = (cryptos, search) => {
  const result = cryptos.filter(
    (crypto) => (crypto.name.toLowerCase().includes(search.toLowerCase()))
    || (crypto.rank === search),
  );
  return result;
};

export default Filter;
