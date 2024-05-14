import { useState } from 'react';
import { createCosmosPublicKeyFromUint8Array } from './utils/key';
import { StoredWallet, WalletType, KeyType } from '@/types';
import cosmosclient from '@cosmos-client/core';
import useConfigService from './useConfigService';

interface Key {
  name: string;
  algo: string;
  pubKey: Uint8Array;
  address: Uint8Array;
  bech32Address: string;
  isNanoLedger: boolean;
}

const useLeapInfraService = () => {
  const configService = useConfigService();
  const [loadingDialog, setLoadingDialog] = useState<string | null>(null);

  const getKey = async (): Promise<Key | undefined> => {
    if (!window.leap) {
      // alert('Please install Leap extension');
      return;
    }
    const chainID = configService.configs[0].chainID;
    await window.leap.enable(chainID);
    const key = await window.leap.getKey(chainID);
    return key;
  };

  const getExternalKey = async (id: string): Promise<Key | undefined> => {
    if (!window.leap) {
      // alert('Please install Leap extension');
      return;
    }
    const externalChains = configService.configs[0].externalChains;
    if (!externalChains) {
      alert('There is no external chain data.');
      return;
    }
    const chainID = externalChains.find((chain) => chain.id === id)?.chainId;
    if (!chainID) {
      alert("This chain doesn't exist");
      return;
    }
    await window.leap.enable(chainID);
    const key = await window.leap.getKey(chainID);
    return key;
  };

  const suggestChain = async (): Promise<void> => {
    if (!window.leap) {
      alert('Please install Leap extension');
      return;
    }
    const config = configService.configs[0];
    const chainInfo = {
      chainId: config.chainID,
      chainName: config.chainName,
      rpc: config.websocketURL.replace('ws', 'http'),
      rest: config.restURL,
      bip44: { coinType: 118 },
      bech32Config: {
        bech32PrefixAccAddr: config.bech32Prefix?.accAddr!,
        bech32PrefixAccPub: config.bech32Prefix?.accPub!,
        bech32PrefixValAddr: config.bech32Prefix?.valAddr!,
        bech32PrefixValPub: config.bech32Prefix?.valPub!,
        bech32PrefixConsAddr: config.bech32Prefix?.consAddr!,
        bech32PrefixConsPub: config.bech32Prefix?.consPub!,
      },
      currencies: [
        {
          coinDenom: 'GUU',
          coinMinimalDenom: 'uguu',
          coinDecimals: 6,
          coinGeckoId: 'ununifi',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'GUU',
          coinMinimalDenom: 'uguu',
          coinDecimals: 6,
          coinGeckoId: 'ununifi',
        },
      ],
      stakeCurrency: {
        coinDenom: 'GUU',
        coinMinimalDenom: 'uguu',
        coinDecimals: 6,
        coinGeckoId: 'ununifi',
      },
      gasPriceStep: {
        low: 0,
        average: 0.01,
        high: 0.03,
      },
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
    };
    await window.leap.experimentalSuggestChain(chainInfo);
  };

  const suggestExternalChain = async (id: string): Promise<void> => {
    if (!window.leap) {
      alert('Please install Leap extension');
      return;
    }
    const externalChains = configService.configs[0].externalChains;
    if (!externalChains) {
      alert('There is no external chain data.');
      return;
    }
    const chainInfo = externalChains.find((chain) => chain.id === id);
    if (!chainInfo) {
      alert("This chain doesn't exist");
      return;
    }
    await window.leap.experimentalSuggestChain(chainInfo);
  };

  const suggestChainAndGetKey = async (): Promise<Key | undefined> => {
    setLoadingDialog('connecting to Leap...');
    try {
      await suggestChain();
    } catch (error) {
      console.error(error);
      return;
    }
    let keyData: Key | undefined;
    try {
      keyData = await getKey();
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDialog(null);
    }
    return keyData;
  };

  const suggestExternalChainAndGetKey = async (id: string): Promise<Key | undefined> => {
    setLoadingDialog('connecting to Leap...');
    try {
      await suggestExternalChain(id);
    } catch (error) {
      console.error(error);
      return;
    }
    let keyData: Key | undefined;
    try {
      keyData = await getExternalKey(id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDialog(null);
    }
    return keyData;
  };

  const convertLeapKeyToStoredWallet = (keyData: Key | undefined): StoredWallet | undefined => {
    if (!keyData) {
      console.error('Fail.');
      return undefined;
    }
    const cosmosPublicKey = createCosmosPublicKeyFromUint8Array(KeyType.secp256k1, keyData.pubKey);
    if (!cosmosPublicKey) {
      console.error('Invalid Pubkey.');
      return;
    }
    const accAddress = cosmosclient.AccAddress.fromPublicKey(cosmosPublicKey);
    const pubkey = Buffer.from(cosmosPublicKey.bytes()).toString('hex');
    const storedWallet: StoredWallet = {
      id: keyData.name,
      type: WalletType.leap,
      key_type: KeyType.secp256k1,
      public_key: pubkey,
      address: accAddress.toString(),
    };
    console.log(storedWallet);
    return storedWallet;
  };

  const signDirect = async (
    signer: string,
    bodyBytes: Uint8Array,
    authInfoBytes: Uint8Array,
    accountNumber: Long
  ): Promise<any | undefined> => {
    if (!window.leap) {
      alert('Please install Leap extension');
      return;
    }
    const chainId = configService.configs[0].chainID;
    await window.leap.enable(chainId);
    const directSignResponse = await window.leap.signDirect(chainId, signer, {
      bodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    });
    const signLeap: any = {
      authInfoBytes: directSignResponse.signed.authInfoBytes,
      bodyBytes: directSignResponse.signed.bodyBytes,
      signature: Uint8Array.from(Buffer.from(directSignResponse.signature.signature, 'base64')),
    };
    return signLeap;
  };

  const connectWallet = async (): Promise<StoredWallet | null | undefined> => {
    const keyData = await suggestChainAndGetKey();
    const storedWallet = convertLeapKeyToStoredWallet(keyData);
    return storedWallet;
  };

  const connectExternalWallet = async (id: string): Promise<Key | undefined> => {
    const keyData = await suggestExternalChainAndGetKey(id);
    return keyData;
  };

  const checkWallet = async (): Promise<StoredWallet | null | undefined> => {
    const keyData = await getKey();
    const storedWallet = convertLeapKeyToStoredWallet(keyData);
    return storedWallet;
  };

  const signTx = async (
    txBuilder: cosmosclient.TxBuilder,
    signerBaseAccount: cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount
  ): Promise<cosmosclient.TxBuilder> => {
    const signDoc = txBuilder.signDoc(signerBaseAccount.account_number);
    const signLeap = await signDirect(
      signerBaseAccount.address,
      signDoc.body_bytes,
      signDoc.auth_info_bytes,
      signDoc.account_number
    );
    if (!signLeap) {
      throw Error('Invalid signature!');
    }
    txBuilder.txRaw.auth_info_bytes = signLeap.authInfoBytes;
    txBuilder.txRaw.body_bytes = signLeap.bodyBytes;
    txBuilder.addSignature(signLeap.signature);
    return txBuilder;
  };

  return {
    connectWallet,
    connectExternalWallet,
    checkWallet,
    signTx,
  };
};

export default useLeapInfraService;
