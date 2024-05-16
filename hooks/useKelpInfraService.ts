import { useState, useEffect } from 'react';
import { createCosmosPublicKeyFromUint8Array } from './utils/key';
import cosmosclient from '@cosmos-client/core';
import { ChainInfo, Key } from '@keplr-wallet/types';
import { KeyType, WalletType, StoredWallet } from '@/types';

export interface signKeplr {
  authInfoBytes: Uint8Array;
  bodyBytes: Uint8Array;
  signature: Uint8Array;
}

const useKeplrInfraService = (configService: ConfigService) => {
  const getKey = async (): Promise<Key | undefined> => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
    const chainID = configService.configs[0].chainID;
    await window.keplr.enable(chainID);

    const key = await window.keplr.getKey(chainID);
    return key;
  };

  const getExternalKey = async (id: string): Promise<Key | undefined> => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
    const externalChains = configService.configs[0].externalChains;
    if (!externalChains) {
      alert('There is no external chain data.');
      return;
    }
    const chainID = externalChains.find((chain) => chain.id === id)?.chainId;
    if (!chainID) {
      alert("this chain doesn't exist");
      return;
    }
    await window.keplr.enable(chainID);

    const key = await window.keplr.getKey(chainID);
    return key;
  };

  const suggestChain = async (): Promise<void> => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
    const chainId = configService.configs[0].chainID;
    const chainName = configService.configs[0].chainName;
    const rpc = configService.configs[0].websocketURL.replace('ws', 'http');
    const rest = configService.configs[0].restURL;
    const bip44 = { coinType: 118 };
    const bech32Config = {
      bech32PrefixAccAddr: configService.configs[0].bech32Prefix?.accAddr!,
      bech32PrefixAccPub: configService.configs[0].bech32Prefix?.accPub!,
      bech32PrefixValAddr: configService.configs[0].bech32Prefix?.valAddr!,
      bech32PrefixValPub: configService.configs[0].bech32Prefix?.valPub!,
      bech32PrefixConsAddr: configService.configs[0].bech32Prefix?.consAddr!,
      bech32PrefixConsPub: configService.configs[0].bech32Prefix?.consPub!,
    };
    const currencies = [
      {
        coinDenom: 'GUU',
        coinMinimalDenom: 'uguu',
        coinDecimals: 6,
        coinGeckoId: 'ununifi',
      },
    ];
    const feeCurrencies = [
      {
        coinDenom: 'GUU',
        coinMinimalDenom: 'uguu',
        coinDecimals: 6,
        coinGeckoId: 'ununifi',
      },
    ];
    const stakeCurrency = {
      coinDenom: 'GUU',
      coinMinimalDenom: 'uguu',
      coinDecimals: 6,
      coinGeckoId: 'ununifi',
    };
    const gasPriceStep = {
      low: 0,
      average: 0.01,
      high: 0.03,
    };
    const chainInfo: ChainInfo = {
      chainId,
      chainName,
      rpc,
      rest,
      bip44,
      bech32Config,
      currencies,
      feeCurrencies,
      stakeCurrency,
      gasPriceStep,
    };
    await window.keplr.experimentalSuggestChain(chainInfo);
  };

  const suggestExternalChain = async (id: string): Promise<void> => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
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
    await window.keplr.experimentalSuggestChain(chainInfo);
  };

  const suggestChainAndGetKey = async (): Promise<Key | undefined> => {
    try {
      await suggestChain();
    } catch (error) {
      console.error(error);
      // const errorMessage = `Keplr Connection failed: ${(error as Error).toString()}`;
      // this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      // dialogRefSuggestChainAndGetKey.close();
      return;
    }
    let keyData: Key | undefined;
    try {
      keyData = await getKey();
    } catch (error) {
      console.error(error);
      // const errorMessage = `Keplr Connection failed: ${(error as Error).toString()}`;
      // this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
    } finally {
      // dialogRefSuggestChainAndGetKey.close();
    }
    return keyData;
  };

  const suggestExternalChainAndGetKey = async (id: string): Promise<Key | undefined> => {
    try {
      await suggestExternalChain(id);
    } catch (error) {
      console.error(error);
      // const errorMessage = `Keplr Connection failed: ${(error as Error).toString()}`;
      // this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      // dialogRefSuggestChainAndGetKey.close();
      return;
    }
    let keyData: Key | undefined;
    try {
      keyData = await getExternalKey(id);
    } catch (error) {
      console.error(error);
      // const errorMessage = `Keplr Connection failed: ${(error as Error).toString()}`;
      // this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
    } finally {
      // dialogRefSuggestChainAndGetKey.close();
    }
    return keyData;
  };

  const convertKeplrKeyToStoredWallet = (keyData: Key | undefined): StoredWallet | undefined => {
    if (!keyData) {
      console.error('Fail.');
      return;
    }
    const cosmosPublicKey = createCosmosPublicKeyFromUint8Array(KeyType.secp256k1, keyData.pubKey);
    if (!cosmosPublicKey) {
      console.error('Invalid Pubkey.');
      return;
    }
    // const accAddress = cosmosclient.AccAddress.fromPublicKey(cosmosPublicKey);

    const pubkey = Buffer.from(cosmosPublicKey.bytes()).toString('hex');
    const storedWalletData: StoredWallet = {
      id: keyData.name,
      type: WalletType.keplr,
      key_type: KeyType.secp256k1,
      public_key: pubkey,
      address: keyData.bech32Address,
    };
    return storedWalletData;
  };

  const signDirect = async (
    signer: string,
    bodyBytes: Uint8Array,
    authInfoBytes: Uint8Array,
    accountNumber: Long
  ): Promise<signKeplr | undefined> => {
    if (!window.keplr) {
      alert('Please install Keplr extension');
      return;
    }
    const chainId = configService.configs[0].chainID;
    await window.keplr.enable(chainId);
    const directSignResponse = await window.keplr.signDirect(chainId, signer, {
      bodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    });
    const signKeplr: signKeplr = {
      authInfoBytes: directSignResponse.signed.authInfoBytes,
      bodyBytes: directSignResponse.signed.bodyBytes,
      signature: Uint8Array.from(Buffer.from(directSignResponse.signature.signature, 'base64')),
    };
    return signKeplr;
  };

  const connectWallet = async (): Promise<StoredWallet | null | undefined> => {
    const keyData = await suggestChainAndGetKey();
    const storedWallet = convertKeplrKeyToStoredWallet(keyData);
    return storedWallet;
  };

  const checkWallet = async (): Promise<StoredWallet | null | undefined> => {
    const keyData = await getKey();
    const storedWallet = convertKeplrKeyToStoredWallet(keyData);
    return storedWallet;
  };

  const connectExternalWallet = async (id: string): Promise<Key | undefined> => {
    const keyData = await suggestExternalChainAndGetKey(id);
    return keyData;
  };

  const signTx = async (
    txBuilder: cosmosclient.TxBuilder,
    signerBaseAccount: cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount
  ): Promise<cosmosclient.TxBuilder> => {
    const signDoc = txBuilder.signDoc(signerBaseAccount.account_number);
    const signKeplr = await signDirect(
      signerBaseAccount.address,
      signDoc.body_bytes,
      signDoc.auth_info_bytes,
      signDoc.account_number
    );
    if (!signKeplr) {
      throw Error('Invalid signature!');
    }
    txBuilder.txRaw.auth_info_bytes = signKeplr.authInfoBytes;
    txBuilder.txRaw.body_bytes = signKeplr.bodyBytes;
    txBuilder.addSignature(signKeplr.signature);

    return txBuilder;
  };

  return {
    signTx,
    checkWallet,
    connectWallet,
    connectExternalWallet,
  };
};

export default useKeplrInfraService;
