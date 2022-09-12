// @ts-nocheck
import React, { createContext, useContext, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import { useToast } from '@chakra-ui/react';

import { useBlockchain } from './Blockchain';
import { useAccount } from './Account';

import abiDAI from '../utils/abi/DAI.json';

interface TokenContextInterface {
  tokenETH: BigNumber;
  tokenDAI: BigNumber;
}

const TokenContext = createContext<TokenContextInterface | null>(null);

const addressDAI = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa';

export function TokenWrapper({ children }) {
  // Chakra
  const toast = useToast();

  // Context
  const { kovanProvider } = useBlockchain();
  const { address, signer } = useAccount();

  // Component
  const [tokenETH, setTokenETH] = useState(ethers.constants.Zero);
  const [tokenDAI, setTokenDAI] = useState(ethers.constants.Zero);

  const providerDAI = new ethers.Contract(addressDAI, abiDAI, kovanProvider);

  // Obtener balance de Ethereum y DAI
  if (!!address) {
    kovanProvider?.on('block', () => {
      if (tokenETH.isZero() && tokenDAI.isZero()) {
        kovanProvider.getBalance(address).then((balance) => {
          if (!balance?.eq(tokenETH)) {
            setTokenETH(balance);
          }
        });

        providerDAI.balanceOf(address).then((balance) => {
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
          value: ethers.utils.parseEther(mount),
        };

        try {
          await signer.signTransaction(tx);
          await signer.sendTransaction(tx);

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

  return <TokenContext.Provider value={{ tokenETH, tokenDAI, sendTransaction }}>{children}</TokenContext.Provider>;
}

export function useToken() {
  return useContext(TokenContext);
}
