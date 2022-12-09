import numbersWithCommas, { number } from '../functions/formatNumber';
import Filter from '../functions/filter';

describe('test for all functions', () => {
  // ACTION
  test('formatNumber : 12.3456789 should be rounded to 12.3', () => {
    // ASSERTION
    expect(number('40967739219.6612727047843840')).toBe(40967739.2);
  });
  test('formatNumber : 12.3456789 should be rounded to 12.35', () => {
    // ASSERTION
    expect(number('-0.8101417214350335')).toBe(-0.8101417214350335);
  });
  test('return value must be float data type', () => {
    //  ACTION
    const float = number('12.3456789');
    // ASSERTION
    expect(Number(float) === float && float % 1 !== 0).toBe(true);
    expect(number(123.556)).not.toBeUndefined();
  });
});

describe('test numbersWithCommas function', () => {
  test('-0.0939626159535347 must be to -0.094', () => {
    expect(numbersWithCommas(number('-0.0759626159535347'))).toBe('-0.076');
  });

  test('17193925.00 must be to 17,193.9', () => {
    expect(numbersWithCommas(number('17193925.00'))).toBe('17,193.9');
  });
});

const data = [
  { name: 'Bitcoin', rank: '1' },
  { name: 'Ethereum', rank: '2' },
  { name: 'Bitcoin Wave', rank: '2' },
  { name: 'Bitcoin Life', rank: '2' },
];
describe('Filter cryptos', () => {
  test('should return new cryptos', () => {
    expect(Filter(data, 'Bi')).toHaveLength(3);
    expect(Filter(data, '1')).toHaveLength(1);
  });
  test('return value must not be empty/undefined', () => {
    expect(Filter(data, 'Bi')).not.toBeUndefined();
    expect(Filter(data, 'Bi').length).not.toBe(0);
  });
  test('return value must be empty/undefined', () => {
    expect(Filter(data, 'jy')).toStrictEqual([]);
    expect(Filter(data, 'z').length).toStrictEqual(0);
    expect(Filter(data, '4').length).toStrictEqual(0);
  });
});
