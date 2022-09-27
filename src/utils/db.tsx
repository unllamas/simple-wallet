import Dexie from 'dexie';

export const db = new Dexie('simpleWallet');

// Declare tables, IDs and indexes
db.version(1).stores({
  wallets: '++id, mnemonic, saveMn',
});
