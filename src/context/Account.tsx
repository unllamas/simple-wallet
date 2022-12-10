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
  signer: any;
  wallet: { address: string; mnemonic: string; password: string | number; saveMn: boolean };
  createWallet: (password: string | number) => { success: boolean; error: any };
  signupWallet: (mnemonic: string, password: string | number) => { success: boolean; error: any };
}

const AccountContext = createContext<AccountInterface>({
  signer: {},
  wallet: { address: '', mnemonic: '', password: '', saveMn: true },
  createWallet: () => ({ success: false, error: null }),
  signupWallet: () => ({ success: false, error: null }),
});

export function AccountWrapper({ children }) {
  // Chakra
  const toast = useToast();

  // Provider
  const { kovanProvider } = useBlockchain();

  // Dexie
  const walletsDB = useLiveQuery(() => db.wallets.toArray());

  // Component
  const [wallet, setWallet] = useState(null);
  const [signer, setSigner] = useState(null);

  // POC:
  // Removed old data structure for localfirst
  useEffect(() => {
    async function init() {
      await db.wallets.delete(1);
    }

    if (walletsDB && walletsDB?.length && !!walletsDB[0]?.mnemonic) {
      init();
    }
  });

  // Get new created data structure for localfirst
  useEffect(() => {
    if (!wallet && walletsDB && walletsDB?.length > 0) {
      const localWallet = JSON.parse(decrypt(walletsDB[0]?.wallet));
      setWallet(localWallet);
    }
  }, [walletsDB, wallet]);

  useEffect(() => {
    if (wallet && !signer) {
      const mnemonic = decrypt(wallet?.mnemonic?.eth).replaceAll('"', '');
      const walletAccount = ethers.Wallet.fromMnemonic(mnemonic);

      const signer = walletAccount.connect(kovanProvider);
      setSigner(signer);
    }
  }, [wallet, signer]);

  // Create a new wallet
  const createWallet = async (password) => {
    const walletETH = ethers.Wallet.createRandom();
    if (walletETH) {
      const instanceWallet = {
        address: walletETH?.address,
        mnemonic: {
          eth: encrypt(walletETH?.mnemonic?.phrase),
          btc: '',
        },
        privateKey: {
          eth: '',
          btc: '',
        },
        password: encrypt(password),
        saveMn: false,
      };

      try {
        await db.wallets.add({ wallet: encrypt(instanceWallet) });

        setWallet(instanceWallet);

        return { success: true, error: null };
      } catch (error) {
        return { success: false, error: error };
      }
    } else {
      return { success: false, error: null };
    }
  };

  // Login with seedphrase
  const signupWallet = async (mnemonic, password) => {
    const isValid = ethers.utils.isValidMnemonic(mnemonic);
    if (isValid) {
      const walletETH = ethers.Wallet.fromMnemonic(mnemonic);
      if (walletETH) {
        const instanceWallet = {
          address: walletETH?.address,
          mnemonic: {
            eth: encrypt(walletETH?.mnemonic?.phrase),
            btc: '',
          },
          privateKey: {
            eth: '',
            btc: '',
          },
          password: encrypt(password),
          saveMn: true,
        };

        try {
          await db.wallets.add({ wallet: encrypt(instanceWallet) });

          return { success: true, error: null };
        } catch (error) {
          return { success: false, error: error };
        }
      }
    } else {
      toast({ description: 'Comprueba que la frase semilla sea correcta.', status: 'warning' });
      return { success: false, error: null };
    }
  };

  return (
    <AccountContext.Provider value={{ wallet, createWallet, signupWallet, signer }}>{children}</AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}
