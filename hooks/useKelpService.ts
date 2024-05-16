import { useState } from 'react';
import cosmosclient from '@cosmos-client/core';
import { Key } from '@keplr-wallet/types';
import { StoredWallet } from '@/types';

import useKeplrInfraService from './useKelpInfraService';
import useConfig from './useConfigService';

export function useKeplrService() {
  const config = useConfig();
  const keplrInfra = useKeplrInfraService(config);

  const connectWallet = async (): Promise<StoredWallet | null | undefined> => {
    return await keplrInfra.connectWallet();
  };

  const connectExternalWallet = async (id: string): Promise<Key | null | undefined> => {
    return await keplrInfra.connectExternalWallet(id);
  };

  const signTx = async (
    txBuilder: cosmosclient.TxBuilder,
    signerBaseAccount: cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount
  ): Promise<cosmosclient.TxBuilder> => {
    return await keplrInfra.signTx(txBuilder, signerBaseAccount);
  };

  const checkWallet = async (): Promise<StoredWallet | null | undefined> => {
    return await keplrInfra.checkWallet();
  };

  return {
    connectWallet,
    connectExternalWallet,
    signTx,
    checkWallet,
  };
}
