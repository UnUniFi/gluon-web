import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import cosmosclient from '@cosmos-client/core';

import { configs } from 'assets/config';
export type Config = {
  id: string;
  name: string;
  rpc: string;
  restURL: string;
  websocketURL: string;
  chainID: string;
  chainName: string;
  bech32Prefix?: {
    accAddr: string;
    accPub: string;
    valAddr: string;
    valPub: string;
    consAddr: string;
    consPub: string;
  };
  minimumGasPrices: {
    denom: string;
    amount: string;
  }[];
  apps: AppNavigation[];
  denomMetadata: cosmosclient.proto.cosmos.bank.v1beta1.IMetadata[];
  strategiesInfo: StrategyInfo[];
  certifiedVaults: string[];
  externalChains: ChainInfo[];
  irsVaultsImages: IRSVaultImage[];
  extension?: {
    faucet?: {
      hasFaucet: boolean;
      faucetURL: string;
      denom: string;
      creditAmount: number;
      maxCredit: number;
    }[];
    monitor?: {
      monitorURL: string;
    };
    nftMint?: {
      enabled: boolean;
      nftClasses: string[];
    };
    developer?: {
      enabled: boolean;
      developerURL: string;
    };
    navigations: {
      name: string;
      link: string;
      icon: string;
    }[];
    messageModules: string[];
  };
};

export type AppNavigation = {
  name: string;
  link: string;
  icon: string;
};

export type StrategyInfo = {
  id: string;
  denom?: string;
  name?: string;
  description?: string;
  gitURL?: string;
  minApy: number;
  maxApy?: number;
  certainty: boolean;
  unbondingTimeSec?: string;
  poolInfo?:
    | {
        type: 'osmosis';
        poolId: string;
        apr?: number;
      }
    | {
        type: 'osmosis_multi';
        pools: { id: string; weight: string }[];
      }
    | {
        type: 'astroport';
      };
};

export type ChainInfo = {
  id: string;
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
  bip44: { coinType: number };
  bech32Config: {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
  };
  currencies: {
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
    coinGeckoId: string;
  }[];
  feeCurrencies: {
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
    coinGeckoId: string;
  }[];
  stakeCurrency: {
    coinDenom: string;
    coinMinimalDenom: string;
    coinDecimals: number;
    coinGeckoId: string;
  };
  gasPriceStep: {
    low: number;
    average: number;
    high: number;
  };
  features?: string[];
};

export type IRSVaultImage = {
  contract: string;
  image: string;
  subImage: string;
};

const configSubject$ = new BehaviorSubject<Config | undefined>(undefined);

const useConfig = () => {
  const [configsState, setConfigsState] = useState<Config[]>(configs);
  const [currentConfig, setCurrentConfigState] = useState<Config | undefined>(undefined);

  useEffect(() => {
    const configID = localStorage.getItem('configID');
    const selectedConfig = configsState.find((config) => config.id === configID);
    if (configID && selectedConfig) {
      configSubject$.next(selectedConfig);
    } else {
      const randomConfig = configsState[Math.floor(Math.random() * configsState.length)];
      configSubject$.next(randomConfig);
    }

    const subscription = configSubject$.subscribe((config) => {
      setCurrentConfigState(config);
    });

    return () => subscription.unsubscribe();
  }, [configsState]);

  const setCurrentConfig = async (configID: string) => {
    const selectedConfig = configsState.find((config) => config.id === configID);
    configSubject$.next(selectedConfig);
    localStorage.setItem('configID', configID);
    window.location.reload();
  };

  return {
    configs: configsState,
    currentConfig,
    setCurrentConfig,
  };
};

export default useConfig;
