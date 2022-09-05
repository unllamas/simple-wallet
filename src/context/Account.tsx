// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { useBlockchain } from './Blockchain';

import { encrypt, decrypt } from '../hooks/useCrypto';

const AccountContext = createContext<{ wallet: { address: string }; createWallet: () => { success: boolean } }>({
  wallet: { address: '' },
  createWallet: () => ({ success: false }),
});

export function AccountWrapper({ children }) {
  const { kovanProvider } = useBlockchain();

  const [wallet, setWallet] = useState({});
  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState();

  const [mnemonic, setMnemonic] = useState('');

  const [isConnected, setIsConnected] = useState(localStorage?.isConnected || false);

  // Obtener datos de localStorage
  useEffect(() => {
    // localStorage.getItem
    // setIsConnected(localStorage.isConnected);
    // if (localStorage.isConnected) {
    setMnemonic(localStorage.sw_mnemonic);
    // }
  }, [mnemonic]);

  useEffect(() => {
    if (mnemonic && !signer) {
      // Datos sobre la wallet
      const mnemonicEncypt = decrypt(mnemonic);
      const wallet = ethers.Wallet.fromMnemonic(mnemonicEncypt);
      setWallet(wallet);
      setAddress(wallet?.address);

      // Datos sobre la wallet contactada al provider
      const signer = wallet.connect(kovanProvider);
      setSigner(signer);
    }
  }, [signer, mnemonic]);

  // Crear wallet
  const createWallet = (): { success: boolean } => {
    const wallet = ethers.Wallet.createRandom();
    if (wallet) {
      const mnemonicEncypt = encrypt(wallet.mnemonic.phrase);
      localStorage.setItem('sw_mnemonic', mnemonicEncypt);

      setMnemonic(mnemonicEncypt);
      setIsConnected(true);

      return { success: true };
    } else {
      return { success: false };
    }
  };

  return <AccountContext.Provider value={{ wallet, address, createWallet }}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  return useContext(AccountContext);
}
