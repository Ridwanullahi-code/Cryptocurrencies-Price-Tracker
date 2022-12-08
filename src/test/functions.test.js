import numbersWithCommas, { formatNumber } from '../Functions/formatNumber';

describe('test for all functions', () => {
  // ACTION
  test('formatNumber : 12.3456789 should be rounded to 12.3', () => {
    // ASSERTION
    expect(formatNumber('40967739219.6612727047843840')).toBe(40967739.2);
  });
  test('formatNumber : 12.3456789 should be rounded to 12.35', () => {
    // ASSERTION
    expect(formatNumber('-0.8101417214350335')).toBe(-0.8101417214350335);
  });
  test('return value must be float data type', () => {
    //  ACTION
    const float = formatNumber('12.3456789');
    // ASSERTION
    expect(Number(float) === float && float % 1 !== 0).toBe(true);
    expect(formatNumber(123.556)).not.toBeUndefined();
  });
});

describe('test numbersWithCommas function', () => {
  test('-0.0939626159535347 must be to -0.094', () => {
    expect(numbersWithCommas(formatNumber('-0.0759626159535347'))).toBe('-0.076');
  });

  test('17193925.00 must be to 17,193.9', () => {
    expect(numbersWithCommas(formatNumber('17193925.00'))).toBe('17,193.9');
  });
});
