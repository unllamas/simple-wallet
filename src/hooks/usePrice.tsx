import bigNumberTokenToString from './useUtils';

export default function cryptoToUSD(price, token) {
  if (price && token) {
    return Number(price) * Number(bigNumberTokenToString(token, 2));
  } else {
    return 0;
  }
}
