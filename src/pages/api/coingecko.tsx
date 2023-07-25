interface PriceInterface {
  success: boolean;
  data?: {
    dai: {
      usd: number;
    };
    ethereum: {
      usd: number;
    };
  };
}

export async function getTest() {
  // const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdai&vs_currencies=usd';
  // const data = await fetch(URL).then((res) => res.json());

  // if (data) {
  return {
    success: true,
    data: {
      dai: {
        usd: 1,
      },
      ethereum: {
        usd: 1849.96,
      },
    },
  };
  // } else {
  //   return {
  //     success: false,
  //   };
  // }
}
