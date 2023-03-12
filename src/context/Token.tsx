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
}

const TokenContext = createContext<TokenContextInterface | null>(null);

const addressDAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

export function TokenWrapper({ children }) {
  // Chakra
  const toast = useToast();

  // Context
  const { kovanProvider } = useBlockchain();
  const { wallet, signer } = useAccount();

  // Component
  const [tokens, setTokens] = useState({
    dai: ethers.constants.Zero,
    eth: ethers.constants.Zero,
  });

  const providerDAI = new ethers.Contract(addressDAI, abiDAI, kovanProvider);

  // Obtener balance de Ethereum y DAI
  if (!!wallet?.address) {
    kovanProvider?.on('block', () => {
      if (tokens?.eth?.isZero() && tokens?.dai?.isZero()) {
        kovanProvider.getBalance(wallet?.address).then((balance) => {
          if (!balance?.eq(tokens?.eth)) {
            setTokens({ ...tokens, eth: balance });
          }
        });

        providerDAI.balanceOf(wallet?.address).then((balance) => {
          if (!balance?.eq(tokens?.dai)) {
            setTokens({ ...tokens, dai: balance });
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

  return <TokenContext.Provider value={{ tokens, sendTransaction }}>{children}</TokenContext.Provider>;
}

export function useToken() {
  return useContext(TokenContext);
}
