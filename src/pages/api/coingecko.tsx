export async function getPrice() {
  const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdai&vs_currencies=usd';
  const data = await fetch(URL).then((res) => res.json());

  if (data) {
    return {
      success: true,
      data,
    };
  } else {
    return {
      success: false,
    };
  }
}
