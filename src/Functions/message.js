const Message = (data) => {
  const re = data.length > 0
    ? `${data.length} cryptos found` : 'no crypto found';
  return re;
};
export default Message;
