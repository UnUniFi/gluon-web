import {
  GridViewOutlined,
  KeyboardArrowDown,
  KeyboardArrowDownOutlined,
  MenuOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Pools() {
  const router = useRouter();
  const [sortType, setSortType] = useState('');
  const [viewMode, setViewMode] = useState('table');

  const vaults = [
    {
      strategy_contract: 'ununifi14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sm5z28e',
      name: 'stATOM v2',
      description: 'Interest Rate Swap Vault for stATOM (Stride)',
      max_maturity: '63072000',
      cycle: '15768000',
      last_tranche_time: '1711362451',
      denom: 'uatom',
      deposit_denom: 'ustatom',
    },
  ];
  const tranchePools = [
    {
      id: '1',
      strategy_contract: 'ununifi14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sm5z28e',
      start_time: '1711352362',
      maturity: '31536000',
      swap_fee: '0.000000000000000000',
      exit_fee: '0.000000000000000000',
      total_shares: {
        denom: 'irs/tranche/1/ls',
        amount: '1719058191161399243',
      },
      pool_assets: [
        {
          denom: 'irs/tranche/1/pt',
          amount: '33569175254',
        },
        {
          denom: 'ustatom',
          amount: '22534402652',
        },
      ],
      denom: 'uatom',
      deposit_denom: 'ustatom',
    },
    {
      id: '2',
      strategy_contract: 'ununifi14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sm5z28e',
      start_time: '1711362451',
      maturity: '63072000',
      swap_fee: '0.000000000000000000',
      exit_fee: '0.000000000000000000',
      total_shares: {
        denom: 'irs/tranche/2/ls',
        amount: '7152543026764116824',
      },
      pool_assets: [
        {
          denom: 'irs/tranche/2/pt',
          amount: '29074674296',
        },
        {
          denom: 'ustatom',
          amount: '28152686864',
        },
      ],
      denom: 'uatom',
      deposit_denom: 'ustatom',
    },
  ];
  const poolsAPYs = [
    {
      liquidity_apy: '0.000000000000000000',
      discount_pt_apy: '0.354086634734926354',
      liquidity_rate_per_deposit: '627154.765819636863475720',
      deposit_token_percentage_in_pool: '0.315282008513830798',
      pt_percentage_in_pool: '0.469671069683072518',
    },
    {
      liquidity_apy: '0.000000000000000000',
      discount_pt_apy: '0.058230084876765975',
      liquidity_rate_per_deposit: '554490.292343470164180655',
      deposit_token_percentage_in_pool: '0.439103089854983089',
      pt_percentage_in_pool: '0.453483512304690947',
    },
  ];
  const poolsYtAPYs = [349207.3638034068, 423349.6874405358];
  const vaultsImages = [
    {
      contract: 'ununifi1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqhp8g9l',
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
      subImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png',
    },
  ];
  const totalLiquiditiesUSD = [349207.3638034068, 423349.6874405358];

  const getVaultImage = (contract: string) => {
    return vaultsImages[0];
  };

  const calcMaturity = (pool: any) => {
    const maturity = Number(pool.maturity) + Number(pool.start_time);
    return maturity * 1000;
  };

  const calcRestDays = (pool: any) => {
    const maturity = Number(pool.maturity) + Number(pool.start_time);
    const diff = maturity * 1000 - Date.now();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days;
  };

  const getTranchePoolVault = (contractAddr?: string) => {
    const vault = vaults?.find((vault) => vault.strategy_contract === contractAddr);
    return vault;
  };

  const calcTotalPoolAPY = (poolApy: any, ytApy: any) => {
    let apy = 0;
    if (poolApy) {
      apy += Number(poolApy.liquidity_apy) + Number(poolApy.discount_pt_apy);
      if (ytApy) {
        apy += Number(ytApy.ls_apy) * Number(poolApy.pt_percentage_in_pool);
      }
    }
    return apy;
  };

  return (
    <div className="bg-[#39465d] min-h-screen">
      <div className="mx-auto max-w-screen-xl w-full p-8">
        <div className="flex flex-row flex-wrap mb-8">
          <div className="text-2xl font-bold breadcrumbs">
            <ul>
              <li>Liquidity Pools</li>
            </ul>
          </div>
          <span className="flex-auto"></span>
        </div>

        <p className="font-bold">Exit anytime at market price.</p>
        <p className="font-light">
          {'Check '}
          <a
            className="link link-info font-semibold"
            onClick={() => router.push('/interest-rate-swap/vaults')}
          >
            here
          </a>{' '}
          for more information on fixed-rate vaults.
        </p>

        <div className="flex my-8 gap-4">
          <form>
            <div className="form-control w-full">
              <div className="join">
                <input
                  type="text"
                  placeholder="Search"
                  className="join-item input input-bordered w-full max-w-xs"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <span className="flex-auto"></span>
          <button
            className={`btn btn-sm btn-square ${viewMode === 'table' ? 'btn-neutral' : ''}`}
            onClick={() => setViewMode('table')}
          >
            <MenuOutlined />
          </button>
          <button
            className={`btn btn-sm btn-square ${viewMode === 'grid' ? 'btn-neutral' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <GridViewOutlined />
          </button>
        </div>

        {tranchePools == null && (
          <p className="text-center">
            <span className="loading loading-ring loading-lg"></span>
          </p>
        )}
        {tranchePools && (
          <>
            {tranchePools.length != 0 && viewMode === 'table' && (
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="border-b-2 border-[#adc9ff]">
                      <th></th>
                      <td>
                        <button className="btn btn-ghost btn-xs flex-nowrap">
                          <span>Name</span>
                          <span
                            className={`material-symbols-outlined ${
                              sortType === 'name' ? 'text-info' : ''
                            }`}
                          >
                            <KeyboardArrowDownOutlined />
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-xs flex-nowrap">
                          <span>Maturity</span>
                          <span
                            className={`material-symbols-outlined ${
                              sortType === 'maturity' ? 'text-info' : ''
                            }`}
                          >
                            <KeyboardArrowDownOutlined />
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-xs flex-nowrap">
                          <span>TVL</span>
                          <span
                            className={`material-symbols-outlined ${
                              sortType === 'tvl' ? 'text-info' : ''
                            }`}
                          >
                            <KeyboardArrowDownOutlined />
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-xs flex-nowrap">
                          <span>APY</span>
                          <span
                            className={`material-symbols-outlined ${
                              sortType === 'apy' ? 'text-info' : ''
                            }`}
                          >
                            <KeyboardArrowDownOutlined />
                          </span>
                        </button>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {tranchePools.map((pool, i) => {
                      return (
                        <tr
                          className="hover cursor-pointer border-b-2 border-[#adc9ff]"
                          onClick={() => router.push(`pools/${pool.strategy_contract}/${pool.id}`)}
                          key={i}
                        >
                          <th>
                            <div className="avatar">
                              <div className="w-8 rounded-full">
                                <Image
                                  src={getVaultImage(pool.strategy_contract)?.image}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={getVaultImage(pool.strategy_contract)?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </th>
                          <td>
                            <div>
                              <div className="text-xl font-bold">
                                {getTranchePoolVault(pool.strategy_contract)?.name}
                              </div>
                              <div className="text-sm opacity-50"></div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <div className="text-xl font-bold">{calcMaturity(pool)}</div>
                              <div className="text-sm opacity-50">{calcRestDays(pool)} Days</div>
                            </div>
                          </td>
                          <td>
                            <div className="text-xl font-bold">{totalLiquiditiesUSD[i] || 0}</div>
                          </td>
                          <td>
                            <div className="text-xl font-bold text-accent">
                              {`${Number(
                                calcTotalPoolAPY(poolsAPYs?.[i], poolsYtAPYs?.[i]) || 0
                              ).toFixed(2)} %`}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {tranchePools.length != 0 && viewMode === 'grid' && (
              <div className="flex flex-row flex-wrap gap-12">
                {tranchePools.map((pool, i) => {
                  return (
                    <div
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(53, 75, 116, 0.94) 0.07%, #1f2736 59.52%)',
                      }}
                      className="card shadow-xl hover cursor-pointer"
                      onClick={() => router.push(`pools/${pool.strategy_contract}/${pool.id}`)}
                      key={i}
                    >
                      <div className="card-body">
                        <div className="flex items-center gap-3">
                          <div>
                            <h2 className="card-title">stATOM</h2>
                            <div className="text-sm opacity-50">Stride</div>
                          </div>
                          <span className="flex-auto"></span>
                          <div className="avatar">
                            <div className="w-12 rounded-full">
                              <img src="{{ getVaultImage(pool.strategy_contract)?.image }}" />
                            </div>
                            <div className="avatar -ml-3 mt-6">
                              <div className="w-6 rounded-full">
                                <img src="{{ getVaultImage(pool.strategy_contract)?.subImage }}" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="flex flex-row flex-wrap gap-2 items-end">
                                  <div className="text-xl text-accent">
                                    {`${Number(
                                      calcTotalPoolAPY(poolsAPYs?.[i], poolsYtAPYs?.[i]) || 0
                                    ).toFixed(2)} %`}
                                  </div>
                                  <div className="text-sm">p.a.</div>
                                  <span className="material-symbols-outlined text-accent">
                                    {' '}
                                    bolt{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="flex flex-row flex-wrap gap-2 items-end">
                                  <div className="text-xl font-bold">{0}</div>
                                  <div className="text-lg">TVL</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="text-lg opacity-75">Maturity</div>
                                </td>
                                <td>
                                  <div className="text-xl font-bold">{calcMaturity(pool)}</div>
                                  <div className="text-sm opacity-50">
                                    {calcRestDays(pool)} Days
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {tranchePools.length == 0 && <p className="font-bold text-lg text-error">* No pool</p>}
          </>
        )}
      </div>
    </div>
  );
}
