import cosmosclient from '@cosmos-client/core';
import { PubKey } from '@cosmos-client/core/esm/types';

export enum WalletType {
  ununifi = 'UnUniFi',
  keplr = 'Keplr',
  leap = 'Leap',
  metamask = 'MetaMask',
  walletConnect = 'WalletConnect',
}

// Note: For general purpose? Uint8Array ... Want to use this as possible?
export type Wallet = {
  id: string;
  type: WalletType;
  key_type: KeyType;
  public_key: Uint8Array;
  address: Uint8Array;
};

// Note: For Indexed DB (string) ... This type is necessary for Indexed DB.
export type StoredWallet = {
  id: string;
  type: WalletType;
  key_type: KeyType;
  public_key: string;
  address: string;
};

// Note: cosmos-client/core type ... I guess sdk declared type is more convenient than Uint8Array?
export type CosmosWallet = {
  id: string;
  type: WalletType;
  key_type: KeyType;
  public_key: PubKey;
  address: cosmosclient.AccAddress;
};

export enum KeyType {
  secp256k1 = 'secp256k1',
  ed25519 = 'ed25519',
  sr25519 = 'sr25519',
  ethsecp256k1 = 'ethsecp256k1',
}

export type Key = {
  id: string;
  type: KeyType;
  public_key: string;
};

export type KeyBackupResult = {
  saved: Boolean;
  checked: Boolean;
};
