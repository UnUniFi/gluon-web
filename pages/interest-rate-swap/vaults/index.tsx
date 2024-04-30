import {
  GridView,
  KeyboardArrowDown,
  KeyboardArrowDownOutlined,
  Menu,
  MenuOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Vaults() {
  const router = useRouter();
  const [sortType, setSortType] = useState(undefined);
  const [viewMode, setViewMode] = useState('table');
  const [vaults, setVaults] = useState([
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
  ]);
  const [tranchePools, setTranchePools] = useState([
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
  ]);
  const [trancheFixedAPYs, setTrancheFixedAPYs] = useState([
    {
      pt_apy: '0.753879065667744443',
      pt_rate_per_deposit: '1.682146000000000000',
    },
    {
      pt_apy: '0.128399177535494901',
      pt_rate_per_deposit: '1.244622000000000000',
    },
  ]);
  const [trancheLongAPYs, setTrancheLongAPYs] = useState([
    {
      yt_apy: '0.796610525045558455',
      yt_rate_per_deposit: '3.715902875217008727',
      ls_apy: '0.214378726192900400',
    },
    {
      yt_apy: '39.655702218442545320',
      yt_rate_per_deposit: '184.979652238253792082',
      ls_apy: '0.214378726192900400',
    },
  ]);
  const [vaultsImages, setVaultImages] = useState([
    {
      contract: 'ununifi1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqhp8g9l',
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
      subImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png',
    },
  ]);
  const [trancheTokenPrices, setTrancheTokenPrices] = useState([
    {
      depositPrice: 8.2295,
      ptPrice: 4.892393500746982,
      ytPrice: 2.2145518664,
    },
    {
      depositPrice: 8.2295,
      ptPrice: 6.612052986411125,
      ytPrice: 0.0444804475,
    },
  ]);

  const changeSimple = () => {};

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

  return (
    <div className="bg-[#39465d] min-h-screen">
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="flex flex-row flex-wrap mb-8">
          <div className="text-2xl font-bold breadcrumbs">
            <ul>
              <li>Markets</li>
            </ul>
          </div>
          <span className="flex-auto"></span>
          <div className="join">
            <button
              className="btn btn-sm btn-primary glass join-item"
              onClick={() => changeSimple()}
            >
              Earn
            </button>
            <button className="btn btn-sm btn-accent text-neutral join-item">Trade</button>
          </div>
        </div>

        <p className="font-bold">Exit anytime at market price.</p>

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
            <GridView />
          </button>
        </div>

        {!tranchePools && (
          <p className="text-center">
            <span className="loading loading-ring loading-lg"></span>
          </p>
        )}
        {tranchePools && (
          <>
            {tranchePools.length != 0 && (
              <>
                {viewMode === 'table' && (
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
                              <span>Underlying APY</span>
                              <span
                                className={`material-symbols-outlined ${
                                  sortType === 'underlying' ? 'text-info' : ''
                                }`}
                              >
                                <KeyboardArrowDownOutlined />
                              </span>
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-ghost btn-xs flex-nowrap">
                              <span>Long Yield APY</span>
                              <span
                                className={`material-symbols-outlined ${
                                  sortType === 'long' ? 'text-info' : ''
                                }`}
                              >
                                <KeyboardArrowDownOutlined />
                              </span>
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-ghost btn-xs flex-nowrap">
                              <span>Fixed Yield APY</span>
                              <span
                                className={`material-symbols-outlined ${
                                  sortType === 'fixed' ? 'text-info' : ''
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
                              onClick={() =>
                                router.push(`vaults/${pool.strategy_contract}/${pool.id}`)
                              }
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
                                  <div className="text-sm opacity-50">
                                    {calcRestDays(pool)} days
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <div className="text-xl font-bold">
                                    {`${Number(trancheLongAPYs[i]?.ls_apy || 0).toFixed(2)} %`}
                                  </div>
                                  <div className="text-sm opacity-50">
                                    {trancheTokenPrices[i]?.depositPrice || 0}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div
                                  className="flex flex-col items-center gap-3 btn btn-primary"
                                  onClick={() =>
                                    router.push(
                                      `vaults/${pool.strategy_contract}/${pool.id}?view=yt`
                                    )
                                  }
                                >
                                  <div className="text-blue-200 text-xl mr-2">YT</div>
                                  <div>
                                    <div className="text-lg font-bold">
                                      {`${Number(trancheLongAPYs[i]?.yt_apy || 0).toFixed(2)} %`}
                                    </div>
                                    <div className="text-sm opacity-50">
                                      {trancheTokenPrices[i]?.ytPrice || 0}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div
                                  className="flex flex-col items-center gap-3 btn btn-accent text-neutral"
                                  onClick={() =>
                                    router.push(
                                      `vaults/${pool.strategy_contract}/${pool.id}?view=pt`
                                    )
                                  }
                                >
                                  <div className="text-green-100 text-xl mr-2">PT</div>
                                  <div>
                                    <div className="text-lg font-bold">
                                      {`${Number(trancheFixedAPYs[i]?.pt_apy || 0).toFixed(2)} %`}
                                    </div>
                                    <div className="text-sm opacity-50">
                                      {trancheTokenPrices[i]?.ptPrice || 0}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {viewMode === 'grid' && (
                  <div className="flex flex-row flex-wrap gap-12">
                    {tranchePools.map((pool, i) => {
                      return (
                        <div
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(53, 75, 116, 0.94) 0.07%, #1f2736 59.52%)',
                          }}
                          className="card shadow-xl"
                          key={i}
                        >
                          <div className="card-body">
                            <div className="flex items-center gap-3">
                              <div>
                                <h2 className="card-title">
                                  {getTranchePoolVault(pool.strategy_contract)?.name}
                                </h2>
                                <div className="text-sm opacity-50"></div>
                              </div>
                              <span className="flex-auto"></span>
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
                            </div>
                            <div className="overflow-x-auto">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="text-lg opacity-75">Maturity</div>
                                    </td>
                                    <td>
                                      <div className="text-xl font-bold">{calcMaturity(pool)}</div>
                                      <div className="text-sm opacity-50">
                                        {calcRestDays(pool)} days
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="text-lg opacity-75">Underlying APY</div>
                                    </td>
                                    <td>
                                      <div className="text-xl font-bold">
                                        {`${Number(trancheLongAPYs[i]?.ls_apy || 0).toFixed(2)} %`}
                                      </div>
                                      <div className="text-sm opacity-50">
                                        {trancheTokenPrices[i]?.depositPrice || 0}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div
                              className="flex gap-3 btn btn-primary justify-start items-center"
                              onClick={() =>
                                router.push(`vaults/${pool.strategy_contract}/${pool.id}?view=yt`)
                              }
                            >
                              <div className="text-blue-200 text-xl mr-2">YT</div>
                              <div>
                                <div className="sm:text-xl font-bold">Long Yield APY</div>
                                <div className="text-sm opacity-50">Price</div>
                              </div>
                              <div>
                                <div className="sm:text-xl font-bold">
                                  {`${Number(trancheLongAPYs[i]?.yt_apy || 0).toFixed(2)} %`}
                                </div>
                                <div className="text-sm opacity-50">
                                  {trancheTokenPrices[i]?.ytPrice || 0}
                                </div>
                              </div>
                            </div>
                            <div
                              className="flex gap-3 btn btn-accent text-neutral justify-start items-center"
                              onClick={() =>
                                router.push(`vaults/${pool.strategy_contract}/${pool.id}?view=pt`)
                              }
                            >
                              <div className="text-green-100 text-xl mr-2">PT</div>
                              <div>
                                <div className="sm:text-xl font-bold">Fixed Yield APY</div>
                                <div className="text-sm opacity-50">Price</div>
                              </div>
                              <div>
                                <div className="sm:text-xl font-bold">
                                  {`${Number(trancheFixedAPYs[i]?.pt_apy || 0).toFixed(2)} %`}
                                </div>
                                <div className="text-sm opacity-50">
                                  {trancheTokenPrices[i]?.ptPrice || 0}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {tranchePools.length === 0 && <p className="font-bold text-lg text-error">* No vault</p>}
      </div>
    </div>
  );
}
