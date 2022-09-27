// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../utils/db';

import { useBlockchain } from './Blockchain';

import { encrypt, decrypt } from '../hooks/useCrypto';

interface AccountInterface {
  wallet: { address: string };
  createWallet: () => { success: boolean };
  hasSaveMnemonic: boolean;
  wallets: Array;
}

const AccountContext = createContext<AccountInterface>({
  wallet: { address: '' },
  createWallet: () => ({ success: false }),
  hasSaveMnemonic: false,
  wallets: [],
});

export function AccountWrapper({ children }) {
  const router = useRouter();
  const toast = useToast();

  const { kovanProvider } = useBlockchain();

  // Dexie
  const walletsDB = useLiveQuery(() => db.wallets.toArray());

  const [wallets, setWallets] = useState([]);
  const [wallet, setWallet] = useState({});
  const [hasSaveMnemonic, setHasSaveMnemonic] = useState(false);
  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState();

  const [mnemonic, setMnemonic] = useState('');

  const [isConnected, setIsConnected] = useState(localStorage?.isConnected || false);

  useEffect(() => {
    if (walletsDB && walletsDB?.length) {
      setWallets(walletsDB);
      setHasSaveMnemonic(walletsDB[0]?.saveMn);
      setMnemonic(walletsDB[0]?.mnemonic);
    }
  }, [mnemonic, walletsDB, wallets]);

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
  const createWallet = async (): { success: boolean } => {
    const wallet = ethers.Wallet.createRandom();
    if (wallet) {
      const mnemonicEncypt = encrypt(wallet?.mnemonic?.phrase);
      try {
        await db.wallets.add({ mnemonic: mnemonicEncypt, saveMn: false });

        setMnemonic(mnemonicEncypt);
        setIsConnected(true);

        return { success: true };
      } catch (error) {
        return { success: false };
      }
    } else {
      return { success: false };
    }
  };

  // Ingresar con mnemonic
  const signupWallet = async (mnemonic) => {
    const isValid = ethers.utils.isValidMnemonic(mnemonic);
    if (isValid) {
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      if (wallet) {
        const mnemonicEncypt = encrypt(wallet?.mnemonic?.phrase);
        try {
          await db.wallets.add({ mnemonic: mnemonicEncypt, saveMn: true });

          setMnemonic(mnemonicEncypt);
          setIsConnected(true);

          router?.push('/dashboard');
          return { success: true };
        } catch (error) {
          return { success: false };
        }
      }
    } else {
      toast({ description: 'Verifique que el mnemonic sea correcto.', status: 'warning' });
      return { success: false };
    }
  };

  return (
    <AccountContext.Provider
      value={{ wallet, wallets, hasSaveMnemonic, address, createWallet, signupWallet, signer, isConnected }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}
