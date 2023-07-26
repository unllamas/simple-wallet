import Dexie from 'dexie';

export const db = new Dexie('simpleWallet');

// Declare tables, IDs and indexes
db.version(3).stores({
  wallets: '++id, wallet',
});
