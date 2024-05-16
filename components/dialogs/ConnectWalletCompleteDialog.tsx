import Image from 'next/image';
import * as crypto from 'crypto';
import { Circle } from '@mui/icons-material';
import { StoredWallet } from '@/types';

import favicon from 'assets/favicon.png';

export const ConnectWalletCompleteDialog = ({ onClickClose, onClickButton, data }: any) => {
  const getColorCode = (storedWallet: StoredWallet) => {
    const hash = crypto
      .createHash('sha256')
      .update(Buffer.from(storedWallet.id))
      .digest()
      .toString('hex');
    return `#${hash.substring(0, 6)}`;
  };

  return (
    <div className="cdk-overlay-container">
      <div
        className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
        onClick={onClickClose}
      />

      <div className="cdk-global-overlay-wrapper">
        <div className="cdk-overlay-pane static">
          <div className="card bg-base-100 shadow-xl overflow-y-auto">
            <div className="card-body">
              <div className="flex flex-col items-center">
                <Image className="m-6 w-12 h-12" src={favicon} alt="UnUniFi logo" />
                <div className="font-bold text-xl m-3">Connect Your Wallet</div>
                <div className="text-base m-3">Start earning high yield on your crypto</div>
                <div className="text-base">Connect wallet completed.</div>
                <div className="text-base">Following account is set.</div>
                <ul className="menu bg-base-100 p-2 rounded-box">
                  <li>
                    <a>
                      <Circle style={{ color: getColorCode(data) }} />
                      <div>
                        <div>
                          <span>{data.id}</span>
                        </div>
                        <div>
                          <span className="font-mono">{data.address}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <button className="btn" onClick={() => onClickButton()}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
