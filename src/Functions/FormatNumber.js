export const number = (numbers) => {
  const num = Number(numbers);
  const number = Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}`
    : Math.sign(num) * Math.abs(num);
  return Number(number);
};

const numbersWithCommas = (x) => x.toLocaleString();

export default numbersWithCommas;
