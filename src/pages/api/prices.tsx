interface EndpointInterface {
  name: string;
  values: {
    ask: number;
    totalAsk: number;
    bid: number;
    totalBid: number;
    time: number;
  };
}

interface PricesInterface {
  success: boolean;
  data?: Array<EndpointInterface>;
}

export async function getPrices(): Promise<PricesInterface> {
  const currency = 'usd';
  const tokens = ['eth', 'dai'];

  let promises = [];

  tokens.map((token) => {
    promises.push({ name: token, url: `https://criptoya.com/api/tiendacrypto/${token}/${currency}/0.5` });
  });

  const data = await Promise.all(
    promises.map(async ({ name, url }) => {
      const resp = await fetch(url);
      const body = await resp.text();

      if (body) {
        return { name, values: JSON.parse(body) };
      }
    }),
  );

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
