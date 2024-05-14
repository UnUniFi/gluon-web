import { useState, useEffect, useCallback } from 'react';
import Dexie from 'dexie';
import { StoredWallet, CosmosWallet, Wallet } from '@/types';
import cosmosclient from '@cosmos-client/core';
import useDbService from './useDbService';

const useWalletInfraService = () => {
  const dbService = useDbService();
  const db = dbService.db;

  const [storedWallets, setStoredWallets] = useState<StoredWallet[] | null>(null);
  const [cosmosWallets, setCosmosWallets] = useState<CosmosWallet[] | null>(null);
  const [wallets, setWallets] = useState<Wallet[] | null>(null);

  const [currentStoredWallets, setCurrentStoredWallets] = useState<StoredWallet[] | null>(null);
  const [currentCosmosWallets, setCurrentCosmosWallets] = useState<CosmosWallet[] | null>(null);
  const [currentWallets, setCurrentWallets] = useState<Wallet[] | null>(null);

  const [currentStoredWallet, setCurrentStoredWallet] = useState<StoredWallet | null>(null);
  const [currentCosmosWallet, setCurrentCosmosWallet] = useState<CosmosWallet | null>(null);
  const [currentWallet, setCurrentWallet] = useState<Wallet | null>(null);

  const load = useCallback(async () => {
    const storedWallets = await listStoredWallets();
    setStoredWallets(storedWallets);
    const cosmosWallets = await listCosmosWallets();
    setCosmosWallets(cosmosWallets);
    const wallets = await listWallets();
    setWallets(wallets);

    const currentStoredWallets = await listCurrentStoredWallets();
    setCurrentStoredWallets(currentStoredWallets);
    const currentCosmosWallets = await listCurrentCosmosWallets();
    setCurrentCosmosWallets(currentCosmosWallets);
    const currentWallets = await listCurrentWallets();
    setCurrentWallets(currentWallets);

    const currentStoredWallet = await getCurrentStoredWallet();
    setCurrentStoredWallet(currentStoredWallet);
    const currentCosmosWallet = await getCurrentCosmosWallet();
    setCurrentCosmosWallet(currentCosmosWallet);
    const currentWallet = await getCurrentWallet();
    setCurrentWallet(currentWallet);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const convertStoredWalletToCosmosWallet = (storedWallet) => {
    const public_key = new cosmosclient.proto.cosmos.crypto.secp256k1.PubKey({
      key: Uint8Array.from(Buffer.from(storedWallet.public_key, 'hex')),
    });
    const address = cosmosclient.AccAddress.fromString(storedWallet.address);
    return {
      id: storedWallet.id,
      type: storedWallet.type,
      key_type: storedWallet.key_type,
      public_key,
      address,
    };
  };

  const convertCosmosWalletToStoredWallet = (cosmosWallet) => {
    const public_key = cosmosWallet.public_key.bytes().toString();
    const address = cosmosWallet.address.toAccAddress().toString();
    return {
      id: cosmosWallet.id,
      type: cosmosWallet.type,
      key_type: cosmosWallet.key_type,
      public_key,
      address,
    };
  };

  const convertCosmosWalletToWallet = (cosmosWallet) => {
    const public_key = cosmosWallet.public_key.bytes();
    const address = cosmosWallet.address.value();
    return {
      id: cosmosWallet.id,
      type: cosmosWallet.type,
      key_type: cosmosWallet.key_type,
      public_key,
      address,
    };
  };

  const convertWalletToStoredWallet = (wallet) => {
    const public_key = Buffer.from(wallet.public_key).toString('hex');
    const address = new cosmosclient.AccAddress(wallet.address).toAccAddress().toString();
    return {
      id: wallet.id,
      type: wallet.type,
      key_type: wallet.key_type,
      public_key,
      address,
    };
  };

  const listCurrentStoredWallets = useCallback(async () => {
    try {
      const array = await db.table('current_wallets').toArray();
      const storedWallets = array.map((element) => ({
        id: element.id,
        type: element.type,
        key_type: element.key_type,
        public_key: element.public_key,
        address: element.address,
      }));
      return storedWallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [db]);

  const listCurrentCosmosWallets = useCallback(async () => {
    try {
      const storedWallets = await listCurrentStoredWallets();
      const cosmosWallets = storedWallets?.map(convertStoredWalletToCosmosWallet);
      return cosmosWallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [listCurrentStoredWallets]);

  const listCurrentWallets = useCallback(async () => {
    try {
      const cosmosWallets = await listCurrentCosmosWallets();
      const wallets = cosmosWallets?.map(convertCosmosWalletToWallet);
      return wallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [listCurrentCosmosWallets]);

  const getCurrentStoredWallet = useCallback(async () => {
    try {
      const array = await db.table('current_wallets').toArray();
      if (!array?.length) {
        throw new Error('There is no current_wallets!');
      }
      if (array?.length !== 1) {
        console.error(array);
        throw new Error('Unintended duplicate detected in current_wallets!');
      }
      const data = array[0];
      const storedWallet = {
        id: data.id,
        type: data.type,
        key_type: data.key_type,
        public_key: data.public_key,
        address: data.address,
      };
      return storedWallet;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [db]);

  const getCurrentCosmosWallet = useCallback(async () => {
    try {
      const storedWallet = await getCurrentStoredWallet();
      if (!storedWallet) {
        throw new Error('There is no current_wallets!');
      }
      const cosmosWallet = convertStoredWalletToCosmosWallet(storedWallet);
      return cosmosWallet;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [getCurrentStoredWallet]);

  const getCurrentWallet = useCallback(async () => {
    try {
      const cosmosWallet = await getCurrentCosmosWallet();
      if (!cosmosWallet) {
        throw new Error('There is no current_wallets!');
      }
      const wallet = convertCosmosWalletToWallet(cosmosWallet);
      return wallet;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [getCurrentCosmosWallet]);

  const listStoredWallets = useCallback(async () => {
    try {
      const array = await db.table('wallets').toArray();
      const storedWallets = array.map((element) => ({
        id: element.id,
        type: element.type,
        key_type: element.key_type,
        public_key: element.public_key,
        address: element.address,
      }));
      return storedWallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [db]);

  const listCosmosWallets = useCallback(async () => {
    try {
      const storedWallets = await listStoredWallets();
      const cosmosWallets = storedWallets?.map(convertStoredWalletToCosmosWallet);
      return cosmosWallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [listStoredWallets]);

  const listWallets = useCallback(async () => {
    try {
      const cosmosWallets = await listCosmosWallets();
      const wallets = cosmosWallets?.map(convertCosmosWalletToWallet);
      return wallets;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, [listCosmosWallets]);

  const getStoredWallet = useCallback(
    async (id) => {
      try {
        const data = await db.table('wallets').where('id').equals(id).first();
        const storedWallet = {
          id,
          type: data.type,
          key_type: data.key_type,
          public_key: data.public_key,
          address: data.address,
        };
        return storedWallet;
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    [db]
  );

  const getCosmosWallet = useCallback(
    async (id) => {
      try {
        const storedWallet = await getStoredWallet(id);
        if (!storedWallet) {
          throw new Error(`There is no wallet with id: ${id}!`);
        }
        const cosmosWallet = convertStoredWalletToCosmosWallet(storedWallet);
        return cosmosWallet;
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    [getStoredWallet]
  );

  const getWallet = useCallback(
    async (id) => {
      try {
        const cosmosWallet = await getCosmosWallet(id);
        if (!cosmosWallet) {
          throw new Error(`There is no wallet with id: ${id}!`);
        }
        const wallet = convertCosmosWalletToWallet(cosmosWallet);
        return wallet;
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    [getCosmosWallet]
  );

  const setCurrentStoredWallet = useCallback(
    async (storedWallet) => {
      try {
        await db.table('current_wallets').clear();
        await db.table('current_wallets').put(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [db]
  );

  const setCurrentCosmosWallet = useCallback(
    async (cosmosWallet) => {
      try {
        const storedWallet = convertCosmosWalletToStoredWallet(cosmosWallet);
        await setCurrentStoredWallet(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [setCurrentStoredWallet]
  );

  const setCurrentWallet = useCallback(
    async (wallet) => {
      try {
        const storedWallet = convertWalletToStoredWallet(wallet);
        await setCurrentStoredWallet(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [setCurrentStoredWallet]
  );

  const setStoredWallet = useCallback(
    async (storedWallet) => {
      try {
        await db.table('wallets').put(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [db]
  );

  const deleteStoredWallet = useCallback(async () => {
    try {
      await db.table('current_wallets').clear();
    } catch (error) {
      console.error(error);
    }
  }, [db]);

  const setCosmosWallet = useCallback(
    async (cosmosWallet) => {
      try {
        const storedWallet = convertCosmosWalletToStoredWallet(cosmosWallet);
        await setStoredWallet(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [setStoredWallet]
  );

  const setWallet = useCallback(
    async (wallet) => {
      try {
        const storedWallet = convertWalletToStoredWallet(wallet);
        await setStoredWallet(storedWallet);
      } catch (error) {
        console.error(error);
      }
    },
    [setStoredWallet]
  );

  return {
    storedWallets,
    cosmosWallets,
    wallets,
    currentStoredWallets,
    currentCosmosWallets,
    currentWallets,
    currentStoredWallet,
    currentCosmosWallet,
    currentWallet,
    load,
    convertStoredWalletToCosmosWallet,
    convertCosmosWalletToStoredWallet,
    convertCosmosWalletToWallet,
    convertWalletToStoredWallet,
    listCurrentStoredWallets,
    listCurrentCosmosWallets,
    listCurrentWallets,
    getCurrentStoredWallet,
    getCurrentCosmosWallet,
    getCurrentWallet,
    listStoredWallets,
    listCosmosWallets,
    listWallets,
    getStoredWallet,
    getCosmosWallet,
    getWallet,
    setCurrentStoredWallet,
    setCurrentCosmosWallet,
    setCurrentWallet,
    setStoredWallet,
    deleteStoredWallet,
    setCosmosWallet,
    setWallet,
  };
};

export default useWalletInfraService;
