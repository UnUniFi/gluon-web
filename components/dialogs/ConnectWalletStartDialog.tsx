import { WalletType } from '@/types';
import { ArrowForwardOutlined, CloseOutlined } from '@mui/icons-material';
import kelprLogo from 'assets/wallets/keplr.svg';
import leapLogo from 'assets/wallets/leap.svg';
import favicon from 'assets/favicon.png';
import Image from 'next/image';

export const walletOptions = [
  {
    logo: kelprLogo,
    walletType: WalletType.keplr,
    name: 'Keplr',
  },
  {
    logo: leapLogo,
    walletType: WalletType.leap,
    name: 'Leap',
  },
  {
    logo: favicon,
    walletType: WalletType.ununifi,
    name: 'UnUniFi Portal Wallet (deprecated)',
  },
];

export const ConnectWalletStartDialog = ({ onClickClose, onClickButton }: any) => {
  return (
    <div className="cdk-overlay-container">
      <div
        className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
        onClick={onClickClose}
      />

      <div className="cdk-global-overlay-wrapper">
        <div className="cdk-overlay-pane static">
          <div className="card bg-base-100 shadow-xl overflow-y-auto">
            <div className="flex flex-col items-end md:hidden">
              <button className="mt-2 mr-2" onClick={() => onClickClose()}>
                <CloseOutlined />
              </button>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <Image className="m-6 w-12 h-12" src={favicon} alt="UnUniFi logo" />
                <div className="font-bold text-xl m-3">Connect Your Wallet</div>
                <div className="text-base m-3">Start earning high yield on your crypto</div>
                {walletOptions.map((walletOption, index) => {
                  return (
                    <button
                      key={index}
                      className="btn btn-ghost btn-block"
                      onClick={() => onClickButton(walletOption.walletType)}
                    >
                      <div className="btn-block inline-flex items-center">
                        <Image
                          src={walletOption.logo}
                          alt={`${walletOption.name} logo`}
                          width={24}
                          height={24}
                        />
                        <span className="mx-3">{walletOption.name}</span>
                        <ArrowForwardOutlined />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
