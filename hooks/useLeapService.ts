import { useState } from 'react';
import cosmosclient from '@cosmos-client/core';
import { Key } from '@keplr-wallet/types';

// Assuming KeplrInfrastructureService is a separate service
import useLeapInfraService from './useLeapInfraService';

export function useKeplrService() {
  const [leapInfraService] = useLeapInfraService();
  const [storedWallet, setStoredWallet] = useState(null);

  const connectWallet = async () => {
    try {
      const wallet = await leapInfraService.connectWallet();
      setStoredWallet(wallet);
      return wallet;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return null;
    }
  };

  const connectExternalWallet = async (id) => {
    try {
      const key = await leapInfraService.connectExternalWallet(id);
      return key;
    } catch (error) {
      console.error('Error connecting external wallet:', error);
      return null;
    }
  };

  const signTx = async (txBuilder, signerBaseAccount) => {
    try {
      const signedTx = await leapInfraService.signTx(txBuilder, signerBaseAccount);
      return signedTx;
    } catch (error) {
      console.error('Error signing transaction:', error);
      return null;
    }
  };

  const checkWallet = async () => {
    try {
      const wallet = await leapInfraService.checkWallet();
      setStoredWallet(wallet);
      return wallet;
    } catch (error) {
      console.error('Error checking wallet:', error);
      return null;
    }
  };

  return {
    storedWallet,
    connectWallet,
    connectExternalWallet,
    signTx,
    checkWallet,
  };
}
