// @ts-nocheck
import React, { createContext, useContext, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import { useToast } from '@chakra-ui/react';

import { useBlockchain } from './Blockchain';
import { useAccount } from './Account';

import abiDAI from '../utils/abi/DAI.json';

interface TokenContextInterface {
  tokens: {
    eth: BigNumber;
    dai: BigNumber;
  };
  sendTransaction: () => null;
}

const TokenContext = createContext<TokenContextInterface | null>(null);

// Mainnet
// const addressDAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

// Test
const addressDAI = '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844';

export function TokenWrapper({ children }) {
  // Chakra
  const toast = useToast();

  // Context
  const { kovanProvider } = useBlockchain();
  const { wallet, signer } = useAccount();

  // Component
  const [tokenETH, setTokenETH] = useState(ethers.constants.Zero);
  const [tokenDAI, setTokenDAI] = useState(ethers.constants.Zero);

  const providerDAI = new ethers.Contract(addressDAI, abiDAI, kovanProvider);

  // Obtener balance de Ethereum y DAI
  if (!!wallet?.address) {
    kovanProvider?.on('block', () => {
      if (tokenETH?.isZero() && tokenDAI?.isZero()) {
        kovanProvider.getBalance(wallet?.address).then((balance) => {
          if (!balance?.eq(tokenETH)) {
            setTokenETH(balance);
          }
        });

        providerDAI.balanceOf(wallet?.address).then((balance) => {
          if (!balance?.eq(tokenDAI)) {
            setTokenDAI(balance);
          }
        });
      }
    });
  }

  // Enviar transaccion
  const sendTransaction = async (toAddress, mount, token) => {
    const addressIsValid = ethers.utils.isAddress(toAddress);
    if (addressIsValid) {
      // Send token DAI
      if (token === 'dai') {
        const daiWithSigner = providerDAI.connect(signer);
        const dai = ethers.utils.parseUnits(String(mount), 18);

        try {
          await daiWithSigner.transfer(toAddress, dai);
          return {
            success: true,
          };
        } catch (error) {
          return {
            success: false,
            error,
          };
        }
      } else {
        // Send token ETH
        const tx = {
          to: toAddress,
          value: ethers.utils.parseUnits(String(mount.toFixed(18))),
        };

        try {
          await signer.signTransaction(tx);
          const { hash } = await signer.sendTransaction(tx);
          console.log('hash', hash);

          return {
            success: true,
          };
        } catch (error) {
          return {
            success: false,
            error,
          };
        }
      }
    } else {
      toast({
        description: 'La address parece ser incorrecta.',
        status: 'warning',
      });

      return {
        success: false,
        error: '',
      };
    }
  };

  return (
    <TokenContext.Provider value={{ tokens: { eth: tokenETH, dai: tokenDAI }, sendTransaction }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
