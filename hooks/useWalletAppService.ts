import { useState, useCallback } from 'react';
import useWalletService from './useWalletService';
import { useKeplrService } from './useKelpService';
import { useLeapService } from './useLeapService';
import { WalletType } from '@/types';

export const useWalletApplication = () => {
  const walletService = useWalletService();
  const keplrService = useKeplrService();
  const leapService = useLeapService();

  const disconnectWallet = async () => {
    await walletService.deleteStoredWallet();
    await walletService.load();
    window.location.reload();
  };

  // const connectWalletDialog = useCallback(async () => {
  //   const selectedWalletType = await dialog.open(ConnectWalletStartDialogComponent);

  //   if (!selectedWalletType) return;

  //   if (selectedWalletType === WalletType.ununifi) {
  //     const selectOrImportOrCreate = await dialog.open(UnunifiSelectCreateImportDialogComponent);

  //     if (!selectOrImportOrCreate) return;

  //     if (selectOrImportOrCreate === 'select') {
  //       const isSuccessSelect = await ununifiSelectWallet();
  //       if (isSuccessSelect) window.location.reload();
  //       return;
  //     }

  //     if (selectOrImportOrCreate === 'import') {
  //       const isSuccessImport = await ununifiImportWallet();
  //       if (isSuccessImport) window.location.reload();
  //       return;
  //     }

  //     if (selectOrImportOrCreate === 'importWithPrivateKey') {
  //       const isSuccessImportWithPrivateKey = await ununifiImportWalletWithPrivateKey();
  //       if (isSuccessImportWithPrivateKey) window.location.reload();
  //       return;
  //     }

  //     if (selectOrImportOrCreate === 'create') {
  //       const isSuccessCreate = await ununifiCreateWallet();
  //       if (isSuccessCreate) window.location.reload();
  //       return;
  //     }
  //   }

  //   const isSuccessConnected = await (async () => {
  //     switch (selectedWalletType) {
  //       case WalletType.keplr:
  //         return await connectWallet(keplrService);
  //       case WalletType.leap:
  //         return await connectWallet(leapService);
  //       default:
  //         return false;
  //     }
  //   })();

  //   if (isSuccessConnected) window.location.reload();
  // }, [dialog, keplrService, leapService]);

  const connectWallet = async (serviceType: WalletType) => {
    const service = serviceType === WalletType.keplr ? keplrService : leapService;
    const connectedStoredWallet = await service.connectWallet();
    if (!connectedStoredWallet) return false;

    await walletService.setCurrentStoredWallet(connectedStoredWallet);
    await walletService.load();
    window.location.reload();
    return true;
  };

  const ununifiSelectWallet = async () => {
    // const selectedStoredWallet = await dialog.open(UnunifiSelectWalletDialogComponent);
    const selectedStoredWallet = null;
    if (!selectedStoredWallet) return false;

    await walletService.setCurrentStoredWallet(selectedStoredWallet);
    return true;
  };

  const ununifiImportWallet = async () => {
    // const privateWallet = await dialog.open(UnunifiImportWalletWithMnemonicFormDialogComponent);
    const privateWallet = null;
    if (!privateWallet) return false;

    const storedWallet = {
      id: privateWallet.id,
      type: privateWallet.type,
      key_type: privateWallet.key_type,
      public_key: privateWallet.public_key,
      address: privateWallet.address,
    };
    await walletService.setStoredWallet(storedWallet);
    await walletService.setCurrentStoredWallet(storedWallet);
    return true;
  };

  const ununifiImportWalletWithPrivateKey = async () => {
    // const privateWallet = await dialog.open(UnunifiImportWalletWithPrivateKeyFormDialogComponent);
    const privateWallet: any = null;
    if (!privateWallet) return false;

    const storedWallet = {
      id: privateWallet.id,
      type: privateWallet.type,
      key_type: privateWallet.key_type,
      public_key: privateWallet.public_key,
      address: privateWallet.address,
    };
    await walletService.setStoredWallet(storedWallet);
    await walletService.setCurrentStoredWallet(storedWallet);
    return true;
  };

  const ununifiCreateWallet = async () => {
    // const privateWallet = await dialog.open(UnunifiCreateWalletFormDialogComponent);
    const privateWallet: any = null;
    if (!privateWallet) return false;

    const storedWallet = {
      id: privateWallet.id,
      type: privateWallet.type,
      key_type: privateWallet.key_type,
      public_key: privateWallet.public_key,
      address: privateWallet.address,
    };
    await walletService.setStoredWallet(storedWallet);
    await walletService.setCurrentStoredWallet(storedWallet);
    return true;
  };

  return {
    disconnectWallet,
    connectWallet,
    ununifiSelectWallet,
    ununifiImportWallet,
    ununifiImportWalletWithPrivateKey,
    ununifiCreateWallet,
  };
};
