import { useEffect, useState } from 'react';
import Dexie from 'dexie';
import cosmosclient from '@cosmos-client/core';

import { KeyType, WalletType } from '@/types';

export const db = new Dexie('telescope');

db.version(1).stores({
  keys: '++index, &id, type, public_key',
  current_keys: '++index, &id, key_id',
});

// await db.close();

db.version(2)
  .stores({
    wallets: '++index, &id, type, key_type, public_key, address',
    current_wallets: '++index, &id, type, key_type, public_key, address',
  })
  .upgrade(async (tx) => {
    const keys = await db.table('keys').toArray();
    const wallets = keys.map((key) => {
      const id = `ununifi_${key.id}`;
      const type = WalletType.ununifi;
      const key_type = key.type as KeyType;
      const public_key = key.public_key as string;

      let cosmosPublicKey;
      switch (key_type) {
        case KeyType.secp256k1:
          cosmosPublicKey = new cosmosclient.proto.cosmos.crypto.secp256k1.PubKey({
            key: Uint8Array.from(Buffer.from(public_key, 'hex')),
          });
          break;
        case KeyType.ed25519:
        case KeyType.sr25519:
          throw new Error('Unsupported key type!');
        default:
          throw new Error('Unsupported key type!');
      }
      const accAddress = cosmosclient.AccAddress.fromPublicKey(cosmosPublicKey);
      const address = accAddress.toString();
      return {
        id,
        type,
        key_type,
        public_key,
        address,
      };
    });
    await tx.db.table('wallets').bulkAdd(wallets);
  });

// await db.open();
