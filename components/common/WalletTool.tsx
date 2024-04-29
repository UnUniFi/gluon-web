import { Wallet } from '@mui/icons-material';
import { useState } from 'react';

export function WalletTool() {
  const [connected, setConnected] = useState(false);

  return (
    <>
      {connected && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn gap-1 btn-outline">
            <span
              className="material-symbols-outlined"
              // [ngStyle]="{ color: getColorCode(currentStoredWallet!) }"
            >
              circle
            </span>
            <span style={{ maxWidth: '6rem' }} className="lowercase hidden md:inline">
              {/* {{ truncateAddress(currentStoredWallet?.address) }} */}
            </span>
          </label>
          <div tabIndex={0} className="dropdown-content md:p-2 w-screen md:w-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <span
                    className="material-symbols-outlined"
                    // [ngStyle]="{ color: getColorCode(currentStoredWallet!) }"
                  >
                    circle
                  </span>
                  {/* {{ currentStoredWallet} */}
                  <div className="badge badge-primary">{/* {{ currentStoredWallet?.type }} */}</div>
                </h2>

                <h3 className="mt-4 mx-4 break-all md:whitespace-nowrap font-mono">
                  {/* {{ currentStoredWallet?.address }} */}
                  <button
                    type="button"
                    className="btn btn-circle"
                    // (click)="copyClipboard(currentStoredWallet?.address || '')"
                  >
                    <span className="material-symbols-outlined">content_copy</span>
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
                  <button className="btn gap-1 btn-info w-full md:w-auto md:px-8" routerLink="/">
                    View Balance
                  </button>
                  <button
                    className="btn gap-1 btn-error btn-outline w-full md:w-auto md:px-8"
                    // (click)="onDisconnectWallet($event)"
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
          className="btn btn-info btn-outline w-full md:w-auto md:px-8 gap-2"
          // (click)="onConnectWallet($event)"
        >
          <Wallet />
          <span className="hidden md:inline">Connect wallet</span>
        </button>
      )}
    </>
  );
}
