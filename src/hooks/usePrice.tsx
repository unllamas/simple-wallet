export function cryptoToUSD(price, token) {
  if (price && token) {
    const value = (Number(price) * Number(token)).toFixed(2);

    return Number(value);
  } else {
    return 0;
  }
}
