import { useRouter } from 'next/router';
import { NodeTool } from '../common/NodeTool';
import { WalletTool } from '../common/WalletTool';

import favicon from 'assets/favicon.png';
import Image from 'next/image';
export function Header() {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-main" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 gap-2">
        <button className="align-middle" onClick={() => router.push('/')}>
          <Image className="p-1 w-10 h-10" src={favicon} alt="" />
        </button>
        <h1 style={{ maxWidth: '200px' }}>
          <span
            style={{
              fontFamily: 'Tomorrow',
              fontSize: '24px',
              letterSpacing: '1.33px',
              fontWeight: 700,
            }}
          >
            GLUON
          </span>
        </h1>
      </div>
      <div className="flex-none gap-4">
        <NodeTool />
        <WalletTool />
      </div>
    </div>
  );
}
