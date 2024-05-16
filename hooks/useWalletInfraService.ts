import { useState, useEffect, useCallback } from 'react';
import { StoredWallet, CosmosWallet, Wallet } from '@/types';
import cosmosclient from '@cosmos-client/core';
import { db } from './useDbService';

const useWalletInfraService = () => {
  const [storedWallets, setStoredWalletsState] = useState<StoredWallet[] | null>(null);
  const [cosmosWallets, setCosmosWalletsState] = useState<CosmosWallet[] | null>(null);
  const [wallets, setWalletsState] = useState<Wallet[] | null>(null);
  const [currentStoredWallet, setCurrentStoredWalletState] = useState<StoredWallet | undefined>();
  const [currentCosmosWallet, setCurrentCosmosWalletState] = useState<CosmosWallet | undefined>();
  const [currentWallet, setCurrentWalletState] = useState<Wallet | undefined>();
  const [currentStoredWallets, setCurrentStoredWalletsState] = useState<StoredWallet[] | null>(
    null
  );
  const [currentCosmosWallets, setCurrentCosmosWalletsState] = useState<CosmosWallet[] | null>(
    null
  );
  const [currentWallets, setCurrentWalletsState] = useState<Wallet[] | null>(null);

  const convertStoredWalletToCosmosWallet = (storedWallet: StoredWallet): CosmosWallet => {
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

  const convertCosmosWalletToStoredWallet = (cosmosWallet: CosmosWallet): StoredWallet => {
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

  const convertCosmosWalletToWallet = (cosmosWallet: CosmosWallet): Wallet => {
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

  const convertWalletToStoredWallet = (wallet: Wallet): StoredWallet => {
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

  const load = async () => {
    const storedWallets = await listStoredWallets();
    setStoredWalletsState(storedWallets);
    const cosmosWallets = await listCosmosWallets();
    setCosmosWalletsState(cosmosWallets);
    const wallets = await listWallets();
    setWalletsState(wallets);

    const currentStoredWalletsTmp = await listCurrentStoredWallets();
    setCurrentStoredWalletsState([...currentStoredWalletsTmp]);
    const currentCosmosWalletsTmp = await listCurrentCosmosWallets();
    setCurrentCosmosWalletsState([...currentCosmosWalletsTmp]);
    const currentWalletsTmp = await listCurrentWallets();
    setCurrentWalletsState([...currentWalletsTmp]);

    const currentStoredWalletTmp = await getCurrentStoredWallet();
    setCurrentStoredWalletState(currentStoredWalletTmp);
    const currentCosmosWalletTmp = await getCurrentCosmosWallet();
    setCurrentCosmosWalletState(currentCosmosWalletTmp);
    const currentWalletTmp = await getCurrentWallet();
    setCurrentWalletState(currentWalletTmp);
  };

  useEffect(() => {
    load();
  }, []);

  const listStoredWallets = async (): Promise<StoredWallet[]> => {
    try {
      const array = await db.table('wallets').toArray();
      return array.map((element: any) => ({
        id: element.id,
        type: element.type,
        key_type: element.key_type,
        public_key: element.public_key,
        address: element.address,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const listCosmosWallets = async (): Promise<CosmosWallet[]> => {
    try {
      const storedWallets = await listStoredWallets();
      return storedWallets.map(convertStoredWalletToCosmosWallet);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const listWallets = async (): Promise<Wallet[]> => {
    try {
      const cosmosWallets = await listCosmosWallets();
      return cosmosWallets.map(convertCosmosWalletToWallet);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const listCurrentStoredWallets = async (): Promise<StoredWallet[]> => {
    try {
      const array = await db.table('current_wallets').toArray();
      return array.map((element: any) => ({
        id: element.id,
        type: element.type,
        key_type: element.key_type,
        public_key: element.public_key,
        address: element.address,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const listCurrentCosmosWallets = async (): Promise<CosmosWallet[]> => {
    try {
      const storedWallets = await listCurrentStoredWallets();
      return storedWallets.map(convertStoredWalletToCosmosWallet);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const listCurrentWallets = async (): Promise<Wallet[]> => {
    try {
      const cosmosWallets = await listCurrentCosmosWallets();
      return cosmosWallets.map(convertCosmosWalletToWallet);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getCurrentStoredWallet = async (): Promise<StoredWallet | undefined> => {
    try {
      const array = await db.table('current_wallets').toArray();
      if (array.length === 0) throw new Error('There is no current_wallets!');
      if (array.length !== 1) throw new Error('Unintended duplicate detected in current_wallets!');
      const data = array[0];
      return {
        id: data.id,
        type: data.type,
        key_type: data.key_type,
        public_key: data.public_key,
        address: data.address,
      };
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const getCurrentCosmosWallet = async (): Promise<CosmosWallet | undefined> => {
    try {
      const storedWallet = await getCurrentStoredWallet();
      if (!storedWallet) throw new Error('There is no current_wallets!');
      return convertStoredWalletToCosmosWallet(storedWallet);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const getCurrentWallet = async (): Promise<Wallet | undefined> => {
    try {
      const cosmosWallet = await getCurrentCosmosWallet();
      if (!cosmosWallet) throw new Error('There is no current_wallets!');
      return convertCosmosWalletToWallet(cosmosWallet);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const setCurrentStoredWallet = async (storedWallet: StoredWallet): Promise<void> => {
    try {
      const existingCurrentStoredWallets = await db.table('current_wallets').toArray();
      if (existingCurrentStoredWallets.length) {
        const primaryKeys = existingCurrentStoredWallets.map(
          (existingCurrentStoredWallet: any) => existingCurrentStoredWallet.index
        );
        await db.table('current_wallets').bulkDelete(primaryKeys);
      }
      await db.table('current_wallets').put(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const setCurrentCosmosWallet = async (cosmosWallet: CosmosWallet): Promise<void> => {
    try {
      const storedWallet = convertCosmosWalletToStoredWallet(cosmosWallet);
      await setCurrentStoredWallet(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const setCurrentWallet = async (wallet: Wallet): Promise<void> => {
    try {
      const storedWallet = convertWalletToStoredWallet(wallet);
      await setCurrentStoredWallet(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const setStoredWallet = async (storedWallet: StoredWallet): Promise<void> => {
    try {
      const sameStoredWallet = await db
        .table('wallets')
        .where('id')
        .equals(storedWallet.id)
        .first();
      if (sameStoredWallet) throw new Error('The wallet already exists!');
      await db.table('wallets').put(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const setCosmosWallet = async (cosmosWallet: CosmosWallet): Promise<void> => {
    try {
      const storedWallet = convertCosmosWalletToStoredWallet(cosmosWallet);
      await setStoredWallet(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const setWallet = async (wallet: Wallet): Promise<void> => {
    try {
      const storedWallet = convertWalletToStoredWallet(wallet);
      await setStoredWallet(storedWallet);
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  const getStoredWallet = async (id: string): Promise<StoredWallet | undefined> => {
    try {
      const data = await db.table('wallets').where('id').equals(id).first();
      const storedWallet: StoredWallet = {
        id: id,
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
  };

  const getCosmosWallet = async (id: string): Promise<CosmosWallet | undefined> => {
    try {
      const storedWallet = await getStoredWallet(id);
      if (!storedWallet) {
        throw Error(`There is no wallet with id: ${id}!`);
      }
      const cosmosWallet = convertStoredWalletToCosmosWallet(storedWallet);
      return cosmosWallet;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const getWallet = async (id: string): Promise<Wallet | undefined> => {
    try {
      const cosmosWallet = await getCosmosWallet(id);
      if (!cosmosWallet) {
        throw Error(`There is no wallet with id: ${id}!`);
      }
      const wallet = convertCosmosWalletToWallet(cosmosWallet);
      return wallet;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const deleteStoredWallet = async (): Promise<void> => {
    try {
      const existingCurrentStoredWallets = await db.table('current_wallets').toArray();
      if (existingCurrentStoredWallets.length) {
        const primaryKeys = existingCurrentStoredWallets.map(
          (existingCurrentStoredWallet: any) => existingCurrentStoredWallet.index
        );
        await db.table('current_wallets').bulkDelete(primaryKeys);
      }
      await load();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    storedWallets,
    cosmosWallets,
    wallets,
    currentStoredWallet,
    currentCosmosWallet,
    currentWallet,
    currentStoredWallets,
    currentCosmosWallets,
    currentWallets,
    load,
    setCurrentStoredWallet,
    setCurrentCosmosWallet,
    setCurrentWallet,
    setStoredWallet,
    setCosmosWallet,
    setWallet,
    deleteStoredWallet,
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
    getWallet,
    getCosmosWallet,
    getStoredWallet,
  };
};

export default useWalletInfraService;
