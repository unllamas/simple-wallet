import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

const BlockchainContext = createContext({ kovanProvider: () => {} });

export function BlockchainWrapper({ children }) {
  const [kovanProvider, setKovanProvider] = useState();

  useEffect(() => {
    if (!kovanProvider) {
      const kovan = new ethers.providers.InfuraProvider('kovan', process.env.INFURA_TOKEN_API);
      setKovanProvider(kovan);
    }
  }, [kovanProvider]);

  if (!kovanProvider) return;

  return <BlockchainContext.Provider value={{ kovanProvider }}>{children}</BlockchainContext.Provider>;
}

export function useBlockchain() {
  return useContext(BlockchainContext);
}
