import { useState, useEffect } from 'react';

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
  // Other properties omitted for brevity
};

const useConfigService = (): {
  currentConfig: Config | undefined;
  setCurrentConfig: (configID: string) => void;
} => {
  const [configs] = useState<Config[]>(() => {
    // Load configs from wherever they are defined
    return [];
  });

  const [currentConfig, setCurrentConfigState] = useState<Config | undefined>(() => {
    const configID = localStorage.getItem('configID');
    if (configID) {
      return configs.find((config) => config.id === configID);
    } else {
      // Randomly select a config if none is set
      return configs[Math.floor(Math.random() * configs.length)];
    }
  });

  useEffect(() => {
    localStorage.setItem('configID', currentConfig?.id || '');
  }, [currentConfig]);

  const setCurrentConfig = (configID: string): void => {
    const selectedConfig = configs.find((config) => config.id === configID);
    if (selectedConfig) {
      setCurrentConfigState(selectedConfig);
      localStorage.setItem('configID', configID);
    }
  };

  return { currentConfig, setCurrentConfig };
};

export default useConfigService;
