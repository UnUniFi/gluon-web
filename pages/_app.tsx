import './globals.css';
import '@interchain-ui/react/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';

import type { AppProps } from 'next/app';
import { SignerOptions, wallets } from 'cosmos-kit';
import { ChainProvider } from '@cosmos-kit/react';
import { assets, chains } from 'chain-registry';
import { Header } from '@/components/header/Header';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useRouter } from 'next/router';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmology.zone/cosmos-kit/',
              icons: [],
            },
          },
        }}
        // @ts-ignore
        signerOptions={signerOptions}
      >
        <div
          className={`drawer w-screen h-screen ${
            router.pathname.includes('/interest-rate-swap/pools') ||
            router.pathname.includes('/interest-rate-swap/vaults')
              ? 'bg-[#39465d]'
              : 'bg-base-300'
          }`}
          data-theme="irs"
        >
          <input id="drawer-main" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col min-h-full overflow-auto">
            <Header />
            <div className="w-full max-w-screen-xl mx-auto p-8">
              <Component {...pageProps} />
            </div>
          </div>

          <Sidebar />
        </div>
      </ChainProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
