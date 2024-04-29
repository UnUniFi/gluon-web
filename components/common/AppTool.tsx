import {
  Assistant,
  KeyboardArrowDown,
  Loyalty,
  PieChart,
  ShowChart,
  TableChart,
} from '@mui/icons-material';
import { useRouter } from 'next/router';

const data = [
  {
    name: 'Utilities',
    link: '/',
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

export function AppTool() {
  const router = useRouter();

  const selectedItem = data.find(
    (it) => String(it.link).toLowerCase() === String(router.pathname).toLocaleLowerCase()
  );

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn gap-2">
        <span className="material-symbols-outlined">{selectedItem?.icon || 'apps'}</span>
        <span className="hidden md:inline">{selectedItem?.name || 'Apps'}</span>
        <span className="material-symbols-outlined hidden md:inline">
          <KeyboardArrowDown />
        </span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu sm:p-2 shadow bg-base-100 text-base-content rounded-box w-52"
      >
        {data.map((it, index) => {
          return (
            <li key={index}>
              <a className="gap-2" onClick={() => router.push(it.link)}>
                <span className="material-symbols-outlined">{it.icon}</span>
                {it.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
