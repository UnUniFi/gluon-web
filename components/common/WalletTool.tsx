import useWalletService from '@/hooks/useWalletService';
import { Circle, ContentCopyOutlined, Wallet } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as crypto from 'crypto';
import { StoredWallet } from '@/types';
import { useWalletApplication } from '@/hooks/useWalletAppService';
import useWalletInfraService from '@/hooks/useWalletInfraService';

export function WalletTool({ onConnectBtnClicked }) {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  const { currentStoredWallet } = useWalletInfraService();
  const walletAppService = useWalletApplication();

  useEffect(() => {
    if (currentStoredWallet && Object.keys(currentStoredWallet).length != 0) {
      setConnected(true);
    } else setConnected(false);
  }, [currentStoredWallet]);

  const getColorCode = (storedWallet: StoredWallet) => {
    if (storedWallet && storedWallet.id) {
      const hash = crypto
        .createHash('sha256')
        .update(Buffer.from(storedWallet.id))
        .digest()
        .toString('hex');
      return `#${hash.substring(0, 6)}`;
    }
    return `#000000`;
  };

  const truncateAddress = (address?: string) => {
    if (!address) {
      return;
    }
    if (address.length >= 12) {
      var result = address.substring(0, 7) + '...' + address.substring(address.length - 5);
      return result;
    } else {
      return address;
    }
  };

  return (
    <>
      {connected && currentStoredWallet && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn gap-1 btn-outline">
            <Circle style={{ color: getColorCode(currentStoredWallet) }} />
            <span style={{ maxWidth: '6rem' }} className="lowercase hidden md:inline">
              {truncateAddress(currentStoredWallet?.address)}
            </span>
          </label>
          <div tabIndex={0} className="dropdown-content md:p-2 w-screen md:w-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <Circle style={{ color: getColorCode(currentStoredWallet) }} />
                  {currentStoredWallet?.id}
                  <div className="badge badge-primary">{currentStoredWallet?.type}</div>
                </h2>

                <h3 className="mt-4 mx-4 break-all md:whitespace-nowrap font-mono">
                  {currentStoredWallet?.address}
                  <button
                    type="button"
                    className="btn btn-circle"
                    // (click)="copyClipboard(currentStoredWallet?.address || '')"
                  >
                    <ContentCopyOutlined />
                  </button>
                </h3>

                {/* *ngIf="denomBalancesMap" */}
                <div className="stats stats-vertical md:stats-horizontal">
                  <div className="stat">
                    <div className="stat-title">Available</div>
                    <div className="stat-value text-secondary">
                      {/* {{ denomBalancesMap[denom || ''].amount | coinAmount : denom }} */}
                    </div>
                    {/* <div className="stat-desc">{{ denomMetadataMap?.[denom || '']?.display  }}</div> */}
                  </div>
                </div>

                <div className="card-actions justify-end gap-2">
                  <button
                    className="btn gap-1 btn-info w-full md:w-auto md:px-8"
                    onClick={() => router.push('/')}
                  >
                    View Balance
                  </button>
                  <button
                    className="btn gap-1 btn-error btn-outline md:w-auto md:px-8"
                    onClick={() => walletAppService.disconnectWallet()}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!connected && (
        <button
          className="btn btn-info btn-outline md:w-auto md:px-8 gap-2"
          onClick={onConnectBtnClicked}
        >
          <Wallet />
          <span className="hidden md:inline">Connect wallet</span>
        </button>
      )}
    </>
  );
}
