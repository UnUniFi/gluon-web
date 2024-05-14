import { WalletType } from '@/types';
import { ArrowForward, ArrowForwardOutlined, CloseOutlined } from '@mui/icons-material';

export const walletOptions = [
  {
    logo: 'assets/wallets/keplr.svg',
    walletType: WalletType.keplr,
    name: 'Keplr',
  },
  {
    logo: 'assets/wallets/leap.svg',
    walletType: WalletType.leap,
    name: 'Leap',
  },
  {
    logo: 'assets/favicon.png',
    walletType: WalletType.ununifi,
    name: 'UnUniFi Portal Wallet (deprecated)',
  },
];

export const ConnectWalletStartDialog = ({ onClickClose, onClickButton }: any) => {
  return (
    <div className="card bg-base-100 shadow-xl overflow-y-auto">
      <div className="flex flex-col items-end md:hidden">
        <button className="mt-2 mr-2" onClick={() => onClickClose()}>
          <CloseOutlined />
        </button>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center">
          <img className="m-6 w-12 h-12" src="assets/favicon.png" alt="UnUniFi logo" />
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
                  <img
                    className="w-6 h-6"
                    src={walletOption.logo}
                    alt={`${walletOption.name} logo`}
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
  );
};
