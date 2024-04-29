import { Cloud, KeyboardArrowDown } from '@mui/icons-material';

export function NodeTool() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn gap-2 btn-outline">
        <span className="material-symbols-outlined">
          <Cloud />
        </span>
        {/* <span className="hidden xl:block">{{ selectedConfig?.name || selectedConfig?.id }}</span> */}
        <span className="material-symbols-outlined hidden sm:block">
          <KeyboardArrowDown />
        </span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu sm:p-2 shadow bg-base-100 text-base-content rounded-box w-52"
      >
        {configs.map((it, index) => {
          return (
            <li key={index}>
              <a>{it.name || it.id}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const configs = [
  {
    id: 'gluon-beta.cauchye.net',
    name: 'Local-test',
    restURL: 'https://gluon-beta.cauchye.net:1318',
    websocketURL: 'wss://gluon-beta.cauchye.net:26658',
    chainID: 'test',
    chainName: 'UnUniFi (local-test)',
    bech32Prefix: {
      accAddr: 'ununifi',
      accPub: 'ununifipub',
      valAddr: 'ununifivaloper',
      valPub: 'ununifivaloperpub',
      consAddr: 'ununifivalcons',
      consPub: 'ununifivalconspub',
    },
    minimumGasPrices: [
      {
        denom: 'uguu',
        amount: 0.015,
      },
    ],
    apps: [
      {
        name: 'Utilities',
        link: '/',
        icon: 'assistant',
      },
      {
        name: 'NFT Backed Loan',
        link: '/nft-backed-loan',
        icon: 'loyalty',
      },
      {
        name: 'Yield Aggregator',
        link: '/yield-aggregator/vaults',
        icon: 'pie_chart',
      },
      {
        name: 'Interest Rate Swap',
        link: '/interest-rate-swap/simple-vaults',
        icon: 'table_chart',
      },
      {
        name: 'Derivatives',
        link: '/derivatives/perpetual-futures',
        icon: 'show_chart',
      },
    ],
    denomMetadata: [
      {
        description: 'The governance token of UnUniFi protocol.',
        denom_units: [
          {
            denom: 'uguu',
            exponent: 0,
          },
          {
            denom: 'guu',
            exponent: 6,
          },
        ],
        base: 'uguu',
        name: 'UnUniFi',
        display: 'GUU',
        symbol: 'GUU',
      },
      {
        description: 'The first cryptocurrency invented in 2008',
        denom_units: [
          {
            denom: 'ubtc',
            exponent: 0,
            aliases: [],
          },
          {
            denom: 'btc',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'ubtc',
        display: 'BTC',
        name: 'Bitcoin',
        symbol: 'BTC',
      },
      {
        description: 'Stablecoin pegged to the ATOM',
        denom_units: [
          {
            denom: 'ustatom',
            exponent: 0,
            aliases: [],
          },
          {
            denom: 'statom',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'ustatom',
        display: 'stATOM',
        name: 'stATOM',
        symbol: 'stATOM',
      },
      {
        description: 'Stablecoin pegged to the USD',
        denom_units: [
          {
            denom: 'uusdc',
            exponent: 0,
            aliases: [],
          },
          {
            denom: 'uusdc',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'uusdc',
        display: 'USDC',
        name: 'USD Coin',
        symbol: 'USDC',
      },
      {
        description: 'Derivatives Liquidity Provider Token',
        denom_units: [
          {
            denom: 'udlp',
            exponent: 0,
            aliases: [],
          },
          {
            denom: 'dlp',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'udlp',
        name: 'Liquidity Provider',
        display: 'DLP',
        symbol: 'DLP',
      },
      {
        description: 'ATOM from Osmosis',
        denom_units: [
          {
            denom: 'ibc/ACBD2CEFAC2CC3ED6EEAF67BBDFDF168F1E4EDA159DFE1CA6B4A57A9CAF4DA11',
            exponent: 0,
            aliases: [],
          },
        ],
        base: 'ibc/ACBD2CEFAC2CC3ED6EEAF67BBDFDF168F1E4EDA159DFE1CA6B4A57A9CAF4DA11',
        name: 'ATOM from Osmosis',
        display: 'ATOM.osmosis',
        symbol: 'ATOM',
      },
      {
        description: 'OSMO from Osmosis (deprecated)',
        denom_units: [
          {
            denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
            exponent: 0,
            aliases: [],
          },
        ],
        base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
        name: 'OSMO (deprecated)',
        display: 'OSMO (deprecated)',
        symbol: 'OSMO',
      },
      {
        description: 'OSMO from Osmosis',
        denom_units: [
          {
            denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
            exponent: 0,
            aliases: [],
          },
        ],
        base: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
        name: 'OSMO',
        display: 'OSMO',
        symbol: 'OSMO',
      },
      {
        description: 'Yield Aggregator Vault #0Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/0',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/0',
        display: 'YA-Vault-0',
        name: 'YA Vault #0',
        symbol: 'YA-VAULT-0',
      },
      {
        description: 'IRS PT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/pt',
        display: 'PT #0',
        name: 'PT #0',
        symbol: 'IRS-PT-0',
      },
      {
        description: 'IRS YT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/yt',
        display: 'YT #0',
        name: 'YT #0',
        symbol: 'IRS-YT-0',
      },
      {
        description: 'IRS LP #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/ls',
        display: 'LP #0',
        name: 'LP #0',
        symbol: 'IRS-LP-0',
      },
      {
        description: 'Yield Aggregator Vault #1Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/1',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/1',
        display: 'YA-Vault-1',
        name: 'YA Vault #1',
        symbol: 'YA-VAULT-1',
      },
      {
        description: 'IRS PT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/pt',
        display: 'PT #1',
        name: 'PT #1',
        symbol: 'IRS-PT-1',
      },
      {
        description: 'IRS YT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/yt',
        display: 'YT #1',
        name: 'YT #1',
        symbol: 'IRS-YT-1',
      },
      {
        description: 'IRS LP #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/ls',
        display: 'LP #1',
        name: 'LP #1',
        symbol: 'IRS-LP-1',
      },
      {
        description: 'Yield Aggregator Vault #2Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/2',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/2',
        display: 'YA-Vault-2',
        name: 'YA Vault #2',
        symbol: 'YA-VAULT-2',
      },
      {
        description: 'IRS PT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/pt',
        display: 'PT #2',
        name: 'PT #2',
        symbol: 'IRS-PT-2',
      },
      {
        description: 'IRS YT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/yt',
        display: 'YT #2',
        name: 'YT #2',
        symbol: 'IRS-YT-2',
      },
      {
        description: 'IRS LP #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/ls',
        display: 'LP #2',
        name: 'LP #2',
        symbol: 'IRS-LP-2',
      },
      {
        description: 'Yield Aggregator Vault #3Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/3',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/3',
        display: 'YA-Vault-3',
        name: 'YA Vault #3',
        symbol: 'YA-VAULT-3',
      },
      {
        description: 'IRS PT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/pt',
        display: 'PT #3',
        name: 'PT #3',
        symbol: 'IRS-PT-3',
      },
      {
        description: 'IRS YT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/yt',
        display: 'YT #3',
        name: 'YT #3',
        symbol: 'IRS-YT-3',
      },
      {
        description: 'IRS LP #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/ls',
        display: 'LP #3',
        name: 'LP #3',
        symbol: 'IRS-LP-3',
      },
      {
        description: 'Yield Aggregator Vault #4Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/4',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/4',
        display: 'YA-Vault-4',
        name: 'YA Vault #4',
        symbol: 'YA-VAULT-4',
      },
      {
        description: 'IRS PT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/pt',
        display: 'PT #4',
        name: 'PT #4',
        symbol: 'IRS-PT-4',
      },
      {
        description: 'IRS YT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/yt',
        display: 'YT #4',
        name: 'YT #4',
        symbol: 'IRS-YT-4',
      },
      {
        description: 'IRS LP #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/ls',
        display: 'LP #4',
        name: 'LP #4',
        symbol: 'IRS-LP-4',
      },
      {
        description: 'Yield Aggregator Vault #5Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/5',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/5',
        display: 'YA-Vault-5',
        name: 'YA Vault #5',
        symbol: 'YA-VAULT-5',
      },
      {
        description: 'IRS PT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/pt',
        display: 'PT #5',
        name: 'PT #5',
        symbol: 'IRS-PT-5',
      },
      {
        description: 'IRS YT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/yt',
        display: 'YT #5',
        name: 'YT #5',
        symbol: 'IRS-YT-5',
      },
      {
        description: 'IRS LP #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/ls',
        display: 'LP #5',
        name: 'LP #5',
        symbol: 'IRS-LP-5',
      },
      {
        description: 'Yield Aggregator Vault #6Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/6',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/6',
        display: 'YA-Vault-6',
        name: 'YA Vault #6',
        symbol: 'YA-VAULT-6',
      },
      {
        description: 'IRS PT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/pt',
        display: 'PT #6',
        name: 'PT #6',
        symbol: 'IRS-PT-6',
      },
      {
        description: 'IRS YT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/yt',
        display: 'YT #6',
        name: 'YT #6',
        symbol: 'IRS-YT-6',
      },
      {
        description: 'IRS LP #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/ls',
        display: 'LP #6',
        name: 'LP #6',
        symbol: 'IRS-LP-6',
      },
      {
        description: 'Yield Aggregator Vault #7Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/7',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/7',
        display: 'YA-Vault-7',
        name: 'YA Vault #7',
        symbol: 'YA-VAULT-7',
      },
      {
        description: 'IRS PT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/pt',
        display: 'PT #7',
        name: 'PT #7',
        symbol: 'IRS-PT-7',
      },
      {
        description: 'IRS YT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/yt',
        display: 'YT #7',
        name: 'YT #7',
        symbol: 'IRS-YT-7',
      },
      {
        description: 'IRS LP #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/ls',
        display: 'LP #7',
        name: 'LP #7',
        symbol: 'IRS-LP-7',
      },
      {
        description: 'Yield Aggregator Vault #8Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/8',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/8',
        display: 'YA-Vault-8',
        name: 'YA Vault #8',
        symbol: 'YA-VAULT-8',
      },
      {
        description: 'IRS PT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/pt',
        display: 'PT #8',
        name: 'PT #8',
        symbol: 'IRS-PT-8',
      },
      {
        description: 'IRS YT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/yt',
        display: 'YT #8',
        name: 'YT #8',
        symbol: 'IRS-YT-8',
      },
      {
        description: 'IRS LP #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/ls',
        display: 'LP #8',
        name: 'LP #8',
        symbol: 'IRS-LP-8',
      },
      {
        description: 'Yield Aggregator Vault #9Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/9',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/9',
        display: 'YA-Vault-9',
        name: 'YA Vault #9',
        symbol: 'YA-VAULT-9',
      },
      {
        description: 'IRS PT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/pt',
        display: 'PT #9',
        name: 'PT #9',
        symbol: 'IRS-PT-9',
      },
      {
        description: 'IRS YT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/yt',
        display: 'YT #9',
        name: 'YT #9',
        symbol: 'IRS-YT-9',
      },
      {
        description: 'IRS LP #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/ls',
        display: 'LP #9',
        name: 'LP #9',
        symbol: 'IRS-LP-9',
      },
      {
        description: 'Yield Aggregator Vault #10Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/10',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/10',
        display: 'YA-Vault-10',
        name: 'YA Vault #10',
        symbol: 'YA-VAULT-10',
      },
      {
        description: 'IRS PT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/pt',
        display: 'PT #10',
        name: 'PT #10',
        symbol: 'IRS-PT-10',
      },
      {
        description: 'IRS YT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/yt',
        display: 'YT #10',
        name: 'YT #10',
        symbol: 'IRS-YT-10',
      },
      {
        description: 'IRS LP #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/ls',
        display: 'LP #10',
        name: 'LP #10',
        symbol: 'IRS-LP-10',
      },
      {
        description: 'Yield Aggregator Vault #11Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/11',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/11',
        display: 'YA-Vault-11',
        name: 'YA Vault #11',
        symbol: 'YA-VAULT-11',
      },
      {
        description: 'IRS PT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/pt',
        display: 'PT #11',
        name: 'PT #11',
        symbol: 'IRS-PT-11',
      },
      {
        description: 'IRS YT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/yt',
        display: 'YT #11',
        name: 'YT #11',
        symbol: 'IRS-YT-11',
      },
      {
        description: 'IRS LP #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/ls',
        display: 'LP #11',
        name: 'LP #11',
        symbol: 'IRS-LP-11',
      },
      {
        description: 'Yield Aggregator Vault #12Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/12',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/12',
        display: 'YA-Vault-12',
        name: 'YA Vault #12',
        symbol: 'YA-VAULT-12',
      },
      {
        description: 'IRS PT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/pt',
        display: 'PT #12',
        name: 'PT #12',
        symbol: 'IRS-PT-12',
      },
      {
        description: 'IRS YT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/yt',
        display: 'YT #12',
        name: 'YT #12',
        symbol: 'IRS-YT-12',
      },
      {
        description: 'IRS LP #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/ls',
        display: 'LP #12',
        name: 'LP #12',
        symbol: 'IRS-LP-12',
      },
      {
        description: 'Yield Aggregator Vault #13Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/13',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/13',
        display: 'YA-Vault-13',
        name: 'YA Vault #13',
        symbol: 'YA-VAULT-13',
      },
      {
        description: 'IRS PT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/pt',
        display: 'PT #13',
        name: 'PT #13',
        symbol: 'IRS-PT-13',
      },
      {
        description: 'IRS YT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/yt',
        display: 'YT #13',
        name: 'YT #13',
        symbol: 'IRS-YT-13',
      },
      {
        description: 'IRS LP #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/ls',
        display: 'LP #13',
        name: 'LP #13',
        symbol: 'IRS-LP-13',
      },
      {
        description: 'Yield Aggregator Vault #14Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/14',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/14',
        display: 'YA-Vault-14',
        name: 'YA Vault #14',
        symbol: 'YA-VAULT-14',
      },
      {
        description: 'IRS PT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/pt',
        display: 'PT #14',
        name: 'PT #14',
        symbol: 'IRS-PT-14',
      },
      {
        description: 'IRS YT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/yt',
        display: 'YT #14',
        name: 'YT #14',
        symbol: 'IRS-YT-14',
      },
      {
        description: 'IRS LP #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/ls',
        display: 'LP #14',
        name: 'LP #14',
        symbol: 'IRS-LP-14',
      },
      {
        description: 'Yield Aggregator Vault #15Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/15',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/15',
        display: 'YA-Vault-15',
        name: 'YA Vault #15',
        symbol: 'YA-VAULT-15',
      },
      {
        description: 'IRS PT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/pt',
        display: 'PT #15',
        name: 'PT #15',
        symbol: 'IRS-PT-15',
      },
      {
        description: 'IRS YT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/yt',
        display: 'YT #15',
        name: 'YT #15',
        symbol: 'IRS-YT-15',
      },
      {
        description: 'IRS LP #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/ls',
        display: 'LP #15',
        name: 'LP #15',
        symbol: 'IRS-LP-15',
      },
      {
        description: 'Yield Aggregator Vault #16Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/16',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/16',
        display: 'YA-Vault-16',
        name: 'YA Vault #16',
        symbol: 'YA-VAULT-16',
      },
      {
        description: 'IRS PT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/pt',
        display: 'PT #16',
        name: 'PT #16',
        symbol: 'IRS-PT-16',
      },
      {
        description: 'IRS YT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/yt',
        display: 'YT #16',
        name: 'YT #16',
        symbol: 'IRS-YT-16',
      },
      {
        description: 'IRS LP #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/ls',
        display: 'LP #16',
        name: 'LP #16',
        symbol: 'IRS-LP-16',
      },
      {
        description: 'Yield Aggregator Vault #17Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/17',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/17',
        display: 'YA-Vault-17',
        name: 'YA Vault #17',
        symbol: 'YA-VAULT-17',
      },
      {
        description: 'IRS PT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/pt',
        display: 'PT #17',
        name: 'PT #17',
        symbol: 'IRS-PT-17',
      },
      {
        description: 'IRS YT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/yt',
        display: 'YT #17',
        name: 'YT #17',
        symbol: 'IRS-YT-17',
      },
      {
        description: 'IRS LP #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/ls',
        display: 'LP #17',
        name: 'LP #17',
        symbol: 'IRS-LP-17',
      },
      {
        description: 'Yield Aggregator Vault #18Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/18',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/18',
        display: 'YA-Vault-18',
        name: 'YA Vault #18',
        symbol: 'YA-VAULT-18',
      },
      {
        description: 'IRS PT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/pt',
        display: 'PT #18',
        name: 'PT #18',
        symbol: 'IRS-PT-18',
      },
      {
        description: 'IRS YT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/yt',
        display: 'YT #18',
        name: 'YT #18',
        symbol: 'IRS-YT-18',
      },
      {
        description: 'IRS LP #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/ls',
        display: 'LP #18',
        name: 'LP #18',
        symbol: 'IRS-LP-18',
      },
      {
        description: 'Yield Aggregator Vault #19Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/19',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/19',
        display: 'YA-Vault-19',
        name: 'YA Vault #19',
        symbol: 'YA-VAULT-19',
      },
      {
        description: 'IRS PT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/pt',
        display: 'PT #19',
        name: 'PT #19',
        symbol: 'IRS-PT-19',
      },
      {
        description: 'IRS YT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/yt',
        display: 'YT #19',
        name: 'YT #19',
        symbol: 'IRS-YT-19',
      },
      {
        description: 'IRS LP #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/ls',
        display: 'LP #19',
        name: 'LP #19',
        symbol: 'IRS-LP-19',
      },
      {
        description: 'Yield Aggregator Vault #20Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/20',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/20',
        display: 'YA-Vault-20',
        name: 'YA Vault #20',
        symbol: 'YA-VAULT-20',
      },
      {
        description: 'IRS PT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/pt',
        display: 'PT #20',
        name: 'PT #20',
        symbol: 'IRS-PT-20',
      },
      {
        description: 'IRS YT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/yt',
        display: 'YT #20',
        name: 'YT #20',
        symbol: 'IRS-YT-20',
      },
      {
        description: 'IRS LP #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/ls',
        display: 'LP #20',
        name: 'LP #20',
        symbol: 'IRS-LP-20',
      },
      {
        description: 'Yield Aggregator Vault #21Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/21',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/21',
        display: 'YA-Vault-21',
        name: 'YA Vault #21',
        symbol: 'YA-VAULT-21',
      },
      {
        description: 'IRS PT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/pt',
        display: 'PT #21',
        name: 'PT #21',
        symbol: 'IRS-PT-21',
      },
      {
        description: 'IRS YT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/yt',
        display: 'YT #21',
        name: 'YT #21',
        symbol: 'IRS-YT-21',
      },
      {
        description: 'IRS LP #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/ls',
        display: 'LP #21',
        name: 'LP #21',
        symbol: 'IRS-LP-21',
      },
      {
        description: 'Yield Aggregator Vault #22Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/22',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/22',
        display: 'YA-Vault-22',
        name: 'YA Vault #22',
        symbol: 'YA-VAULT-22',
      },
      {
        description: 'IRS PT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/pt',
        display: 'PT #22',
        name: 'PT #22',
        symbol: 'IRS-PT-22',
      },
      {
        description: 'IRS YT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/yt',
        display: 'YT #22',
        name: 'YT #22',
        symbol: 'IRS-YT-22',
      },
      {
        description: 'IRS LP #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/ls',
        display: 'LP #22',
        name: 'LP #22',
        symbol: 'IRS-LP-22',
      },
      {
        description: 'Yield Aggregator Vault #23Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/23',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/23',
        display: 'YA-Vault-23',
        name: 'YA Vault #23',
        symbol: 'YA-VAULT-23',
      },
      {
        description: 'IRS PT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/pt',
        display: 'PT #23',
        name: 'PT #23',
        symbol: 'IRS-PT-23',
      },
      {
        description: 'IRS YT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/yt',
        display: 'YT #23',
        name: 'YT #23',
        symbol: 'IRS-YT-23',
      },
      {
        description: 'IRS LP #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/ls',
        display: 'LP #23',
        name: 'LP #23',
        symbol: 'IRS-LP-23',
      },
      {
        description: 'Yield Aggregator Vault #24Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/24',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/24',
        display: 'YA-Vault-24',
        name: 'YA Vault #24',
        symbol: 'YA-VAULT-24',
      },
      {
        description: 'IRS PT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/pt',
        display: 'PT #24',
        name: 'PT #24',
        symbol: 'IRS-PT-24',
      },
      {
        description: 'IRS YT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/yt',
        display: 'YT #24',
        name: 'YT #24',
        symbol: 'IRS-YT-24',
      },
      {
        description: 'IRS LP #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/ls',
        display: 'LP #24',
        name: 'LP #24',
        symbol: 'IRS-LP-24',
      },
      {
        description: 'Yield Aggregator Vault #25Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/25',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/25',
        display: 'YA-Vault-25',
        name: 'YA Vault #25',
        symbol: 'YA-VAULT-25',
      },
      {
        description: 'IRS PT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/pt',
        display: 'PT #25',
        name: 'PT #25',
        symbol: 'IRS-PT-25',
      },
      {
        description: 'IRS YT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/yt',
        display: 'YT #25',
        name: 'YT #25',
        symbol: 'IRS-YT-25',
      },
      {
        description: 'IRS LP #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/ls',
        display: 'LP #25',
        name: 'LP #25',
        symbol: 'IRS-LP-25',
      },
      {
        description: 'Yield Aggregator Vault #26Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/26',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/26',
        display: 'YA-Vault-26',
        name: 'YA Vault #26',
        symbol: 'YA-VAULT-26',
      },
      {
        description: 'IRS PT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/pt',
        display: 'PT #26',
        name: 'PT #26',
        symbol: 'IRS-PT-26',
      },
      {
        description: 'IRS YT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/yt',
        display: 'YT #26',
        name: 'YT #26',
        symbol: 'IRS-YT-26',
      },
      {
        description: 'IRS LP #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/ls',
        display: 'LP #26',
        name: 'LP #26',
        symbol: 'IRS-LP-26',
      },
      {
        description: 'Yield Aggregator Vault #27Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/27',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/27',
        display: 'YA-Vault-27',
        name: 'YA Vault #27',
        symbol: 'YA-VAULT-27',
      },
      {
        description: 'IRS PT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/pt',
        display: 'PT #27',
        name: 'PT #27',
        symbol: 'IRS-PT-27',
      },
      {
        description: 'IRS YT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/yt',
        display: 'YT #27',
        name: 'YT #27',
        symbol: 'IRS-YT-27',
      },
      {
        description: 'IRS LP #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/ls',
        display: 'LP #27',
        name: 'LP #27',
        symbol: 'IRS-LP-27',
      },
      {
        description: 'Yield Aggregator Vault #28Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/28',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/28',
        display: 'YA-Vault-28',
        name: 'YA Vault #28',
        symbol: 'YA-VAULT-28',
      },
      {
        description: 'IRS PT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/pt',
        display: 'PT #28',
        name: 'PT #28',
        symbol: 'IRS-PT-28',
      },
      {
        description: 'IRS YT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/yt',
        display: 'YT #28',
        name: 'YT #28',
        symbol: 'IRS-YT-28',
      },
      {
        description: 'IRS LP #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/ls',
        display: 'LP #28',
        name: 'LP #28',
        symbol: 'IRS-LP-28',
      },
      {
        description: 'Yield Aggregator Vault #29Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/29',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/29',
        display: 'YA-Vault-29',
        name: 'YA Vault #29',
        symbol: 'YA-VAULT-29',
      },
      {
        description: 'IRS PT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/pt',
        display: 'PT #29',
        name: 'PT #29',
        symbol: 'IRS-PT-29',
      },
      {
        description: 'IRS YT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/yt',
        display: 'YT #29',
        name: 'YT #29',
        symbol: 'IRS-YT-29',
      },
      {
        description: 'IRS LP #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/ls',
        display: 'LP #29',
        name: 'LP #29',
        symbol: 'IRS-LP-29',
      },
      {
        description: 'Yield Aggregator Vault #30Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/30',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/30',
        display: 'YA-Vault-30',
        name: 'YA Vault #30',
        symbol: 'YA-VAULT-30',
      },
      {
        description: 'IRS PT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/pt',
        display: 'PT #30',
        name: 'PT #30',
        symbol: 'IRS-PT-30',
      },
      {
        description: 'IRS YT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/yt',
        display: 'YT #30',
        name: 'YT #30',
        symbol: 'IRS-YT-30',
      },
      {
        description: 'IRS LP #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/ls',
        display: 'LP #30',
        name: 'LP #30',
        symbol: 'IRS-LP-30',
      },
      {
        description: 'Yield Aggregator Vault #31Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/31',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/31',
        display: 'YA-Vault-31',
        name: 'YA Vault #31',
        symbol: 'YA-VAULT-31',
      },
      {
        description: 'IRS PT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/pt',
        display: 'PT #31',
        name: 'PT #31',
        symbol: 'IRS-PT-31',
      },
      {
        description: 'IRS YT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/yt',
        display: 'YT #31',
        name: 'YT #31',
        symbol: 'IRS-YT-31',
      },
      {
        description: 'IRS LP #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/ls',
        display: 'LP #31',
        name: 'LP #31',
        symbol: 'IRS-LP-31',
      },
      {
        description: 'Yield Aggregator Vault #32Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/32',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/32',
        display: 'YA-Vault-32',
        name: 'YA Vault #32',
        symbol: 'YA-VAULT-32',
      },
      {
        description: 'IRS PT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/pt',
        display: 'PT #32',
        name: 'PT #32',
        symbol: 'IRS-PT-32',
      },
      {
        description: 'IRS YT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/yt',
        display: 'YT #32',
        name: 'YT #32',
        symbol: 'IRS-YT-32',
      },
      {
        description: 'IRS LP #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/ls',
        display: 'LP #32',
        name: 'LP #32',
        symbol: 'IRS-LP-32',
      },
      {
        description: 'Yield Aggregator Vault #33Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/33',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/33',
        display: 'YA-Vault-33',
        name: 'YA Vault #33',
        symbol: 'YA-VAULT-33',
      },
      {
        description: 'IRS PT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/pt',
        display: 'PT #33',
        name: 'PT #33',
        symbol: 'IRS-PT-33',
      },
      {
        description: 'IRS YT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/yt',
        display: 'YT #33',
        name: 'YT #33',
        symbol: 'IRS-YT-33',
      },
      {
        description: 'IRS LP #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/ls',
        display: 'LP #33',
        name: 'LP #33',
        symbol: 'IRS-LP-33',
      },
      {
        description: 'Yield Aggregator Vault #34Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/34',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/34',
        display: 'YA-Vault-34',
        name: 'YA Vault #34',
        symbol: 'YA-VAULT-34',
      },
      {
        description: 'IRS PT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/pt',
        display: 'PT #34',
        name: 'PT #34',
        symbol: 'IRS-PT-34',
      },
      {
        description: 'IRS YT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/yt',
        display: 'YT #34',
        name: 'YT #34',
        symbol: 'IRS-YT-34',
      },
      {
        description: 'IRS LP #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/ls',
        display: 'LP #34',
        name: 'LP #34',
        symbol: 'IRS-LP-34',
      },
      {
        description: 'Yield Aggregator Vault #35Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/35',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/35',
        display: 'YA-Vault-35',
        name: 'YA Vault #35',
        symbol: 'YA-VAULT-35',
      },
      {
        description: 'IRS PT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/pt',
        display: 'PT #35',
        name: 'PT #35',
        symbol: 'IRS-PT-35',
      },
      {
        description: 'IRS YT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/yt',
        display: 'YT #35',
        name: 'YT #35',
        symbol: 'IRS-YT-35',
      },
      {
        description: 'IRS LP #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/ls',
        display: 'LP #35',
        name: 'LP #35',
        symbol: 'IRS-LP-35',
      },
      {
        description: 'Yield Aggregator Vault #36Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/36',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/36',
        display: 'YA-Vault-36',
        name: 'YA Vault #36',
        symbol: 'YA-VAULT-36',
      },
      {
        description: 'IRS PT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/pt',
        display: 'PT #36',
        name: 'PT #36',
        symbol: 'IRS-PT-36',
      },
      {
        description: 'IRS YT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/yt',
        display: 'YT #36',
        name: 'YT #36',
        symbol: 'IRS-YT-36',
      },
      {
        description: 'IRS LP #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/ls',
        display: 'LP #36',
        name: 'LP #36',
        symbol: 'IRS-LP-36',
      },
      {
        description: 'Yield Aggregator Vault #37Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/37',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/37',
        display: 'YA-Vault-37',
        name: 'YA Vault #37',
        symbol: 'YA-VAULT-37',
      },
      {
        description: 'IRS PT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/pt',
        display: 'PT #37',
        name: 'PT #37',
        symbol: 'IRS-PT-37',
      },
      {
        description: 'IRS YT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/yt',
        display: 'YT #37',
        name: 'YT #37',
        symbol: 'IRS-YT-37',
      },
      {
        description: 'IRS LP #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/ls',
        display: 'LP #37',
        name: 'LP #37',
        symbol: 'IRS-LP-37',
      },
      {
        description: 'Yield Aggregator Vault #38Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/38',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/38',
        display: 'YA-Vault-38',
        name: 'YA Vault #38',
        symbol: 'YA-VAULT-38',
      },
      {
        description: 'IRS PT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/pt',
        display: 'PT #38',
        name: 'PT #38',
        symbol: 'IRS-PT-38',
      },
      {
        description: 'IRS YT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/yt',
        display: 'YT #38',
        name: 'YT #38',
        symbol: 'IRS-YT-38',
      },
      {
        description: 'IRS LP #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/ls',
        display: 'LP #38',
        name: 'LP #38',
        symbol: 'IRS-LP-38',
      },
      {
        description: 'Yield Aggregator Vault #39Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/39',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/39',
        display: 'YA-Vault-39',
        name: 'YA Vault #39',
        symbol: 'YA-VAULT-39',
      },
      {
        description: 'IRS PT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/pt',
        display: 'PT #39',
        name: 'PT #39',
        symbol: 'IRS-PT-39',
      },
      {
        description: 'IRS YT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/yt',
        display: 'YT #39',
        name: 'YT #39',
        symbol: 'IRS-YT-39',
      },
      {
        description: 'IRS LP #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/ls',
        display: 'LP #39',
        name: 'LP #39',
        symbol: 'IRS-LP-39',
      },
      {
        description: 'Yield Aggregator Vault #40Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/40',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/40',
        display: 'YA-Vault-40',
        name: 'YA Vault #40',
        symbol: 'YA-VAULT-40',
      },
      {
        description: 'IRS PT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/pt',
        display: 'PT #40',
        name: 'PT #40',
        symbol: 'IRS-PT-40',
      },
      {
        description: 'IRS YT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/yt',
        display: 'YT #40',
        name: 'YT #40',
        symbol: 'IRS-YT-40',
      },
      {
        description: 'IRS LP #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/ls',
        display: 'LP #40',
        name: 'LP #40',
        symbol: 'IRS-LP-40',
      },
      {
        description: 'Yield Aggregator Vault #41Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/41',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/41',
        display: 'YA-Vault-41',
        name: 'YA Vault #41',
        symbol: 'YA-VAULT-41',
      },
      {
        description: 'IRS PT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/pt',
        display: 'PT #41',
        name: 'PT #41',
        symbol: 'IRS-PT-41',
      },
      {
        description: 'IRS YT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/yt',
        display: 'YT #41',
        name: 'YT #41',
        symbol: 'IRS-YT-41',
      },
      {
        description: 'IRS LP #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/ls',
        display: 'LP #41',
        name: 'LP #41',
        symbol: 'IRS-LP-41',
      },
      {
        description: 'Yield Aggregator Vault #42Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/42',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/42',
        display: 'YA-Vault-42',
        name: 'YA Vault #42',
        symbol: 'YA-VAULT-42',
      },
      {
        description: 'IRS PT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/pt',
        display: 'PT #42',
        name: 'PT #42',
        symbol: 'IRS-PT-42',
      },
      {
        description: 'IRS YT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/yt',
        display: 'YT #42',
        name: 'YT #42',
        symbol: 'IRS-YT-42',
      },
      {
        description: 'IRS LP #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/ls',
        display: 'LP #42',
        name: 'LP #42',
        symbol: 'IRS-LP-42',
      },
      {
        description: 'Yield Aggregator Vault #43Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/43',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/43',
        display: 'YA-Vault-43',
        name: 'YA Vault #43',
        symbol: 'YA-VAULT-43',
      },
      {
        description: 'IRS PT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/pt',
        display: 'PT #43',
        name: 'PT #43',
        symbol: 'IRS-PT-43',
      },
      {
        description: 'IRS YT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/yt',
        display: 'YT #43',
        name: 'YT #43',
        symbol: 'IRS-YT-43',
      },
      {
        description: 'IRS LP #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/ls',
        display: 'LP #43',
        name: 'LP #43',
        symbol: 'IRS-LP-43',
      },
      {
        description: 'Yield Aggregator Vault #44Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/44',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/44',
        display: 'YA-Vault-44',
        name: 'YA Vault #44',
        symbol: 'YA-VAULT-44',
      },
      {
        description: 'IRS PT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/pt',
        display: 'PT #44',
        name: 'PT #44',
        symbol: 'IRS-PT-44',
      },
      {
        description: 'IRS YT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/yt',
        display: 'YT #44',
        name: 'YT #44',
        symbol: 'IRS-YT-44',
      },
      {
        description: 'IRS LP #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/ls',
        display: 'LP #44',
        name: 'LP #44',
        symbol: 'IRS-LP-44',
      },
      {
        description: 'Yield Aggregator Vault #45Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/45',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/45',
        display: 'YA-Vault-45',
        name: 'YA Vault #45',
        symbol: 'YA-VAULT-45',
      },
      {
        description: 'IRS PT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/pt',
        display: 'PT #45',
        name: 'PT #45',
        symbol: 'IRS-PT-45',
      },
      {
        description: 'IRS YT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/yt',
        display: 'YT #45',
        name: 'YT #45',
        symbol: 'IRS-YT-45',
      },
      {
        description: 'IRS LP #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/ls',
        display: 'LP #45',
        name: 'LP #45',
        symbol: 'IRS-LP-45',
      },
      {
        description: 'Yield Aggregator Vault #46Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/46',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/46',
        display: 'YA-Vault-46',
        name: 'YA Vault #46',
        symbol: 'YA-VAULT-46',
      },
      {
        description: 'IRS PT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/pt',
        display: 'PT #46',
        name: 'PT #46',
        symbol: 'IRS-PT-46',
      },
      {
        description: 'IRS YT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/yt',
        display: 'YT #46',
        name: 'YT #46',
        symbol: 'IRS-YT-46',
      },
      {
        description: 'IRS LP #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/ls',
        display: 'LP #46',
        name: 'LP #46',
        symbol: 'IRS-LP-46',
      },
      {
        description: 'Yield Aggregator Vault #47Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/47',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/47',
        display: 'YA-Vault-47',
        name: 'YA Vault #47',
        symbol: 'YA-VAULT-47',
      },
      {
        description: 'IRS PT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/pt',
        display: 'PT #47',
        name: 'PT #47',
        symbol: 'IRS-PT-47',
      },
      {
        description: 'IRS YT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/yt',
        display: 'YT #47',
        name: 'YT #47',
        symbol: 'IRS-YT-47',
      },
      {
        description: 'IRS LP #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/ls',
        display: 'LP #47',
        name: 'LP #47',
        symbol: 'IRS-LP-47',
      },
      {
        description: 'Yield Aggregator Vault #48Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/48',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/48',
        display: 'YA-Vault-48',
        name: 'YA Vault #48',
        symbol: 'YA-VAULT-48',
      },
      {
        description: 'IRS PT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/pt',
        display: 'PT #48',
        name: 'PT #48',
        symbol: 'IRS-PT-48',
      },
      {
        description: 'IRS YT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/yt',
        display: 'YT #48',
        name: 'YT #48',
        symbol: 'IRS-YT-48',
      },
      {
        description: 'IRS LP #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/ls',
        display: 'LP #48',
        name: 'LP #48',
        symbol: 'IRS-LP-48',
      },
      {
        description: 'Yield Aggregator Vault #49Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/49',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/49',
        display: 'YA-Vault-49',
        name: 'YA Vault #49',
        symbol: 'YA-VAULT-49',
      },
      {
        description: 'IRS PT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/pt',
        display: 'PT #49',
        name: 'PT #49',
        symbol: 'IRS-PT-49',
      },
      {
        description: 'IRS YT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/yt',
        display: 'YT #49',
        name: 'YT #49',
        symbol: 'IRS-YT-49',
      },
      {
        description: 'IRS LP #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/ls',
        display: 'LP #49',
        name: 'LP #49',
        symbol: 'IRS-LP-49',
      },
      {
        description: 'Yield Aggregator Vault #50Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/50',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/50',
        display: 'YA-Vault-50',
        name: 'YA Vault #50',
        symbol: 'YA-VAULT-50',
      },
      {
        description: 'IRS PT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/pt',
        display: 'PT #50',
        name: 'PT #50',
        symbol: 'IRS-PT-50',
      },
      {
        description: 'IRS YT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/yt',
        display: 'YT #50',
        name: 'YT #50',
        symbol: 'IRS-YT-50',
      },
      {
        description: 'IRS LP #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/ls',
        display: 'LP #50',
        name: 'LP #50',
        symbol: 'IRS-LP-50',
      },
      {
        description: 'Yield Aggregator Vault #51Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/51',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/51',
        display: 'YA-Vault-51',
        name: 'YA Vault #51',
        symbol: 'YA-VAULT-51',
      },
      {
        description: 'IRS PT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/pt',
        display: 'PT #51',
        name: 'PT #51',
        symbol: 'IRS-PT-51',
      },
      {
        description: 'IRS YT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/yt',
        display: 'YT #51',
        name: 'YT #51',
        symbol: 'IRS-YT-51',
      },
      {
        description: 'IRS LP #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/ls',
        display: 'LP #51',
        name: 'LP #51',
        symbol: 'IRS-LP-51',
      },
      {
        description: 'Yield Aggregator Vault #52Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/52',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/52',
        display: 'YA-Vault-52',
        name: 'YA Vault #52',
        symbol: 'YA-VAULT-52',
      },
      {
        description: 'IRS PT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/pt',
        display: 'PT #52',
        name: 'PT #52',
        symbol: 'IRS-PT-52',
      },
      {
        description: 'IRS YT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/yt',
        display: 'YT #52',
        name: 'YT #52',
        symbol: 'IRS-YT-52',
      },
      {
        description: 'IRS LP #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/ls',
        display: 'LP #52',
        name: 'LP #52',
        symbol: 'IRS-LP-52',
      },
      {
        description: 'Yield Aggregator Vault #53Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/53',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/53',
        display: 'YA-Vault-53',
        name: 'YA Vault #53',
        symbol: 'YA-VAULT-53',
      },
      {
        description: 'IRS PT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/pt',
        display: 'PT #53',
        name: 'PT #53',
        symbol: 'IRS-PT-53',
      },
      {
        description: 'IRS YT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/yt',
        display: 'YT #53',
        name: 'YT #53',
        symbol: 'IRS-YT-53',
      },
      {
        description: 'IRS LP #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/ls',
        display: 'LP #53',
        name: 'LP #53',
        symbol: 'IRS-LP-53',
      },
      {
        description: 'Yield Aggregator Vault #54Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/54',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/54',
        display: 'YA-Vault-54',
        name: 'YA Vault #54',
        symbol: 'YA-VAULT-54',
      },
      {
        description: 'IRS PT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/pt',
        display: 'PT #54',
        name: 'PT #54',
        symbol: 'IRS-PT-54',
      },
      {
        description: 'IRS YT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/yt',
        display: 'YT #54',
        name: 'YT #54',
        symbol: 'IRS-YT-54',
      },
      {
        description: 'IRS LP #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/ls',
        display: 'LP #54',
        name: 'LP #54',
        symbol: 'IRS-LP-54',
      },
      {
        description: 'Yield Aggregator Vault #55Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/55',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/55',
        display: 'YA-Vault-55',
        name: 'YA Vault #55',
        symbol: 'YA-VAULT-55',
      },
      {
        description: 'IRS PT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/pt',
        display: 'PT #55',
        name: 'PT #55',
        symbol: 'IRS-PT-55',
      },
      {
        description: 'IRS YT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/yt',
        display: 'YT #55',
        name: 'YT #55',
        symbol: 'IRS-YT-55',
      },
      {
        description: 'IRS LP #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/ls',
        display: 'LP #55',
        name: 'LP #55',
        symbol: 'IRS-LP-55',
      },
      {
        description: 'Yield Aggregator Vault #56Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/56',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/56',
        display: 'YA-Vault-56',
        name: 'YA Vault #56',
        symbol: 'YA-VAULT-56',
      },
      {
        description: 'IRS PT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/pt',
        display: 'PT #56',
        name: 'PT #56',
        symbol: 'IRS-PT-56',
      },
      {
        description: 'IRS YT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/yt',
        display: 'YT #56',
        name: 'YT #56',
        symbol: 'IRS-YT-56',
      },
      {
        description: 'IRS LP #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/ls',
        display: 'LP #56',
        name: 'LP #56',
        symbol: 'IRS-LP-56',
      },
      {
        description: 'Yield Aggregator Vault #57Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/57',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/57',
        display: 'YA-Vault-57',
        name: 'YA Vault #57',
        symbol: 'YA-VAULT-57',
      },
      {
        description: 'IRS PT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/pt',
        display: 'PT #57',
        name: 'PT #57',
        symbol: 'IRS-PT-57',
      },
      {
        description: 'IRS YT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/yt',
        display: 'YT #57',
        name: 'YT #57',
        symbol: 'IRS-YT-57',
      },
      {
        description: 'IRS LP #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/ls',
        display: 'LP #57',
        name: 'LP #57',
        symbol: 'IRS-LP-57',
      },
      {
        description: 'Yield Aggregator Vault #58Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/58',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/58',
        display: 'YA-Vault-58',
        name: 'YA Vault #58',
        symbol: 'YA-VAULT-58',
      },
      {
        description: 'IRS PT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/pt',
        display: 'PT #58',
        name: 'PT #58',
        symbol: 'IRS-PT-58',
      },
      {
        description: 'IRS YT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/yt',
        display: 'YT #58',
        name: 'YT #58',
        symbol: 'IRS-YT-58',
      },
      {
        description: 'IRS LP #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/ls',
        display: 'LP #58',
        name: 'LP #58',
        symbol: 'IRS-LP-58',
      },
      {
        description: 'Yield Aggregator Vault #59Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/59',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/59',
        display: 'YA-Vault-59',
        name: 'YA Vault #59',
        symbol: 'YA-VAULT-59',
      },
      {
        description: 'IRS PT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/pt',
        display: 'PT #59',
        name: 'PT #59',
        symbol: 'IRS-PT-59',
      },
      {
        description: 'IRS YT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/yt',
        display: 'YT #59',
        name: 'YT #59',
        symbol: 'IRS-YT-59',
      },
      {
        description: 'IRS LP #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/ls',
        display: 'LP #59',
        name: 'LP #59',
        symbol: 'IRS-LP-59',
      },
      {
        description: 'Yield Aggregator Vault #60Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/60',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/60',
        display: 'YA-Vault-60',
        name: 'YA Vault #60',
        symbol: 'YA-VAULT-60',
      },
      {
        description: 'IRS PT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/pt',
        display: 'PT #60',
        name: 'PT #60',
        symbol: 'IRS-PT-60',
      },
      {
        description: 'IRS YT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/yt',
        display: 'YT #60',
        name: 'YT #60',
        symbol: 'IRS-YT-60',
      },
      {
        description: 'IRS LP #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/ls',
        display: 'LP #60',
        name: 'LP #60',
        symbol: 'IRS-LP-60',
      },
      {
        description: 'Yield Aggregator Vault #61Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/61',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/61',
        display: 'YA-Vault-61',
        name: 'YA Vault #61',
        symbol: 'YA-VAULT-61',
      },
      {
        description: 'IRS PT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/pt',
        display: 'PT #61',
        name: 'PT #61',
        symbol: 'IRS-PT-61',
      },
      {
        description: 'IRS YT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/yt',
        display: 'YT #61',
        name: 'YT #61',
        symbol: 'IRS-YT-61',
      },
      {
        description: 'IRS LP #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/ls',
        display: 'LP #61',
        name: 'LP #61',
        symbol: 'IRS-LP-61',
      },
      {
        description: 'Yield Aggregator Vault #62Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/62',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/62',
        display: 'YA-Vault-62',
        name: 'YA Vault #62',
        symbol: 'YA-VAULT-62',
      },
      {
        description: 'IRS PT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/pt',
        display: 'PT #62',
        name: 'PT #62',
        symbol: 'IRS-PT-62',
      },
      {
        description: 'IRS YT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/yt',
        display: 'YT #62',
        name: 'YT #62',
        symbol: 'IRS-YT-62',
      },
      {
        description: 'IRS LP #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/ls',
        display: 'LP #62',
        name: 'LP #62',
        symbol: 'IRS-LP-62',
      },
      {
        description: 'Yield Aggregator Vault #63Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/63',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/63',
        display: 'YA-Vault-63',
        name: 'YA Vault #63',
        symbol: 'YA-VAULT-63',
      },
      {
        description: 'IRS PT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/pt',
        display: 'PT #63',
        name: 'PT #63',
        symbol: 'IRS-PT-63',
      },
      {
        description: 'IRS YT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/yt',
        display: 'YT #63',
        name: 'YT #63',
        symbol: 'IRS-YT-63',
      },
      {
        description: 'IRS LP #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/ls',
        display: 'LP #63',
        name: 'LP #63',
        symbol: 'IRS-LP-63',
      },
      {
        description: 'Yield Aggregator Vault #64Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/64',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/64',
        display: 'YA-Vault-64',
        name: 'YA Vault #64',
        symbol: 'YA-VAULT-64',
      },
      {
        description: 'IRS PT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/pt',
        display: 'PT #64',
        name: 'PT #64',
        symbol: 'IRS-PT-64',
      },
      {
        description: 'IRS YT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/yt',
        display: 'YT #64',
        name: 'YT #64',
        symbol: 'IRS-YT-64',
      },
      {
        description: 'IRS LP #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/ls',
        display: 'LP #64',
        name: 'LP #64',
        symbol: 'IRS-LP-64',
      },
      {
        description: 'Yield Aggregator Vault #65Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/65',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/65',
        display: 'YA-Vault-65',
        name: 'YA Vault #65',
        symbol: 'YA-VAULT-65',
      },
      {
        description: 'IRS PT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/pt',
        display: 'PT #65',
        name: 'PT #65',
        symbol: 'IRS-PT-65',
      },
      {
        description: 'IRS YT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/yt',
        display: 'YT #65',
        name: 'YT #65',
        symbol: 'IRS-YT-65',
      },
      {
        description: 'IRS LP #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/ls',
        display: 'LP #65',
        name: 'LP #65',
        symbol: 'IRS-LP-65',
      },
      {
        description: 'Yield Aggregator Vault #66Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/66',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/66',
        display: 'YA-Vault-66',
        name: 'YA Vault #66',
        symbol: 'YA-VAULT-66',
      },
      {
        description: 'IRS PT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/pt',
        display: 'PT #66',
        name: 'PT #66',
        symbol: 'IRS-PT-66',
      },
      {
        description: 'IRS YT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/yt',
        display: 'YT #66',
        name: 'YT #66',
        symbol: 'IRS-YT-66',
      },
      {
        description: 'IRS LP #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/ls',
        display: 'LP #66',
        name: 'LP #66',
        symbol: 'IRS-LP-66',
      },
      {
        description: 'Yield Aggregator Vault #67Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/67',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/67',
        display: 'YA-Vault-67',
        name: 'YA Vault #67',
        symbol: 'YA-VAULT-67',
      },
      {
        description: 'IRS PT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/pt',
        display: 'PT #67',
        name: 'PT #67',
        symbol: 'IRS-PT-67',
      },
      {
        description: 'IRS YT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/yt',
        display: 'YT #67',
        name: 'YT #67',
        symbol: 'IRS-YT-67',
      },
      {
        description: 'IRS LP #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/ls',
        display: 'LP #67',
        name: 'LP #67',
        symbol: 'IRS-LP-67',
      },
      {
        description: 'Yield Aggregator Vault #68Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/68',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/68',
        display: 'YA-Vault-68',
        name: 'YA Vault #68',
        symbol: 'YA-VAULT-68',
      },
      {
        description: 'IRS PT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/pt',
        display: 'PT #68',
        name: 'PT #68',
        symbol: 'IRS-PT-68',
      },
      {
        description: 'IRS YT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/yt',
        display: 'YT #68',
        name: 'YT #68',
        symbol: 'IRS-YT-68',
      },
      {
        description: 'IRS LP #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/ls',
        display: 'LP #68',
        name: 'LP #68',
        symbol: 'IRS-LP-68',
      },
      {
        description: 'Yield Aggregator Vault #69Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/69',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/69',
        display: 'YA-Vault-69',
        name: 'YA Vault #69',
        symbol: 'YA-VAULT-69',
      },
      {
        description: 'IRS PT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/pt',
        display: 'PT #69',
        name: 'PT #69',
        symbol: 'IRS-PT-69',
      },
      {
        description: 'IRS YT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/yt',
        display: 'YT #69',
        name: 'YT #69',
        symbol: 'IRS-YT-69',
      },
      {
        description: 'IRS LP #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/ls',
        display: 'LP #69',
        name: 'LP #69',
        symbol: 'IRS-LP-69',
      },
      {
        description: 'Yield Aggregator Vault #70Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/70',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/70',
        display: 'YA-Vault-70',
        name: 'YA Vault #70',
        symbol: 'YA-VAULT-70',
      },
      {
        description: 'IRS PT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/pt',
        display: 'PT #70',
        name: 'PT #70',
        symbol: 'IRS-PT-70',
      },
      {
        description: 'IRS YT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/yt',
        display: 'YT #70',
        name: 'YT #70',
        symbol: 'IRS-YT-70',
      },
      {
        description: 'IRS LP #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/ls',
        display: 'LP #70',
        name: 'LP #70',
        symbol: 'IRS-LP-70',
      },
      {
        description: 'Yield Aggregator Vault #71Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/71',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/71',
        display: 'YA-Vault-71',
        name: 'YA Vault #71',
        symbol: 'YA-VAULT-71',
      },
      {
        description: 'IRS PT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/pt',
        display: 'PT #71',
        name: 'PT #71',
        symbol: 'IRS-PT-71',
      },
      {
        description: 'IRS YT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/yt',
        display: 'YT #71',
        name: 'YT #71',
        symbol: 'IRS-YT-71',
      },
      {
        description: 'IRS LP #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/ls',
        display: 'LP #71',
        name: 'LP #71',
        symbol: 'IRS-LP-71',
      },
      {
        description: 'Yield Aggregator Vault #72Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/72',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/72',
        display: 'YA-Vault-72',
        name: 'YA Vault #72',
        symbol: 'YA-VAULT-72',
      },
      {
        description: 'IRS PT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/pt',
        display: 'PT #72',
        name: 'PT #72',
        symbol: 'IRS-PT-72',
      },
      {
        description: 'IRS YT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/yt',
        display: 'YT #72',
        name: 'YT #72',
        symbol: 'IRS-YT-72',
      },
      {
        description: 'IRS LP #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/ls',
        display: 'LP #72',
        name: 'LP #72',
        symbol: 'IRS-LP-72',
      },
      {
        description: 'Yield Aggregator Vault #73Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/73',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/73',
        display: 'YA-Vault-73',
        name: 'YA Vault #73',
        symbol: 'YA-VAULT-73',
      },
      {
        description: 'IRS PT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/pt',
        display: 'PT #73',
        name: 'PT #73',
        symbol: 'IRS-PT-73',
      },
      {
        description: 'IRS YT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/yt',
        display: 'YT #73',
        name: 'YT #73',
        symbol: 'IRS-YT-73',
      },
      {
        description: 'IRS LP #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/ls',
        display: 'LP #73',
        name: 'LP #73',
        symbol: 'IRS-LP-73',
      },
      {
        description: 'Yield Aggregator Vault #74Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/74',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/74',
        display: 'YA-Vault-74',
        name: 'YA Vault #74',
        symbol: 'YA-VAULT-74',
      },
      {
        description: 'IRS PT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/pt',
        display: 'PT #74',
        name: 'PT #74',
        symbol: 'IRS-PT-74',
      },
      {
        description: 'IRS YT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/yt',
        display: 'YT #74',
        name: 'YT #74',
        symbol: 'IRS-YT-74',
      },
      {
        description: 'IRS LP #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/ls',
        display: 'LP #74',
        name: 'LP #74',
        symbol: 'IRS-LP-74',
      },
      {
        description: 'Yield Aggregator Vault #75Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/75',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/75',
        display: 'YA-Vault-75',
        name: 'YA Vault #75',
        symbol: 'YA-VAULT-75',
      },
      {
        description: 'IRS PT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/pt',
        display: 'PT #75',
        name: 'PT #75',
        symbol: 'IRS-PT-75',
      },
      {
        description: 'IRS YT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/yt',
        display: 'YT #75',
        name: 'YT #75',
        symbol: 'IRS-YT-75',
      },
      {
        description: 'IRS LP #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/ls',
        display: 'LP #75',
        name: 'LP #75',
        symbol: 'IRS-LP-75',
      },
      {
        description: 'Yield Aggregator Vault #76Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/76',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/76',
        display: 'YA-Vault-76',
        name: 'YA Vault #76',
        symbol: 'YA-VAULT-76',
      },
      {
        description: 'IRS PT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/pt',
        display: 'PT #76',
        name: 'PT #76',
        symbol: 'IRS-PT-76',
      },
      {
        description: 'IRS YT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/yt',
        display: 'YT #76',
        name: 'YT #76',
        symbol: 'IRS-YT-76',
      },
      {
        description: 'IRS LP #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/ls',
        display: 'LP #76',
        name: 'LP #76',
        symbol: 'IRS-LP-76',
      },
      {
        description: 'Yield Aggregator Vault #77Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/77',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/77',
        display: 'YA-Vault-77',
        name: 'YA Vault #77',
        symbol: 'YA-VAULT-77',
      },
      {
        description: 'IRS PT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/pt',
        display: 'PT #77',
        name: 'PT #77',
        symbol: 'IRS-PT-77',
      },
      {
        description: 'IRS YT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/yt',
        display: 'YT #77',
        name: 'YT #77',
        symbol: 'IRS-YT-77',
      },
      {
        description: 'IRS LP #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/ls',
        display: 'LP #77',
        name: 'LP #77',
        symbol: 'IRS-LP-77',
      },
      {
        description: 'Yield Aggregator Vault #78Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/78',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/78',
        display: 'YA-Vault-78',
        name: 'YA Vault #78',
        symbol: 'YA-VAULT-78',
      },
      {
        description: 'IRS PT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/pt',
        display: 'PT #78',
        name: 'PT #78',
        symbol: 'IRS-PT-78',
      },
      {
        description: 'IRS YT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/yt',
        display: 'YT #78',
        name: 'YT #78',
        symbol: 'IRS-YT-78',
      },
      {
        description: 'IRS LP #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/ls',
        display: 'LP #78',
        name: 'LP #78',
        symbol: 'IRS-LP-78',
      },
      {
        description: 'Yield Aggregator Vault #79Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/79',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/79',
        display: 'YA-Vault-79',
        name: 'YA Vault #79',
        symbol: 'YA-VAULT-79',
      },
      {
        description: 'IRS PT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/pt',
        display: 'PT #79',
        name: 'PT #79',
        symbol: 'IRS-PT-79',
      },
      {
        description: 'IRS YT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/yt',
        display: 'YT #79',
        name: 'YT #79',
        symbol: 'IRS-YT-79',
      },
      {
        description: 'IRS LP #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/ls',
        display: 'LP #79',
        name: 'LP #79',
        symbol: 'IRS-LP-79',
      },
      {
        description: 'Yield Aggregator Vault #80Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/80',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/80',
        display: 'YA-Vault-80',
        name: 'YA Vault #80',
        symbol: 'YA-VAULT-80',
      },
      {
        description: 'IRS PT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/pt',
        display: 'PT #80',
        name: 'PT #80',
        symbol: 'IRS-PT-80',
      },
      {
        description: 'IRS YT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/yt',
        display: 'YT #80',
        name: 'YT #80',
        symbol: 'IRS-YT-80',
      },
      {
        description: 'IRS LP #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/ls',
        display: 'LP #80',
        name: 'LP #80',
        symbol: 'IRS-LP-80',
      },
      {
        description: 'Yield Aggregator Vault #81Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/81',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/81',
        display: 'YA-Vault-81',
        name: 'YA Vault #81',
        symbol: 'YA-VAULT-81',
      },
      {
        description: 'IRS PT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/pt',
        display: 'PT #81',
        name: 'PT #81',
        symbol: 'IRS-PT-81',
      },
      {
        description: 'IRS YT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/yt',
        display: 'YT #81',
        name: 'YT #81',
        symbol: 'IRS-YT-81',
      },
      {
        description: 'IRS LP #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/ls',
        display: 'LP #81',
        name: 'LP #81',
        symbol: 'IRS-LP-81',
      },
      {
        description: 'Yield Aggregator Vault #82Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/82',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/82',
        display: 'YA-Vault-82',
        name: 'YA Vault #82',
        symbol: 'YA-VAULT-82',
      },
      {
        description: 'IRS PT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/pt',
        display: 'PT #82',
        name: 'PT #82',
        symbol: 'IRS-PT-82',
      },
      {
        description: 'IRS YT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/yt',
        display: 'YT #82',
        name: 'YT #82',
        symbol: 'IRS-YT-82',
      },
      {
        description: 'IRS LP #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/ls',
        display: 'LP #82',
        name: 'LP #82',
        symbol: 'IRS-LP-82',
      },
      {
        description: 'Yield Aggregator Vault #83Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/83',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/83',
        display: 'YA-Vault-83',
        name: 'YA Vault #83',
        symbol: 'YA-VAULT-83',
      },
      {
        description: 'IRS PT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/pt',
        display: 'PT #83',
        name: 'PT #83',
        symbol: 'IRS-PT-83',
      },
      {
        description: 'IRS YT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/yt',
        display: 'YT #83',
        name: 'YT #83',
        symbol: 'IRS-YT-83',
      },
      {
        description: 'IRS LP #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/ls',
        display: 'LP #83',
        name: 'LP #83',
        symbol: 'IRS-LP-83',
      },
      {
        description: 'Yield Aggregator Vault #84Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/84',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/84',
        display: 'YA-Vault-84',
        name: 'YA Vault #84',
        symbol: 'YA-VAULT-84',
      },
      {
        description: 'IRS PT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/pt',
        display: 'PT #84',
        name: 'PT #84',
        symbol: 'IRS-PT-84',
      },
      {
        description: 'IRS YT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/yt',
        display: 'YT #84',
        name: 'YT #84',
        symbol: 'IRS-YT-84',
      },
      {
        description: 'IRS LP #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/ls',
        display: 'LP #84',
        name: 'LP #84',
        symbol: 'IRS-LP-84',
      },
      {
        description: 'Yield Aggregator Vault #85Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/85',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/85',
        display: 'YA-Vault-85',
        name: 'YA Vault #85',
        symbol: 'YA-VAULT-85',
      },
      {
        description: 'IRS PT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/pt',
        display: 'PT #85',
        name: 'PT #85',
        symbol: 'IRS-PT-85',
      },
      {
        description: 'IRS YT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/yt',
        display: 'YT #85',
        name: 'YT #85',
        symbol: 'IRS-YT-85',
      },
      {
        description: 'IRS LP #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/ls',
        display: 'LP #85',
        name: 'LP #85',
        symbol: 'IRS-LP-85',
      },
      {
        description: 'Yield Aggregator Vault #86Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/86',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/86',
        display: 'YA-Vault-86',
        name: 'YA Vault #86',
        symbol: 'YA-VAULT-86',
      },
      {
        description: 'IRS PT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/pt',
        display: 'PT #86',
        name: 'PT #86',
        symbol: 'IRS-PT-86',
      },
      {
        description: 'IRS YT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/yt',
        display: 'YT #86',
        name: 'YT #86',
        symbol: 'IRS-YT-86',
      },
      {
        description: 'IRS LP #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/ls',
        display: 'LP #86',
        name: 'LP #86',
        symbol: 'IRS-LP-86',
      },
      {
        description: 'Yield Aggregator Vault #87Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/87',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/87',
        display: 'YA-Vault-87',
        name: 'YA Vault #87',
        symbol: 'YA-VAULT-87',
      },
      {
        description: 'IRS PT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/pt',
        display: 'PT #87',
        name: 'PT #87',
        symbol: 'IRS-PT-87',
      },
      {
        description: 'IRS YT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/yt',
        display: 'YT #87',
        name: 'YT #87',
        symbol: 'IRS-YT-87',
      },
      {
        description: 'IRS LP #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/ls',
        display: 'LP #87',
        name: 'LP #87',
        symbol: 'IRS-LP-87',
      },
      {
        description: 'Yield Aggregator Vault #88Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/88',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/88',
        display: 'YA-Vault-88',
        name: 'YA Vault #88',
        symbol: 'YA-VAULT-88',
      },
      {
        description: 'IRS PT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/pt',
        display: 'PT #88',
        name: 'PT #88',
        symbol: 'IRS-PT-88',
      },
      {
        description: 'IRS YT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/yt',
        display: 'YT #88',
        name: 'YT #88',
        symbol: 'IRS-YT-88',
      },
      {
        description: 'IRS LP #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/ls',
        display: 'LP #88',
        name: 'LP #88',
        symbol: 'IRS-LP-88',
      },
      {
        description: 'Yield Aggregator Vault #89Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/89',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/89',
        display: 'YA-Vault-89',
        name: 'YA Vault #89',
        symbol: 'YA-VAULT-89',
      },
      {
        description: 'IRS PT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/pt',
        display: 'PT #89',
        name: 'PT #89',
        symbol: 'IRS-PT-89',
      },
      {
        description: 'IRS YT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/yt',
        display: 'YT #89',
        name: 'YT #89',
        symbol: 'IRS-YT-89',
      },
      {
        description: 'IRS LP #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/ls',
        display: 'LP #89',
        name: 'LP #89',
        symbol: 'IRS-LP-89',
      },
      {
        description: 'Yield Aggregator Vault #90Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/90',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/90',
        display: 'YA-Vault-90',
        name: 'YA Vault #90',
        symbol: 'YA-VAULT-90',
      },
      {
        description: 'IRS PT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/pt',
        display: 'PT #90',
        name: 'PT #90',
        symbol: 'IRS-PT-90',
      },
      {
        description: 'IRS YT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/yt',
        display: 'YT #90',
        name: 'YT #90',
        symbol: 'IRS-YT-90',
      },
      {
        description: 'IRS LP #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/ls',
        display: 'LP #90',
        name: 'LP #90',
        symbol: 'IRS-LP-90',
      },
      {
        description: 'Yield Aggregator Vault #91Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/91',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/91',
        display: 'YA-Vault-91',
        name: 'YA Vault #91',
        symbol: 'YA-VAULT-91',
      },
      {
        description: 'IRS PT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/pt',
        display: 'PT #91',
        name: 'PT #91',
        symbol: 'IRS-PT-91',
      },
      {
        description: 'IRS YT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/yt',
        display: 'YT #91',
        name: 'YT #91',
        symbol: 'IRS-YT-91',
      },
      {
        description: 'IRS LP #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/ls',
        display: 'LP #91',
        name: 'LP #91',
        symbol: 'IRS-LP-91',
      },
      {
        description: 'Yield Aggregator Vault #92Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/92',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/92',
        display: 'YA-Vault-92',
        name: 'YA Vault #92',
        symbol: 'YA-VAULT-92',
      },
      {
        description: 'IRS PT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/pt',
        display: 'PT #92',
        name: 'PT #92',
        symbol: 'IRS-PT-92',
      },
      {
        description: 'IRS YT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/yt',
        display: 'YT #92',
        name: 'YT #92',
        symbol: 'IRS-YT-92',
      },
      {
        description: 'IRS LP #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/ls',
        display: 'LP #92',
        name: 'LP #92',
        symbol: 'IRS-LP-92',
      },
      {
        description: 'Yield Aggregator Vault #93Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/93',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/93',
        display: 'YA-Vault-93',
        name: 'YA Vault #93',
        symbol: 'YA-VAULT-93',
      },
      {
        description: 'IRS PT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/pt',
        display: 'PT #93',
        name: 'PT #93',
        symbol: 'IRS-PT-93',
      },
      {
        description: 'IRS YT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/yt',
        display: 'YT #93',
        name: 'YT #93',
        symbol: 'IRS-YT-93',
      },
      {
        description: 'IRS LP #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/ls',
        display: 'LP #93',
        name: 'LP #93',
        symbol: 'IRS-LP-93',
      },
      {
        description: 'Yield Aggregator Vault #94Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/94',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/94',
        display: 'YA-Vault-94',
        name: 'YA Vault #94',
        symbol: 'YA-VAULT-94',
      },
      {
        description: 'IRS PT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/pt',
        display: 'PT #94',
        name: 'PT #94',
        symbol: 'IRS-PT-94',
      },
      {
        description: 'IRS YT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/yt',
        display: 'YT #94',
        name: 'YT #94',
        symbol: 'IRS-YT-94',
      },
      {
        description: 'IRS LP #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/ls',
        display: 'LP #94',
        name: 'LP #94',
        symbol: 'IRS-LP-94',
      },
      {
        description: 'Yield Aggregator Vault #95Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/95',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/95',
        display: 'YA-Vault-95',
        name: 'YA Vault #95',
        symbol: 'YA-VAULT-95',
      },
      {
        description: 'IRS PT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/pt',
        display: 'PT #95',
        name: 'PT #95',
        symbol: 'IRS-PT-95',
      },
      {
        description: 'IRS YT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/yt',
        display: 'YT #95',
        name: 'YT #95',
        symbol: 'IRS-YT-95',
      },
      {
        description: 'IRS LP #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/ls',
        display: 'LP #95',
        name: 'LP #95',
        symbol: 'IRS-LP-95',
      },
      {
        description: 'Yield Aggregator Vault #96Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/96',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/96',
        display: 'YA-Vault-96',
        name: 'YA Vault #96',
        symbol: 'YA-VAULT-96',
      },
      {
        description: 'IRS PT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/pt',
        display: 'PT #96',
        name: 'PT #96',
        symbol: 'IRS-PT-96',
      },
      {
        description: 'IRS YT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/yt',
        display: 'YT #96',
        name: 'YT #96',
        symbol: 'IRS-YT-96',
      },
      {
        description: 'IRS LP #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/ls',
        display: 'LP #96',
        name: 'LP #96',
        symbol: 'IRS-LP-96',
      },
      {
        description: 'Yield Aggregator Vault #97Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/97',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/97',
        display: 'YA-Vault-97',
        name: 'YA Vault #97',
        symbol: 'YA-VAULT-97',
      },
      {
        description: 'IRS PT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/pt',
        display: 'PT #97',
        name: 'PT #97',
        symbol: 'IRS-PT-97',
      },
      {
        description: 'IRS YT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/yt',
        display: 'YT #97',
        name: 'YT #97',
        symbol: 'IRS-YT-97',
      },
      {
        description: 'IRS LP #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/ls',
        display: 'LP #97',
        name: 'LP #97',
        symbol: 'IRS-LP-97',
      },
      {
        description: 'Yield Aggregator Vault #98Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/98',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/98',
        display: 'YA-Vault-98',
        name: 'YA Vault #98',
        symbol: 'YA-VAULT-98',
      },
      {
        description: 'IRS PT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/pt',
        display: 'PT #98',
        name: 'PT #98',
        symbol: 'IRS-PT-98',
      },
      {
        description: 'IRS YT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/yt',
        display: 'YT #98',
        name: 'YT #98',
        symbol: 'IRS-YT-98',
      },
      {
        description: 'IRS LP #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/ls',
        display: 'LP #98',
        name: 'LP #98',
        symbol: 'IRS-LP-98',
      },
      {
        description: 'Yield Aggregator Vault #99Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/99',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/99',
        display: 'YA-Vault-99',
        name: 'YA Vault #99',
        symbol: 'YA-VAULT-99',
      },
      {
        description: 'IRS PT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/pt',
        display: 'PT #99',
        name: 'PT #99',
        symbol: 'IRS-PT-99',
      },
      {
        description: 'IRS YT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/yt',
        display: 'YT #99',
        name: 'YT #99',
        symbol: 'IRS-YT-99',
      },
      {
        description: 'IRS LP #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/ls',
        display: 'LP #99',
        name: 'LP #99',
        symbol: 'IRS-LP-99',
      },
      {
        description: 'Yield Aggregator Vault #0Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/0',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/0',
        display: 'YA-Vault-0',
        name: 'YA Vault #0',
        symbol: 'YA-VAULT-0',
      },
      {
        description: 'IRS PT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/pt',
        display: 'PT #0',
        name: 'PT #0',
        symbol: 'IRS-PT-0',
      },
      {
        description: 'IRS YT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/yt',
        display: 'YT #0',
        name: 'YT #0',
        symbol: 'IRS-YT-0',
      },
      {
        description: 'IRS LP #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/ls',
        display: 'LP #0',
        name: 'LP #0',
        symbol: 'IRS-LP-0',
      },
      {
        description: 'Yield Aggregator Vault #1Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/1',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/1',
        display: 'YA-Vault-1',
        name: 'YA Vault #1',
        symbol: 'YA-VAULT-1',
      },
      {
        description: 'IRS PT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/pt',
        display: 'PT #1',
        name: 'PT #1',
        symbol: 'IRS-PT-1',
      },
      {
        description: 'IRS YT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/yt',
        display: 'YT #1',
        name: 'YT #1',
        symbol: 'IRS-YT-1',
      },
      {
        description: 'IRS LP #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/ls',
        display: 'LP #1',
        name: 'LP #1',
        symbol: 'IRS-LP-1',
      },
      {
        description: 'Yield Aggregator Vault #2Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/2',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/2',
        display: 'YA-Vault-2',
        name: 'YA Vault #2',
        symbol: 'YA-VAULT-2',
      },
      {
        description: 'IRS PT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/pt',
        display: 'PT #2',
        name: 'PT #2',
        symbol: 'IRS-PT-2',
      },
      {
        description: 'IRS YT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/yt',
        display: 'YT #2',
        name: 'YT #2',
        symbol: 'IRS-YT-2',
      },
      {
        description: 'IRS LP #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/ls',
        display: 'LP #2',
        name: 'LP #2',
        symbol: 'IRS-LP-2',
      },
      {
        description: 'Yield Aggregator Vault #3Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/3',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/3',
        display: 'YA-Vault-3',
        name: 'YA Vault #3',
        symbol: 'YA-VAULT-3',
      },
      {
        description: 'IRS PT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/pt',
        display: 'PT #3',
        name: 'PT #3',
        symbol: 'IRS-PT-3',
      },
      {
        description: 'IRS YT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/yt',
        display: 'YT #3',
        name: 'YT #3',
        symbol: 'IRS-YT-3',
      },
      {
        description: 'IRS LP #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/ls',
        display: 'LP #3',
        name: 'LP #3',
        symbol: 'IRS-LP-3',
      },
      {
        description: 'Yield Aggregator Vault #4Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/4',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/4',
        display: 'YA-Vault-4',
        name: 'YA Vault #4',
        symbol: 'YA-VAULT-4',
      },
      {
        description: 'IRS PT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/pt',
        display: 'PT #4',
        name: 'PT #4',
        symbol: 'IRS-PT-4',
      },
      {
        description: 'IRS YT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/yt',
        display: 'YT #4',
        name: 'YT #4',
        symbol: 'IRS-YT-4',
      },
      {
        description: 'IRS LP #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/ls',
        display: 'LP #4',
        name: 'LP #4',
        symbol: 'IRS-LP-4',
      },
      {
        description: 'Yield Aggregator Vault #5Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/5',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/5',
        display: 'YA-Vault-5',
        name: 'YA Vault #5',
        symbol: 'YA-VAULT-5',
      },
      {
        description: 'IRS PT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/pt',
        display: 'PT #5',
        name: 'PT #5',
        symbol: 'IRS-PT-5',
      },
      {
        description: 'IRS YT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/yt',
        display: 'YT #5',
        name: 'YT #5',
        symbol: 'IRS-YT-5',
      },
      {
        description: 'IRS LP #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/ls',
        display: 'LP #5',
        name: 'LP #5',
        symbol: 'IRS-LP-5',
      },
      {
        description: 'Yield Aggregator Vault #6Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/6',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/6',
        display: 'YA-Vault-6',
        name: 'YA Vault #6',
        symbol: 'YA-VAULT-6',
      },
      {
        description: 'IRS PT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/pt',
        display: 'PT #6',
        name: 'PT #6',
        symbol: 'IRS-PT-6',
      },
      {
        description: 'IRS YT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/yt',
        display: 'YT #6',
        name: 'YT #6',
        symbol: 'IRS-YT-6',
      },
      {
        description: 'IRS LP #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/ls',
        display: 'LP #6',
        name: 'LP #6',
        symbol: 'IRS-LP-6',
      },
      {
        description: 'Yield Aggregator Vault #7Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/7',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/7',
        display: 'YA-Vault-7',
        name: 'YA Vault #7',
        symbol: 'YA-VAULT-7',
      },
      {
        description: 'IRS PT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/pt',
        display: 'PT #7',
        name: 'PT #7',
        symbol: 'IRS-PT-7',
      },
      {
        description: 'IRS YT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/yt',
        display: 'YT #7',
        name: 'YT #7',
        symbol: 'IRS-YT-7',
      },
      {
        description: 'IRS LP #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/ls',
        display: 'LP #7',
        name: 'LP #7',
        symbol: 'IRS-LP-7',
      },
      {
        description: 'Yield Aggregator Vault #8Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/8',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/8',
        display: 'YA-Vault-8',
        name: 'YA Vault #8',
        symbol: 'YA-VAULT-8',
      },
      {
        description: 'IRS PT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/pt',
        display: 'PT #8',
        name: 'PT #8',
        symbol: 'IRS-PT-8',
      },
      {
        description: 'IRS YT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/yt',
        display: 'YT #8',
        name: 'YT #8',
        symbol: 'IRS-YT-8',
      },
      {
        description: 'IRS LP #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/ls',
        display: 'LP #8',
        name: 'LP #8',
        symbol: 'IRS-LP-8',
      },
      {
        description: 'Yield Aggregator Vault #9Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/9',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/9',
        display: 'YA-Vault-9',
        name: 'YA Vault #9',
        symbol: 'YA-VAULT-9',
      },
      {
        description: 'IRS PT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/pt',
        display: 'PT #9',
        name: 'PT #9',
        symbol: 'IRS-PT-9',
      },
      {
        description: 'IRS YT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/yt',
        display: 'YT #9',
        name: 'YT #9',
        symbol: 'IRS-YT-9',
      },
      {
        description: 'IRS LP #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/ls',
        display: 'LP #9',
        name: 'LP #9',
        symbol: 'IRS-LP-9',
      },
      {
        description: 'Yield Aggregator Vault #10Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/10',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/10',
        display: 'YA-Vault-10',
        name: 'YA Vault #10',
        symbol: 'YA-VAULT-10',
      },
      {
        description: 'IRS PT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/pt',
        display: 'PT #10',
        name: 'PT #10',
        symbol: 'IRS-PT-10',
      },
      {
        description: 'IRS YT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/yt',
        display: 'YT #10',
        name: 'YT #10',
        symbol: 'IRS-YT-10',
      },
      {
        description: 'IRS LP #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/ls',
        display: 'LP #10',
        name: 'LP #10',
        symbol: 'IRS-LP-10',
      },
      {
        description: 'Yield Aggregator Vault #11Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/11',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/11',
        display: 'YA-Vault-11',
        name: 'YA Vault #11',
        symbol: 'YA-VAULT-11',
      },
      {
        description: 'IRS PT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/pt',
        display: 'PT #11',
        name: 'PT #11',
        symbol: 'IRS-PT-11',
      },
      {
        description: 'IRS YT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/yt',
        display: 'YT #11',
        name: 'YT #11',
        symbol: 'IRS-YT-11',
      },
      {
        description: 'IRS LP #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/ls',
        display: 'LP #11',
        name: 'LP #11',
        symbol: 'IRS-LP-11',
      },
      {
        description: 'Yield Aggregator Vault #12Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/12',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/12',
        display: 'YA-Vault-12',
        name: 'YA Vault #12',
        symbol: 'YA-VAULT-12',
      },
      {
        description: 'IRS PT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/pt',
        display: 'PT #12',
        name: 'PT #12',
        symbol: 'IRS-PT-12',
      },
      {
        description: 'IRS YT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/yt',
        display: 'YT #12',
        name: 'YT #12',
        symbol: 'IRS-YT-12',
      },
      {
        description: 'IRS LP #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/ls',
        display: 'LP #12',
        name: 'LP #12',
        symbol: 'IRS-LP-12',
      },
      {
        description: 'Yield Aggregator Vault #13Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/13',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/13',
        display: 'YA-Vault-13',
        name: 'YA Vault #13',
        symbol: 'YA-VAULT-13',
      },
      {
        description: 'IRS PT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/pt',
        display: 'PT #13',
        name: 'PT #13',
        symbol: 'IRS-PT-13',
      },
      {
        description: 'IRS YT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/yt',
        display: 'YT #13',
        name: 'YT #13',
        symbol: 'IRS-YT-13',
      },
      {
        description: 'IRS LP #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/ls',
        display: 'LP #13',
        name: 'LP #13',
        symbol: 'IRS-LP-13',
      },
      {
        description: 'Yield Aggregator Vault #14Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/14',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/14',
        display: 'YA-Vault-14',
        name: 'YA Vault #14',
        symbol: 'YA-VAULT-14',
      },
      {
        description: 'IRS PT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/pt',
        display: 'PT #14',
        name: 'PT #14',
        symbol: 'IRS-PT-14',
      },
      {
        description: 'IRS YT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/yt',
        display: 'YT #14',
        name: 'YT #14',
        symbol: 'IRS-YT-14',
      },
      {
        description: 'IRS LP #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/ls',
        display: 'LP #14',
        name: 'LP #14',
        symbol: 'IRS-LP-14',
      },
      {
        description: 'Yield Aggregator Vault #15Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/15',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/15',
        display: 'YA-Vault-15',
        name: 'YA Vault #15',
        symbol: 'YA-VAULT-15',
      },
      {
        description: 'IRS PT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/pt',
        display: 'PT #15',
        name: 'PT #15',
        symbol: 'IRS-PT-15',
      },
      {
        description: 'IRS YT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/yt',
        display: 'YT #15',
        name: 'YT #15',
        symbol: 'IRS-YT-15',
      },
      {
        description: 'IRS LP #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/ls',
        display: 'LP #15',
        name: 'LP #15',
        symbol: 'IRS-LP-15',
      },
      {
        description: 'Yield Aggregator Vault #16Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/16',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/16',
        display: 'YA-Vault-16',
        name: 'YA Vault #16',
        symbol: 'YA-VAULT-16',
      },
      {
        description: 'IRS PT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/pt',
        display: 'PT #16',
        name: 'PT #16',
        symbol: 'IRS-PT-16',
      },
      {
        description: 'IRS YT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/yt',
        display: 'YT #16',
        name: 'YT #16',
        symbol: 'IRS-YT-16',
      },
      {
        description: 'IRS LP #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/ls',
        display: 'LP #16',
        name: 'LP #16',
        symbol: 'IRS-LP-16',
      },
      {
        description: 'Yield Aggregator Vault #17Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/17',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/17',
        display: 'YA-Vault-17',
        name: 'YA Vault #17',
        symbol: 'YA-VAULT-17',
      },
      {
        description: 'IRS PT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/pt',
        display: 'PT #17',
        name: 'PT #17',
        symbol: 'IRS-PT-17',
      },
      {
        description: 'IRS YT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/yt',
        display: 'YT #17',
        name: 'YT #17',
        symbol: 'IRS-YT-17',
      },
      {
        description: 'IRS LP #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/ls',
        display: 'LP #17',
        name: 'LP #17',
        symbol: 'IRS-LP-17',
      },
      {
        description: 'Yield Aggregator Vault #18Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/18',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/18',
        display: 'YA-Vault-18',
        name: 'YA Vault #18',
        symbol: 'YA-VAULT-18',
      },
      {
        description: 'IRS PT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/pt',
        display: 'PT #18',
        name: 'PT #18',
        symbol: 'IRS-PT-18',
      },
      {
        description: 'IRS YT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/yt',
        display: 'YT #18',
        name: 'YT #18',
        symbol: 'IRS-YT-18',
      },
      {
        description: 'IRS LP #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/ls',
        display: 'LP #18',
        name: 'LP #18',
        symbol: 'IRS-LP-18',
      },
      {
        description: 'Yield Aggregator Vault #19Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/19',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/19',
        display: 'YA-Vault-19',
        name: 'YA Vault #19',
        symbol: 'YA-VAULT-19',
      },
      {
        description: 'IRS PT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/pt',
        display: 'PT #19',
        name: 'PT #19',
        symbol: 'IRS-PT-19',
      },
      {
        description: 'IRS YT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/yt',
        display: 'YT #19',
        name: 'YT #19',
        symbol: 'IRS-YT-19',
      },
      {
        description: 'IRS LP #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/ls',
        display: 'LP #19',
        name: 'LP #19',
        symbol: 'IRS-LP-19',
      },
      {
        description: 'Yield Aggregator Vault #20Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/20',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/20',
        display: 'YA-Vault-20',
        name: 'YA Vault #20',
        symbol: 'YA-VAULT-20',
      },
      {
        description: 'IRS PT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/pt',
        display: 'PT #20',
        name: 'PT #20',
        symbol: 'IRS-PT-20',
      },
      {
        description: 'IRS YT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/yt',
        display: 'YT #20',
        name: 'YT #20',
        symbol: 'IRS-YT-20',
      },
      {
        description: 'IRS LP #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/ls',
        display: 'LP #20',
        name: 'LP #20',
        symbol: 'IRS-LP-20',
      },
      {
        description: 'Yield Aggregator Vault #21Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/21',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/21',
        display: 'YA-Vault-21',
        name: 'YA Vault #21',
        symbol: 'YA-VAULT-21',
      },
      {
        description: 'IRS PT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/pt',
        display: 'PT #21',
        name: 'PT #21',
        symbol: 'IRS-PT-21',
      },
      {
        description: 'IRS YT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/yt',
        display: 'YT #21',
        name: 'YT #21',
        symbol: 'IRS-YT-21',
      },
      {
        description: 'IRS LP #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/ls',
        display: 'LP #21',
        name: 'LP #21',
        symbol: 'IRS-LP-21',
      },
      {
        description: 'Yield Aggregator Vault #22Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/22',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/22',
        display: 'YA-Vault-22',
        name: 'YA Vault #22',
        symbol: 'YA-VAULT-22',
      },
      {
        description: 'IRS PT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/pt',
        display: 'PT #22',
        name: 'PT #22',
        symbol: 'IRS-PT-22',
      },
      {
        description: 'IRS YT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/yt',
        display: 'YT #22',
        name: 'YT #22',
        symbol: 'IRS-YT-22',
      },
      {
        description: 'IRS LP #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/ls',
        display: 'LP #22',
        name: 'LP #22',
        symbol: 'IRS-LP-22',
      },
      {
        description: 'Yield Aggregator Vault #23Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/23',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/23',
        display: 'YA-Vault-23',
        name: 'YA Vault #23',
        symbol: 'YA-VAULT-23',
      },
      {
        description: 'IRS PT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/pt',
        display: 'PT #23',
        name: 'PT #23',
        symbol: 'IRS-PT-23',
      },
      {
        description: 'IRS YT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/yt',
        display: 'YT #23',
        name: 'YT #23',
        symbol: 'IRS-YT-23',
      },
      {
        description: 'IRS LP #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/ls',
        display: 'LP #23',
        name: 'LP #23',
        symbol: 'IRS-LP-23',
      },
      {
        description: 'Yield Aggregator Vault #24Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/24',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/24',
        display: 'YA-Vault-24',
        name: 'YA Vault #24',
        symbol: 'YA-VAULT-24',
      },
      {
        description: 'IRS PT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/pt',
        display: 'PT #24',
        name: 'PT #24',
        symbol: 'IRS-PT-24',
      },
      {
        description: 'IRS YT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/yt',
        display: 'YT #24',
        name: 'YT #24',
        symbol: 'IRS-YT-24',
      },
      {
        description: 'IRS LP #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/ls',
        display: 'LP #24',
        name: 'LP #24',
        symbol: 'IRS-LP-24',
      },
      {
        description: 'Yield Aggregator Vault #25Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/25',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/25',
        display: 'YA-Vault-25',
        name: 'YA Vault #25',
        symbol: 'YA-VAULT-25',
      },
      {
        description: 'IRS PT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/pt',
        display: 'PT #25',
        name: 'PT #25',
        symbol: 'IRS-PT-25',
      },
      {
        description: 'IRS YT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/yt',
        display: 'YT #25',
        name: 'YT #25',
        symbol: 'IRS-YT-25',
      },
      {
        description: 'IRS LP #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/ls',
        display: 'LP #25',
        name: 'LP #25',
        symbol: 'IRS-LP-25',
      },
      {
        description: 'Yield Aggregator Vault #26Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/26',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/26',
        display: 'YA-Vault-26',
        name: 'YA Vault #26',
        symbol: 'YA-VAULT-26',
      },
      {
        description: 'IRS PT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/pt',
        display: 'PT #26',
        name: 'PT #26',
        symbol: 'IRS-PT-26',
      },
      {
        description: 'IRS YT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/yt',
        display: 'YT #26',
        name: 'YT #26',
        symbol: 'IRS-YT-26',
      },
      {
        description: 'IRS LP #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/ls',
        display: 'LP #26',
        name: 'LP #26',
        symbol: 'IRS-LP-26',
      },
      {
        description: 'Yield Aggregator Vault #27Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/27',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/27',
        display: 'YA-Vault-27',
        name: 'YA Vault #27',
        symbol: 'YA-VAULT-27',
      },
      {
        description: 'IRS PT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/pt',
        display: 'PT #27',
        name: 'PT #27',
        symbol: 'IRS-PT-27',
      },
      {
        description: 'IRS YT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/yt',
        display: 'YT #27',
        name: 'YT #27',
        symbol: 'IRS-YT-27',
      },
      {
        description: 'IRS LP #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/ls',
        display: 'LP #27',
        name: 'LP #27',
        symbol: 'IRS-LP-27',
      },
      {
        description: 'Yield Aggregator Vault #28Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/28',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/28',
        display: 'YA-Vault-28',
        name: 'YA Vault #28',
        symbol: 'YA-VAULT-28',
      },
      {
        description: 'IRS PT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/pt',
        display: 'PT #28',
        name: 'PT #28',
        symbol: 'IRS-PT-28',
      },
      {
        description: 'IRS YT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/yt',
        display: 'YT #28',
        name: 'YT #28',
        symbol: 'IRS-YT-28',
      },
      {
        description: 'IRS LP #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/ls',
        display: 'LP #28',
        name: 'LP #28',
        symbol: 'IRS-LP-28',
      },
      {
        description: 'Yield Aggregator Vault #29Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/29',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/29',
        display: 'YA-Vault-29',
        name: 'YA Vault #29',
        symbol: 'YA-VAULT-29',
      },
      {
        description: 'IRS PT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/pt',
        display: 'PT #29',
        name: 'PT #29',
        symbol: 'IRS-PT-29',
      },
      {
        description: 'IRS YT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/yt',
        display: 'YT #29',
        name: 'YT #29',
        symbol: 'IRS-YT-29',
      },
      {
        description: 'IRS LP #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/ls',
        display: 'LP #29',
        name: 'LP #29',
        symbol: 'IRS-LP-29',
      },
      {
        description: 'Yield Aggregator Vault #30Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/30',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/30',
        display: 'YA-Vault-30',
        name: 'YA Vault #30',
        symbol: 'YA-VAULT-30',
      },
      {
        description: 'IRS PT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/pt',
        display: 'PT #30',
        name: 'PT #30',
        symbol: 'IRS-PT-30',
      },
      {
        description: 'IRS YT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/yt',
        display: 'YT #30',
        name: 'YT #30',
        symbol: 'IRS-YT-30',
      },
      {
        description: 'IRS LP #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/ls',
        display: 'LP #30',
        name: 'LP #30',
        symbol: 'IRS-LP-30',
      },
      {
        description: 'Yield Aggregator Vault #31Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/31',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/31',
        display: 'YA-Vault-31',
        name: 'YA Vault #31',
        symbol: 'YA-VAULT-31',
      },
      {
        description: 'IRS PT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/pt',
        display: 'PT #31',
        name: 'PT #31',
        symbol: 'IRS-PT-31',
      },
      {
        description: 'IRS YT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/yt',
        display: 'YT #31',
        name: 'YT #31',
        symbol: 'IRS-YT-31',
      },
      {
        description: 'IRS LP #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/ls',
        display: 'LP #31',
        name: 'LP #31',
        symbol: 'IRS-LP-31',
      },
      {
        description: 'Yield Aggregator Vault #32Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/32',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/32',
        display: 'YA-Vault-32',
        name: 'YA Vault #32',
        symbol: 'YA-VAULT-32',
      },
      {
        description: 'IRS PT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/pt',
        display: 'PT #32',
        name: 'PT #32',
        symbol: 'IRS-PT-32',
      },
      {
        description: 'IRS YT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/yt',
        display: 'YT #32',
        name: 'YT #32',
        symbol: 'IRS-YT-32',
      },
      {
        description: 'IRS LP #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/ls',
        display: 'LP #32',
        name: 'LP #32',
        symbol: 'IRS-LP-32',
      },
      {
        description: 'Yield Aggregator Vault #33Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/33',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/33',
        display: 'YA-Vault-33',
        name: 'YA Vault #33',
        symbol: 'YA-VAULT-33',
      },
      {
        description: 'IRS PT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/pt',
        display: 'PT #33',
        name: 'PT #33',
        symbol: 'IRS-PT-33',
      },
      {
        description: 'IRS YT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/yt',
        display: 'YT #33',
        name: 'YT #33',
        symbol: 'IRS-YT-33',
      },
      {
        description: 'IRS LP #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/ls',
        display: 'LP #33',
        name: 'LP #33',
        symbol: 'IRS-LP-33',
      },
      {
        description: 'Yield Aggregator Vault #34Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/34',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/34',
        display: 'YA-Vault-34',
        name: 'YA Vault #34',
        symbol: 'YA-VAULT-34',
      },
      {
        description: 'IRS PT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/pt',
        display: 'PT #34',
        name: 'PT #34',
        symbol: 'IRS-PT-34',
      },
      {
        description: 'IRS YT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/yt',
        display: 'YT #34',
        name: 'YT #34',
        symbol: 'IRS-YT-34',
      },
      {
        description: 'IRS LP #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/ls',
        display: 'LP #34',
        name: 'LP #34',
        symbol: 'IRS-LP-34',
      },
      {
        description: 'Yield Aggregator Vault #35Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/35',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/35',
        display: 'YA-Vault-35',
        name: 'YA Vault #35',
        symbol: 'YA-VAULT-35',
      },
      {
        description: 'IRS PT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/pt',
        display: 'PT #35',
        name: 'PT #35',
        symbol: 'IRS-PT-35',
      },
      {
        description: 'IRS YT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/yt',
        display: 'YT #35',
        name: 'YT #35',
        symbol: 'IRS-YT-35',
      },
      {
        description: 'IRS LP #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/ls',
        display: 'LP #35',
        name: 'LP #35',
        symbol: 'IRS-LP-35',
      },
      {
        description: 'Yield Aggregator Vault #36Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/36',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/36',
        display: 'YA-Vault-36',
        name: 'YA Vault #36',
        symbol: 'YA-VAULT-36',
      },
      {
        description: 'IRS PT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/pt',
        display: 'PT #36',
        name: 'PT #36',
        symbol: 'IRS-PT-36',
      },
      {
        description: 'IRS YT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/yt',
        display: 'YT #36',
        name: 'YT #36',
        symbol: 'IRS-YT-36',
      },
      {
        description: 'IRS LP #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/ls',
        display: 'LP #36',
        name: 'LP #36',
        symbol: 'IRS-LP-36',
      },
      {
        description: 'Yield Aggregator Vault #37Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/37',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/37',
        display: 'YA-Vault-37',
        name: 'YA Vault #37',
        symbol: 'YA-VAULT-37',
      },
      {
        description: 'IRS PT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/pt',
        display: 'PT #37',
        name: 'PT #37',
        symbol: 'IRS-PT-37',
      },
      {
        description: 'IRS YT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/yt',
        display: 'YT #37',
        name: 'YT #37',
        symbol: 'IRS-YT-37',
      },
      {
        description: 'IRS LP #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/ls',
        display: 'LP #37',
        name: 'LP #37',
        symbol: 'IRS-LP-37',
      },
      {
        description: 'Yield Aggregator Vault #38Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/38',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/38',
        display: 'YA-Vault-38',
        name: 'YA Vault #38',
        symbol: 'YA-VAULT-38',
      },
      {
        description: 'IRS PT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/pt',
        display: 'PT #38',
        name: 'PT #38',
        symbol: 'IRS-PT-38',
      },
      {
        description: 'IRS YT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/yt',
        display: 'YT #38',
        name: 'YT #38',
        symbol: 'IRS-YT-38',
      },
      {
        description: 'IRS LP #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/ls',
        display: 'LP #38',
        name: 'LP #38',
        symbol: 'IRS-LP-38',
      },
      {
        description: 'Yield Aggregator Vault #39Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/39',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/39',
        display: 'YA-Vault-39',
        name: 'YA Vault #39',
        symbol: 'YA-VAULT-39',
      },
      {
        description: 'IRS PT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/pt',
        display: 'PT #39',
        name: 'PT #39',
        symbol: 'IRS-PT-39',
      },
      {
        description: 'IRS YT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/yt',
        display: 'YT #39',
        name: 'YT #39',
        symbol: 'IRS-YT-39',
      },
      {
        description: 'IRS LP #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/ls',
        display: 'LP #39',
        name: 'LP #39',
        symbol: 'IRS-LP-39',
      },
      {
        description: 'Yield Aggregator Vault #40Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/40',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/40',
        display: 'YA-Vault-40',
        name: 'YA Vault #40',
        symbol: 'YA-VAULT-40',
      },
      {
        description: 'IRS PT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/pt',
        display: 'PT #40',
        name: 'PT #40',
        symbol: 'IRS-PT-40',
      },
      {
        description: 'IRS YT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/yt',
        display: 'YT #40',
        name: 'YT #40',
        symbol: 'IRS-YT-40',
      },
      {
        description: 'IRS LP #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/ls',
        display: 'LP #40',
        name: 'LP #40',
        symbol: 'IRS-LP-40',
      },
      {
        description: 'Yield Aggregator Vault #41Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/41',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/41',
        display: 'YA-Vault-41',
        name: 'YA Vault #41',
        symbol: 'YA-VAULT-41',
      },
      {
        description: 'IRS PT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/pt',
        display: 'PT #41',
        name: 'PT #41',
        symbol: 'IRS-PT-41',
      },
      {
        description: 'IRS YT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/yt',
        display: 'YT #41',
        name: 'YT #41',
        symbol: 'IRS-YT-41',
      },
      {
        description: 'IRS LP #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/ls',
        display: 'LP #41',
        name: 'LP #41',
        symbol: 'IRS-LP-41',
      },
      {
        description: 'Yield Aggregator Vault #42Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/42',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/42',
        display: 'YA-Vault-42',
        name: 'YA Vault #42',
        symbol: 'YA-VAULT-42',
      },
      {
        description: 'IRS PT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/pt',
        display: 'PT #42',
        name: 'PT #42',
        symbol: 'IRS-PT-42',
      },
      {
        description: 'IRS YT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/yt',
        display: 'YT #42',
        name: 'YT #42',
        symbol: 'IRS-YT-42',
      },
      {
        description: 'IRS LP #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/ls',
        display: 'LP #42',
        name: 'LP #42',
        symbol: 'IRS-LP-42',
      },
      {
        description: 'Yield Aggregator Vault #43Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/43',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/43',
        display: 'YA-Vault-43',
        name: 'YA Vault #43',
        symbol: 'YA-VAULT-43',
      },
      {
        description: 'IRS PT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/pt',
        display: 'PT #43',
        name: 'PT #43',
        symbol: 'IRS-PT-43',
      },
      {
        description: 'IRS YT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/yt',
        display: 'YT #43',
        name: 'YT #43',
        symbol: 'IRS-YT-43',
      },
      {
        description: 'IRS LP #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/ls',
        display: 'LP #43',
        name: 'LP #43',
        symbol: 'IRS-LP-43',
      },
      {
        description: 'Yield Aggregator Vault #44Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/44',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/44',
        display: 'YA-Vault-44',
        name: 'YA Vault #44',
        symbol: 'YA-VAULT-44',
      },
      {
        description: 'IRS PT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/pt',
        display: 'PT #44',
        name: 'PT #44',
        symbol: 'IRS-PT-44',
      },
      {
        description: 'IRS YT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/yt',
        display: 'YT #44',
        name: 'YT #44',
        symbol: 'IRS-YT-44',
      },
      {
        description: 'IRS LP #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/ls',
        display: 'LP #44',
        name: 'LP #44',
        symbol: 'IRS-LP-44',
      },
      {
        description: 'Yield Aggregator Vault #45Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/45',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/45',
        display: 'YA-Vault-45',
        name: 'YA Vault #45',
        symbol: 'YA-VAULT-45',
      },
      {
        description: 'IRS PT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/pt',
        display: 'PT #45',
        name: 'PT #45',
        symbol: 'IRS-PT-45',
      },
      {
        description: 'IRS YT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/yt',
        display: 'YT #45',
        name: 'YT #45',
        symbol: 'IRS-YT-45',
      },
      {
        description: 'IRS LP #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/ls',
        display: 'LP #45',
        name: 'LP #45',
        symbol: 'IRS-LP-45',
      },
      {
        description: 'Yield Aggregator Vault #46Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/46',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/46',
        display: 'YA-Vault-46',
        name: 'YA Vault #46',
        symbol: 'YA-VAULT-46',
      },
      {
        description: 'IRS PT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/pt',
        display: 'PT #46',
        name: 'PT #46',
        symbol: 'IRS-PT-46',
      },
      {
        description: 'IRS YT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/yt',
        display: 'YT #46',
        name: 'YT #46',
        symbol: 'IRS-YT-46',
      },
      {
        description: 'IRS LP #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/ls',
        display: 'LP #46',
        name: 'LP #46',
        symbol: 'IRS-LP-46',
      },
      {
        description: 'Yield Aggregator Vault #47Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/47',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/47',
        display: 'YA-Vault-47',
        name: 'YA Vault #47',
        symbol: 'YA-VAULT-47',
      },
      {
        description: 'IRS PT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/pt',
        display: 'PT #47',
        name: 'PT #47',
        symbol: 'IRS-PT-47',
      },
      {
        description: 'IRS YT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/yt',
        display: 'YT #47',
        name: 'YT #47',
        symbol: 'IRS-YT-47',
      },
      {
        description: 'IRS LP #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/ls',
        display: 'LP #47',
        name: 'LP #47',
        symbol: 'IRS-LP-47',
      },
      {
        description: 'Yield Aggregator Vault #48Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/48',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/48',
        display: 'YA-Vault-48',
        name: 'YA Vault #48',
        symbol: 'YA-VAULT-48',
      },
      {
        description: 'IRS PT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/pt',
        display: 'PT #48',
        name: 'PT #48',
        symbol: 'IRS-PT-48',
      },
      {
        description: 'IRS YT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/yt',
        display: 'YT #48',
        name: 'YT #48',
        symbol: 'IRS-YT-48',
      },
      {
        description: 'IRS LP #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/ls',
        display: 'LP #48',
        name: 'LP #48',
        symbol: 'IRS-LP-48',
      },
      {
        description: 'Yield Aggregator Vault #49Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/49',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/49',
        display: 'YA-Vault-49',
        name: 'YA Vault #49',
        symbol: 'YA-VAULT-49',
      },
      {
        description: 'IRS PT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/pt',
        display: 'PT #49',
        name: 'PT #49',
        symbol: 'IRS-PT-49',
      },
      {
        description: 'IRS YT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/yt',
        display: 'YT #49',
        name: 'YT #49',
        symbol: 'IRS-YT-49',
      },
      {
        description: 'IRS LP #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/ls',
        display: 'LP #49',
        name: 'LP #49',
        symbol: 'IRS-LP-49',
      },
      {
        description: 'Yield Aggregator Vault #50Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/50',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/50',
        display: 'YA-Vault-50',
        name: 'YA Vault #50',
        symbol: 'YA-VAULT-50',
      },
      {
        description: 'IRS PT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/pt',
        display: 'PT #50',
        name: 'PT #50',
        symbol: 'IRS-PT-50',
      },
      {
        description: 'IRS YT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/yt',
        display: 'YT #50',
        name: 'YT #50',
        symbol: 'IRS-YT-50',
      },
      {
        description: 'IRS LP #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/ls',
        display: 'LP #50',
        name: 'LP #50',
        symbol: 'IRS-LP-50',
      },
      {
        description: 'Yield Aggregator Vault #51Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/51',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/51',
        display: 'YA-Vault-51',
        name: 'YA Vault #51',
        symbol: 'YA-VAULT-51',
      },
      {
        description: 'IRS PT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/pt',
        display: 'PT #51',
        name: 'PT #51',
        symbol: 'IRS-PT-51',
      },
      {
        description: 'IRS YT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/yt',
        display: 'YT #51',
        name: 'YT #51',
        symbol: 'IRS-YT-51',
      },
      {
        description: 'IRS LP #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/ls',
        display: 'LP #51',
        name: 'LP #51',
        symbol: 'IRS-LP-51',
      },
      {
        description: 'Yield Aggregator Vault #52Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/52',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/52',
        display: 'YA-Vault-52',
        name: 'YA Vault #52',
        symbol: 'YA-VAULT-52',
      },
      {
        description: 'IRS PT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/pt',
        display: 'PT #52',
        name: 'PT #52',
        symbol: 'IRS-PT-52',
      },
      {
        description: 'IRS YT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/yt',
        display: 'YT #52',
        name: 'YT #52',
        symbol: 'IRS-YT-52',
      },
      {
        description: 'IRS LP #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/ls',
        display: 'LP #52',
        name: 'LP #52',
        symbol: 'IRS-LP-52',
      },
      {
        description: 'Yield Aggregator Vault #53Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/53',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/53',
        display: 'YA-Vault-53',
        name: 'YA Vault #53',
        symbol: 'YA-VAULT-53',
      },
      {
        description: 'IRS PT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/pt',
        display: 'PT #53',
        name: 'PT #53',
        symbol: 'IRS-PT-53',
      },
      {
        description: 'IRS YT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/yt',
        display: 'YT #53',
        name: 'YT #53',
        symbol: 'IRS-YT-53',
      },
      {
        description: 'IRS LP #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/ls',
        display: 'LP #53',
        name: 'LP #53',
        symbol: 'IRS-LP-53',
      },
      {
        description: 'Yield Aggregator Vault #54Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/54',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/54',
        display: 'YA-Vault-54',
        name: 'YA Vault #54',
        symbol: 'YA-VAULT-54',
      },
      {
        description: 'IRS PT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/pt',
        display: 'PT #54',
        name: 'PT #54',
        symbol: 'IRS-PT-54',
      },
      {
        description: 'IRS YT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/yt',
        display: 'YT #54',
        name: 'YT #54',
        symbol: 'IRS-YT-54',
      },
      {
        description: 'IRS LP #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/ls',
        display: 'LP #54',
        name: 'LP #54',
        symbol: 'IRS-LP-54',
      },
      {
        description: 'Yield Aggregator Vault #55Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/55',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/55',
        display: 'YA-Vault-55',
        name: 'YA Vault #55',
        symbol: 'YA-VAULT-55',
      },
      {
        description: 'IRS PT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/pt',
        display: 'PT #55',
        name: 'PT #55',
        symbol: 'IRS-PT-55',
      },
      {
        description: 'IRS YT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/yt',
        display: 'YT #55',
        name: 'YT #55',
        symbol: 'IRS-YT-55',
      },
      {
        description: 'IRS LP #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/ls',
        display: 'LP #55',
        name: 'LP #55',
        symbol: 'IRS-LP-55',
      },
      {
        description: 'Yield Aggregator Vault #56Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/56',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/56',
        display: 'YA-Vault-56',
        name: 'YA Vault #56',
        symbol: 'YA-VAULT-56',
      },
      {
        description: 'IRS PT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/pt',
        display: 'PT #56',
        name: 'PT #56',
        symbol: 'IRS-PT-56',
      },
      {
        description: 'IRS YT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/yt',
        display: 'YT #56',
        name: 'YT #56',
        symbol: 'IRS-YT-56',
      },
      {
        description: 'IRS LP #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/ls',
        display: 'LP #56',
        name: 'LP #56',
        symbol: 'IRS-LP-56',
      },
      {
        description: 'Yield Aggregator Vault #57Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/57',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/57',
        display: 'YA-Vault-57',
        name: 'YA Vault #57',
        symbol: 'YA-VAULT-57',
      },
      {
        description: 'IRS PT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/pt',
        display: 'PT #57',
        name: 'PT #57',
        symbol: 'IRS-PT-57',
      },
      {
        description: 'IRS YT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/yt',
        display: 'YT #57',
        name: 'YT #57',
        symbol: 'IRS-YT-57',
      },
      {
        description: 'IRS LP #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/ls',
        display: 'LP #57',
        name: 'LP #57',
        symbol: 'IRS-LP-57',
      },
      {
        description: 'Yield Aggregator Vault #58Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/58',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/58',
        display: 'YA-Vault-58',
        name: 'YA Vault #58',
        symbol: 'YA-VAULT-58',
      },
      {
        description: 'IRS PT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/pt',
        display: 'PT #58',
        name: 'PT #58',
        symbol: 'IRS-PT-58',
      },
      {
        description: 'IRS YT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/yt',
        display: 'YT #58',
        name: 'YT #58',
        symbol: 'IRS-YT-58',
      },
      {
        description: 'IRS LP #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/ls',
        display: 'LP #58',
        name: 'LP #58',
        symbol: 'IRS-LP-58',
      },
      {
        description: 'Yield Aggregator Vault #59Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/59',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/59',
        display: 'YA-Vault-59',
        name: 'YA Vault #59',
        symbol: 'YA-VAULT-59',
      },
      {
        description: 'IRS PT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/pt',
        display: 'PT #59',
        name: 'PT #59',
        symbol: 'IRS-PT-59',
      },
      {
        description: 'IRS YT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/yt',
        display: 'YT #59',
        name: 'YT #59',
        symbol: 'IRS-YT-59',
      },
      {
        description: 'IRS LP #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/ls',
        display: 'LP #59',
        name: 'LP #59',
        symbol: 'IRS-LP-59',
      },
      {
        description: 'Yield Aggregator Vault #60Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/60',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/60',
        display: 'YA-Vault-60',
        name: 'YA Vault #60',
        symbol: 'YA-VAULT-60',
      },
      {
        description: 'IRS PT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/pt',
        display: 'PT #60',
        name: 'PT #60',
        symbol: 'IRS-PT-60',
      },
      {
        description: 'IRS YT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/yt',
        display: 'YT #60',
        name: 'YT #60',
        symbol: 'IRS-YT-60',
      },
      {
        description: 'IRS LP #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/ls',
        display: 'LP #60',
        name: 'LP #60',
        symbol: 'IRS-LP-60',
      },
      {
        description: 'Yield Aggregator Vault #61Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/61',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/61',
        display: 'YA-Vault-61',
        name: 'YA Vault #61',
        symbol: 'YA-VAULT-61',
      },
      {
        description: 'IRS PT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/pt',
        display: 'PT #61',
        name: 'PT #61',
        symbol: 'IRS-PT-61',
      },
      {
        description: 'IRS YT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/yt',
        display: 'YT #61',
        name: 'YT #61',
        symbol: 'IRS-YT-61',
      },
      {
        description: 'IRS LP #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/ls',
        display: 'LP #61',
        name: 'LP #61',
        symbol: 'IRS-LP-61',
      },
      {
        description: 'Yield Aggregator Vault #62Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/62',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/62',
        display: 'YA-Vault-62',
        name: 'YA Vault #62',
        symbol: 'YA-VAULT-62',
      },
      {
        description: 'IRS PT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/pt',
        display: 'PT #62',
        name: 'PT #62',
        symbol: 'IRS-PT-62',
      },
      {
        description: 'IRS YT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/yt',
        display: 'YT #62',
        name: 'YT #62',
        symbol: 'IRS-YT-62',
      },
      {
        description: 'IRS LP #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/ls',
        display: 'LP #62',
        name: 'LP #62',
        symbol: 'IRS-LP-62',
      },
      {
        description: 'Yield Aggregator Vault #63Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/63',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/63',
        display: 'YA-Vault-63',
        name: 'YA Vault #63',
        symbol: 'YA-VAULT-63',
      },
      {
        description: 'IRS PT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/pt',
        display: 'PT #63',
        name: 'PT #63',
        symbol: 'IRS-PT-63',
      },
      {
        description: 'IRS YT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/yt',
        display: 'YT #63',
        name: 'YT #63',
        symbol: 'IRS-YT-63',
      },
      {
        description: 'IRS LP #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/ls',
        display: 'LP #63',
        name: 'LP #63',
        symbol: 'IRS-LP-63',
      },
      {
        description: 'Yield Aggregator Vault #64Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/64',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/64',
        display: 'YA-Vault-64',
        name: 'YA Vault #64',
        symbol: 'YA-VAULT-64',
      },
      {
        description: 'IRS PT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/pt',
        display: 'PT #64',
        name: 'PT #64',
        symbol: 'IRS-PT-64',
      },
      {
        description: 'IRS YT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/yt',
        display: 'YT #64',
        name: 'YT #64',
        symbol: 'IRS-YT-64',
      },
      {
        description: 'IRS LP #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/ls',
        display: 'LP #64',
        name: 'LP #64',
        symbol: 'IRS-LP-64',
      },
      {
        description: 'Yield Aggregator Vault #65Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/65',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/65',
        display: 'YA-Vault-65',
        name: 'YA Vault #65',
        symbol: 'YA-VAULT-65',
      },
      {
        description: 'IRS PT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/pt',
        display: 'PT #65',
        name: 'PT #65',
        symbol: 'IRS-PT-65',
      },
      {
        description: 'IRS YT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/yt',
        display: 'YT #65',
        name: 'YT #65',
        symbol: 'IRS-YT-65',
      },
      {
        description: 'IRS LP #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/ls',
        display: 'LP #65',
        name: 'LP #65',
        symbol: 'IRS-LP-65',
      },
      {
        description: 'Yield Aggregator Vault #66Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/66',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/66',
        display: 'YA-Vault-66',
        name: 'YA Vault #66',
        symbol: 'YA-VAULT-66',
      },
      {
        description: 'IRS PT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/pt',
        display: 'PT #66',
        name: 'PT #66',
        symbol: 'IRS-PT-66',
      },
      {
        description: 'IRS YT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/yt',
        display: 'YT #66',
        name: 'YT #66',
        symbol: 'IRS-YT-66',
      },
      {
        description: 'IRS LP #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/ls',
        display: 'LP #66',
        name: 'LP #66',
        symbol: 'IRS-LP-66',
      },
      {
        description: 'Yield Aggregator Vault #67Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/67',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/67',
        display: 'YA-Vault-67',
        name: 'YA Vault #67',
        symbol: 'YA-VAULT-67',
      },
      {
        description: 'IRS PT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/pt',
        display: 'PT #67',
        name: 'PT #67',
        symbol: 'IRS-PT-67',
      },
      {
        description: 'IRS YT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/yt',
        display: 'YT #67',
        name: 'YT #67',
        symbol: 'IRS-YT-67',
      },
      {
        description: 'IRS LP #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/ls',
        display: 'LP #67',
        name: 'LP #67',
        symbol: 'IRS-LP-67',
      },
      {
        description: 'Yield Aggregator Vault #68Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/68',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/68',
        display: 'YA-Vault-68',
        name: 'YA Vault #68',
        symbol: 'YA-VAULT-68',
      },
      {
        description: 'IRS PT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/pt',
        display: 'PT #68',
        name: 'PT #68',
        symbol: 'IRS-PT-68',
      },
      {
        description: 'IRS YT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/yt',
        display: 'YT #68',
        name: 'YT #68',
        symbol: 'IRS-YT-68',
      },
      {
        description: 'IRS LP #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/ls',
        display: 'LP #68',
        name: 'LP #68',
        symbol: 'IRS-LP-68',
      },
      {
        description: 'Yield Aggregator Vault #69Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/69',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/69',
        display: 'YA-Vault-69',
        name: 'YA Vault #69',
        symbol: 'YA-VAULT-69',
      },
      {
        description: 'IRS PT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/pt',
        display: 'PT #69',
        name: 'PT #69',
        symbol: 'IRS-PT-69',
      },
      {
        description: 'IRS YT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/yt',
        display: 'YT #69',
        name: 'YT #69',
        symbol: 'IRS-YT-69',
      },
      {
        description: 'IRS LP #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/ls',
        display: 'LP #69',
        name: 'LP #69',
        symbol: 'IRS-LP-69',
      },
      {
        description: 'Yield Aggregator Vault #70Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/70',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/70',
        display: 'YA-Vault-70',
        name: 'YA Vault #70',
        symbol: 'YA-VAULT-70',
      },
      {
        description: 'IRS PT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/pt',
        display: 'PT #70',
        name: 'PT #70',
        symbol: 'IRS-PT-70',
      },
      {
        description: 'IRS YT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/yt',
        display: 'YT #70',
        name: 'YT #70',
        symbol: 'IRS-YT-70',
      },
      {
        description: 'IRS LP #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/ls',
        display: 'LP #70',
        name: 'LP #70',
        symbol: 'IRS-LP-70',
      },
      {
        description: 'Yield Aggregator Vault #71Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/71',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/71',
        display: 'YA-Vault-71',
        name: 'YA Vault #71',
        symbol: 'YA-VAULT-71',
      },
      {
        description: 'IRS PT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/pt',
        display: 'PT #71',
        name: 'PT #71',
        symbol: 'IRS-PT-71',
      },
      {
        description: 'IRS YT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/yt',
        display: 'YT #71',
        name: 'YT #71',
        symbol: 'IRS-YT-71',
      },
      {
        description: 'IRS LP #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/ls',
        display: 'LP #71',
        name: 'LP #71',
        symbol: 'IRS-LP-71',
      },
      {
        description: 'Yield Aggregator Vault #72Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/72',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/72',
        display: 'YA-Vault-72',
        name: 'YA Vault #72',
        symbol: 'YA-VAULT-72',
      },
      {
        description: 'IRS PT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/pt',
        display: 'PT #72',
        name: 'PT #72',
        symbol: 'IRS-PT-72',
      },
      {
        description: 'IRS YT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/yt',
        display: 'YT #72',
        name: 'YT #72',
        symbol: 'IRS-YT-72',
      },
      {
        description: 'IRS LP #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/ls',
        display: 'LP #72',
        name: 'LP #72',
        symbol: 'IRS-LP-72',
      },
      {
        description: 'Yield Aggregator Vault #73Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/73',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/73',
        display: 'YA-Vault-73',
        name: 'YA Vault #73',
        symbol: 'YA-VAULT-73',
      },
      {
        description: 'IRS PT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/pt',
        display: 'PT #73',
        name: 'PT #73',
        symbol: 'IRS-PT-73',
      },
      {
        description: 'IRS YT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/yt',
        display: 'YT #73',
        name: 'YT #73',
        symbol: 'IRS-YT-73',
      },
      {
        description: 'IRS LP #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/ls',
        display: 'LP #73',
        name: 'LP #73',
        symbol: 'IRS-LP-73',
      },
      {
        description: 'Yield Aggregator Vault #74Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/74',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/74',
        display: 'YA-Vault-74',
        name: 'YA Vault #74',
        symbol: 'YA-VAULT-74',
      },
      {
        description: 'IRS PT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/pt',
        display: 'PT #74',
        name: 'PT #74',
        symbol: 'IRS-PT-74',
      },
      {
        description: 'IRS YT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/yt',
        display: 'YT #74',
        name: 'YT #74',
        symbol: 'IRS-YT-74',
      },
      {
        description: 'IRS LP #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/ls',
        display: 'LP #74',
        name: 'LP #74',
        symbol: 'IRS-LP-74',
      },
      {
        description: 'Yield Aggregator Vault #75Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/75',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/75',
        display: 'YA-Vault-75',
        name: 'YA Vault #75',
        symbol: 'YA-VAULT-75',
      },
      {
        description: 'IRS PT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/pt',
        display: 'PT #75',
        name: 'PT #75',
        symbol: 'IRS-PT-75',
      },
      {
        description: 'IRS YT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/yt',
        display: 'YT #75',
        name: 'YT #75',
        symbol: 'IRS-YT-75',
      },
      {
        description: 'IRS LP #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/ls',
        display: 'LP #75',
        name: 'LP #75',
        symbol: 'IRS-LP-75',
      },
      {
        description: 'Yield Aggregator Vault #76Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/76',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/76',
        display: 'YA-Vault-76',
        name: 'YA Vault #76',
        symbol: 'YA-VAULT-76',
      },
      {
        description: 'IRS PT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/pt',
        display: 'PT #76',
        name: 'PT #76',
        symbol: 'IRS-PT-76',
      },
      {
        description: 'IRS YT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/yt',
        display: 'YT #76',
        name: 'YT #76',
        symbol: 'IRS-YT-76',
      },
      {
        description: 'IRS LP #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/ls',
        display: 'LP #76',
        name: 'LP #76',
        symbol: 'IRS-LP-76',
      },
      {
        description: 'Yield Aggregator Vault #77Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/77',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/77',
        display: 'YA-Vault-77',
        name: 'YA Vault #77',
        symbol: 'YA-VAULT-77',
      },
      {
        description: 'IRS PT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/pt',
        display: 'PT #77',
        name: 'PT #77',
        symbol: 'IRS-PT-77',
      },
      {
        description: 'IRS YT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/yt',
        display: 'YT #77',
        name: 'YT #77',
        symbol: 'IRS-YT-77',
      },
      {
        description: 'IRS LP #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/ls',
        display: 'LP #77',
        name: 'LP #77',
        symbol: 'IRS-LP-77',
      },
      {
        description: 'Yield Aggregator Vault #78Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/78',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/78',
        display: 'YA-Vault-78',
        name: 'YA Vault #78',
        symbol: 'YA-VAULT-78',
      },
      {
        description: 'IRS PT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/pt',
        display: 'PT #78',
        name: 'PT #78',
        symbol: 'IRS-PT-78',
      },
      {
        description: 'IRS YT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/yt',
        display: 'YT #78',
        name: 'YT #78',
        symbol: 'IRS-YT-78',
      },
      {
        description: 'IRS LP #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/ls',
        display: 'LP #78',
        name: 'LP #78',
        symbol: 'IRS-LP-78',
      },
      {
        description: 'Yield Aggregator Vault #79Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/79',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/79',
        display: 'YA-Vault-79',
        name: 'YA Vault #79',
        symbol: 'YA-VAULT-79',
      },
      {
        description: 'IRS PT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/pt',
        display: 'PT #79',
        name: 'PT #79',
        symbol: 'IRS-PT-79',
      },
      {
        description: 'IRS YT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/yt',
        display: 'YT #79',
        name: 'YT #79',
        symbol: 'IRS-YT-79',
      },
      {
        description: 'IRS LP #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/ls',
        display: 'LP #79',
        name: 'LP #79',
        symbol: 'IRS-LP-79',
      },
      {
        description: 'Yield Aggregator Vault #80Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/80',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/80',
        display: 'YA-Vault-80',
        name: 'YA Vault #80',
        symbol: 'YA-VAULT-80',
      },
      {
        description: 'IRS PT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/pt',
        display: 'PT #80',
        name: 'PT #80',
        symbol: 'IRS-PT-80',
      },
      {
        description: 'IRS YT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/yt',
        display: 'YT #80',
        name: 'YT #80',
        symbol: 'IRS-YT-80',
      },
      {
        description: 'IRS LP #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/ls',
        display: 'LP #80',
        name: 'LP #80',
        symbol: 'IRS-LP-80',
      },
      {
        description: 'Yield Aggregator Vault #81Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/81',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/81',
        display: 'YA-Vault-81',
        name: 'YA Vault #81',
        symbol: 'YA-VAULT-81',
      },
      {
        description: 'IRS PT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/pt',
        display: 'PT #81',
        name: 'PT #81',
        symbol: 'IRS-PT-81',
      },
      {
        description: 'IRS YT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/yt',
        display: 'YT #81',
        name: 'YT #81',
        symbol: 'IRS-YT-81',
      },
      {
        description: 'IRS LP #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/ls',
        display: 'LP #81',
        name: 'LP #81',
        symbol: 'IRS-LP-81',
      },
      {
        description: 'Yield Aggregator Vault #82Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/82',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/82',
        display: 'YA-Vault-82',
        name: 'YA Vault #82',
        symbol: 'YA-VAULT-82',
      },
      {
        description: 'IRS PT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/pt',
        display: 'PT #82',
        name: 'PT #82',
        symbol: 'IRS-PT-82',
      },
      {
        description: 'IRS YT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/yt',
        display: 'YT #82',
        name: 'YT #82',
        symbol: 'IRS-YT-82',
      },
      {
        description: 'IRS LP #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/ls',
        display: 'LP #82',
        name: 'LP #82',
        symbol: 'IRS-LP-82',
      },
      {
        description: 'Yield Aggregator Vault #83Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/83',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/83',
        display: 'YA-Vault-83',
        name: 'YA Vault #83',
        symbol: 'YA-VAULT-83',
      },
      {
        description: 'IRS PT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/pt',
        display: 'PT #83',
        name: 'PT #83',
        symbol: 'IRS-PT-83',
      },
      {
        description: 'IRS YT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/yt',
        display: 'YT #83',
        name: 'YT #83',
        symbol: 'IRS-YT-83',
      },
      {
        description: 'IRS LP #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/ls',
        display: 'LP #83',
        name: 'LP #83',
        symbol: 'IRS-LP-83',
      },
      {
        description: 'Yield Aggregator Vault #84Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/84',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/84',
        display: 'YA-Vault-84',
        name: 'YA Vault #84',
        symbol: 'YA-VAULT-84',
      },
      {
        description: 'IRS PT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/pt',
        display: 'PT #84',
        name: 'PT #84',
        symbol: 'IRS-PT-84',
      },
      {
        description: 'IRS YT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/yt',
        display: 'YT #84',
        name: 'YT #84',
        symbol: 'IRS-YT-84',
      },
      {
        description: 'IRS LP #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/ls',
        display: 'LP #84',
        name: 'LP #84',
        symbol: 'IRS-LP-84',
      },
      {
        description: 'Yield Aggregator Vault #85Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/85',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/85',
        display: 'YA-Vault-85',
        name: 'YA Vault #85',
        symbol: 'YA-VAULT-85',
      },
      {
        description: 'IRS PT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/pt',
        display: 'PT #85',
        name: 'PT #85',
        symbol: 'IRS-PT-85',
      },
      {
        description: 'IRS YT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/yt',
        display: 'YT #85',
        name: 'YT #85',
        symbol: 'IRS-YT-85',
      },
      {
        description: 'IRS LP #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/ls',
        display: 'LP #85',
        name: 'LP #85',
        symbol: 'IRS-LP-85',
      },
      {
        description: 'Yield Aggregator Vault #86Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/86',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/86',
        display: 'YA-Vault-86',
        name: 'YA Vault #86',
        symbol: 'YA-VAULT-86',
      },
      {
        description: 'IRS PT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/pt',
        display: 'PT #86',
        name: 'PT #86',
        symbol: 'IRS-PT-86',
      },
      {
        description: 'IRS YT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/yt',
        display: 'YT #86',
        name: 'YT #86',
        symbol: 'IRS-YT-86',
      },
      {
        description: 'IRS LP #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/ls',
        display: 'LP #86',
        name: 'LP #86',
        symbol: 'IRS-LP-86',
      },
      {
        description: 'Yield Aggregator Vault #87Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/87',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/87',
        display: 'YA-Vault-87',
        name: 'YA Vault #87',
        symbol: 'YA-VAULT-87',
      },
      {
        description: 'IRS PT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/pt',
        display: 'PT #87',
        name: 'PT #87',
        symbol: 'IRS-PT-87',
      },
      {
        description: 'IRS YT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/yt',
        display: 'YT #87',
        name: 'YT #87',
        symbol: 'IRS-YT-87',
      },
      {
        description: 'IRS LP #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/ls',
        display: 'LP #87',
        name: 'LP #87',
        symbol: 'IRS-LP-87',
      },
      {
        description: 'Yield Aggregator Vault #88Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/88',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/88',
        display: 'YA-Vault-88',
        name: 'YA Vault #88',
        symbol: 'YA-VAULT-88',
      },
      {
        description: 'IRS PT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/pt',
        display: 'PT #88',
        name: 'PT #88',
        symbol: 'IRS-PT-88',
      },
      {
        description: 'IRS YT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/yt',
        display: 'YT #88',
        name: 'YT #88',
        symbol: 'IRS-YT-88',
      },
      {
        description: 'IRS LP #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/ls',
        display: 'LP #88',
        name: 'LP #88',
        symbol: 'IRS-LP-88',
      },
      {
        description: 'Yield Aggregator Vault #89Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/89',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/89',
        display: 'YA-Vault-89',
        name: 'YA Vault #89',
        symbol: 'YA-VAULT-89',
      },
      {
        description: 'IRS PT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/pt',
        display: 'PT #89',
        name: 'PT #89',
        symbol: 'IRS-PT-89',
      },
      {
        description: 'IRS YT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/yt',
        display: 'YT #89',
        name: 'YT #89',
        symbol: 'IRS-YT-89',
      },
      {
        description: 'IRS LP #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/ls',
        display: 'LP #89',
        name: 'LP #89',
        symbol: 'IRS-LP-89',
      },
      {
        description: 'Yield Aggregator Vault #90Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/90',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/90',
        display: 'YA-Vault-90',
        name: 'YA Vault #90',
        symbol: 'YA-VAULT-90',
      },
      {
        description: 'IRS PT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/pt',
        display: 'PT #90',
        name: 'PT #90',
        symbol: 'IRS-PT-90',
      },
      {
        description: 'IRS YT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/yt',
        display: 'YT #90',
        name: 'YT #90',
        symbol: 'IRS-YT-90',
      },
      {
        description: 'IRS LP #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/ls',
        display: 'LP #90',
        name: 'LP #90',
        symbol: 'IRS-LP-90',
      },
      {
        description: 'Yield Aggregator Vault #91Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/91',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/91',
        display: 'YA-Vault-91',
        name: 'YA Vault #91',
        symbol: 'YA-VAULT-91',
      },
      {
        description: 'IRS PT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/pt',
        display: 'PT #91',
        name: 'PT #91',
        symbol: 'IRS-PT-91',
      },
      {
        description: 'IRS YT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/yt',
        display: 'YT #91',
        name: 'YT #91',
        symbol: 'IRS-YT-91',
      },
      {
        description: 'IRS LP #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/ls',
        display: 'LP #91',
        name: 'LP #91',
        symbol: 'IRS-LP-91',
      },
      {
        description: 'Yield Aggregator Vault #92Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/92',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/92',
        display: 'YA-Vault-92',
        name: 'YA Vault #92',
        symbol: 'YA-VAULT-92',
      },
      {
        description: 'IRS PT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/pt',
        display: 'PT #92',
        name: 'PT #92',
        symbol: 'IRS-PT-92',
      },
      {
        description: 'IRS YT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/yt',
        display: 'YT #92',
        name: 'YT #92',
        symbol: 'IRS-YT-92',
      },
      {
        description: 'IRS LP #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/ls',
        display: 'LP #92',
        name: 'LP #92',
        symbol: 'IRS-LP-92',
      },
      {
        description: 'Yield Aggregator Vault #93Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/93',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/93',
        display: 'YA-Vault-93',
        name: 'YA Vault #93',
        symbol: 'YA-VAULT-93',
      },
      {
        description: 'IRS PT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/pt',
        display: 'PT #93',
        name: 'PT #93',
        symbol: 'IRS-PT-93',
      },
      {
        description: 'IRS YT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/yt',
        display: 'YT #93',
        name: 'YT #93',
        symbol: 'IRS-YT-93',
      },
      {
        description: 'IRS LP #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/ls',
        display: 'LP #93',
        name: 'LP #93',
        symbol: 'IRS-LP-93',
      },
      {
        description: 'Yield Aggregator Vault #94Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/94',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/94',
        display: 'YA-Vault-94',
        name: 'YA Vault #94',
        symbol: 'YA-VAULT-94',
      },
      {
        description: 'IRS PT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/pt',
        display: 'PT #94',
        name: 'PT #94',
        symbol: 'IRS-PT-94',
      },
      {
        description: 'IRS YT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/yt',
        display: 'YT #94',
        name: 'YT #94',
        symbol: 'IRS-YT-94',
      },
      {
        description: 'IRS LP #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/ls',
        display: 'LP #94',
        name: 'LP #94',
        symbol: 'IRS-LP-94',
      },
      {
        description: 'Yield Aggregator Vault #95Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/95',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/95',
        display: 'YA-Vault-95',
        name: 'YA Vault #95',
        symbol: 'YA-VAULT-95',
      },
      {
        description: 'IRS PT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/pt',
        display: 'PT #95',
        name: 'PT #95',
        symbol: 'IRS-PT-95',
      },
      {
        description: 'IRS YT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/yt',
        display: 'YT #95',
        name: 'YT #95',
        symbol: 'IRS-YT-95',
      },
      {
        description: 'IRS LP #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/ls',
        display: 'LP #95',
        name: 'LP #95',
        symbol: 'IRS-LP-95',
      },
      {
        description: 'Yield Aggregator Vault #96Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/96',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/96',
        display: 'YA-Vault-96',
        name: 'YA Vault #96',
        symbol: 'YA-VAULT-96',
      },
      {
        description: 'IRS PT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/pt',
        display: 'PT #96',
        name: 'PT #96',
        symbol: 'IRS-PT-96',
      },
      {
        description: 'IRS YT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/yt',
        display: 'YT #96',
        name: 'YT #96',
        symbol: 'IRS-YT-96',
      },
      {
        description: 'IRS LP #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/ls',
        display: 'LP #96',
        name: 'LP #96',
        symbol: 'IRS-LP-96',
      },
      {
        description: 'Yield Aggregator Vault #97Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/97',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/97',
        display: 'YA-Vault-97',
        name: 'YA Vault #97',
        symbol: 'YA-VAULT-97',
      },
      {
        description: 'IRS PT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/pt',
        display: 'PT #97',
        name: 'PT #97',
        symbol: 'IRS-PT-97',
      },
      {
        description: 'IRS YT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/yt',
        display: 'YT #97',
        name: 'YT #97',
        symbol: 'IRS-YT-97',
      },
      {
        description: 'IRS LP #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/ls',
        display: 'LP #97',
        name: 'LP #97',
        symbol: 'IRS-LP-97',
      },
      {
        description: 'Yield Aggregator Vault #98Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/98',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/98',
        display: 'YA-Vault-98',
        name: 'YA Vault #98',
        symbol: 'YA-VAULT-98',
      },
      {
        description: 'IRS PT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/pt',
        display: 'PT #98',
        name: 'PT #98',
        symbol: 'IRS-PT-98',
      },
      {
        description: 'IRS YT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/yt',
        display: 'YT #98',
        name: 'YT #98',
        symbol: 'IRS-YT-98',
      },
      {
        description: 'IRS LP #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/ls',
        display: 'LP #98',
        name: 'LP #98',
        symbol: 'IRS-LP-98',
      },
      {
        description: 'Yield Aggregator Vault #99Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/99',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/99',
        display: 'YA-Vault-99',
        name: 'YA Vault #99',
        symbol: 'YA-VAULT-99',
      },
      {
        description: 'IRS PT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/pt',
        display: 'PT #99',
        name: 'PT #99',
        symbol: 'IRS-PT-99',
      },
      {
        description: 'IRS YT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/yt',
        display: 'YT #99',
        name: 'YT #99',
        symbol: 'IRS-YT-99',
      },
      {
        description: 'IRS LP #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/ls',
        display: 'LP #99',
        name: 'LP #99',
        symbol: 'IRS-LP-99',
      },
      {
        description: 'Yield Aggregator Vault #0Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/0',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/0',
        display: 'YA-Vault-0',
        name: 'YA Vault #0',
        symbol: 'YA-VAULT-0',
      },
      {
        description: 'IRS PT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/pt',
        display: 'PT #0',
        name: 'PT #0',
        symbol: 'IRS-PT-0',
      },
      {
        description: 'IRS YT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/yt',
        display: 'YT #0',
        name: 'YT #0',
        symbol: 'IRS-YT-0',
      },
      {
        description: 'IRS LP #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/ls',
        display: 'LP #0',
        name: 'LP #0',
        symbol: 'IRS-LP-0',
      },
      {
        description: 'Yield Aggregator Vault #1Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/1',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/1',
        display: 'YA-Vault-1',
        name: 'YA Vault #1',
        symbol: 'YA-VAULT-1',
      },
      {
        description: 'IRS PT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/pt',
        display: 'PT #1',
        name: 'PT #1',
        symbol: 'IRS-PT-1',
      },
      {
        description: 'IRS YT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/yt',
        display: 'YT #1',
        name: 'YT #1',
        symbol: 'IRS-YT-1',
      },
      {
        description: 'IRS LP #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/ls',
        display: 'LP #1',
        name: 'LP #1',
        symbol: 'IRS-LP-1',
      },
      {
        description: 'Yield Aggregator Vault #2Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/2',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/2',
        display: 'YA-Vault-2',
        name: 'YA Vault #2',
        symbol: 'YA-VAULT-2',
      },
      {
        description: 'IRS PT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/pt',
        display: 'PT #2',
        name: 'PT #2',
        symbol: 'IRS-PT-2',
      },
      {
        description: 'IRS YT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/yt',
        display: 'YT #2',
        name: 'YT #2',
        symbol: 'IRS-YT-2',
      },
      {
        description: 'IRS LP #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/ls',
        display: 'LP #2',
        name: 'LP #2',
        symbol: 'IRS-LP-2',
      },
      {
        description: 'Yield Aggregator Vault #3Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/3',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/3',
        display: 'YA-Vault-3',
        name: 'YA Vault #3',
        symbol: 'YA-VAULT-3',
      },
      {
        description: 'IRS PT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/pt',
        display: 'PT #3',
        name: 'PT #3',
        symbol: 'IRS-PT-3',
      },
      {
        description: 'IRS YT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/yt',
        display: 'YT #3',
        name: 'YT #3',
        symbol: 'IRS-YT-3',
      },
      {
        description: 'IRS LP #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/ls',
        display: 'LP #3',
        name: 'LP #3',
        symbol: 'IRS-LP-3',
      },
      {
        description: 'Yield Aggregator Vault #4Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/4',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/4',
        display: 'YA-Vault-4',
        name: 'YA Vault #4',
        symbol: 'YA-VAULT-4',
      },
      {
        description: 'IRS PT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/pt',
        display: 'PT #4',
        name: 'PT #4',
        symbol: 'IRS-PT-4',
      },
      {
        description: 'IRS YT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/yt',
        display: 'YT #4',
        name: 'YT #4',
        symbol: 'IRS-YT-4',
      },
      {
        description: 'IRS LP #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/ls',
        display: 'LP #4',
        name: 'LP #4',
        symbol: 'IRS-LP-4',
      },
      {
        description: 'Yield Aggregator Vault #5Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/5',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/5',
        display: 'YA-Vault-5',
        name: 'YA Vault #5',
        symbol: 'YA-VAULT-5',
      },
      {
        description: 'IRS PT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/pt',
        display: 'PT #5',
        name: 'PT #5',
        symbol: 'IRS-PT-5',
      },
      {
        description: 'IRS YT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/yt',
        display: 'YT #5',
        name: 'YT #5',
        symbol: 'IRS-YT-5',
      },
      {
        description: 'IRS LP #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/ls',
        display: 'LP #5',
        name: 'LP #5',
        symbol: 'IRS-LP-5',
      },
      {
        description: 'Yield Aggregator Vault #6Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/6',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/6',
        display: 'YA-Vault-6',
        name: 'YA Vault #6',
        symbol: 'YA-VAULT-6',
      },
      {
        description: 'IRS PT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/pt',
        display: 'PT #6',
        name: 'PT #6',
        symbol: 'IRS-PT-6',
      },
      {
        description: 'IRS YT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/yt',
        display: 'YT #6',
        name: 'YT #6',
        symbol: 'IRS-YT-6',
      },
      {
        description: 'IRS LP #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/ls',
        display: 'LP #6',
        name: 'LP #6',
        symbol: 'IRS-LP-6',
      },
      {
        description: 'Yield Aggregator Vault #7Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/7',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/7',
        display: 'YA-Vault-7',
        name: 'YA Vault #7',
        symbol: 'YA-VAULT-7',
      },
      {
        description: 'IRS PT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/pt',
        display: 'PT #7',
        name: 'PT #7',
        symbol: 'IRS-PT-7',
      },
      {
        description: 'IRS YT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/yt',
        display: 'YT #7',
        name: 'YT #7',
        symbol: 'IRS-YT-7',
      },
      {
        description: 'IRS LP #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/ls',
        display: 'LP #7',
        name: 'LP #7',
        symbol: 'IRS-LP-7',
      },
      {
        description: 'Yield Aggregator Vault #8Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/8',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/8',
        display: 'YA-Vault-8',
        name: 'YA Vault #8',
        symbol: 'YA-VAULT-8',
      },
      {
        description: 'IRS PT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/pt',
        display: 'PT #8',
        name: 'PT #8',
        symbol: 'IRS-PT-8',
      },
      {
        description: 'IRS YT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/yt',
        display: 'YT #8',
        name: 'YT #8',
        symbol: 'IRS-YT-8',
      },
      {
        description: 'IRS LP #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/ls',
        display: 'LP #8',
        name: 'LP #8',
        symbol: 'IRS-LP-8',
      },
      {
        description: 'Yield Aggregator Vault #9Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/9',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/9',
        display: 'YA-Vault-9',
        name: 'YA Vault #9',
        symbol: 'YA-VAULT-9',
      },
      {
        description: 'IRS PT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/pt',
        display: 'PT #9',
        name: 'PT #9',
        symbol: 'IRS-PT-9',
      },
      {
        description: 'IRS YT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/yt',
        display: 'YT #9',
        name: 'YT #9',
        symbol: 'IRS-YT-9',
      },
      {
        description: 'IRS LP #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/ls',
        display: 'LP #9',
        name: 'LP #9',
        symbol: 'IRS-LP-9',
      },
      {
        description: 'Yield Aggregator Vault #10Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/10',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/10',
        display: 'YA-Vault-10',
        name: 'YA Vault #10',
        symbol: 'YA-VAULT-10',
      },
      {
        description: 'IRS PT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/pt',
        display: 'PT #10',
        name: 'PT #10',
        symbol: 'IRS-PT-10',
      },
      {
        description: 'IRS YT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/yt',
        display: 'YT #10',
        name: 'YT #10',
        symbol: 'IRS-YT-10',
      },
      {
        description: 'IRS LP #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/ls',
        display: 'LP #10',
        name: 'LP #10',
        symbol: 'IRS-LP-10',
      },
      {
        description: 'Yield Aggregator Vault #11Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/11',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/11',
        display: 'YA-Vault-11',
        name: 'YA Vault #11',
        symbol: 'YA-VAULT-11',
      },
      {
        description: 'IRS PT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/pt',
        display: 'PT #11',
        name: 'PT #11',
        symbol: 'IRS-PT-11',
      },
      {
        description: 'IRS YT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/yt',
        display: 'YT #11',
        name: 'YT #11',
        symbol: 'IRS-YT-11',
      },
      {
        description: 'IRS LP #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/ls',
        display: 'LP #11',
        name: 'LP #11',
        symbol: 'IRS-LP-11',
      },
      {
        description: 'Yield Aggregator Vault #12Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/12',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/12',
        display: 'YA-Vault-12',
        name: 'YA Vault #12',
        symbol: 'YA-VAULT-12',
      },
      {
        description: 'IRS PT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/pt',
        display: 'PT #12',
        name: 'PT #12',
        symbol: 'IRS-PT-12',
      },
      {
        description: 'IRS YT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/yt',
        display: 'YT #12',
        name: 'YT #12',
        symbol: 'IRS-YT-12',
      },
      {
        description: 'IRS LP #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/ls',
        display: 'LP #12',
        name: 'LP #12',
        symbol: 'IRS-LP-12',
      },
      {
        description: 'Yield Aggregator Vault #13Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/13',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/13',
        display: 'YA-Vault-13',
        name: 'YA Vault #13',
        symbol: 'YA-VAULT-13',
      },
      {
        description: 'IRS PT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/pt',
        display: 'PT #13',
        name: 'PT #13',
        symbol: 'IRS-PT-13',
      },
      {
        description: 'IRS YT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/yt',
        display: 'YT #13',
        name: 'YT #13',
        symbol: 'IRS-YT-13',
      },
      {
        description: 'IRS LP #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/ls',
        display: 'LP #13',
        name: 'LP #13',
        symbol: 'IRS-LP-13',
      },
      {
        description: 'Yield Aggregator Vault #14Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/14',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/14',
        display: 'YA-Vault-14',
        name: 'YA Vault #14',
        symbol: 'YA-VAULT-14',
      },
      {
        description: 'IRS PT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/pt',
        display: 'PT #14',
        name: 'PT #14',
        symbol: 'IRS-PT-14',
      },
      {
        description: 'IRS YT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/yt',
        display: 'YT #14',
        name: 'YT #14',
        symbol: 'IRS-YT-14',
      },
      {
        description: 'IRS LP #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/ls',
        display: 'LP #14',
        name: 'LP #14',
        symbol: 'IRS-LP-14',
      },
      {
        description: 'Yield Aggregator Vault #15Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/15',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/15',
        display: 'YA-Vault-15',
        name: 'YA Vault #15',
        symbol: 'YA-VAULT-15',
      },
      {
        description: 'IRS PT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/pt',
        display: 'PT #15',
        name: 'PT #15',
        symbol: 'IRS-PT-15',
      },
      {
        description: 'IRS YT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/yt',
        display: 'YT #15',
        name: 'YT #15',
        symbol: 'IRS-YT-15',
      },
      {
        description: 'IRS LP #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/ls',
        display: 'LP #15',
        name: 'LP #15',
        symbol: 'IRS-LP-15',
      },
      {
        description: 'Yield Aggregator Vault #16Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/16',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/16',
        display: 'YA-Vault-16',
        name: 'YA Vault #16',
        symbol: 'YA-VAULT-16',
      },
      {
        description: 'IRS PT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/pt',
        display: 'PT #16',
        name: 'PT #16',
        symbol: 'IRS-PT-16',
      },
      {
        description: 'IRS YT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/yt',
        display: 'YT #16',
        name: 'YT #16',
        symbol: 'IRS-YT-16',
      },
      {
        description: 'IRS LP #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/ls',
        display: 'LP #16',
        name: 'LP #16',
        symbol: 'IRS-LP-16',
      },
      {
        description: 'Yield Aggregator Vault #17Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/17',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/17',
        display: 'YA-Vault-17',
        name: 'YA Vault #17',
        symbol: 'YA-VAULT-17',
      },
      {
        description: 'IRS PT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/pt',
        display: 'PT #17',
        name: 'PT #17',
        symbol: 'IRS-PT-17',
      },
      {
        description: 'IRS YT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/yt',
        display: 'YT #17',
        name: 'YT #17',
        symbol: 'IRS-YT-17',
      },
      {
        description: 'IRS LP #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/ls',
        display: 'LP #17',
        name: 'LP #17',
        symbol: 'IRS-LP-17',
      },
      {
        description: 'Yield Aggregator Vault #18Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/18',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/18',
        display: 'YA-Vault-18',
        name: 'YA Vault #18',
        symbol: 'YA-VAULT-18',
      },
      {
        description: 'IRS PT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/pt',
        display: 'PT #18',
        name: 'PT #18',
        symbol: 'IRS-PT-18',
      },
      {
        description: 'IRS YT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/yt',
        display: 'YT #18',
        name: 'YT #18',
        symbol: 'IRS-YT-18',
      },
      {
        description: 'IRS LP #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/ls',
        display: 'LP #18',
        name: 'LP #18',
        symbol: 'IRS-LP-18',
      },
      {
        description: 'Yield Aggregator Vault #19Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/19',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/19',
        display: 'YA-Vault-19',
        name: 'YA Vault #19',
        symbol: 'YA-VAULT-19',
      },
      {
        description: 'IRS PT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/pt',
        display: 'PT #19',
        name: 'PT #19',
        symbol: 'IRS-PT-19',
      },
      {
        description: 'IRS YT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/yt',
        display: 'YT #19',
        name: 'YT #19',
        symbol: 'IRS-YT-19',
      },
      {
        description: 'IRS LP #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/ls',
        display: 'LP #19',
        name: 'LP #19',
        symbol: 'IRS-LP-19',
      },
      {
        description: 'Yield Aggregator Vault #20Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/20',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/20',
        display: 'YA-Vault-20',
        name: 'YA Vault #20',
        symbol: 'YA-VAULT-20',
      },
      {
        description: 'IRS PT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/pt',
        display: 'PT #20',
        name: 'PT #20',
        symbol: 'IRS-PT-20',
      },
      {
        description: 'IRS YT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/yt',
        display: 'YT #20',
        name: 'YT #20',
        symbol: 'IRS-YT-20',
      },
      {
        description: 'IRS LP #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/ls',
        display: 'LP #20',
        name: 'LP #20',
        symbol: 'IRS-LP-20',
      },
      {
        description: 'Yield Aggregator Vault #21Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/21',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/21',
        display: 'YA-Vault-21',
        name: 'YA Vault #21',
        symbol: 'YA-VAULT-21',
      },
      {
        description: 'IRS PT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/pt',
        display: 'PT #21',
        name: 'PT #21',
        symbol: 'IRS-PT-21',
      },
      {
        description: 'IRS YT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/yt',
        display: 'YT #21',
        name: 'YT #21',
        symbol: 'IRS-YT-21',
      },
      {
        description: 'IRS LP #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/ls',
        display: 'LP #21',
        name: 'LP #21',
        symbol: 'IRS-LP-21',
      },
      {
        description: 'Yield Aggregator Vault #22Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/22',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/22',
        display: 'YA-Vault-22',
        name: 'YA Vault #22',
        symbol: 'YA-VAULT-22',
      },
      {
        description: 'IRS PT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/pt',
        display: 'PT #22',
        name: 'PT #22',
        symbol: 'IRS-PT-22',
      },
      {
        description: 'IRS YT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/yt',
        display: 'YT #22',
        name: 'YT #22',
        symbol: 'IRS-YT-22',
      },
      {
        description: 'IRS LP #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/ls',
        display: 'LP #22',
        name: 'LP #22',
        symbol: 'IRS-LP-22',
      },
      {
        description: 'Yield Aggregator Vault #23Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/23',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/23',
        display: 'YA-Vault-23',
        name: 'YA Vault #23',
        symbol: 'YA-VAULT-23',
      },
      {
        description: 'IRS PT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/pt',
        display: 'PT #23',
        name: 'PT #23',
        symbol: 'IRS-PT-23',
      },
      {
        description: 'IRS YT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/yt',
        display: 'YT #23',
        name: 'YT #23',
        symbol: 'IRS-YT-23',
      },
      {
        description: 'IRS LP #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/ls',
        display: 'LP #23',
        name: 'LP #23',
        symbol: 'IRS-LP-23',
      },
      {
        description: 'Yield Aggregator Vault #24Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/24',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/24',
        display: 'YA-Vault-24',
        name: 'YA Vault #24',
        symbol: 'YA-VAULT-24',
      },
      {
        description: 'IRS PT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/pt',
        display: 'PT #24',
        name: 'PT #24',
        symbol: 'IRS-PT-24',
      },
      {
        description: 'IRS YT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/yt',
        display: 'YT #24',
        name: 'YT #24',
        symbol: 'IRS-YT-24',
      },
      {
        description: 'IRS LP #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/ls',
        display: 'LP #24',
        name: 'LP #24',
        symbol: 'IRS-LP-24',
      },
      {
        description: 'Yield Aggregator Vault #25Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/25',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/25',
        display: 'YA-Vault-25',
        name: 'YA Vault #25',
        symbol: 'YA-VAULT-25',
      },
      {
        description: 'IRS PT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/pt',
        display: 'PT #25',
        name: 'PT #25',
        symbol: 'IRS-PT-25',
      },
      {
        description: 'IRS YT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/yt',
        display: 'YT #25',
        name: 'YT #25',
        symbol: 'IRS-YT-25',
      },
      {
        description: 'IRS LP #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/ls',
        display: 'LP #25',
        name: 'LP #25',
        symbol: 'IRS-LP-25',
      },
      {
        description: 'Yield Aggregator Vault #26Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/26',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/26',
        display: 'YA-Vault-26',
        name: 'YA Vault #26',
        symbol: 'YA-VAULT-26',
      },
      {
        description: 'IRS PT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/pt',
        display: 'PT #26',
        name: 'PT #26',
        symbol: 'IRS-PT-26',
      },
      {
        description: 'IRS YT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/yt',
        display: 'YT #26',
        name: 'YT #26',
        symbol: 'IRS-YT-26',
      },
      {
        description: 'IRS LP #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/ls',
        display: 'LP #26',
        name: 'LP #26',
        symbol: 'IRS-LP-26',
      },
      {
        description: 'Yield Aggregator Vault #27Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/27',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/27',
        display: 'YA-Vault-27',
        name: 'YA Vault #27',
        symbol: 'YA-VAULT-27',
      },
      {
        description: 'IRS PT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/pt',
        display: 'PT #27',
        name: 'PT #27',
        symbol: 'IRS-PT-27',
      },
      {
        description: 'IRS YT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/yt',
        display: 'YT #27',
        name: 'YT #27',
        symbol: 'IRS-YT-27',
      },
      {
        description: 'IRS LP #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/ls',
        display: 'LP #27',
        name: 'LP #27',
        symbol: 'IRS-LP-27',
      },
      {
        description: 'Yield Aggregator Vault #28Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/28',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/28',
        display: 'YA-Vault-28',
        name: 'YA Vault #28',
        symbol: 'YA-VAULT-28',
      },
      {
        description: 'IRS PT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/pt',
        display: 'PT #28',
        name: 'PT #28',
        symbol: 'IRS-PT-28',
      },
      {
        description: 'IRS YT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/yt',
        display: 'YT #28',
        name: 'YT #28',
        symbol: 'IRS-YT-28',
      },
      {
        description: 'IRS LP #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/ls',
        display: 'LP #28',
        name: 'LP #28',
        symbol: 'IRS-LP-28',
      },
      {
        description: 'Yield Aggregator Vault #29Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/29',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/29',
        display: 'YA-Vault-29',
        name: 'YA Vault #29',
        symbol: 'YA-VAULT-29',
      },
      {
        description: 'IRS PT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/pt',
        display: 'PT #29',
        name: 'PT #29',
        symbol: 'IRS-PT-29',
      },
      {
        description: 'IRS YT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/yt',
        display: 'YT #29',
        name: 'YT #29',
        symbol: 'IRS-YT-29',
      },
      {
        description: 'IRS LP #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/ls',
        display: 'LP #29',
        name: 'LP #29',
        symbol: 'IRS-LP-29',
      },
      {
        description: 'Yield Aggregator Vault #30Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/30',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/30',
        display: 'YA-Vault-30',
        name: 'YA Vault #30',
        symbol: 'YA-VAULT-30',
      },
      {
        description: 'IRS PT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/pt',
        display: 'PT #30',
        name: 'PT #30',
        symbol: 'IRS-PT-30',
      },
      {
        description: 'IRS YT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/yt',
        display: 'YT #30',
        name: 'YT #30',
        symbol: 'IRS-YT-30',
      },
      {
        description: 'IRS LP #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/ls',
        display: 'LP #30',
        name: 'LP #30',
        symbol: 'IRS-LP-30',
      },
      {
        description: 'Yield Aggregator Vault #31Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/31',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/31',
        display: 'YA-Vault-31',
        name: 'YA Vault #31',
        symbol: 'YA-VAULT-31',
      },
      {
        description: 'IRS PT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/pt',
        display: 'PT #31',
        name: 'PT #31',
        symbol: 'IRS-PT-31',
      },
      {
        description: 'IRS YT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/yt',
        display: 'YT #31',
        name: 'YT #31',
        symbol: 'IRS-YT-31',
      },
      {
        description: 'IRS LP #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/ls',
        display: 'LP #31',
        name: 'LP #31',
        symbol: 'IRS-LP-31',
      },
      {
        description: 'Yield Aggregator Vault #32Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/32',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/32',
        display: 'YA-Vault-32',
        name: 'YA Vault #32',
        symbol: 'YA-VAULT-32',
      },
      {
        description: 'IRS PT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/pt',
        display: 'PT #32',
        name: 'PT #32',
        symbol: 'IRS-PT-32',
      },
      {
        description: 'IRS YT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/yt',
        display: 'YT #32',
        name: 'YT #32',
        symbol: 'IRS-YT-32',
      },
      {
        description: 'IRS LP #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/ls',
        display: 'LP #32',
        name: 'LP #32',
        symbol: 'IRS-LP-32',
      },
      {
        description: 'Yield Aggregator Vault #33Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/33',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/33',
        display: 'YA-Vault-33',
        name: 'YA Vault #33',
        symbol: 'YA-VAULT-33',
      },
      {
        description: 'IRS PT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/pt',
        display: 'PT #33',
        name: 'PT #33',
        symbol: 'IRS-PT-33',
      },
      {
        description: 'IRS YT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/yt',
        display: 'YT #33',
        name: 'YT #33',
        symbol: 'IRS-YT-33',
      },
      {
        description: 'IRS LP #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/ls',
        display: 'LP #33',
        name: 'LP #33',
        symbol: 'IRS-LP-33',
      },
      {
        description: 'Yield Aggregator Vault #34Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/34',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/34',
        display: 'YA-Vault-34',
        name: 'YA Vault #34',
        symbol: 'YA-VAULT-34',
      },
      {
        description: 'IRS PT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/pt',
        display: 'PT #34',
        name: 'PT #34',
        symbol: 'IRS-PT-34',
      },
      {
        description: 'IRS YT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/yt',
        display: 'YT #34',
        name: 'YT #34',
        symbol: 'IRS-YT-34',
      },
      {
        description: 'IRS LP #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/ls',
        display: 'LP #34',
        name: 'LP #34',
        symbol: 'IRS-LP-34',
      },
      {
        description: 'Yield Aggregator Vault #35Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/35',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/35',
        display: 'YA-Vault-35',
        name: 'YA Vault #35',
        symbol: 'YA-VAULT-35',
      },
      {
        description: 'IRS PT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/pt',
        display: 'PT #35',
        name: 'PT #35',
        symbol: 'IRS-PT-35',
      },
      {
        description: 'IRS YT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/yt',
        display: 'YT #35',
        name: 'YT #35',
        symbol: 'IRS-YT-35',
      },
      {
        description: 'IRS LP #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/ls',
        display: 'LP #35',
        name: 'LP #35',
        symbol: 'IRS-LP-35',
      },
      {
        description: 'Yield Aggregator Vault #36Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/36',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/36',
        display: 'YA-Vault-36',
        name: 'YA Vault #36',
        symbol: 'YA-VAULT-36',
      },
      {
        description: 'IRS PT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/pt',
        display: 'PT #36',
        name: 'PT #36',
        symbol: 'IRS-PT-36',
      },
      {
        description: 'IRS YT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/yt',
        display: 'YT #36',
        name: 'YT #36',
        symbol: 'IRS-YT-36',
      },
      {
        description: 'IRS LP #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/ls',
        display: 'LP #36',
        name: 'LP #36',
        symbol: 'IRS-LP-36',
      },
      {
        description: 'Yield Aggregator Vault #37Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/37',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/37',
        display: 'YA-Vault-37',
        name: 'YA Vault #37',
        symbol: 'YA-VAULT-37',
      },
      {
        description: 'IRS PT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/pt',
        display: 'PT #37',
        name: 'PT #37',
        symbol: 'IRS-PT-37',
      },
      {
        description: 'IRS YT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/yt',
        display: 'YT #37',
        name: 'YT #37',
        symbol: 'IRS-YT-37',
      },
      {
        description: 'IRS LP #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/ls',
        display: 'LP #37',
        name: 'LP #37',
        symbol: 'IRS-LP-37',
      },
      {
        description: 'Yield Aggregator Vault #38Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/38',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/38',
        display: 'YA-Vault-38',
        name: 'YA Vault #38',
        symbol: 'YA-VAULT-38',
      },
      {
        description: 'IRS PT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/pt',
        display: 'PT #38',
        name: 'PT #38',
        symbol: 'IRS-PT-38',
      },
      {
        description: 'IRS YT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/yt',
        display: 'YT #38',
        name: 'YT #38',
        symbol: 'IRS-YT-38',
      },
      {
        description: 'IRS LP #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/ls',
        display: 'LP #38',
        name: 'LP #38',
        symbol: 'IRS-LP-38',
      },
      {
        description: 'Yield Aggregator Vault #39Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/39',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/39',
        display: 'YA-Vault-39',
        name: 'YA Vault #39',
        symbol: 'YA-VAULT-39',
      },
      {
        description: 'IRS PT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/pt',
        display: 'PT #39',
        name: 'PT #39',
        symbol: 'IRS-PT-39',
      },
      {
        description: 'IRS YT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/yt',
        display: 'YT #39',
        name: 'YT #39',
        symbol: 'IRS-YT-39',
      },
      {
        description: 'IRS LP #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/ls',
        display: 'LP #39',
        name: 'LP #39',
        symbol: 'IRS-LP-39',
      },
      {
        description: 'Yield Aggregator Vault #40Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/40',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/40',
        display: 'YA-Vault-40',
        name: 'YA Vault #40',
        symbol: 'YA-VAULT-40',
      },
      {
        description: 'IRS PT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/pt',
        display: 'PT #40',
        name: 'PT #40',
        symbol: 'IRS-PT-40',
      },
      {
        description: 'IRS YT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/yt',
        display: 'YT #40',
        name: 'YT #40',
        symbol: 'IRS-YT-40',
      },
      {
        description: 'IRS LP #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/ls',
        display: 'LP #40',
        name: 'LP #40',
        symbol: 'IRS-LP-40',
      },
      {
        description: 'Yield Aggregator Vault #41Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/41',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/41',
        display: 'YA-Vault-41',
        name: 'YA Vault #41',
        symbol: 'YA-VAULT-41',
      },
      {
        description: 'IRS PT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/pt',
        display: 'PT #41',
        name: 'PT #41',
        symbol: 'IRS-PT-41',
      },
      {
        description: 'IRS YT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/yt',
        display: 'YT #41',
        name: 'YT #41',
        symbol: 'IRS-YT-41',
      },
      {
        description: 'IRS LP #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/ls',
        display: 'LP #41',
        name: 'LP #41',
        symbol: 'IRS-LP-41',
      },
      {
        description: 'Yield Aggregator Vault #42Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/42',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/42',
        display: 'YA-Vault-42',
        name: 'YA Vault #42',
        symbol: 'YA-VAULT-42',
      },
      {
        description: 'IRS PT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/pt',
        display: 'PT #42',
        name: 'PT #42',
        symbol: 'IRS-PT-42',
      },
      {
        description: 'IRS YT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/yt',
        display: 'YT #42',
        name: 'YT #42',
        symbol: 'IRS-YT-42',
      },
      {
        description: 'IRS LP #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/ls',
        display: 'LP #42',
        name: 'LP #42',
        symbol: 'IRS-LP-42',
      },
      {
        description: 'Yield Aggregator Vault #43Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/43',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/43',
        display: 'YA-Vault-43',
        name: 'YA Vault #43',
        symbol: 'YA-VAULT-43',
      },
      {
        description: 'IRS PT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/pt',
        display: 'PT #43',
        name: 'PT #43',
        symbol: 'IRS-PT-43',
      },
      {
        description: 'IRS YT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/yt',
        display: 'YT #43',
        name: 'YT #43',
        symbol: 'IRS-YT-43',
      },
      {
        description: 'IRS LP #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/ls',
        display: 'LP #43',
        name: 'LP #43',
        symbol: 'IRS-LP-43',
      },
      {
        description: 'Yield Aggregator Vault #44Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/44',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/44',
        display: 'YA-Vault-44',
        name: 'YA Vault #44',
        symbol: 'YA-VAULT-44',
      },
      {
        description: 'IRS PT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/pt',
        display: 'PT #44',
        name: 'PT #44',
        symbol: 'IRS-PT-44',
      },
      {
        description: 'IRS YT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/yt',
        display: 'YT #44',
        name: 'YT #44',
        symbol: 'IRS-YT-44',
      },
      {
        description: 'IRS LP #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/ls',
        display: 'LP #44',
        name: 'LP #44',
        symbol: 'IRS-LP-44',
      },
      {
        description: 'Yield Aggregator Vault #45Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/45',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/45',
        display: 'YA-Vault-45',
        name: 'YA Vault #45',
        symbol: 'YA-VAULT-45',
      },
      {
        description: 'IRS PT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/pt',
        display: 'PT #45',
        name: 'PT #45',
        symbol: 'IRS-PT-45',
      },
      {
        description: 'IRS YT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/yt',
        display: 'YT #45',
        name: 'YT #45',
        symbol: 'IRS-YT-45',
      },
      {
        description: 'IRS LP #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/ls',
        display: 'LP #45',
        name: 'LP #45',
        symbol: 'IRS-LP-45',
      },
      {
        description: 'Yield Aggregator Vault #46Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/46',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/46',
        display: 'YA-Vault-46',
        name: 'YA Vault #46',
        symbol: 'YA-VAULT-46',
      },
      {
        description: 'IRS PT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/pt',
        display: 'PT #46',
        name: 'PT #46',
        symbol: 'IRS-PT-46',
      },
      {
        description: 'IRS YT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/yt',
        display: 'YT #46',
        name: 'YT #46',
        symbol: 'IRS-YT-46',
      },
      {
        description: 'IRS LP #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/ls',
        display: 'LP #46',
        name: 'LP #46',
        symbol: 'IRS-LP-46',
      },
      {
        description: 'Yield Aggregator Vault #47Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/47',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/47',
        display: 'YA-Vault-47',
        name: 'YA Vault #47',
        symbol: 'YA-VAULT-47',
      },
      {
        description: 'IRS PT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/pt',
        display: 'PT #47',
        name: 'PT #47',
        symbol: 'IRS-PT-47',
      },
      {
        description: 'IRS YT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/yt',
        display: 'YT #47',
        name: 'YT #47',
        symbol: 'IRS-YT-47',
      },
      {
        description: 'IRS LP #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/ls',
        display: 'LP #47',
        name: 'LP #47',
        symbol: 'IRS-LP-47',
      },
      {
        description: 'Yield Aggregator Vault #48Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/48',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/48',
        display: 'YA-Vault-48',
        name: 'YA Vault #48',
        symbol: 'YA-VAULT-48',
      },
      {
        description: 'IRS PT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/pt',
        display: 'PT #48',
        name: 'PT #48',
        symbol: 'IRS-PT-48',
      },
      {
        description: 'IRS YT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/yt',
        display: 'YT #48',
        name: 'YT #48',
        symbol: 'IRS-YT-48',
      },
      {
        description: 'IRS LP #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/ls',
        display: 'LP #48',
        name: 'LP #48',
        symbol: 'IRS-LP-48',
      },
      {
        description: 'Yield Aggregator Vault #49Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/49',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/49',
        display: 'YA-Vault-49',
        name: 'YA Vault #49',
        symbol: 'YA-VAULT-49',
      },
      {
        description: 'IRS PT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/pt',
        display: 'PT #49',
        name: 'PT #49',
        symbol: 'IRS-PT-49',
      },
      {
        description: 'IRS YT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/yt',
        display: 'YT #49',
        name: 'YT #49',
        symbol: 'IRS-YT-49',
      },
      {
        description: 'IRS LP #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/ls',
        display: 'LP #49',
        name: 'LP #49',
        symbol: 'IRS-LP-49',
      },
      {
        description: 'Yield Aggregator Vault #50Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/50',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/50',
        display: 'YA-Vault-50',
        name: 'YA Vault #50',
        symbol: 'YA-VAULT-50',
      },
      {
        description: 'IRS PT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/pt',
        display: 'PT #50',
        name: 'PT #50',
        symbol: 'IRS-PT-50',
      },
      {
        description: 'IRS YT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/yt',
        display: 'YT #50',
        name: 'YT #50',
        symbol: 'IRS-YT-50',
      },
      {
        description: 'IRS LP #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/ls',
        display: 'LP #50',
        name: 'LP #50',
        symbol: 'IRS-LP-50',
      },
      {
        description: 'Yield Aggregator Vault #51Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/51',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/51',
        display: 'YA-Vault-51',
        name: 'YA Vault #51',
        symbol: 'YA-VAULT-51',
      },
      {
        description: 'IRS PT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/pt',
        display: 'PT #51',
        name: 'PT #51',
        symbol: 'IRS-PT-51',
      },
      {
        description: 'IRS YT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/yt',
        display: 'YT #51',
        name: 'YT #51',
        symbol: 'IRS-YT-51',
      },
      {
        description: 'IRS LP #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/ls',
        display: 'LP #51',
        name: 'LP #51',
        symbol: 'IRS-LP-51',
      },
      {
        description: 'Yield Aggregator Vault #52Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/52',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/52',
        display: 'YA-Vault-52',
        name: 'YA Vault #52',
        symbol: 'YA-VAULT-52',
      },
      {
        description: 'IRS PT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/pt',
        display: 'PT #52',
        name: 'PT #52',
        symbol: 'IRS-PT-52',
      },
      {
        description: 'IRS YT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/yt',
        display: 'YT #52',
        name: 'YT #52',
        symbol: 'IRS-YT-52',
      },
      {
        description: 'IRS LP #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/ls',
        display: 'LP #52',
        name: 'LP #52',
        symbol: 'IRS-LP-52',
      },
      {
        description: 'Yield Aggregator Vault #53Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/53',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/53',
        display: 'YA-Vault-53',
        name: 'YA Vault #53',
        symbol: 'YA-VAULT-53',
      },
      {
        description: 'IRS PT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/pt',
        display: 'PT #53',
        name: 'PT #53',
        symbol: 'IRS-PT-53',
      },
      {
        description: 'IRS YT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/yt',
        display: 'YT #53',
        name: 'YT #53',
        symbol: 'IRS-YT-53',
      },
      {
        description: 'IRS LP #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/ls',
        display: 'LP #53',
        name: 'LP #53',
        symbol: 'IRS-LP-53',
      },
      {
        description: 'Yield Aggregator Vault #54Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/54',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/54',
        display: 'YA-Vault-54',
        name: 'YA Vault #54',
        symbol: 'YA-VAULT-54',
      },
      {
        description: 'IRS PT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/pt',
        display: 'PT #54',
        name: 'PT #54',
        symbol: 'IRS-PT-54',
      },
      {
        description: 'IRS YT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/yt',
        display: 'YT #54',
        name: 'YT #54',
        symbol: 'IRS-YT-54',
      },
      {
        description: 'IRS LP #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/ls',
        display: 'LP #54',
        name: 'LP #54',
        symbol: 'IRS-LP-54',
      },
      {
        description: 'Yield Aggregator Vault #55Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/55',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/55',
        display: 'YA-Vault-55',
        name: 'YA Vault #55',
        symbol: 'YA-VAULT-55',
      },
      {
        description: 'IRS PT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/pt',
        display: 'PT #55',
        name: 'PT #55',
        symbol: 'IRS-PT-55',
      },
      {
        description: 'IRS YT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/yt',
        display: 'YT #55',
        name: 'YT #55',
        symbol: 'IRS-YT-55',
      },
      {
        description: 'IRS LP #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/ls',
        display: 'LP #55',
        name: 'LP #55',
        symbol: 'IRS-LP-55',
      },
      {
        description: 'Yield Aggregator Vault #56Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/56',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/56',
        display: 'YA-Vault-56',
        name: 'YA Vault #56',
        symbol: 'YA-VAULT-56',
      },
      {
        description: 'IRS PT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/pt',
        display: 'PT #56',
        name: 'PT #56',
        symbol: 'IRS-PT-56',
      },
      {
        description: 'IRS YT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/yt',
        display: 'YT #56',
        name: 'YT #56',
        symbol: 'IRS-YT-56',
      },
      {
        description: 'IRS LP #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/ls',
        display: 'LP #56',
        name: 'LP #56',
        symbol: 'IRS-LP-56',
      },
      {
        description: 'Yield Aggregator Vault #57Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/57',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/57',
        display: 'YA-Vault-57',
        name: 'YA Vault #57',
        symbol: 'YA-VAULT-57',
      },
      {
        description: 'IRS PT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/pt',
        display: 'PT #57',
        name: 'PT #57',
        symbol: 'IRS-PT-57',
      },
      {
        description: 'IRS YT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/yt',
        display: 'YT #57',
        name: 'YT #57',
        symbol: 'IRS-YT-57',
      },
      {
        description: 'IRS LP #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/ls',
        display: 'LP #57',
        name: 'LP #57',
        symbol: 'IRS-LP-57',
      },
      {
        description: 'Yield Aggregator Vault #58Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/58',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/58',
        display: 'YA-Vault-58',
        name: 'YA Vault #58',
        symbol: 'YA-VAULT-58',
      },
      {
        description: 'IRS PT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/pt',
        display: 'PT #58',
        name: 'PT #58',
        symbol: 'IRS-PT-58',
      },
      {
        description: 'IRS YT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/yt',
        display: 'YT #58',
        name: 'YT #58',
        symbol: 'IRS-YT-58',
      },
      {
        description: 'IRS LP #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/ls',
        display: 'LP #58',
        name: 'LP #58',
        symbol: 'IRS-LP-58',
      },
      {
        description: 'Yield Aggregator Vault #59Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/59',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/59',
        display: 'YA-Vault-59',
        name: 'YA Vault #59',
        symbol: 'YA-VAULT-59',
      },
      {
        description: 'IRS PT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/pt',
        display: 'PT #59',
        name: 'PT #59',
        symbol: 'IRS-PT-59',
      },
      {
        description: 'IRS YT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/yt',
        display: 'YT #59',
        name: 'YT #59',
        symbol: 'IRS-YT-59',
      },
      {
        description: 'IRS LP #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/ls',
        display: 'LP #59',
        name: 'LP #59',
        symbol: 'IRS-LP-59',
      },
      {
        description: 'Yield Aggregator Vault #60Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/60',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/60',
        display: 'YA-Vault-60',
        name: 'YA Vault #60',
        symbol: 'YA-VAULT-60',
      },
      {
        description: 'IRS PT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/pt',
        display: 'PT #60',
        name: 'PT #60',
        symbol: 'IRS-PT-60',
      },
      {
        description: 'IRS YT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/yt',
        display: 'YT #60',
        name: 'YT #60',
        symbol: 'IRS-YT-60',
      },
      {
        description: 'IRS LP #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/ls',
        display: 'LP #60',
        name: 'LP #60',
        symbol: 'IRS-LP-60',
      },
      {
        description: 'Yield Aggregator Vault #61Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/61',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/61',
        display: 'YA-Vault-61',
        name: 'YA Vault #61',
        symbol: 'YA-VAULT-61',
      },
      {
        description: 'IRS PT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/pt',
        display: 'PT #61',
        name: 'PT #61',
        symbol: 'IRS-PT-61',
      },
      {
        description: 'IRS YT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/yt',
        display: 'YT #61',
        name: 'YT #61',
        symbol: 'IRS-YT-61',
      },
      {
        description: 'IRS LP #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/ls',
        display: 'LP #61',
        name: 'LP #61',
        symbol: 'IRS-LP-61',
      },
      {
        description: 'Yield Aggregator Vault #62Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/62',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/62',
        display: 'YA-Vault-62',
        name: 'YA Vault #62',
        symbol: 'YA-VAULT-62',
      },
      {
        description: 'IRS PT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/pt',
        display: 'PT #62',
        name: 'PT #62',
        symbol: 'IRS-PT-62',
      },
      {
        description: 'IRS YT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/yt',
        display: 'YT #62',
        name: 'YT #62',
        symbol: 'IRS-YT-62',
      },
      {
        description: 'IRS LP #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/ls',
        display: 'LP #62',
        name: 'LP #62',
        symbol: 'IRS-LP-62',
      },
      {
        description: 'Yield Aggregator Vault #63Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/63',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/63',
        display: 'YA-Vault-63',
        name: 'YA Vault #63',
        symbol: 'YA-VAULT-63',
      },
      {
        description: 'IRS PT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/pt',
        display: 'PT #63',
        name: 'PT #63',
        symbol: 'IRS-PT-63',
      },
      {
        description: 'IRS YT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/yt',
        display: 'YT #63',
        name: 'YT #63',
        symbol: 'IRS-YT-63',
      },
      {
        description: 'IRS LP #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/ls',
        display: 'LP #63',
        name: 'LP #63',
        symbol: 'IRS-LP-63',
      },
      {
        description: 'Yield Aggregator Vault #64Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/64',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/64',
        display: 'YA-Vault-64',
        name: 'YA Vault #64',
        symbol: 'YA-VAULT-64',
      },
      {
        description: 'IRS PT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/pt',
        display: 'PT #64',
        name: 'PT #64',
        symbol: 'IRS-PT-64',
      },
      {
        description: 'IRS YT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/yt',
        display: 'YT #64',
        name: 'YT #64',
        symbol: 'IRS-YT-64',
      },
      {
        description: 'IRS LP #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/ls',
        display: 'LP #64',
        name: 'LP #64',
        symbol: 'IRS-LP-64',
      },
      {
        description: 'Yield Aggregator Vault #65Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/65',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/65',
        display: 'YA-Vault-65',
        name: 'YA Vault #65',
        symbol: 'YA-VAULT-65',
      },
      {
        description: 'IRS PT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/pt',
        display: 'PT #65',
        name: 'PT #65',
        symbol: 'IRS-PT-65',
      },
      {
        description: 'IRS YT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/yt',
        display: 'YT #65',
        name: 'YT #65',
        symbol: 'IRS-YT-65',
      },
      {
        description: 'IRS LP #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/ls',
        display: 'LP #65',
        name: 'LP #65',
        symbol: 'IRS-LP-65',
      },
      {
        description: 'Yield Aggregator Vault #66Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/66',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/66',
        display: 'YA-Vault-66',
        name: 'YA Vault #66',
        symbol: 'YA-VAULT-66',
      },
      {
        description: 'IRS PT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/pt',
        display: 'PT #66',
        name: 'PT #66',
        symbol: 'IRS-PT-66',
      },
      {
        description: 'IRS YT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/yt',
        display: 'YT #66',
        name: 'YT #66',
        symbol: 'IRS-YT-66',
      },
      {
        description: 'IRS LP #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/ls',
        display: 'LP #66',
        name: 'LP #66',
        symbol: 'IRS-LP-66',
      },
      {
        description: 'Yield Aggregator Vault #67Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/67',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/67',
        display: 'YA-Vault-67',
        name: 'YA Vault #67',
        symbol: 'YA-VAULT-67',
      },
      {
        description: 'IRS PT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/pt',
        display: 'PT #67',
        name: 'PT #67',
        symbol: 'IRS-PT-67',
      },
      {
        description: 'IRS YT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/yt',
        display: 'YT #67',
        name: 'YT #67',
        symbol: 'IRS-YT-67',
      },
      {
        description: 'IRS LP #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/ls',
        display: 'LP #67',
        name: 'LP #67',
        symbol: 'IRS-LP-67',
      },
      {
        description: 'Yield Aggregator Vault #68Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/68',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/68',
        display: 'YA-Vault-68',
        name: 'YA Vault #68',
        symbol: 'YA-VAULT-68',
      },
      {
        description: 'IRS PT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/pt',
        display: 'PT #68',
        name: 'PT #68',
        symbol: 'IRS-PT-68',
      },
      {
        description: 'IRS YT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/yt',
        display: 'YT #68',
        name: 'YT #68',
        symbol: 'IRS-YT-68',
      },
      {
        description: 'IRS LP #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/ls',
        display: 'LP #68',
        name: 'LP #68',
        symbol: 'IRS-LP-68',
      },
      {
        description: 'Yield Aggregator Vault #69Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/69',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/69',
        display: 'YA-Vault-69',
        name: 'YA Vault #69',
        symbol: 'YA-VAULT-69',
      },
      {
        description: 'IRS PT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/pt',
        display: 'PT #69',
        name: 'PT #69',
        symbol: 'IRS-PT-69',
      },
      {
        description: 'IRS YT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/yt',
        display: 'YT #69',
        name: 'YT #69',
        symbol: 'IRS-YT-69',
      },
      {
        description: 'IRS LP #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/ls',
        display: 'LP #69',
        name: 'LP #69',
        symbol: 'IRS-LP-69',
      },
      {
        description: 'Yield Aggregator Vault #70Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/70',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/70',
        display: 'YA-Vault-70',
        name: 'YA Vault #70',
        symbol: 'YA-VAULT-70',
      },
      {
        description: 'IRS PT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/pt',
        display: 'PT #70',
        name: 'PT #70',
        symbol: 'IRS-PT-70',
      },
      {
        description: 'IRS YT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/yt',
        display: 'YT #70',
        name: 'YT #70',
        symbol: 'IRS-YT-70',
      },
      {
        description: 'IRS LP #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/ls',
        display: 'LP #70',
        name: 'LP #70',
        symbol: 'IRS-LP-70',
      },
      {
        description: 'Yield Aggregator Vault #71Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/71',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/71',
        display: 'YA-Vault-71',
        name: 'YA Vault #71',
        symbol: 'YA-VAULT-71',
      },
      {
        description: 'IRS PT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/pt',
        display: 'PT #71',
        name: 'PT #71',
        symbol: 'IRS-PT-71',
      },
      {
        description: 'IRS YT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/yt',
        display: 'YT #71',
        name: 'YT #71',
        symbol: 'IRS-YT-71',
      },
      {
        description: 'IRS LP #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/ls',
        display: 'LP #71',
        name: 'LP #71',
        symbol: 'IRS-LP-71',
      },
      {
        description: 'Yield Aggregator Vault #72Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/72',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/72',
        display: 'YA-Vault-72',
        name: 'YA Vault #72',
        symbol: 'YA-VAULT-72',
      },
      {
        description: 'IRS PT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/pt',
        display: 'PT #72',
        name: 'PT #72',
        symbol: 'IRS-PT-72',
      },
      {
        description: 'IRS YT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/yt',
        display: 'YT #72',
        name: 'YT #72',
        symbol: 'IRS-YT-72',
      },
      {
        description: 'IRS LP #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/ls',
        display: 'LP #72',
        name: 'LP #72',
        symbol: 'IRS-LP-72',
      },
      {
        description: 'Yield Aggregator Vault #73Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/73',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/73',
        display: 'YA-Vault-73',
        name: 'YA Vault #73',
        symbol: 'YA-VAULT-73',
      },
      {
        description: 'IRS PT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/pt',
        display: 'PT #73',
        name: 'PT #73',
        symbol: 'IRS-PT-73',
      },
      {
        description: 'IRS YT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/yt',
        display: 'YT #73',
        name: 'YT #73',
        symbol: 'IRS-YT-73',
      },
      {
        description: 'IRS LP #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/ls',
        display: 'LP #73',
        name: 'LP #73',
        symbol: 'IRS-LP-73',
      },
      {
        description: 'Yield Aggregator Vault #74Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/74',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/74',
        display: 'YA-Vault-74',
        name: 'YA Vault #74',
        symbol: 'YA-VAULT-74',
      },
      {
        description: 'IRS PT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/pt',
        display: 'PT #74',
        name: 'PT #74',
        symbol: 'IRS-PT-74',
      },
      {
        description: 'IRS YT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/yt',
        display: 'YT #74',
        name: 'YT #74',
        symbol: 'IRS-YT-74',
      },
      {
        description: 'IRS LP #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/ls',
        display: 'LP #74',
        name: 'LP #74',
        symbol: 'IRS-LP-74',
      },
      {
        description: 'Yield Aggregator Vault #75Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/75',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/75',
        display: 'YA-Vault-75',
        name: 'YA Vault #75',
        symbol: 'YA-VAULT-75',
      },
      {
        description: 'IRS PT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/pt',
        display: 'PT #75',
        name: 'PT #75',
        symbol: 'IRS-PT-75',
      },
      {
        description: 'IRS YT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/yt',
        display: 'YT #75',
        name: 'YT #75',
        symbol: 'IRS-YT-75',
      },
      {
        description: 'IRS LP #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/ls',
        display: 'LP #75',
        name: 'LP #75',
        symbol: 'IRS-LP-75',
      },
      {
        description: 'Yield Aggregator Vault #76Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/76',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/76',
        display: 'YA-Vault-76',
        name: 'YA Vault #76',
        symbol: 'YA-VAULT-76',
      },
      {
        description: 'IRS PT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/pt',
        display: 'PT #76',
        name: 'PT #76',
        symbol: 'IRS-PT-76',
      },
      {
        description: 'IRS YT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/yt',
        display: 'YT #76',
        name: 'YT #76',
        symbol: 'IRS-YT-76',
      },
      {
        description: 'IRS LP #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/ls',
        display: 'LP #76',
        name: 'LP #76',
        symbol: 'IRS-LP-76',
      },
      {
        description: 'Yield Aggregator Vault #77Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/77',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/77',
        display: 'YA-Vault-77',
        name: 'YA Vault #77',
        symbol: 'YA-VAULT-77',
      },
      {
        description: 'IRS PT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/pt',
        display: 'PT #77',
        name: 'PT #77',
        symbol: 'IRS-PT-77',
      },
      {
        description: 'IRS YT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/yt',
        display: 'YT #77',
        name: 'YT #77',
        symbol: 'IRS-YT-77',
      },
      {
        description: 'IRS LP #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/ls',
        display: 'LP #77',
        name: 'LP #77',
        symbol: 'IRS-LP-77',
      },
      {
        description: 'Yield Aggregator Vault #78Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/78',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/78',
        display: 'YA-Vault-78',
        name: 'YA Vault #78',
        symbol: 'YA-VAULT-78',
      },
      {
        description: 'IRS PT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/pt',
        display: 'PT #78',
        name: 'PT #78',
        symbol: 'IRS-PT-78',
      },
      {
        description: 'IRS YT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/yt',
        display: 'YT #78',
        name: 'YT #78',
        symbol: 'IRS-YT-78',
      },
      {
        description: 'IRS LP #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/ls',
        display: 'LP #78',
        name: 'LP #78',
        symbol: 'IRS-LP-78',
      },
      {
        description: 'Yield Aggregator Vault #79Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/79',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/79',
        display: 'YA-Vault-79',
        name: 'YA Vault #79',
        symbol: 'YA-VAULT-79',
      },
      {
        description: 'IRS PT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/pt',
        display: 'PT #79',
        name: 'PT #79',
        symbol: 'IRS-PT-79',
      },
      {
        description: 'IRS YT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/yt',
        display: 'YT #79',
        name: 'YT #79',
        symbol: 'IRS-YT-79',
      },
      {
        description: 'IRS LP #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/ls',
        display: 'LP #79',
        name: 'LP #79',
        symbol: 'IRS-LP-79',
      },
      {
        description: 'Yield Aggregator Vault #80Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/80',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/80',
        display: 'YA-Vault-80',
        name: 'YA Vault #80',
        symbol: 'YA-VAULT-80',
      },
      {
        description: 'IRS PT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/pt',
        display: 'PT #80',
        name: 'PT #80',
        symbol: 'IRS-PT-80',
      },
      {
        description: 'IRS YT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/yt',
        display: 'YT #80',
        name: 'YT #80',
        symbol: 'IRS-YT-80',
      },
      {
        description: 'IRS LP #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/ls',
        display: 'LP #80',
        name: 'LP #80',
        symbol: 'IRS-LP-80',
      },
      {
        description: 'Yield Aggregator Vault #81Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/81',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/81',
        display: 'YA-Vault-81',
        name: 'YA Vault #81',
        symbol: 'YA-VAULT-81',
      },
      {
        description: 'IRS PT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/pt',
        display: 'PT #81',
        name: 'PT #81',
        symbol: 'IRS-PT-81',
      },
      {
        description: 'IRS YT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/yt',
        display: 'YT #81',
        name: 'YT #81',
        symbol: 'IRS-YT-81',
      },
      {
        description: 'IRS LP #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/ls',
        display: 'LP #81',
        name: 'LP #81',
        symbol: 'IRS-LP-81',
      },
      {
        description: 'Yield Aggregator Vault #82Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/82',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/82',
        display: 'YA-Vault-82',
        name: 'YA Vault #82',
        symbol: 'YA-VAULT-82',
      },
      {
        description: 'IRS PT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/pt',
        display: 'PT #82',
        name: 'PT #82',
        symbol: 'IRS-PT-82',
      },
      {
        description: 'IRS YT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/yt',
        display: 'YT #82',
        name: 'YT #82',
        symbol: 'IRS-YT-82',
      },
      {
        description: 'IRS LP #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/ls',
        display: 'LP #82',
        name: 'LP #82',
        symbol: 'IRS-LP-82',
      },
      {
        description: 'Yield Aggregator Vault #83Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/83',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/83',
        display: 'YA-Vault-83',
        name: 'YA Vault #83',
        symbol: 'YA-VAULT-83',
      },
      {
        description: 'IRS PT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/pt',
        display: 'PT #83',
        name: 'PT #83',
        symbol: 'IRS-PT-83',
      },
      {
        description: 'IRS YT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/yt',
        display: 'YT #83',
        name: 'YT #83',
        symbol: 'IRS-YT-83',
      },
      {
        description: 'IRS LP #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/ls',
        display: 'LP #83',
        name: 'LP #83',
        symbol: 'IRS-LP-83',
      },
      {
        description: 'Yield Aggregator Vault #84Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/84',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/84',
        display: 'YA-Vault-84',
        name: 'YA Vault #84',
        symbol: 'YA-VAULT-84',
      },
      {
        description: 'IRS PT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/pt',
        display: 'PT #84',
        name: 'PT #84',
        symbol: 'IRS-PT-84',
      },
      {
        description: 'IRS YT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/yt',
        display: 'YT #84',
        name: 'YT #84',
        symbol: 'IRS-YT-84',
      },
      {
        description: 'IRS LP #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/ls',
        display: 'LP #84',
        name: 'LP #84',
        symbol: 'IRS-LP-84',
      },
      {
        description: 'Yield Aggregator Vault #85Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/85',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/85',
        display: 'YA-Vault-85',
        name: 'YA Vault #85',
        symbol: 'YA-VAULT-85',
      },
      {
        description: 'IRS PT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/pt',
        display: 'PT #85',
        name: 'PT #85',
        symbol: 'IRS-PT-85',
      },
      {
        description: 'IRS YT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/yt',
        display: 'YT #85',
        name: 'YT #85',
        symbol: 'IRS-YT-85',
      },
      {
        description: 'IRS LP #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/ls',
        display: 'LP #85',
        name: 'LP #85',
        symbol: 'IRS-LP-85',
      },
      {
        description: 'Yield Aggregator Vault #86Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/86',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/86',
        display: 'YA-Vault-86',
        name: 'YA Vault #86',
        symbol: 'YA-VAULT-86',
      },
      {
        description: 'IRS PT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/pt',
        display: 'PT #86',
        name: 'PT #86',
        symbol: 'IRS-PT-86',
      },
      {
        description: 'IRS YT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/yt',
        display: 'YT #86',
        name: 'YT #86',
        symbol: 'IRS-YT-86',
      },
      {
        description: 'IRS LP #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/ls',
        display: 'LP #86',
        name: 'LP #86',
        symbol: 'IRS-LP-86',
      },
      {
        description: 'Yield Aggregator Vault #87Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/87',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/87',
        display: 'YA-Vault-87',
        name: 'YA Vault #87',
        symbol: 'YA-VAULT-87',
      },
      {
        description: 'IRS PT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/pt',
        display: 'PT #87',
        name: 'PT #87',
        symbol: 'IRS-PT-87',
      },
      {
        description: 'IRS YT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/yt',
        display: 'YT #87',
        name: 'YT #87',
        symbol: 'IRS-YT-87',
      },
      {
        description: 'IRS LP #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/ls',
        display: 'LP #87',
        name: 'LP #87',
        symbol: 'IRS-LP-87',
      },
      {
        description: 'Yield Aggregator Vault #88Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/88',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/88',
        display: 'YA-Vault-88',
        name: 'YA Vault #88',
        symbol: 'YA-VAULT-88',
      },
      {
        description: 'IRS PT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/pt',
        display: 'PT #88',
        name: 'PT #88',
        symbol: 'IRS-PT-88',
      },
      {
        description: 'IRS YT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/yt',
        display: 'YT #88',
        name: 'YT #88',
        symbol: 'IRS-YT-88',
      },
      {
        description: 'IRS LP #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/ls',
        display: 'LP #88',
        name: 'LP #88',
        symbol: 'IRS-LP-88',
      },
      {
        description: 'Yield Aggregator Vault #89Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/89',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/89',
        display: 'YA-Vault-89',
        name: 'YA Vault #89',
        symbol: 'YA-VAULT-89',
      },
      {
        description: 'IRS PT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/pt',
        display: 'PT #89',
        name: 'PT #89',
        symbol: 'IRS-PT-89',
      },
      {
        description: 'IRS YT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/yt',
        display: 'YT #89',
        name: 'YT #89',
        symbol: 'IRS-YT-89',
      },
      {
        description: 'IRS LP #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/ls',
        display: 'LP #89',
        name: 'LP #89',
        symbol: 'IRS-LP-89',
      },
      {
        description: 'Yield Aggregator Vault #90Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/90',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/90',
        display: 'YA-Vault-90',
        name: 'YA Vault #90',
        symbol: 'YA-VAULT-90',
      },
      {
        description: 'IRS PT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/pt',
        display: 'PT #90',
        name: 'PT #90',
        symbol: 'IRS-PT-90',
      },
      {
        description: 'IRS YT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/yt',
        display: 'YT #90',
        name: 'YT #90',
        symbol: 'IRS-YT-90',
      },
      {
        description: 'IRS LP #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/ls',
        display: 'LP #90',
        name: 'LP #90',
        symbol: 'IRS-LP-90',
      },
      {
        description: 'Yield Aggregator Vault #91Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/91',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/91',
        display: 'YA-Vault-91',
        name: 'YA Vault #91',
        symbol: 'YA-VAULT-91',
      },
      {
        description: 'IRS PT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/pt',
        display: 'PT #91',
        name: 'PT #91',
        symbol: 'IRS-PT-91',
      },
      {
        description: 'IRS YT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/yt',
        display: 'YT #91',
        name: 'YT #91',
        symbol: 'IRS-YT-91',
      },
      {
        description: 'IRS LP #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/ls',
        display: 'LP #91',
        name: 'LP #91',
        symbol: 'IRS-LP-91',
      },
      {
        description: 'Yield Aggregator Vault #92Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/92',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/92',
        display: 'YA-Vault-92',
        name: 'YA Vault #92',
        symbol: 'YA-VAULT-92',
      },
      {
        description: 'IRS PT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/pt',
        display: 'PT #92',
        name: 'PT #92',
        symbol: 'IRS-PT-92',
      },
      {
        description: 'IRS YT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/yt',
        display: 'YT #92',
        name: 'YT #92',
        symbol: 'IRS-YT-92',
      },
      {
        description: 'IRS LP #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/ls',
        display: 'LP #92',
        name: 'LP #92',
        symbol: 'IRS-LP-92',
      },
      {
        description: 'Yield Aggregator Vault #93Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/93',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/93',
        display: 'YA-Vault-93',
        name: 'YA Vault #93',
        symbol: 'YA-VAULT-93',
      },
      {
        description: 'IRS PT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/pt',
        display: 'PT #93',
        name: 'PT #93',
        symbol: 'IRS-PT-93',
      },
      {
        description: 'IRS YT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/yt',
        display: 'YT #93',
        name: 'YT #93',
        symbol: 'IRS-YT-93',
      },
      {
        description: 'IRS LP #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/ls',
        display: 'LP #93',
        name: 'LP #93',
        symbol: 'IRS-LP-93',
      },
      {
        description: 'Yield Aggregator Vault #94Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/94',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/94',
        display: 'YA-Vault-94',
        name: 'YA Vault #94',
        symbol: 'YA-VAULT-94',
      },
      {
        description: 'IRS PT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/pt',
        display: 'PT #94',
        name: 'PT #94',
        symbol: 'IRS-PT-94',
      },
      {
        description: 'IRS YT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/yt',
        display: 'YT #94',
        name: 'YT #94',
        symbol: 'IRS-YT-94',
      },
      {
        description: 'IRS LP #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/ls',
        display: 'LP #94',
        name: 'LP #94',
        symbol: 'IRS-LP-94',
      },
      {
        description: 'Yield Aggregator Vault #95Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/95',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/95',
        display: 'YA-Vault-95',
        name: 'YA Vault #95',
        symbol: 'YA-VAULT-95',
      },
      {
        description: 'IRS PT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/pt',
        display: 'PT #95',
        name: 'PT #95',
        symbol: 'IRS-PT-95',
      },
      {
        description: 'IRS YT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/yt',
        display: 'YT #95',
        name: 'YT #95',
        symbol: 'IRS-YT-95',
      },
      {
        description: 'IRS LP #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/ls',
        display: 'LP #95',
        name: 'LP #95',
        symbol: 'IRS-LP-95',
      },
      {
        description: 'Yield Aggregator Vault #96Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/96',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/96',
        display: 'YA-Vault-96',
        name: 'YA Vault #96',
        symbol: 'YA-VAULT-96',
      },
      {
        description: 'IRS PT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/pt',
        display: 'PT #96',
        name: 'PT #96',
        symbol: 'IRS-PT-96',
      },
      {
        description: 'IRS YT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/yt',
        display: 'YT #96',
        name: 'YT #96',
        symbol: 'IRS-YT-96',
      },
      {
        description: 'IRS LP #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/ls',
        display: 'LP #96',
        name: 'LP #96',
        symbol: 'IRS-LP-96',
      },
      {
        description: 'Yield Aggregator Vault #97Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/97',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/97',
        display: 'YA-Vault-97',
        name: 'YA Vault #97',
        symbol: 'YA-VAULT-97',
      },
      {
        description: 'IRS PT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/pt',
        display: 'PT #97',
        name: 'PT #97',
        symbol: 'IRS-PT-97',
      },
      {
        description: 'IRS YT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/yt',
        display: 'YT #97',
        name: 'YT #97',
        symbol: 'IRS-YT-97',
      },
      {
        description: 'IRS LP #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/ls',
        display: 'LP #97',
        name: 'LP #97',
        symbol: 'IRS-LP-97',
      },
      {
        description: 'Yield Aggregator Vault #98Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/98',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/98',
        display: 'YA-Vault-98',
        name: 'YA Vault #98',
        symbol: 'YA-VAULT-98',
      },
      {
        description: 'IRS PT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/pt',
        display: 'PT #98',
        name: 'PT #98',
        symbol: 'IRS-PT-98',
      },
      {
        description: 'IRS YT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/yt',
        display: 'YT #98',
        name: 'YT #98',
        symbol: 'IRS-YT-98',
      },
      {
        description: 'IRS LP #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/ls',
        display: 'LP #98',
        name: 'LP #98',
        symbol: 'IRS-LP-98',
      },
      {
        description: 'Yield Aggregator Vault #99Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/99',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/99',
        display: 'YA-Vault-99',
        name: 'YA Vault #99',
        symbol: 'YA-VAULT-99',
      },
      {
        description: 'IRS PT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/pt',
        display: 'PT #99',
        name: 'PT #99',
        symbol: 'IRS-PT-99',
      },
      {
        description: 'IRS YT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/yt',
        display: 'YT #99',
        name: 'YT #99',
        symbol: 'IRS-YT-99',
      },
      {
        description: 'IRS LP #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/ls',
        display: 'LP #99',
        name: 'LP #99',
        symbol: 'IRS-LP-99',
      },
      {
        description: 'Yield Aggregator Vault #0Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/0',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/0',
        display: 'YA-Vault-0',
        name: 'YA Vault #0',
        symbol: 'YA-VAULT-0',
      },
      {
        description: 'IRS PT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/pt',
        display: 'PT #0',
        name: 'PT #0',
        symbol: 'IRS-PT-0',
      },
      {
        description: 'IRS YT #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/yt',
        display: 'YT #0',
        name: 'YT #0',
        symbol: 'IRS-YT-0',
      },
      {
        description: 'IRS LP #0Token',
        denom_units: [
          {
            denom: 'irs/tranche/0/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/0/ls',
        display: 'LP #0',
        name: 'LP #0',
        symbol: 'IRS-LP-0',
      },
      {
        description: 'Yield Aggregator Vault #1Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/1',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/1',
        display: 'YA-Vault-1',
        name: 'YA Vault #1',
        symbol: 'YA-VAULT-1',
      },
      {
        description: 'IRS PT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/pt',
        display: 'PT #1',
        name: 'PT #1',
        symbol: 'IRS-PT-1',
      },
      {
        description: 'IRS YT #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/yt',
        display: 'YT #1',
        name: 'YT #1',
        symbol: 'IRS-YT-1',
      },
      {
        description: 'IRS LP #1Token',
        denom_units: [
          {
            denom: 'irs/tranche/1/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/1/ls',
        display: 'LP #1',
        name: 'LP #1',
        symbol: 'IRS-LP-1',
      },
      {
        description: 'Yield Aggregator Vault #2Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/2',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/2',
        display: 'YA-Vault-2',
        name: 'YA Vault #2',
        symbol: 'YA-VAULT-2',
      },
      {
        description: 'IRS PT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/pt',
        display: 'PT #2',
        name: 'PT #2',
        symbol: 'IRS-PT-2',
      },
      {
        description: 'IRS YT #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/yt',
        display: 'YT #2',
        name: 'YT #2',
        symbol: 'IRS-YT-2',
      },
      {
        description: 'IRS LP #2Token',
        denom_units: [
          {
            denom: 'irs/tranche/2/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/2/ls',
        display: 'LP #2',
        name: 'LP #2',
        symbol: 'IRS-LP-2',
      },
      {
        description: 'Yield Aggregator Vault #3Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/3',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/3',
        display: 'YA-Vault-3',
        name: 'YA Vault #3',
        symbol: 'YA-VAULT-3',
      },
      {
        description: 'IRS PT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/pt',
        display: 'PT #3',
        name: 'PT #3',
        symbol: 'IRS-PT-3',
      },
      {
        description: 'IRS YT #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/yt',
        display: 'YT #3',
        name: 'YT #3',
        symbol: 'IRS-YT-3',
      },
      {
        description: 'IRS LP #3Token',
        denom_units: [
          {
            denom: 'irs/tranche/3/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/3/ls',
        display: 'LP #3',
        name: 'LP #3',
        symbol: 'IRS-LP-3',
      },
      {
        description: 'Yield Aggregator Vault #4Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/4',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/4',
        display: 'YA-Vault-4',
        name: 'YA Vault #4',
        symbol: 'YA-VAULT-4',
      },
      {
        description: 'IRS PT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/pt',
        display: 'PT #4',
        name: 'PT #4',
        symbol: 'IRS-PT-4',
      },
      {
        description: 'IRS YT #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/yt',
        display: 'YT #4',
        name: 'YT #4',
        symbol: 'IRS-YT-4',
      },
      {
        description: 'IRS LP #4Token',
        denom_units: [
          {
            denom: 'irs/tranche/4/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/4/ls',
        display: 'LP #4',
        name: 'LP #4',
        symbol: 'IRS-LP-4',
      },
      {
        description: 'Yield Aggregator Vault #5Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/5',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/5',
        display: 'YA-Vault-5',
        name: 'YA Vault #5',
        symbol: 'YA-VAULT-5',
      },
      {
        description: 'IRS PT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/pt',
        display: 'PT #5',
        name: 'PT #5',
        symbol: 'IRS-PT-5',
      },
      {
        description: 'IRS YT #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/yt',
        display: 'YT #5',
        name: 'YT #5',
        symbol: 'IRS-YT-5',
      },
      {
        description: 'IRS LP #5Token',
        denom_units: [
          {
            denom: 'irs/tranche/5/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/5/ls',
        display: 'LP #5',
        name: 'LP #5',
        symbol: 'IRS-LP-5',
      },
      {
        description: 'Yield Aggregator Vault #6Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/6',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/6',
        display: 'YA-Vault-6',
        name: 'YA Vault #6',
        symbol: 'YA-VAULT-6',
      },
      {
        description: 'IRS PT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/pt',
        display: 'PT #6',
        name: 'PT #6',
        symbol: 'IRS-PT-6',
      },
      {
        description: 'IRS YT #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/yt',
        display: 'YT #6',
        name: 'YT #6',
        symbol: 'IRS-YT-6',
      },
      {
        description: 'IRS LP #6Token',
        denom_units: [
          {
            denom: 'irs/tranche/6/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/6/ls',
        display: 'LP #6',
        name: 'LP #6',
        symbol: 'IRS-LP-6',
      },
      {
        description: 'Yield Aggregator Vault #7Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/7',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/7',
        display: 'YA-Vault-7',
        name: 'YA Vault #7',
        symbol: 'YA-VAULT-7',
      },
      {
        description: 'IRS PT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/pt',
        display: 'PT #7',
        name: 'PT #7',
        symbol: 'IRS-PT-7',
      },
      {
        description: 'IRS YT #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/yt',
        display: 'YT #7',
        name: 'YT #7',
        symbol: 'IRS-YT-7',
      },
      {
        description: 'IRS LP #7Token',
        denom_units: [
          {
            denom: 'irs/tranche/7/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/7/ls',
        display: 'LP #7',
        name: 'LP #7',
        symbol: 'IRS-LP-7',
      },
      {
        description: 'Yield Aggregator Vault #8Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/8',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/8',
        display: 'YA-Vault-8',
        name: 'YA Vault #8',
        symbol: 'YA-VAULT-8',
      },
      {
        description: 'IRS PT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/pt',
        display: 'PT #8',
        name: 'PT #8',
        symbol: 'IRS-PT-8',
      },
      {
        description: 'IRS YT #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/yt',
        display: 'YT #8',
        name: 'YT #8',
        symbol: 'IRS-YT-8',
      },
      {
        description: 'IRS LP #8Token',
        denom_units: [
          {
            denom: 'irs/tranche/8/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/8/ls',
        display: 'LP #8',
        name: 'LP #8',
        symbol: 'IRS-LP-8',
      },
      {
        description: 'Yield Aggregator Vault #9Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/9',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/9',
        display: 'YA-Vault-9',
        name: 'YA Vault #9',
        symbol: 'YA-VAULT-9',
      },
      {
        description: 'IRS PT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/pt',
        display: 'PT #9',
        name: 'PT #9',
        symbol: 'IRS-PT-9',
      },
      {
        description: 'IRS YT #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/yt',
        display: 'YT #9',
        name: 'YT #9',
        symbol: 'IRS-YT-9',
      },
      {
        description: 'IRS LP #9Token',
        denom_units: [
          {
            denom: 'irs/tranche/9/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/9/ls',
        display: 'LP #9',
        name: 'LP #9',
        symbol: 'IRS-LP-9',
      },
      {
        description: 'Yield Aggregator Vault #10Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/10',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/10',
        display: 'YA-Vault-10',
        name: 'YA Vault #10',
        symbol: 'YA-VAULT-10',
      },
      {
        description: 'IRS PT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/pt',
        display: 'PT #10',
        name: 'PT #10',
        symbol: 'IRS-PT-10',
      },
      {
        description: 'IRS YT #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/yt',
        display: 'YT #10',
        name: 'YT #10',
        symbol: 'IRS-YT-10',
      },
      {
        description: 'IRS LP #10Token',
        denom_units: [
          {
            denom: 'irs/tranche/10/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/10/ls',
        display: 'LP #10',
        name: 'LP #10',
        symbol: 'IRS-LP-10',
      },
      {
        description: 'Yield Aggregator Vault #11Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/11',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/11',
        display: 'YA-Vault-11',
        name: 'YA Vault #11',
        symbol: 'YA-VAULT-11',
      },
      {
        description: 'IRS PT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/pt',
        display: 'PT #11',
        name: 'PT #11',
        symbol: 'IRS-PT-11',
      },
      {
        description: 'IRS YT #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/yt',
        display: 'YT #11',
        name: 'YT #11',
        symbol: 'IRS-YT-11',
      },
      {
        description: 'IRS LP #11Token',
        denom_units: [
          {
            denom: 'irs/tranche/11/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/11/ls',
        display: 'LP #11',
        name: 'LP #11',
        symbol: 'IRS-LP-11',
      },
      {
        description: 'Yield Aggregator Vault #12Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/12',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/12',
        display: 'YA-Vault-12',
        name: 'YA Vault #12',
        symbol: 'YA-VAULT-12',
      },
      {
        description: 'IRS PT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/pt',
        display: 'PT #12',
        name: 'PT #12',
        symbol: 'IRS-PT-12',
      },
      {
        description: 'IRS YT #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/yt',
        display: 'YT #12',
        name: 'YT #12',
        symbol: 'IRS-YT-12',
      },
      {
        description: 'IRS LP #12Token',
        denom_units: [
          {
            denom: 'irs/tranche/12/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/12/ls',
        display: 'LP #12',
        name: 'LP #12',
        symbol: 'IRS-LP-12',
      },
      {
        description: 'Yield Aggregator Vault #13Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/13',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/13',
        display: 'YA-Vault-13',
        name: 'YA Vault #13',
        symbol: 'YA-VAULT-13',
      },
      {
        description: 'IRS PT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/pt',
        display: 'PT #13',
        name: 'PT #13',
        symbol: 'IRS-PT-13',
      },
      {
        description: 'IRS YT #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/yt',
        display: 'YT #13',
        name: 'YT #13',
        symbol: 'IRS-YT-13',
      },
      {
        description: 'IRS LP #13Token',
        denom_units: [
          {
            denom: 'irs/tranche/13/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/13/ls',
        display: 'LP #13',
        name: 'LP #13',
        symbol: 'IRS-LP-13',
      },
      {
        description: 'Yield Aggregator Vault #14Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/14',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/14',
        display: 'YA-Vault-14',
        name: 'YA Vault #14',
        symbol: 'YA-VAULT-14',
      },
      {
        description: 'IRS PT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/pt',
        display: 'PT #14',
        name: 'PT #14',
        symbol: 'IRS-PT-14',
      },
      {
        description: 'IRS YT #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/yt',
        display: 'YT #14',
        name: 'YT #14',
        symbol: 'IRS-YT-14',
      },
      {
        description: 'IRS LP #14Token',
        denom_units: [
          {
            denom: 'irs/tranche/14/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/14/ls',
        display: 'LP #14',
        name: 'LP #14',
        symbol: 'IRS-LP-14',
      },
      {
        description: 'Yield Aggregator Vault #15Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/15',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/15',
        display: 'YA-Vault-15',
        name: 'YA Vault #15',
        symbol: 'YA-VAULT-15',
      },
      {
        description: 'IRS PT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/pt',
        display: 'PT #15',
        name: 'PT #15',
        symbol: 'IRS-PT-15',
      },
      {
        description: 'IRS YT #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/yt',
        display: 'YT #15',
        name: 'YT #15',
        symbol: 'IRS-YT-15',
      },
      {
        description: 'IRS LP #15Token',
        denom_units: [
          {
            denom: 'irs/tranche/15/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/15/ls',
        display: 'LP #15',
        name: 'LP #15',
        symbol: 'IRS-LP-15',
      },
      {
        description: 'Yield Aggregator Vault #16Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/16',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/16',
        display: 'YA-Vault-16',
        name: 'YA Vault #16',
        symbol: 'YA-VAULT-16',
      },
      {
        description: 'IRS PT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/pt',
        display: 'PT #16',
        name: 'PT #16',
        symbol: 'IRS-PT-16',
      },
      {
        description: 'IRS YT #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/yt',
        display: 'YT #16',
        name: 'YT #16',
        symbol: 'IRS-YT-16',
      },
      {
        description: 'IRS LP #16Token',
        denom_units: [
          {
            denom: 'irs/tranche/16/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/16/ls',
        display: 'LP #16',
        name: 'LP #16',
        symbol: 'IRS-LP-16',
      },
      {
        description: 'Yield Aggregator Vault #17Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/17',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/17',
        display: 'YA-Vault-17',
        name: 'YA Vault #17',
        symbol: 'YA-VAULT-17',
      },
      {
        description: 'IRS PT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/pt',
        display: 'PT #17',
        name: 'PT #17',
        symbol: 'IRS-PT-17',
      },
      {
        description: 'IRS YT #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/yt',
        display: 'YT #17',
        name: 'YT #17',
        symbol: 'IRS-YT-17',
      },
      {
        description: 'IRS LP #17Token',
        denom_units: [
          {
            denom: 'irs/tranche/17/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/17/ls',
        display: 'LP #17',
        name: 'LP #17',
        symbol: 'IRS-LP-17',
      },
      {
        description: 'Yield Aggregator Vault #18Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/18',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/18',
        display: 'YA-Vault-18',
        name: 'YA Vault #18',
        symbol: 'YA-VAULT-18',
      },
      {
        description: 'IRS PT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/pt',
        display: 'PT #18',
        name: 'PT #18',
        symbol: 'IRS-PT-18',
      },
      {
        description: 'IRS YT #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/yt',
        display: 'YT #18',
        name: 'YT #18',
        symbol: 'IRS-YT-18',
      },
      {
        description: 'IRS LP #18Token',
        denom_units: [
          {
            denom: 'irs/tranche/18/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/18/ls',
        display: 'LP #18',
        name: 'LP #18',
        symbol: 'IRS-LP-18',
      },
      {
        description: 'Yield Aggregator Vault #19Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/19',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/19',
        display: 'YA-Vault-19',
        name: 'YA Vault #19',
        symbol: 'YA-VAULT-19',
      },
      {
        description: 'IRS PT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/pt',
        display: 'PT #19',
        name: 'PT #19',
        symbol: 'IRS-PT-19',
      },
      {
        description: 'IRS YT #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/yt',
        display: 'YT #19',
        name: 'YT #19',
        symbol: 'IRS-YT-19',
      },
      {
        description: 'IRS LP #19Token',
        denom_units: [
          {
            denom: 'irs/tranche/19/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/19/ls',
        display: 'LP #19',
        name: 'LP #19',
        symbol: 'IRS-LP-19',
      },
      {
        description: 'Yield Aggregator Vault #20Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/20',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/20',
        display: 'YA-Vault-20',
        name: 'YA Vault #20',
        symbol: 'YA-VAULT-20',
      },
      {
        description: 'IRS PT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/pt',
        display: 'PT #20',
        name: 'PT #20',
        symbol: 'IRS-PT-20',
      },
      {
        description: 'IRS YT #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/yt',
        display: 'YT #20',
        name: 'YT #20',
        symbol: 'IRS-YT-20',
      },
      {
        description: 'IRS LP #20Token',
        denom_units: [
          {
            denom: 'irs/tranche/20/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/20/ls',
        display: 'LP #20',
        name: 'LP #20',
        symbol: 'IRS-LP-20',
      },
      {
        description: 'Yield Aggregator Vault #21Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/21',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/21',
        display: 'YA-Vault-21',
        name: 'YA Vault #21',
        symbol: 'YA-VAULT-21',
      },
      {
        description: 'IRS PT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/pt',
        display: 'PT #21',
        name: 'PT #21',
        symbol: 'IRS-PT-21',
      },
      {
        description: 'IRS YT #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/yt',
        display: 'YT #21',
        name: 'YT #21',
        symbol: 'IRS-YT-21',
      },
      {
        description: 'IRS LP #21Token',
        denom_units: [
          {
            denom: 'irs/tranche/21/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/21/ls',
        display: 'LP #21',
        name: 'LP #21',
        symbol: 'IRS-LP-21',
      },
      {
        description: 'Yield Aggregator Vault #22Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/22',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/22',
        display: 'YA-Vault-22',
        name: 'YA Vault #22',
        symbol: 'YA-VAULT-22',
      },
      {
        description: 'IRS PT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/pt',
        display: 'PT #22',
        name: 'PT #22',
        symbol: 'IRS-PT-22',
      },
      {
        description: 'IRS YT #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/yt',
        display: 'YT #22',
        name: 'YT #22',
        symbol: 'IRS-YT-22',
      },
      {
        description: 'IRS LP #22Token',
        denom_units: [
          {
            denom: 'irs/tranche/22/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/22/ls',
        display: 'LP #22',
        name: 'LP #22',
        symbol: 'IRS-LP-22',
      },
      {
        description: 'Yield Aggregator Vault #23Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/23',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/23',
        display: 'YA-Vault-23',
        name: 'YA Vault #23',
        symbol: 'YA-VAULT-23',
      },
      {
        description: 'IRS PT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/pt',
        display: 'PT #23',
        name: 'PT #23',
        symbol: 'IRS-PT-23',
      },
      {
        description: 'IRS YT #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/yt',
        display: 'YT #23',
        name: 'YT #23',
        symbol: 'IRS-YT-23',
      },
      {
        description: 'IRS LP #23Token',
        denom_units: [
          {
            denom: 'irs/tranche/23/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/23/ls',
        display: 'LP #23',
        name: 'LP #23',
        symbol: 'IRS-LP-23',
      },
      {
        description: 'Yield Aggregator Vault #24Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/24',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/24',
        display: 'YA-Vault-24',
        name: 'YA Vault #24',
        symbol: 'YA-VAULT-24',
      },
      {
        description: 'IRS PT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/pt',
        display: 'PT #24',
        name: 'PT #24',
        symbol: 'IRS-PT-24',
      },
      {
        description: 'IRS YT #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/yt',
        display: 'YT #24',
        name: 'YT #24',
        symbol: 'IRS-YT-24',
      },
      {
        description: 'IRS LP #24Token',
        denom_units: [
          {
            denom: 'irs/tranche/24/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/24/ls',
        display: 'LP #24',
        name: 'LP #24',
        symbol: 'IRS-LP-24',
      },
      {
        description: 'Yield Aggregator Vault #25Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/25',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/25',
        display: 'YA-Vault-25',
        name: 'YA Vault #25',
        symbol: 'YA-VAULT-25',
      },
      {
        description: 'IRS PT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/pt',
        display: 'PT #25',
        name: 'PT #25',
        symbol: 'IRS-PT-25',
      },
      {
        description: 'IRS YT #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/yt',
        display: 'YT #25',
        name: 'YT #25',
        symbol: 'IRS-YT-25',
      },
      {
        description: 'IRS LP #25Token',
        denom_units: [
          {
            denom: 'irs/tranche/25/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/25/ls',
        display: 'LP #25',
        name: 'LP #25',
        symbol: 'IRS-LP-25',
      },
      {
        description: 'Yield Aggregator Vault #26Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/26',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/26',
        display: 'YA-Vault-26',
        name: 'YA Vault #26',
        symbol: 'YA-VAULT-26',
      },
      {
        description: 'IRS PT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/pt',
        display: 'PT #26',
        name: 'PT #26',
        symbol: 'IRS-PT-26',
      },
      {
        description: 'IRS YT #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/yt',
        display: 'YT #26',
        name: 'YT #26',
        symbol: 'IRS-YT-26',
      },
      {
        description: 'IRS LP #26Token',
        denom_units: [
          {
            denom: 'irs/tranche/26/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/26/ls',
        display: 'LP #26',
        name: 'LP #26',
        symbol: 'IRS-LP-26',
      },
      {
        description: 'Yield Aggregator Vault #27Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/27',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/27',
        display: 'YA-Vault-27',
        name: 'YA Vault #27',
        symbol: 'YA-VAULT-27',
      },
      {
        description: 'IRS PT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/pt',
        display: 'PT #27',
        name: 'PT #27',
        symbol: 'IRS-PT-27',
      },
      {
        description: 'IRS YT #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/yt',
        display: 'YT #27',
        name: 'YT #27',
        symbol: 'IRS-YT-27',
      },
      {
        description: 'IRS LP #27Token',
        denom_units: [
          {
            denom: 'irs/tranche/27/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/27/ls',
        display: 'LP #27',
        name: 'LP #27',
        symbol: 'IRS-LP-27',
      },
      {
        description: 'Yield Aggregator Vault #28Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/28',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/28',
        display: 'YA-Vault-28',
        name: 'YA Vault #28',
        symbol: 'YA-VAULT-28',
      },
      {
        description: 'IRS PT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/pt',
        display: 'PT #28',
        name: 'PT #28',
        symbol: 'IRS-PT-28',
      },
      {
        description: 'IRS YT #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/yt',
        display: 'YT #28',
        name: 'YT #28',
        symbol: 'IRS-YT-28',
      },
      {
        description: 'IRS LP #28Token',
        denom_units: [
          {
            denom: 'irs/tranche/28/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/28/ls',
        display: 'LP #28',
        name: 'LP #28',
        symbol: 'IRS-LP-28',
      },
      {
        description: 'Yield Aggregator Vault #29Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/29',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/29',
        display: 'YA-Vault-29',
        name: 'YA Vault #29',
        symbol: 'YA-VAULT-29',
      },
      {
        description: 'IRS PT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/pt',
        display: 'PT #29',
        name: 'PT #29',
        symbol: 'IRS-PT-29',
      },
      {
        description: 'IRS YT #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/yt',
        display: 'YT #29',
        name: 'YT #29',
        symbol: 'IRS-YT-29',
      },
      {
        description: 'IRS LP #29Token',
        denom_units: [
          {
            denom: 'irs/tranche/29/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/29/ls',
        display: 'LP #29',
        name: 'LP #29',
        symbol: 'IRS-LP-29',
      },
      {
        description: 'Yield Aggregator Vault #30Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/30',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/30',
        display: 'YA-Vault-30',
        name: 'YA Vault #30',
        symbol: 'YA-VAULT-30',
      },
      {
        description: 'IRS PT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/pt',
        display: 'PT #30',
        name: 'PT #30',
        symbol: 'IRS-PT-30',
      },
      {
        description: 'IRS YT #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/yt',
        display: 'YT #30',
        name: 'YT #30',
        symbol: 'IRS-YT-30',
      },
      {
        description: 'IRS LP #30Token',
        denom_units: [
          {
            denom: 'irs/tranche/30/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/30/ls',
        display: 'LP #30',
        name: 'LP #30',
        symbol: 'IRS-LP-30',
      },
      {
        description: 'Yield Aggregator Vault #31Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/31',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/31',
        display: 'YA-Vault-31',
        name: 'YA Vault #31',
        symbol: 'YA-VAULT-31',
      },
      {
        description: 'IRS PT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/pt',
        display: 'PT #31',
        name: 'PT #31',
        symbol: 'IRS-PT-31',
      },
      {
        description: 'IRS YT #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/yt',
        display: 'YT #31',
        name: 'YT #31',
        symbol: 'IRS-YT-31',
      },
      {
        description: 'IRS LP #31Token',
        denom_units: [
          {
            denom: 'irs/tranche/31/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/31/ls',
        display: 'LP #31',
        name: 'LP #31',
        symbol: 'IRS-LP-31',
      },
      {
        description: 'Yield Aggregator Vault #32Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/32',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/32',
        display: 'YA-Vault-32',
        name: 'YA Vault #32',
        symbol: 'YA-VAULT-32',
      },
      {
        description: 'IRS PT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/pt',
        display: 'PT #32',
        name: 'PT #32',
        symbol: 'IRS-PT-32',
      },
      {
        description: 'IRS YT #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/yt',
        display: 'YT #32',
        name: 'YT #32',
        symbol: 'IRS-YT-32',
      },
      {
        description: 'IRS LP #32Token',
        denom_units: [
          {
            denom: 'irs/tranche/32/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/32/ls',
        display: 'LP #32',
        name: 'LP #32',
        symbol: 'IRS-LP-32',
      },
      {
        description: 'Yield Aggregator Vault #33Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/33',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/33',
        display: 'YA-Vault-33',
        name: 'YA Vault #33',
        symbol: 'YA-VAULT-33',
      },
      {
        description: 'IRS PT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/pt',
        display: 'PT #33',
        name: 'PT #33',
        symbol: 'IRS-PT-33',
      },
      {
        description: 'IRS YT #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/yt',
        display: 'YT #33',
        name: 'YT #33',
        symbol: 'IRS-YT-33',
      },
      {
        description: 'IRS LP #33Token',
        denom_units: [
          {
            denom: 'irs/tranche/33/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/33/ls',
        display: 'LP #33',
        name: 'LP #33',
        symbol: 'IRS-LP-33',
      },
      {
        description: 'Yield Aggregator Vault #34Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/34',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/34',
        display: 'YA-Vault-34',
        name: 'YA Vault #34',
        symbol: 'YA-VAULT-34',
      },
      {
        description: 'IRS PT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/pt',
        display: 'PT #34',
        name: 'PT #34',
        symbol: 'IRS-PT-34',
      },
      {
        description: 'IRS YT #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/yt',
        display: 'YT #34',
        name: 'YT #34',
        symbol: 'IRS-YT-34',
      },
      {
        description: 'IRS LP #34Token',
        denom_units: [
          {
            denom: 'irs/tranche/34/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/34/ls',
        display: 'LP #34',
        name: 'LP #34',
        symbol: 'IRS-LP-34',
      },
      {
        description: 'Yield Aggregator Vault #35Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/35',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/35',
        display: 'YA-Vault-35',
        name: 'YA Vault #35',
        symbol: 'YA-VAULT-35',
      },
      {
        description: 'IRS PT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/pt',
        display: 'PT #35',
        name: 'PT #35',
        symbol: 'IRS-PT-35',
      },
      {
        description: 'IRS YT #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/yt',
        display: 'YT #35',
        name: 'YT #35',
        symbol: 'IRS-YT-35',
      },
      {
        description: 'IRS LP #35Token',
        denom_units: [
          {
            denom: 'irs/tranche/35/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/35/ls',
        display: 'LP #35',
        name: 'LP #35',
        symbol: 'IRS-LP-35',
      },
      {
        description: 'Yield Aggregator Vault #36Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/36',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/36',
        display: 'YA-Vault-36',
        name: 'YA Vault #36',
        symbol: 'YA-VAULT-36',
      },
      {
        description: 'IRS PT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/pt',
        display: 'PT #36',
        name: 'PT #36',
        symbol: 'IRS-PT-36',
      },
      {
        description: 'IRS YT #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/yt',
        display: 'YT #36',
        name: 'YT #36',
        symbol: 'IRS-YT-36',
      },
      {
        description: 'IRS LP #36Token',
        denom_units: [
          {
            denom: 'irs/tranche/36/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/36/ls',
        display: 'LP #36',
        name: 'LP #36',
        symbol: 'IRS-LP-36',
      },
      {
        description: 'Yield Aggregator Vault #37Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/37',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/37',
        display: 'YA-Vault-37',
        name: 'YA Vault #37',
        symbol: 'YA-VAULT-37',
      },
      {
        description: 'IRS PT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/pt',
        display: 'PT #37',
        name: 'PT #37',
        symbol: 'IRS-PT-37',
      },
      {
        description: 'IRS YT #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/yt',
        display: 'YT #37',
        name: 'YT #37',
        symbol: 'IRS-YT-37',
      },
      {
        description: 'IRS LP #37Token',
        denom_units: [
          {
            denom: 'irs/tranche/37/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/37/ls',
        display: 'LP #37',
        name: 'LP #37',
        symbol: 'IRS-LP-37',
      },
      {
        description: 'Yield Aggregator Vault #38Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/38',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/38',
        display: 'YA-Vault-38',
        name: 'YA Vault #38',
        symbol: 'YA-VAULT-38',
      },
      {
        description: 'IRS PT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/pt',
        display: 'PT #38',
        name: 'PT #38',
        symbol: 'IRS-PT-38',
      },
      {
        description: 'IRS YT #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/yt',
        display: 'YT #38',
        name: 'YT #38',
        symbol: 'IRS-YT-38',
      },
      {
        description: 'IRS LP #38Token',
        denom_units: [
          {
            denom: 'irs/tranche/38/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/38/ls',
        display: 'LP #38',
        name: 'LP #38',
        symbol: 'IRS-LP-38',
      },
      {
        description: 'Yield Aggregator Vault #39Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/39',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/39',
        display: 'YA-Vault-39',
        name: 'YA Vault #39',
        symbol: 'YA-VAULT-39',
      },
      {
        description: 'IRS PT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/pt',
        display: 'PT #39',
        name: 'PT #39',
        symbol: 'IRS-PT-39',
      },
      {
        description: 'IRS YT #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/yt',
        display: 'YT #39',
        name: 'YT #39',
        symbol: 'IRS-YT-39',
      },
      {
        description: 'IRS LP #39Token',
        denom_units: [
          {
            denom: 'irs/tranche/39/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/39/ls',
        display: 'LP #39',
        name: 'LP #39',
        symbol: 'IRS-LP-39',
      },
      {
        description: 'Yield Aggregator Vault #40Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/40',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/40',
        display: 'YA-Vault-40',
        name: 'YA Vault #40',
        symbol: 'YA-VAULT-40',
      },
      {
        description: 'IRS PT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/pt',
        display: 'PT #40',
        name: 'PT #40',
        symbol: 'IRS-PT-40',
      },
      {
        description: 'IRS YT #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/yt',
        display: 'YT #40',
        name: 'YT #40',
        symbol: 'IRS-YT-40',
      },
      {
        description: 'IRS LP #40Token',
        denom_units: [
          {
            denom: 'irs/tranche/40/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/40/ls',
        display: 'LP #40',
        name: 'LP #40',
        symbol: 'IRS-LP-40',
      },
      {
        description: 'Yield Aggregator Vault #41Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/41',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/41',
        display: 'YA-Vault-41',
        name: 'YA Vault #41',
        symbol: 'YA-VAULT-41',
      },
      {
        description: 'IRS PT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/pt',
        display: 'PT #41',
        name: 'PT #41',
        symbol: 'IRS-PT-41',
      },
      {
        description: 'IRS YT #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/yt',
        display: 'YT #41',
        name: 'YT #41',
        symbol: 'IRS-YT-41',
      },
      {
        description: 'IRS LP #41Token',
        denom_units: [
          {
            denom: 'irs/tranche/41/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/41/ls',
        display: 'LP #41',
        name: 'LP #41',
        symbol: 'IRS-LP-41',
      },
      {
        description: 'Yield Aggregator Vault #42Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/42',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/42',
        display: 'YA-Vault-42',
        name: 'YA Vault #42',
        symbol: 'YA-VAULT-42',
      },
      {
        description: 'IRS PT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/pt',
        display: 'PT #42',
        name: 'PT #42',
        symbol: 'IRS-PT-42',
      },
      {
        description: 'IRS YT #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/yt',
        display: 'YT #42',
        name: 'YT #42',
        symbol: 'IRS-YT-42',
      },
      {
        description: 'IRS LP #42Token',
        denom_units: [
          {
            denom: 'irs/tranche/42/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/42/ls',
        display: 'LP #42',
        name: 'LP #42',
        symbol: 'IRS-LP-42',
      },
      {
        description: 'Yield Aggregator Vault #43Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/43',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/43',
        display: 'YA-Vault-43',
        name: 'YA Vault #43',
        symbol: 'YA-VAULT-43',
      },
      {
        description: 'IRS PT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/pt',
        display: 'PT #43',
        name: 'PT #43',
        symbol: 'IRS-PT-43',
      },
      {
        description: 'IRS YT #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/yt',
        display: 'YT #43',
        name: 'YT #43',
        symbol: 'IRS-YT-43',
      },
      {
        description: 'IRS LP #43Token',
        denom_units: [
          {
            denom: 'irs/tranche/43/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/43/ls',
        display: 'LP #43',
        name: 'LP #43',
        symbol: 'IRS-LP-43',
      },
      {
        description: 'Yield Aggregator Vault #44Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/44',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/44',
        display: 'YA-Vault-44',
        name: 'YA Vault #44',
        symbol: 'YA-VAULT-44',
      },
      {
        description: 'IRS PT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/pt',
        display: 'PT #44',
        name: 'PT #44',
        symbol: 'IRS-PT-44',
      },
      {
        description: 'IRS YT #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/yt',
        display: 'YT #44',
        name: 'YT #44',
        symbol: 'IRS-YT-44',
      },
      {
        description: 'IRS LP #44Token',
        denom_units: [
          {
            denom: 'irs/tranche/44/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/44/ls',
        display: 'LP #44',
        name: 'LP #44',
        symbol: 'IRS-LP-44',
      },
      {
        description: 'Yield Aggregator Vault #45Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/45',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/45',
        display: 'YA-Vault-45',
        name: 'YA Vault #45',
        symbol: 'YA-VAULT-45',
      },
      {
        description: 'IRS PT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/pt',
        display: 'PT #45',
        name: 'PT #45',
        symbol: 'IRS-PT-45',
      },
      {
        description: 'IRS YT #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/yt',
        display: 'YT #45',
        name: 'YT #45',
        symbol: 'IRS-YT-45',
      },
      {
        description: 'IRS LP #45Token',
        denom_units: [
          {
            denom: 'irs/tranche/45/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/45/ls',
        display: 'LP #45',
        name: 'LP #45',
        symbol: 'IRS-LP-45',
      },
      {
        description: 'Yield Aggregator Vault #46Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/46',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/46',
        display: 'YA-Vault-46',
        name: 'YA Vault #46',
        symbol: 'YA-VAULT-46',
      },
      {
        description: 'IRS PT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/pt',
        display: 'PT #46',
        name: 'PT #46',
        symbol: 'IRS-PT-46',
      },
      {
        description: 'IRS YT #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/yt',
        display: 'YT #46',
        name: 'YT #46',
        symbol: 'IRS-YT-46',
      },
      {
        description: 'IRS LP #46Token',
        denom_units: [
          {
            denom: 'irs/tranche/46/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/46/ls',
        display: 'LP #46',
        name: 'LP #46',
        symbol: 'IRS-LP-46',
      },
      {
        description: 'Yield Aggregator Vault #47Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/47',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/47',
        display: 'YA-Vault-47',
        name: 'YA Vault #47',
        symbol: 'YA-VAULT-47',
      },
      {
        description: 'IRS PT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/pt',
        display: 'PT #47',
        name: 'PT #47',
        symbol: 'IRS-PT-47',
      },
      {
        description: 'IRS YT #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/yt',
        display: 'YT #47',
        name: 'YT #47',
        symbol: 'IRS-YT-47',
      },
      {
        description: 'IRS LP #47Token',
        denom_units: [
          {
            denom: 'irs/tranche/47/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/47/ls',
        display: 'LP #47',
        name: 'LP #47',
        symbol: 'IRS-LP-47',
      },
      {
        description: 'Yield Aggregator Vault #48Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/48',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/48',
        display: 'YA-Vault-48',
        name: 'YA Vault #48',
        symbol: 'YA-VAULT-48',
      },
      {
        description: 'IRS PT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/pt',
        display: 'PT #48',
        name: 'PT #48',
        symbol: 'IRS-PT-48',
      },
      {
        description: 'IRS YT #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/yt',
        display: 'YT #48',
        name: 'YT #48',
        symbol: 'IRS-YT-48',
      },
      {
        description: 'IRS LP #48Token',
        denom_units: [
          {
            denom: 'irs/tranche/48/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/48/ls',
        display: 'LP #48',
        name: 'LP #48',
        symbol: 'IRS-LP-48',
      },
      {
        description: 'Yield Aggregator Vault #49Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/49',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/49',
        display: 'YA-Vault-49',
        name: 'YA Vault #49',
        symbol: 'YA-VAULT-49',
      },
      {
        description: 'IRS PT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/pt',
        display: 'PT #49',
        name: 'PT #49',
        symbol: 'IRS-PT-49',
      },
      {
        description: 'IRS YT #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/yt',
        display: 'YT #49',
        name: 'YT #49',
        symbol: 'IRS-YT-49',
      },
      {
        description: 'IRS LP #49Token',
        denom_units: [
          {
            denom: 'irs/tranche/49/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/49/ls',
        display: 'LP #49',
        name: 'LP #49',
        symbol: 'IRS-LP-49',
      },
      {
        description: 'Yield Aggregator Vault #50Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/50',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/50',
        display: 'YA-Vault-50',
        name: 'YA Vault #50',
        symbol: 'YA-VAULT-50',
      },
      {
        description: 'IRS PT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/pt',
        display: 'PT #50',
        name: 'PT #50',
        symbol: 'IRS-PT-50',
      },
      {
        description: 'IRS YT #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/yt',
        display: 'YT #50',
        name: 'YT #50',
        symbol: 'IRS-YT-50',
      },
      {
        description: 'IRS LP #50Token',
        denom_units: [
          {
            denom: 'irs/tranche/50/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/50/ls',
        display: 'LP #50',
        name: 'LP #50',
        symbol: 'IRS-LP-50',
      },
      {
        description: 'Yield Aggregator Vault #51Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/51',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/51',
        display: 'YA-Vault-51',
        name: 'YA Vault #51',
        symbol: 'YA-VAULT-51',
      },
      {
        description: 'IRS PT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/pt',
        display: 'PT #51',
        name: 'PT #51',
        symbol: 'IRS-PT-51',
      },
      {
        description: 'IRS YT #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/yt',
        display: 'YT #51',
        name: 'YT #51',
        symbol: 'IRS-YT-51',
      },
      {
        description: 'IRS LP #51Token',
        denom_units: [
          {
            denom: 'irs/tranche/51/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/51/ls',
        display: 'LP #51',
        name: 'LP #51',
        symbol: 'IRS-LP-51',
      },
      {
        description: 'Yield Aggregator Vault #52Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/52',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/52',
        display: 'YA-Vault-52',
        name: 'YA Vault #52',
        symbol: 'YA-VAULT-52',
      },
      {
        description: 'IRS PT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/pt',
        display: 'PT #52',
        name: 'PT #52',
        symbol: 'IRS-PT-52',
      },
      {
        description: 'IRS YT #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/yt',
        display: 'YT #52',
        name: 'YT #52',
        symbol: 'IRS-YT-52',
      },
      {
        description: 'IRS LP #52Token',
        denom_units: [
          {
            denom: 'irs/tranche/52/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/52/ls',
        display: 'LP #52',
        name: 'LP #52',
        symbol: 'IRS-LP-52',
      },
      {
        description: 'Yield Aggregator Vault #53Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/53',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/53',
        display: 'YA-Vault-53',
        name: 'YA Vault #53',
        symbol: 'YA-VAULT-53',
      },
      {
        description: 'IRS PT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/pt',
        display: 'PT #53',
        name: 'PT #53',
        symbol: 'IRS-PT-53',
      },
      {
        description: 'IRS YT #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/yt',
        display: 'YT #53',
        name: 'YT #53',
        symbol: 'IRS-YT-53',
      },
      {
        description: 'IRS LP #53Token',
        denom_units: [
          {
            denom: 'irs/tranche/53/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/53/ls',
        display: 'LP #53',
        name: 'LP #53',
        symbol: 'IRS-LP-53',
      },
      {
        description: 'Yield Aggregator Vault #54Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/54',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/54',
        display: 'YA-Vault-54',
        name: 'YA Vault #54',
        symbol: 'YA-VAULT-54',
      },
      {
        description: 'IRS PT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/pt',
        display: 'PT #54',
        name: 'PT #54',
        symbol: 'IRS-PT-54',
      },
      {
        description: 'IRS YT #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/yt',
        display: 'YT #54',
        name: 'YT #54',
        symbol: 'IRS-YT-54',
      },
      {
        description: 'IRS LP #54Token',
        denom_units: [
          {
            denom: 'irs/tranche/54/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/54/ls',
        display: 'LP #54',
        name: 'LP #54',
        symbol: 'IRS-LP-54',
      },
      {
        description: 'Yield Aggregator Vault #55Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/55',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/55',
        display: 'YA-Vault-55',
        name: 'YA Vault #55',
        symbol: 'YA-VAULT-55',
      },
      {
        description: 'IRS PT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/pt',
        display: 'PT #55',
        name: 'PT #55',
        symbol: 'IRS-PT-55',
      },
      {
        description: 'IRS YT #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/yt',
        display: 'YT #55',
        name: 'YT #55',
        symbol: 'IRS-YT-55',
      },
      {
        description: 'IRS LP #55Token',
        denom_units: [
          {
            denom: 'irs/tranche/55/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/55/ls',
        display: 'LP #55',
        name: 'LP #55',
        symbol: 'IRS-LP-55',
      },
      {
        description: 'Yield Aggregator Vault #56Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/56',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/56',
        display: 'YA-Vault-56',
        name: 'YA Vault #56',
        symbol: 'YA-VAULT-56',
      },
      {
        description: 'IRS PT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/pt',
        display: 'PT #56',
        name: 'PT #56',
        symbol: 'IRS-PT-56',
      },
      {
        description: 'IRS YT #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/yt',
        display: 'YT #56',
        name: 'YT #56',
        symbol: 'IRS-YT-56',
      },
      {
        description: 'IRS LP #56Token',
        denom_units: [
          {
            denom: 'irs/tranche/56/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/56/ls',
        display: 'LP #56',
        name: 'LP #56',
        symbol: 'IRS-LP-56',
      },
      {
        description: 'Yield Aggregator Vault #57Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/57',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/57',
        display: 'YA-Vault-57',
        name: 'YA Vault #57',
        symbol: 'YA-VAULT-57',
      },
      {
        description: 'IRS PT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/pt',
        display: 'PT #57',
        name: 'PT #57',
        symbol: 'IRS-PT-57',
      },
      {
        description: 'IRS YT #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/yt',
        display: 'YT #57',
        name: 'YT #57',
        symbol: 'IRS-YT-57',
      },
      {
        description: 'IRS LP #57Token',
        denom_units: [
          {
            denom: 'irs/tranche/57/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/57/ls',
        display: 'LP #57',
        name: 'LP #57',
        symbol: 'IRS-LP-57',
      },
      {
        description: 'Yield Aggregator Vault #58Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/58',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/58',
        display: 'YA-Vault-58',
        name: 'YA Vault #58',
        symbol: 'YA-VAULT-58',
      },
      {
        description: 'IRS PT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/pt',
        display: 'PT #58',
        name: 'PT #58',
        symbol: 'IRS-PT-58',
      },
      {
        description: 'IRS YT #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/yt',
        display: 'YT #58',
        name: 'YT #58',
        symbol: 'IRS-YT-58',
      },
      {
        description: 'IRS LP #58Token',
        denom_units: [
          {
            denom: 'irs/tranche/58/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/58/ls',
        display: 'LP #58',
        name: 'LP #58',
        symbol: 'IRS-LP-58',
      },
      {
        description: 'Yield Aggregator Vault #59Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/59',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/59',
        display: 'YA-Vault-59',
        name: 'YA Vault #59',
        symbol: 'YA-VAULT-59',
      },
      {
        description: 'IRS PT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/pt',
        display: 'PT #59',
        name: 'PT #59',
        symbol: 'IRS-PT-59',
      },
      {
        description: 'IRS YT #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/yt',
        display: 'YT #59',
        name: 'YT #59',
        symbol: 'IRS-YT-59',
      },
      {
        description: 'IRS LP #59Token',
        denom_units: [
          {
            denom: 'irs/tranche/59/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/59/ls',
        display: 'LP #59',
        name: 'LP #59',
        symbol: 'IRS-LP-59',
      },
      {
        description: 'Yield Aggregator Vault #60Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/60',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/60',
        display: 'YA-Vault-60',
        name: 'YA Vault #60',
        symbol: 'YA-VAULT-60',
      },
      {
        description: 'IRS PT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/pt',
        display: 'PT #60',
        name: 'PT #60',
        symbol: 'IRS-PT-60',
      },
      {
        description: 'IRS YT #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/yt',
        display: 'YT #60',
        name: 'YT #60',
        symbol: 'IRS-YT-60',
      },
      {
        description: 'IRS LP #60Token',
        denom_units: [
          {
            denom: 'irs/tranche/60/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/60/ls',
        display: 'LP #60',
        name: 'LP #60',
        symbol: 'IRS-LP-60',
      },
      {
        description: 'Yield Aggregator Vault #61Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/61',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/61',
        display: 'YA-Vault-61',
        name: 'YA Vault #61',
        symbol: 'YA-VAULT-61',
      },
      {
        description: 'IRS PT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/pt',
        display: 'PT #61',
        name: 'PT #61',
        symbol: 'IRS-PT-61',
      },
      {
        description: 'IRS YT #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/yt',
        display: 'YT #61',
        name: 'YT #61',
        symbol: 'IRS-YT-61',
      },
      {
        description: 'IRS LP #61Token',
        denom_units: [
          {
            denom: 'irs/tranche/61/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/61/ls',
        display: 'LP #61',
        name: 'LP #61',
        symbol: 'IRS-LP-61',
      },
      {
        description: 'Yield Aggregator Vault #62Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/62',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/62',
        display: 'YA-Vault-62',
        name: 'YA Vault #62',
        symbol: 'YA-VAULT-62',
      },
      {
        description: 'IRS PT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/pt',
        display: 'PT #62',
        name: 'PT #62',
        symbol: 'IRS-PT-62',
      },
      {
        description: 'IRS YT #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/yt',
        display: 'YT #62',
        name: 'YT #62',
        symbol: 'IRS-YT-62',
      },
      {
        description: 'IRS LP #62Token',
        denom_units: [
          {
            denom: 'irs/tranche/62/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/62/ls',
        display: 'LP #62',
        name: 'LP #62',
        symbol: 'IRS-LP-62',
      },
      {
        description: 'Yield Aggregator Vault #63Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/63',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/63',
        display: 'YA-Vault-63',
        name: 'YA Vault #63',
        symbol: 'YA-VAULT-63',
      },
      {
        description: 'IRS PT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/pt',
        display: 'PT #63',
        name: 'PT #63',
        symbol: 'IRS-PT-63',
      },
      {
        description: 'IRS YT #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/yt',
        display: 'YT #63',
        name: 'YT #63',
        symbol: 'IRS-YT-63',
      },
      {
        description: 'IRS LP #63Token',
        denom_units: [
          {
            denom: 'irs/tranche/63/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/63/ls',
        display: 'LP #63',
        name: 'LP #63',
        symbol: 'IRS-LP-63',
      },
      {
        description: 'Yield Aggregator Vault #64Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/64',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/64',
        display: 'YA-Vault-64',
        name: 'YA Vault #64',
        symbol: 'YA-VAULT-64',
      },
      {
        description: 'IRS PT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/pt',
        display: 'PT #64',
        name: 'PT #64',
        symbol: 'IRS-PT-64',
      },
      {
        description: 'IRS YT #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/yt',
        display: 'YT #64',
        name: 'YT #64',
        symbol: 'IRS-YT-64',
      },
      {
        description: 'IRS LP #64Token',
        denom_units: [
          {
            denom: 'irs/tranche/64/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/64/ls',
        display: 'LP #64',
        name: 'LP #64',
        symbol: 'IRS-LP-64',
      },
      {
        description: 'Yield Aggregator Vault #65Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/65',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/65',
        display: 'YA-Vault-65',
        name: 'YA Vault #65',
        symbol: 'YA-VAULT-65',
      },
      {
        description: 'IRS PT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/pt',
        display: 'PT #65',
        name: 'PT #65',
        symbol: 'IRS-PT-65',
      },
      {
        description: 'IRS YT #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/yt',
        display: 'YT #65',
        name: 'YT #65',
        symbol: 'IRS-YT-65',
      },
      {
        description: 'IRS LP #65Token',
        denom_units: [
          {
            denom: 'irs/tranche/65/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/65/ls',
        display: 'LP #65',
        name: 'LP #65',
        symbol: 'IRS-LP-65',
      },
      {
        description: 'Yield Aggregator Vault #66Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/66',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/66',
        display: 'YA-Vault-66',
        name: 'YA Vault #66',
        symbol: 'YA-VAULT-66',
      },
      {
        description: 'IRS PT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/pt',
        display: 'PT #66',
        name: 'PT #66',
        symbol: 'IRS-PT-66',
      },
      {
        description: 'IRS YT #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/yt',
        display: 'YT #66',
        name: 'YT #66',
        symbol: 'IRS-YT-66',
      },
      {
        description: 'IRS LP #66Token',
        denom_units: [
          {
            denom: 'irs/tranche/66/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/66/ls',
        display: 'LP #66',
        name: 'LP #66',
        symbol: 'IRS-LP-66',
      },
      {
        description: 'Yield Aggregator Vault #67Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/67',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/67',
        display: 'YA-Vault-67',
        name: 'YA Vault #67',
        symbol: 'YA-VAULT-67',
      },
      {
        description: 'IRS PT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/pt',
        display: 'PT #67',
        name: 'PT #67',
        symbol: 'IRS-PT-67',
      },
      {
        description: 'IRS YT #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/yt',
        display: 'YT #67',
        name: 'YT #67',
        symbol: 'IRS-YT-67',
      },
      {
        description: 'IRS LP #67Token',
        denom_units: [
          {
            denom: 'irs/tranche/67/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/67/ls',
        display: 'LP #67',
        name: 'LP #67',
        symbol: 'IRS-LP-67',
      },
      {
        description: 'Yield Aggregator Vault #68Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/68',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/68',
        display: 'YA-Vault-68',
        name: 'YA Vault #68',
        symbol: 'YA-VAULT-68',
      },
      {
        description: 'IRS PT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/pt',
        display: 'PT #68',
        name: 'PT #68',
        symbol: 'IRS-PT-68',
      },
      {
        description: 'IRS YT #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/yt',
        display: 'YT #68',
        name: 'YT #68',
        symbol: 'IRS-YT-68',
      },
      {
        description: 'IRS LP #68Token',
        denom_units: [
          {
            denom: 'irs/tranche/68/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/68/ls',
        display: 'LP #68',
        name: 'LP #68',
        symbol: 'IRS-LP-68',
      },
      {
        description: 'Yield Aggregator Vault #69Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/69',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/69',
        display: 'YA-Vault-69',
        name: 'YA Vault #69',
        symbol: 'YA-VAULT-69',
      },
      {
        description: 'IRS PT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/pt',
        display: 'PT #69',
        name: 'PT #69',
        symbol: 'IRS-PT-69',
      },
      {
        description: 'IRS YT #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/yt',
        display: 'YT #69',
        name: 'YT #69',
        symbol: 'IRS-YT-69',
      },
      {
        description: 'IRS LP #69Token',
        denom_units: [
          {
            denom: 'irs/tranche/69/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/69/ls',
        display: 'LP #69',
        name: 'LP #69',
        symbol: 'IRS-LP-69',
      },
      {
        description: 'Yield Aggregator Vault #70Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/70',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/70',
        display: 'YA-Vault-70',
        name: 'YA Vault #70',
        symbol: 'YA-VAULT-70',
      },
      {
        description: 'IRS PT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/pt',
        display: 'PT #70',
        name: 'PT #70',
        symbol: 'IRS-PT-70',
      },
      {
        description: 'IRS YT #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/yt',
        display: 'YT #70',
        name: 'YT #70',
        symbol: 'IRS-YT-70',
      },
      {
        description: 'IRS LP #70Token',
        denom_units: [
          {
            denom: 'irs/tranche/70/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/70/ls',
        display: 'LP #70',
        name: 'LP #70',
        symbol: 'IRS-LP-70',
      },
      {
        description: 'Yield Aggregator Vault #71Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/71',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/71',
        display: 'YA-Vault-71',
        name: 'YA Vault #71',
        symbol: 'YA-VAULT-71',
      },
      {
        description: 'IRS PT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/pt',
        display: 'PT #71',
        name: 'PT #71',
        symbol: 'IRS-PT-71',
      },
      {
        description: 'IRS YT #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/yt',
        display: 'YT #71',
        name: 'YT #71',
        symbol: 'IRS-YT-71',
      },
      {
        description: 'IRS LP #71Token',
        denom_units: [
          {
            denom: 'irs/tranche/71/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/71/ls',
        display: 'LP #71',
        name: 'LP #71',
        symbol: 'IRS-LP-71',
      },
      {
        description: 'Yield Aggregator Vault #72Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/72',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/72',
        display: 'YA-Vault-72',
        name: 'YA Vault #72',
        symbol: 'YA-VAULT-72',
      },
      {
        description: 'IRS PT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/pt',
        display: 'PT #72',
        name: 'PT #72',
        symbol: 'IRS-PT-72',
      },
      {
        description: 'IRS YT #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/yt',
        display: 'YT #72',
        name: 'YT #72',
        symbol: 'IRS-YT-72',
      },
      {
        description: 'IRS LP #72Token',
        denom_units: [
          {
            denom: 'irs/tranche/72/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/72/ls',
        display: 'LP #72',
        name: 'LP #72',
        symbol: 'IRS-LP-72',
      },
      {
        description: 'Yield Aggregator Vault #73Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/73',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/73',
        display: 'YA-Vault-73',
        name: 'YA Vault #73',
        symbol: 'YA-VAULT-73',
      },
      {
        description: 'IRS PT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/pt',
        display: 'PT #73',
        name: 'PT #73',
        symbol: 'IRS-PT-73',
      },
      {
        description: 'IRS YT #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/yt',
        display: 'YT #73',
        name: 'YT #73',
        symbol: 'IRS-YT-73',
      },
      {
        description: 'IRS LP #73Token',
        denom_units: [
          {
            denom: 'irs/tranche/73/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/73/ls',
        display: 'LP #73',
        name: 'LP #73',
        symbol: 'IRS-LP-73',
      },
      {
        description: 'Yield Aggregator Vault #74Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/74',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/74',
        display: 'YA-Vault-74',
        name: 'YA Vault #74',
        symbol: 'YA-VAULT-74',
      },
      {
        description: 'IRS PT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/pt',
        display: 'PT #74',
        name: 'PT #74',
        symbol: 'IRS-PT-74',
      },
      {
        description: 'IRS YT #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/yt',
        display: 'YT #74',
        name: 'YT #74',
        symbol: 'IRS-YT-74',
      },
      {
        description: 'IRS LP #74Token',
        denom_units: [
          {
            denom: 'irs/tranche/74/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/74/ls',
        display: 'LP #74',
        name: 'LP #74',
        symbol: 'IRS-LP-74',
      },
      {
        description: 'Yield Aggregator Vault #75Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/75',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/75',
        display: 'YA-Vault-75',
        name: 'YA Vault #75',
        symbol: 'YA-VAULT-75',
      },
      {
        description: 'IRS PT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/pt',
        display: 'PT #75',
        name: 'PT #75',
        symbol: 'IRS-PT-75',
      },
      {
        description: 'IRS YT #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/yt',
        display: 'YT #75',
        name: 'YT #75',
        symbol: 'IRS-YT-75',
      },
      {
        description: 'IRS LP #75Token',
        denom_units: [
          {
            denom: 'irs/tranche/75/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/75/ls',
        display: 'LP #75',
        name: 'LP #75',
        symbol: 'IRS-LP-75',
      },
      {
        description: 'Yield Aggregator Vault #76Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/76',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/76',
        display: 'YA-Vault-76',
        name: 'YA Vault #76',
        symbol: 'YA-VAULT-76',
      },
      {
        description: 'IRS PT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/pt',
        display: 'PT #76',
        name: 'PT #76',
        symbol: 'IRS-PT-76',
      },
      {
        description: 'IRS YT #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/yt',
        display: 'YT #76',
        name: 'YT #76',
        symbol: 'IRS-YT-76',
      },
      {
        description: 'IRS LP #76Token',
        denom_units: [
          {
            denom: 'irs/tranche/76/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/76/ls',
        display: 'LP #76',
        name: 'LP #76',
        symbol: 'IRS-LP-76',
      },
      {
        description: 'Yield Aggregator Vault #77Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/77',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/77',
        display: 'YA-Vault-77',
        name: 'YA Vault #77',
        symbol: 'YA-VAULT-77',
      },
      {
        description: 'IRS PT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/pt',
        display: 'PT #77',
        name: 'PT #77',
        symbol: 'IRS-PT-77',
      },
      {
        description: 'IRS YT #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/yt',
        display: 'YT #77',
        name: 'YT #77',
        symbol: 'IRS-YT-77',
      },
      {
        description: 'IRS LP #77Token',
        denom_units: [
          {
            denom: 'irs/tranche/77/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/77/ls',
        display: 'LP #77',
        name: 'LP #77',
        symbol: 'IRS-LP-77',
      },
      {
        description: 'Yield Aggregator Vault #78Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/78',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/78',
        display: 'YA-Vault-78',
        name: 'YA Vault #78',
        symbol: 'YA-VAULT-78',
      },
      {
        description: 'IRS PT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/pt',
        display: 'PT #78',
        name: 'PT #78',
        symbol: 'IRS-PT-78',
      },
      {
        description: 'IRS YT #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/yt',
        display: 'YT #78',
        name: 'YT #78',
        symbol: 'IRS-YT-78',
      },
      {
        description: 'IRS LP #78Token',
        denom_units: [
          {
            denom: 'irs/tranche/78/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/78/ls',
        display: 'LP #78',
        name: 'LP #78',
        symbol: 'IRS-LP-78',
      },
      {
        description: 'Yield Aggregator Vault #79Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/79',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/79',
        display: 'YA-Vault-79',
        name: 'YA Vault #79',
        symbol: 'YA-VAULT-79',
      },
      {
        description: 'IRS PT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/pt',
        display: 'PT #79',
        name: 'PT #79',
        symbol: 'IRS-PT-79',
      },
      {
        description: 'IRS YT #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/yt',
        display: 'YT #79',
        name: 'YT #79',
        symbol: 'IRS-YT-79',
      },
      {
        description: 'IRS LP #79Token',
        denom_units: [
          {
            denom: 'irs/tranche/79/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/79/ls',
        display: 'LP #79',
        name: 'LP #79',
        symbol: 'IRS-LP-79',
      },
      {
        description: 'Yield Aggregator Vault #80Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/80',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/80',
        display: 'YA-Vault-80',
        name: 'YA Vault #80',
        symbol: 'YA-VAULT-80',
      },
      {
        description: 'IRS PT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/pt',
        display: 'PT #80',
        name: 'PT #80',
        symbol: 'IRS-PT-80',
      },
      {
        description: 'IRS YT #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/yt',
        display: 'YT #80',
        name: 'YT #80',
        symbol: 'IRS-YT-80',
      },
      {
        description: 'IRS LP #80Token',
        denom_units: [
          {
            denom: 'irs/tranche/80/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/80/ls',
        display: 'LP #80',
        name: 'LP #80',
        symbol: 'IRS-LP-80',
      },
      {
        description: 'Yield Aggregator Vault #81Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/81',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/81',
        display: 'YA-Vault-81',
        name: 'YA Vault #81',
        symbol: 'YA-VAULT-81',
      },
      {
        description: 'IRS PT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/pt',
        display: 'PT #81',
        name: 'PT #81',
        symbol: 'IRS-PT-81',
      },
      {
        description: 'IRS YT #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/yt',
        display: 'YT #81',
        name: 'YT #81',
        symbol: 'IRS-YT-81',
      },
      {
        description: 'IRS LP #81Token',
        denom_units: [
          {
            denom: 'irs/tranche/81/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/81/ls',
        display: 'LP #81',
        name: 'LP #81',
        symbol: 'IRS-LP-81',
      },
      {
        description: 'Yield Aggregator Vault #82Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/82',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/82',
        display: 'YA-Vault-82',
        name: 'YA Vault #82',
        symbol: 'YA-VAULT-82',
      },
      {
        description: 'IRS PT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/pt',
        display: 'PT #82',
        name: 'PT #82',
        symbol: 'IRS-PT-82',
      },
      {
        description: 'IRS YT #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/yt',
        display: 'YT #82',
        name: 'YT #82',
        symbol: 'IRS-YT-82',
      },
      {
        description: 'IRS LP #82Token',
        denom_units: [
          {
            denom: 'irs/tranche/82/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/82/ls',
        display: 'LP #82',
        name: 'LP #82',
        symbol: 'IRS-LP-82',
      },
      {
        description: 'Yield Aggregator Vault #83Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/83',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/83',
        display: 'YA-Vault-83',
        name: 'YA Vault #83',
        symbol: 'YA-VAULT-83',
      },
      {
        description: 'IRS PT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/pt',
        display: 'PT #83',
        name: 'PT #83',
        symbol: 'IRS-PT-83',
      },
      {
        description: 'IRS YT #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/yt',
        display: 'YT #83',
        name: 'YT #83',
        symbol: 'IRS-YT-83',
      },
      {
        description: 'IRS LP #83Token',
        denom_units: [
          {
            denom: 'irs/tranche/83/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/83/ls',
        display: 'LP #83',
        name: 'LP #83',
        symbol: 'IRS-LP-83',
      },
      {
        description: 'Yield Aggregator Vault #84Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/84',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/84',
        display: 'YA-Vault-84',
        name: 'YA Vault #84',
        symbol: 'YA-VAULT-84',
      },
      {
        description: 'IRS PT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/pt',
        display: 'PT #84',
        name: 'PT #84',
        symbol: 'IRS-PT-84',
      },
      {
        description: 'IRS YT #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/yt',
        display: 'YT #84',
        name: 'YT #84',
        symbol: 'IRS-YT-84',
      },
      {
        description: 'IRS LP #84Token',
        denom_units: [
          {
            denom: 'irs/tranche/84/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/84/ls',
        display: 'LP #84',
        name: 'LP #84',
        symbol: 'IRS-LP-84',
      },
      {
        description: 'Yield Aggregator Vault #85Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/85',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/85',
        display: 'YA-Vault-85',
        name: 'YA Vault #85',
        symbol: 'YA-VAULT-85',
      },
      {
        description: 'IRS PT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/pt',
        display: 'PT #85',
        name: 'PT #85',
        symbol: 'IRS-PT-85',
      },
      {
        description: 'IRS YT #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/yt',
        display: 'YT #85',
        name: 'YT #85',
        symbol: 'IRS-YT-85',
      },
      {
        description: 'IRS LP #85Token',
        denom_units: [
          {
            denom: 'irs/tranche/85/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/85/ls',
        display: 'LP #85',
        name: 'LP #85',
        symbol: 'IRS-LP-85',
      },
      {
        description: 'Yield Aggregator Vault #86Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/86',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/86',
        display: 'YA-Vault-86',
        name: 'YA Vault #86',
        symbol: 'YA-VAULT-86',
      },
      {
        description: 'IRS PT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/pt',
        display: 'PT #86',
        name: 'PT #86',
        symbol: 'IRS-PT-86',
      },
      {
        description: 'IRS YT #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/yt',
        display: 'YT #86',
        name: 'YT #86',
        symbol: 'IRS-YT-86',
      },
      {
        description: 'IRS LP #86Token',
        denom_units: [
          {
            denom: 'irs/tranche/86/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/86/ls',
        display: 'LP #86',
        name: 'LP #86',
        symbol: 'IRS-LP-86',
      },
      {
        description: 'Yield Aggregator Vault #87Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/87',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/87',
        display: 'YA-Vault-87',
        name: 'YA Vault #87',
        symbol: 'YA-VAULT-87',
      },
      {
        description: 'IRS PT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/pt',
        display: 'PT #87',
        name: 'PT #87',
        symbol: 'IRS-PT-87',
      },
      {
        description: 'IRS YT #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/yt',
        display: 'YT #87',
        name: 'YT #87',
        symbol: 'IRS-YT-87',
      },
      {
        description: 'IRS LP #87Token',
        denom_units: [
          {
            denom: 'irs/tranche/87/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/87/ls',
        display: 'LP #87',
        name: 'LP #87',
        symbol: 'IRS-LP-87',
      },
      {
        description: 'Yield Aggregator Vault #88Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/88',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/88',
        display: 'YA-Vault-88',
        name: 'YA Vault #88',
        symbol: 'YA-VAULT-88',
      },
      {
        description: 'IRS PT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/pt',
        display: 'PT #88',
        name: 'PT #88',
        symbol: 'IRS-PT-88',
      },
      {
        description: 'IRS YT #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/yt',
        display: 'YT #88',
        name: 'YT #88',
        symbol: 'IRS-YT-88',
      },
      {
        description: 'IRS LP #88Token',
        denom_units: [
          {
            denom: 'irs/tranche/88/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/88/ls',
        display: 'LP #88',
        name: 'LP #88',
        symbol: 'IRS-LP-88',
      },
      {
        description: 'Yield Aggregator Vault #89Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/89',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/89',
        display: 'YA-Vault-89',
        name: 'YA Vault #89',
        symbol: 'YA-VAULT-89',
      },
      {
        description: 'IRS PT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/pt',
        display: 'PT #89',
        name: 'PT #89',
        symbol: 'IRS-PT-89',
      },
      {
        description: 'IRS YT #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/yt',
        display: 'YT #89',
        name: 'YT #89',
        symbol: 'IRS-YT-89',
      },
      {
        description: 'IRS LP #89Token',
        denom_units: [
          {
            denom: 'irs/tranche/89/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/89/ls',
        display: 'LP #89',
        name: 'LP #89',
        symbol: 'IRS-LP-89',
      },
      {
        description: 'Yield Aggregator Vault #90Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/90',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/90',
        display: 'YA-Vault-90',
        name: 'YA Vault #90',
        symbol: 'YA-VAULT-90',
      },
      {
        description: 'IRS PT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/pt',
        display: 'PT #90',
        name: 'PT #90',
        symbol: 'IRS-PT-90',
      },
      {
        description: 'IRS YT #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/yt',
        display: 'YT #90',
        name: 'YT #90',
        symbol: 'IRS-YT-90',
      },
      {
        description: 'IRS LP #90Token',
        denom_units: [
          {
            denom: 'irs/tranche/90/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/90/ls',
        display: 'LP #90',
        name: 'LP #90',
        symbol: 'IRS-LP-90',
      },
      {
        description: 'Yield Aggregator Vault #91Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/91',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/91',
        display: 'YA-Vault-91',
        name: 'YA Vault #91',
        symbol: 'YA-VAULT-91',
      },
      {
        description: 'IRS PT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/pt',
        display: 'PT #91',
        name: 'PT #91',
        symbol: 'IRS-PT-91',
      },
      {
        description: 'IRS YT #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/yt',
        display: 'YT #91',
        name: 'YT #91',
        symbol: 'IRS-YT-91',
      },
      {
        description: 'IRS LP #91Token',
        denom_units: [
          {
            denom: 'irs/tranche/91/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/91/ls',
        display: 'LP #91',
        name: 'LP #91',
        symbol: 'IRS-LP-91',
      },
      {
        description: 'Yield Aggregator Vault #92Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/92',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/92',
        display: 'YA-Vault-92',
        name: 'YA Vault #92',
        symbol: 'YA-VAULT-92',
      },
      {
        description: 'IRS PT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/pt',
        display: 'PT #92',
        name: 'PT #92',
        symbol: 'IRS-PT-92',
      },
      {
        description: 'IRS YT #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/yt',
        display: 'YT #92',
        name: 'YT #92',
        symbol: 'IRS-YT-92',
      },
      {
        description: 'IRS LP #92Token',
        denom_units: [
          {
            denom: 'irs/tranche/92/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/92/ls',
        display: 'LP #92',
        name: 'LP #92',
        symbol: 'IRS-LP-92',
      },
      {
        description: 'Yield Aggregator Vault #93Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/93',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/93',
        display: 'YA-Vault-93',
        name: 'YA Vault #93',
        symbol: 'YA-VAULT-93',
      },
      {
        description: 'IRS PT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/pt',
        display: 'PT #93',
        name: 'PT #93',
        symbol: 'IRS-PT-93',
      },
      {
        description: 'IRS YT #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/yt',
        display: 'YT #93',
        name: 'YT #93',
        symbol: 'IRS-YT-93',
      },
      {
        description: 'IRS LP #93Token',
        denom_units: [
          {
            denom: 'irs/tranche/93/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/93/ls',
        display: 'LP #93',
        name: 'LP #93',
        symbol: 'IRS-LP-93',
      },
      {
        description: 'Yield Aggregator Vault #94Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/94',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/94',
        display: 'YA-Vault-94',
        name: 'YA Vault #94',
        symbol: 'YA-VAULT-94',
      },
      {
        description: 'IRS PT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/pt',
        display: 'PT #94',
        name: 'PT #94',
        symbol: 'IRS-PT-94',
      },
      {
        description: 'IRS YT #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/yt',
        display: 'YT #94',
        name: 'YT #94',
        symbol: 'IRS-YT-94',
      },
      {
        description: 'IRS LP #94Token',
        denom_units: [
          {
            denom: 'irs/tranche/94/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/94/ls',
        display: 'LP #94',
        name: 'LP #94',
        symbol: 'IRS-LP-94',
      },
      {
        description: 'Yield Aggregator Vault #95Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/95',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/95',
        display: 'YA-Vault-95',
        name: 'YA Vault #95',
        symbol: 'YA-VAULT-95',
      },
      {
        description: 'IRS PT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/pt',
        display: 'PT #95',
        name: 'PT #95',
        symbol: 'IRS-PT-95',
      },
      {
        description: 'IRS YT #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/yt',
        display: 'YT #95',
        name: 'YT #95',
        symbol: 'IRS-YT-95',
      },
      {
        description: 'IRS LP #95Token',
        denom_units: [
          {
            denom: 'irs/tranche/95/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/95/ls',
        display: 'LP #95',
        name: 'LP #95',
        symbol: 'IRS-LP-95',
      },
      {
        description: 'Yield Aggregator Vault #96Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/96',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/96',
        display: 'YA-Vault-96',
        name: 'YA Vault #96',
        symbol: 'YA-VAULT-96',
      },
      {
        description: 'IRS PT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/pt',
        display: 'PT #96',
        name: 'PT #96',
        symbol: 'IRS-PT-96',
      },
      {
        description: 'IRS YT #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/yt',
        display: 'YT #96',
        name: 'YT #96',
        symbol: 'IRS-YT-96',
      },
      {
        description: 'IRS LP #96Token',
        denom_units: [
          {
            denom: 'irs/tranche/96/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/96/ls',
        display: 'LP #96',
        name: 'LP #96',
        symbol: 'IRS-LP-96',
      },
      {
        description: 'Yield Aggregator Vault #97Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/97',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/97',
        display: 'YA-Vault-97',
        name: 'YA Vault #97',
        symbol: 'YA-VAULT-97',
      },
      {
        description: 'IRS PT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/pt',
        display: 'PT #97',
        name: 'PT #97',
        symbol: 'IRS-PT-97',
      },
      {
        description: 'IRS YT #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/yt',
        display: 'YT #97',
        name: 'YT #97',
        symbol: 'IRS-YT-97',
      },
      {
        description: 'IRS LP #97Token',
        denom_units: [
          {
            denom: 'irs/tranche/97/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/97/ls',
        display: 'LP #97',
        name: 'LP #97',
        symbol: 'IRS-LP-97',
      },
      {
        description: 'Yield Aggregator Vault #98Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/98',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/98',
        display: 'YA-Vault-98',
        name: 'YA Vault #98',
        symbol: 'YA-VAULT-98',
      },
      {
        description: 'IRS PT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/pt',
        display: 'PT #98',
        name: 'PT #98',
        symbol: 'IRS-PT-98',
      },
      {
        description: 'IRS YT #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/yt',
        display: 'YT #98',
        name: 'YT #98',
        symbol: 'IRS-YT-98',
      },
      {
        description: 'IRS LP #98Token',
        denom_units: [
          {
            denom: 'irs/tranche/98/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/98/ls',
        display: 'LP #98',
        name: 'LP #98',
        symbol: 'IRS-LP-98',
      },
      {
        description: 'Yield Aggregator Vault #99Token',
        denom_units: [
          {
            denom: 'yieldaggregator/vaults/99',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'yieldaggregator/vaults/99',
        display: 'YA-Vault-99',
        name: 'YA Vault #99',
        symbol: 'YA-VAULT-99',
      },
      {
        description: 'IRS PT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/pt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/pt',
        display: 'PT #99',
        name: 'PT #99',
        symbol: 'IRS-PT-99',
      },
      {
        description: 'IRS YT #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/yt',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/yt',
        display: 'YT #99',
        name: 'YT #99',
        symbol: 'IRS-YT-99',
      },
      {
        description: 'IRS LP #99Token',
        denom_units: [
          {
            denom: 'irs/tranche/99/ls',
            exponent: 6,
            aliases: [],
          },
        ],
        base: 'irs/tranche/99/ls',
        display: 'LP #99',
        name: 'LP #99',
        symbol: 'IRS-LP-99',
      },
    ],
    strategiesInfo: [
      {
        id: '0',
        denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
        name: 'MARS/OSMO strategy',
        description: '',
        gitUrl: '',
        poolInfo: {
          type: 'osmosis',
          poolId: '907',
        },
      },
      {
        id: '0',
        denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
        name: 'MARS/OSMO strategy v2',
        description: '',
        gitUrl: '',
        poolInfo: {
          type: 'osmosis',
          poolId: '907',
        },
      },
      {
        id: '1',
        denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
        name: 'ATOM/OSMO strategy v2',
        description: '',
        gitUrl: '',
        poolInfo: {
          type: 'osmosis',
          poolId: '1',
        },
      },
      {
        id: '0',
        denom: 'ibc/ACBD2CEFAC2CC3ED6EEAF67BBDFDF168F1E4EDA159DFE1CA6B4A57A9CAF4DA11',
        name: 'Osmosis ATOM/OSMO Farm',
        description: '',
        gitUrl: '',
        poolInfo: {
          type: 'osmosis',
          poolId: '1',
        },
      },
    ],
    certifiedVaults: ['6', '8', '9', '10', '11'],
    externalChains: [
      {
        id: 'cosmoshub',
        chainId: 'cosmoshub-4',
        chainName: 'Cosmos Hub',
        rpc: 'https://rpc-cosmoshub.keplr.app',
        rest: 'https://lcd-cosmoshub.keplr.app',
        bip44: {
          coinType: 118,
        },
        bech32Config: {
          bech32PrefixAccAddr: 'cosmos',
          bech32PrefixAccPub: 'cosmospub',
          bech32PrefixConsAddr: 'cosmosvalcons',
          bech32PrefixConsPub: 'cosmosvalconspub',
          bech32PrefixValAddr: 'cosmosvaloper',
          bech32PrefixValPub: 'cosmosvaloperpub',
        },
        currencies: [
          {
            coinDecimals: 6,
            coinDenom: 'ATOM',
            coinGeckoId: 'cosmos',
            coinMinimalDenom: 'uatom',
            coinImageUrl:
              'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
          },
        ],
        feeCurrencies: [
          {
            coinDecimals: 6,
            coinDenom: 'ATOM',
            coinGeckoId: 'cosmos',
            coinMinimalDenom: 'uatom',
            coinImageUrl:
              'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
            gasPriceStep: {
              average: 0.025,
              high: 0.03,
              low: 0.01,
            },
          },
        ],
        stakeCurrency: {
          coinDecimals: 6,
          coinDenom: 'ATOM',
          coinGeckoId: 'cosmos',
          coinMinimalDenom: 'uatom',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
        },
      },
      {
        id: 'osmosis',
        chainId: 'osmosis-1',
        chainName: 'Osmosis',
        rpc: 'https://rpc-osmosis.keplr.app',
        rest: 'https://lcd-osmosis.keplr.app',
        bip44: {
          coinType: 118,
        },
        bech32Config: {
          bech32PrefixAccAddr: 'osmo',
          bech32PrefixAccPub: 'osmopub',
          bech32PrefixValAddr: 'osmovaloper',
          bech32PrefixValPub: 'osmovaloperpub',
          bech32PrefixConsAddr: 'osmovalcons',
          bech32PrefixConsPub: 'osmovalconspub',
        },
        currencies: [
          {
            coinDenom: 'OSMO',
            coinMinimalDenom: 'uosmo',
            coinDecimals: 6,
            coinGeckoId: 'osmosis',
            coinImageUrl:
              'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
          },
          {
            coinDenom: 'ION',
            coinMinimalDenom: 'uion',
            coinDecimals: 6,
            coinGeckoId: 'ion',
            coinImageUrl:
              'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uion.png',
          },
        ],
        feeCurrencies: [
          {
            coinDenom: 'OSMO',
            coinMinimalDenom: 'uosmo',
            coinDecimals: 6,
            coinGeckoId: 'osmosis',
            coinImageUrl:
              'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
            gasPriceStep: {
              low: 0.0025,
              average: 0.025,
              high: 0.04,
            },
          },
        ],
        stakeCurrency: {
          coinDenom: 'OSMO',
          coinMinimalDenom: 'uosmo',
          coinDecimals: 6,
          coinGeckoId: 'osmosis',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
        },
      },
    ],
    irsVaultsImages: [
      {
        contract: 'ununifi1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqhp8g9l',
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
        subImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png',
      },
    ],
    extension: {
      faucet: [
        {
          hasFaucet: true,
          faucetURL: 'https://gluon-beta.cauchye.net:8003',
          denom: 'uguu',
          creditAmount: 2000000000,
          maxCredit: 2000000000,
        },
      ],
      navigations: [],
      messageModules: [
        'bank',
        'auth',
        'crisis',
        'distribution',
        'evidence',
        'genaccounts',
        'gov',
        'ibc',
        'slashing',
        'staking',
        'auction',
        'ununifidist',
        'cdp',
        'incentive',
        'pricefeed',
      ],
    },
  },
];
