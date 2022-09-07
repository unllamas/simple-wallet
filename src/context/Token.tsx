// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { useBlockchain } from './Blockchain';
import { useAccount } from './Account';

import abiDAI from '../utils/abi/DAI.json';

const TokenContext = createContext({ tokenETH: '', tokenDAI: '' });

const addressDAI = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa';

export function TokenWrapper({ children }) {
  const { kovanProvider } = useBlockchain();
  const { wallet, address } = useAccount();

  const [loading, setLoading] = useState(false);

  // const [provider, setProvider] = useState();
  const [tokenETH, setTokenETH] = useState('');
  const [tokenDAI, setTokenDAI] = useState('');

  const [balance, setBalance] = useState(0);

  // Obtener balance de Ethereum
  // let lastBalance = ethers.constants.Zero;
  kovanProvider?.on('block', () => {
    if (!!address) {
      kovanProvider.getBalance(address).then((balance) => {
        // if (!balance.eq(lastBalance)) {
        // lastBalance = balance;
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        setTokenETH(balanceInEth);
        // }
      });
    }
  });

  const providerDAI = new ethers.Contract(addressDAI, abiDAI, kovanProvider);

  useEffect(() => {
    async function getBalance() {
      try {
        const res = await providerDAI.balanceOf(address);
        if (res) {
          const convert = ethers.utils.formatUnits(res, 18);
          if (convert) {
            setTokenDAI(convert);
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    !tokenDAI && getBalance();
  }, [tokenDAI, address]);

  if (loading) return 'Cargando...';

  return <TokenContext.Provider value={{ tokenETH, tokenDAI }}>{children}</TokenContext.Provider>;
}

export function useToken() {
  return useContext(TokenContext);
}
