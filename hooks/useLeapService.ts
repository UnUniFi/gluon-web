import { useState } from 'react';
import cosmosclient from '@cosmos-client/core';
import { Key } from '@keplr-wallet/types';

// Assuming KeplrInfrastructureService is a separate service
import useLeapInfraService from './useLeapInfraService';
import useConfig from './useConfigService';
import { StoredWallet } from '@/types';

export function useLeapService() {
  const config = useConfig();
  const leapInfraService = useLeapInfraService(config);

  const connectWallet = async (): Promise<StoredWallet | null | undefined> => {
    return await leapInfraService.connectWallet();
  };

  const connectExternalWallet = async (id: string): Promise<Key | null | undefined> => {
    return await leapInfraService.connectExternalWallet(id);
  };

  const signTx = async (
    txBuilder: cosmosclient.TxBuilder,
    signerBaseAccount: cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount
  ): Promise<cosmosclient.TxBuilder> => {
    return await leapInfraService.signTx(txBuilder, signerBaseAccount);
  };

  const checkWallet = async (): Promise<StoredWallet | null | undefined> => {
    return await leapInfraService.checkWallet();
  };

  return {
    connectWallet,
    connectExternalWallet,
    signTx,
    checkWallet,
  };
}
