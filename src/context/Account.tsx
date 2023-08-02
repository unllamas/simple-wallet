// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from 'src/utils/db';

import { useBlockchain } from './Blockchain';

import { encrypt, decrypt } from 'src/hooks/useCrypto';

interface AccountInterface {
  signer: any;
  wallet: { address: { eth: string }; account: { seedPhrase: string; password: string }; backup: false };
  createWallet: (password: string | number) => { success: boolean; error: any };
  signupWallet: (mnemonic: string, password: string | number) => { success: boolean; error: any };
}

const AccountContext = createContext<AccountInterface>({
  signer: {},
  wallet: { address: { eth: '' }, account: { seedPhrase: '', password: '' }, backup: false },
  createWallet: () => ({ success: false, error: null }),
  signupWallet: () => ({ success: false, error: null }),
});

export function AccountWrapper({ children }) {
  // Chakra
  const { push } = useRouter();
  const toast = useToast();

  // Provider
  const { kovanProvider } = useBlockchain();

  // Dexie
  const walletsDB = useLiveQuery(() => db.wallets.toArray());

  // Component
  const [wallet, setWallet] = useState(null);
  const [signer, setSigner] = useState(null);

  // Get new created data structure for localfirst
  useEffect(() => {
    // Remove old structure
    async function removeOldStructure() {
      await db.wallets.delete(1);
      push('/');
    }

    if (!wallet && walletsDB && walletsDB?.length > 0) {
      const itemDB = walletsDB[0];
      if (itemDB?.wallet) {
        removeOldStructure();
        return;
      }

      const decryptAccount = decrypt(itemDB?.account);

      if (itemDB) {
        setWallet({
          address: {
            eth: itemDB?.address?.eth,
          },
          account: JSON.parse(decryptAccount),
          backup: itemDB?.backup,
        });
      }

      if (!signer) {
        const mnemonic = decrypt(JSON.parse(decryptAccount).seedPhrase).replaceAll('"', '');
        const walletAccount = ethers.Wallet.fromMnemonic(mnemonic);

        const signer = walletAccount.connect(kovanProvider);
        setSigner(signer);
      }
    }
  }, [walletsDB, signer]);

  // Create a new wallet
  const createWallet = async (password) => {
    const walletETH = ethers.Wallet.createRandom();
    if (walletETH) {
      const accountInstance = {
        seedPhrase: encrypt(walletETH?.mnemonic?.phrase),
        password: encrypt(password),
      };

      try {
        await db.wallets.add({
          address: {
            eth: walletETH?.address,
          },
          account: encrypt(accountInstance),
          backup: false,
          version: 3,
        });

        setWallet({
          address: { eth: walletETH?.address },
          seedPhrase: encrypt(walletETH?.mnemonic?.phrase),
          password: encrypt(password),
          backup: false,
          version: 3,
        });

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
        const accountInstance = {
          seedPhrase: encrypt(walletETH?.mnemonic?.phrase),
          password: encrypt(password),
        };

        try {
          await db.wallets.add({
            address: {
              eth: walletETH?.address,
            },
            account: encrypt(accountInstance),
            backup: true,
            version: 3,
          });

          return { success: true, error: null };
        } catch (error) {
          return { success: false, error: error };
        }
      }
    } else {
      toast({
        title: 'Frase semilla incorrecta',
        description: 'Verifique que la frase semilla sea correcta.',
        status: 'warning',
      });
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
