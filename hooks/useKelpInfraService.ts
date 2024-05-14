import { useState, useEffect } from 'react';
import { createCosmosPublicKeyFromUint8Array } from './utils/key';
import cosmosclient from '@cosmos-client/core';
import { ChainInfo, Key } from '@keplr-wallet/types';

export interface signKeplr {
  authInfoBytes: Uint8Array;
  bodyBytes: Uint8Array;
  signature: Uint8Array;
}

const useKeplrInfraService = (configService: ConfigService) => {
  const [keyData, setKeyData] = useState<Key | undefined>(undefined);
  const [storedWallet, setStoredWallet] = useState<StoredWallet | null | undefined>(undefined);

  useEffect(() => {
    const getKey = async (): Promise<void> => {
      if (!window.keplr) {
        // alert('Please install Keplr extension');
        return;
      }
      const chainID = configService.configs[0].chainID;
      await window.keplr.enable(chainID);

      const key = await window.keplr.getKey(chainID);
      setKeyData(key);
    };

    getKey();
  }, [configService]);

  useEffect(() => {
    const convertKeplrKeyToStoredWallet = (): void => {
      if (!keyData) {
        console.error('Fail.');
        return;
      }
      const cosmosPublicKey = createCosmosPublicKeyFromUint8Array(
        KeyType.secp256k1,
        keyData.pubKey
      );
      if (!cosmosPublicKey) {
        console.error('Invalid Pubkey.');
        return;
      }
      const accAddress = cosmosclient.AccAddress.fromPublicKey(cosmosPublicKey);
      const pubkey = Buffer.from(cosmosPublicKey.bytes()).toString('hex');
      const storedWalletData: StoredWallet = {
        id: keyData.name,
        type: WalletType.keplr,
        key_type: KeyType.secp256k1,
        public_key: pubkey,
        address: accAddress.toString(),
      };
      console.log(storedWalletData);
      setStoredWallet(storedWalletData);
    };

    convertKeplrKeyToStoredWallet();
  }, [keyData]);

  const connectExternalWallet = async (id: string): Promise<Key | undefined> => {
    const externalChains = configService.configs[0].externalChains;
    if (!externalChains) {
      alert('There is no external chain data.');
      return;
    }
    const chainInfo = externalChains.find((chain) => chain.id === id);
    if (!chainInfo) {
      alert("this chain doesn't exist");
      return;
    }
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
    await window.keplr.enable(chainInfo.chainId);

    const key = await window.keplr.getKey(chainInfo.chainId);
    return key;
  };

  return {
    storedWallet,
    connectExternalWallet,
  };
};

export default useKeplrInfraService;
