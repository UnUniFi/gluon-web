import { Folder, Pool } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-screen-xl w-full p-8">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg mb-8">
        <div className="card-body lg:w-3/4">
          <h2 className="card-title break-all">Interest Rate Swap Vault</h2>
          <p>
            Gluon Interest Rate Swap Vault provides fixed-rate asset management through the issuance
            of zero-coupon bonds.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-outline gap-2"
              onClick={() => router.push('/interest-rate-swap/simple-vaults')}
            >
              <Folder />
              <span>View Vaults</span>
            </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg mb-8">
        <div className="card-body lg:w-3/4">
          <h2 className="card-title break-all">Liquidity Pools</h2>
          <p>
            Gluon Interest Rate Swap Liquidity Pools for a fixed rate vault. Interest can be earned
            by depositing funds into the pool.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-outline gap-2"
              onClick={() => router.push('/interest-rate-swap/pools')}
            >
              <Pool />
              <span>View Pools</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
