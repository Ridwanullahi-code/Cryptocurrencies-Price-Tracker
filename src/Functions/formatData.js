import { compose } from "lodash/fp";
import numbersWithCommas, { formatNumber } from "./FormatNumber";

const trans = compose(numbersWithCommas, number);
export const fn = (num) =>
  num > 1000 ? formatNumber(+num) : Math.round(num * 100) / 100;

const formatData = (data) => {
  const result = data.map((d) => ({
    id: d.id,
    rank: d.rank,
    name: d.name,
    explorer: d.explorer,
    symbol: d.symbol,
    supply: trans(d.supply),
    max: trans(d.maxSupply),
    market: trans(d.marketCapUsd),
    volume: fn(d.volumeUsd24Hr),
    price: fn(d.priceUsd),
    change: fn(d.changePercent24Hr),
  }));
  return result;
};
export default formatData;
