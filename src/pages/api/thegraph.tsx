import { execute } from "../../../.graphclient";

const PairQuery= `
query{
  pair(id: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
    token0 {
      id
      symbol
      name
      derivedETH
    }
    token1 {
      id
      symbol
      name
      derivedETH
    }
    token0Price
    token1Price
  }
}`;

export async function getPrice() {
  const { data } = await execute(PairQuery, {});
  
  if (data) {
    const formatData = {
      eth: {
        usd: Number(data?.pair?.token0Price)
      },
      dai: {
        usd: Number(data?.pair?.token0Price) / Number(data?.pair?.token0Price)
      }
    }

    return {
      success: true,
      data: formatData,
    };
  } else {
    return {
      success: false,
    };
  }
}
