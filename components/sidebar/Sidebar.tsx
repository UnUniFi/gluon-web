import {
  Assistant,
  AttachMoney,
  CleanHands,
  Folder,
  HowToVote,
  Info,
  Loyalty,
  OtherHouses,
  Payments,
  PieChart,
  Pool,
  Savings,
  Send,
  ShowChart,
  TableChart,
  Topic,
} from '@mui/icons-material';
import { Menu, MenuList } from '@mui/material';
import { SearchTool } from '../common/SearchTool';
import { useRouter } from 'next/router';

const apps = [
  {
    name: 'Utilities',
    link: '/utilities',
    icon: <Assistant />,
  },
  {
    name: 'NFT Backed Loan',
    link: '/nft-backed-loan',
    icon: <Loyalty />,
  },
  {
    name: 'Yield Aggregator',
    link: '/yield-aggregator/vaults',
    icon: <PieChart />,
  },
  {
    name: 'Interest Rate Swap',
    link: '/interest-rate-swap/simple-vaults',
    icon: <TableChart />,
  },
  {
    name: 'Derivatives',
    link: '/derivatives/perpetual-futures',
    icon: <ShowChart />,
  },
];

const navigations = [
  {
    name: 'Faucet',
    link: '/portal/faucet',
    icon: <CleanHands />,
  },
];
export function Sidebar() {
  const router = useRouter();

  return (
    <div className="drawer-side overflow-auto">
      <label htmlFor="drawer-main" className="drawer-overlay"></label>

      <ul className="menu p-4 w-11/12 sm:w-3/4 md:2/3 lg:w-full h-full bg-base-200">
        <SearchTool />
        <li className="menu-title">
          <span>Interest Rate Swap</span>
        </li>
        <li>
          <label
            htmlFor="drawer-main"
            className="flex gap-4"
            onClick={() => router.push('/interest-rate-swap')}
          >
            <span className="flex-none">
              <Info />
            </span>
            <span className="flex-1">About</span>
          </label>
        </li>
        <li>
          <label
            htmlFor="drawer-main"
            className="flex gap-4"
            onClick={() => router.push('/interest-rate-swap/simple-vaults')}
          >
            <span className="flex-none">
              <Folder />
            </span>
            <span className="flex-1">Vaults (Earn)</span>
          </label>
        </li>
        <li>
          <label
            htmlFor="drawer-main"
            className="flex gap-4"
            onClick={() => router.push('/interest-rate-swap/vaults')}
          >
            <span className="flex-none">
              <Topic />
            </span>
            <span className="flex-1">Vaults (Trade)</span>
          </label>
        </li>
        <li>
          <label
            htmlFor="drawer-main"
            className="flex gap-4"
            onClick={() => router.push('/interest-rate-swap/pools')}
          >
            <span className="flex-none">
              <Pool />
            </span>
            <span className="flex-1">Pools</span>
          </label>
        </li>
        <li>
          <label
            htmlFor="drawer-main"
            className="flex gap-4"
            onClick={() => router.push('/interest-rate-swap/positions')}
          >
            <span className="flex-none">
              <Payments />
            </span>
            <span className="flex-1">Positions</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
