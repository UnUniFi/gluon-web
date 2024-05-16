import { useEffect } from 'react';
import { StoredWallet, CosmosWallet, Wallet } from '@/types';
import useWalletInfraService from './useWalletInfraService';

const useWalletService = () => {
  const infraWalletService = useWalletInfraService();

  useEffect(() => {
    load();
  }, []);

  function load(): Promise<void> {
    return infraWalletService.load();
  }

  function convertStoredWalletToCosmosWallet(storedWallet: StoredWallet): CosmosWallet {
    return infraWalletService.convertStoredWalletToCosmosWallet(storedWallet);
  }

  function convertCosmosWalletToStoredWallet(cosmosWallet: CosmosWallet): StoredWallet {
    return infraWalletService.convertCosmosWalletToStoredWallet(cosmosWallet);
  }

  function convertCosmosWalletToWallet(cosmosWallet: CosmosWallet): Wallet {
    return infraWalletService.convertCosmosWalletToWallet(cosmosWallet);
  }

  function convertWalletToStoredWallet(wallet: Wallet): StoredWallet {
    return infraWalletService.convertWalletToStoredWallet(wallet);
  }

  async function listCurrentStoredWallets(): Promise<StoredWallet[] | undefined> {
    return infraWalletService.listCurrentStoredWallets();
  }

  async function listCurrentCosmosWallets(): Promise<CosmosWallet[] | undefined> {
    return infraWalletService.listCurrentCosmosWallets();
  }

  async function listCurrentWallets(): Promise<Wallet[] | undefined> {
    return infraWalletService.listCurrentWallets();
  }

  async function getCurrentStoredWallet(): Promise<StoredWallet | undefined> {
    return infraWalletService.getCurrentStoredWallet();
  }

  async function getCurrentCosmosWallet(): Promise<CosmosWallet | undefined> {
    return infraWalletService.getCurrentCosmosWallet();
  }

  async function getCurrentWallet(): Promise<Wallet | undefined> {
    return infraWalletService.getCurrentWallet();
  }

  async function listStoredWallets(): Promise<StoredWallet[] | undefined> {
    return infraWalletService.listStoredWallets();
  }

  async function listCosmosWallets(): Promise<CosmosWallet[] | undefined> {
    return infraWalletService.listCosmosWallets();
  }
  async function listWallets(): Promise<Wallet[] | undefined> {
    return infraWalletService.listWallets();
  }

  async function getStoredWallet(id: string): Promise<StoredWallet | undefined> {
    return infraWalletService.getStoredWallet(id);
  }

  async function getCosmosWallet(id: string): Promise<CosmosWallet | undefined> {
    return infraWalletService.getCosmosWallet(id);
  }

  async function getWallet(id: string): Promise<Wallet | undefined> {
    return infraWalletService.getWallet(id);
  }

  async function setCurrentStoredWallet(storedWallet: StoredWallet): Promise<void> {
    return infraWalletService.setCurrentStoredWallet(storedWallet);
  }

  async function setCurrentCosmosWallet(cosmosWallet: CosmosWallet): Promise<void> {
    return infraWalletService.setCurrentCosmosWallet(cosmosWallet);
  }

  async function setCurrentWallet(wallet: Wallet): Promise<void> {
    return infraWalletService.setCurrentWallet(wallet);
  }

  async function setStoredWallet(storedWallet: StoredWallet): Promise<void> {
    return infraWalletService.setStoredWallet(storedWallet);
  }

  async function deleteStoredWallet(): Promise<void> {
    return infraWalletService.deleteStoredWallet();
  }

  async function setCosmosWallet(cosmosWallet: CosmosWallet): Promise<void> {
    return infraWalletService.setCosmosWallet(cosmosWallet);
  }

  async function setWallet(wallet: Wallet): Promise<void> {
    return infraWalletService.setWallet(wallet);
  }

  return {
    storedWallets: infraWalletService.storedWallets,
    cosmosWallets: infraWalletService.cosmosWallets,
    wallets: infraWalletService.wallets,
    currentStoredWallets: infraWalletService.currentStoredWallets,
    currentCosmosWallets: infraWalletService.currentCosmosWallets,
    currentWallets: infraWalletService.currentWallets,
    currentStoredWallet: infraWalletService.currentStoredWallet,
    currentCosmosWallet: infraWalletService.currentCosmosWallet,
    currentWallet: infraWalletService.currentWallet,
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

export default useWalletService;
