import { GridView, KeyboardArrowDown, Menu } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
const vaultsMaxFixedAPYs = [0.7515471480844552];
const vaultsImages = [
  {
    contract: 'ununifi1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqhp8g9l',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    subImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png',
  },
];
const ptValues = null;
const totalPositionValue = null;
const maturedPtValue = null;
const coinDenom = null;

export default function SimpleVaults() {
  const router = useRouter();

  const [currency, setCurrency] = useState('');
  const [sortType, setSortType] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [positionTab, setPositionTab] = useState('fixed');

  const changeAdvanced = () => {};

  const getVaultImage = (contract: string) => {
    return vaultsImages[0];
  };

  return (
    <div className="mx-auto max-w-screen-xl w-full p-8">
      <div className="flex flex-row flex-wrap mb-8">
        <div className="text-xl breadcrumbs">
          <ul>
            <li>Earn Fixed Yield</li>
          </ul>
        </div>
        <span className="flex-auto"></span>
        <div className="join">
          <button className="btn btn-sm btn-primary join-item">Earn</button>
          <button
            className="btn btn-sm btn-accent text-neutral glass join-item"
            onClick={() => changeAdvanced()}
          >
            Trade
          </button>
        </div>
      </div>

      <div
        style={{ background: 'linear-gradient(180deg, #1f2736 50%, #354b74 100%)' }}
        className="card mb-8"
      >
        <div className="card-body flex-row flex-wrap">
          <div>
            <h2 className="card-title text-4xl font-bold">Gluon Earn</h2>
          </div>
          <div className="flex-auto"></div>
          <div>
            <div className="stat">
              <div className="stat-title">My Fixed Yield Position Value</div>
              <div className="stat-value">{0}</div>
              {/* <div className="stat-value">{totalPositionValue + currency}</div> */}
              <button
                type="button"
                className="btn btn-sm btn-outline mt-4"
                onClick={() => router.push('/interest-rate-swap/positions')}
                disabled={!totalPositionValue}
              >
                See Detail
              </button>
            </div>
          </div>
          <div>
            <div className="stat">
              <div className="stat-title">Claimable Rewards</div>
              <div className="stat-value">{0}</div>
              {/* <div className="stat-value">{maturedPtValue + currency}</div> */}
              <button
                type="button"
                className="btn btn-sm btn-primary mt-4"
                onClick={() => router.push('/interest-rate-swap/rewards')}
                disabled={!maturedPtValue}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>

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
          <Menu />
        </button>
        <button
          className={`btn btn-sm btn-square ${viewMode === 'grid' ? 'btn-neutral' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <GridView />
        </button>
      </div>

      {vaults === null && (
        <p className="text-center">
          <span className="loading loading-ring loading-lg"></span>
        </p>
      )}

      {vaults && vaults.length != 0 && viewMode === 'table' && (
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
                      <KeyboardArrowDown />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>My Total Position</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'position' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowDown />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Fixed Yield</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'fixed' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowDown />
                    </span>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {vaults.map((vault, i) => {
                return (
                  <tr
                    className="hover cursor-pointer border-b-2 border-[#adc9ff]"
                    onClick={() => router.push(vault.strategy_contract)}
                    key={i}
                  >
                    <th>
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <Image
                            src={getVaultImage(vault.strategy_contract)?.image}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="avatar -ml-2 mt-4">
                          <div className="w-4 rounded-full">
                            <Image
                              src={getVaultImage(vault.strategy_contract)?.subImage}
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
                        <div className="text-xl font-bold">{vault.name}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="text-xl font-bold">
                          {/* {`ptValues?.[i] || coinAmount || number`} */}
                          {/* {`vault.deposit_denom || coinDenom || async`} */}
                        </div>
                        <div className="text-sm opacity-50">{`0 | currency`}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="text-xl font-bold text-accent">
                          {`${Number(vaultsMaxFixedAPYs[i]).toFixed(2)} %`}
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
          {vaults.map((vault, index) => {
            return (
              <div
                style={{
                  background:
                    'linear-gradient(180deg, rgba(53, 75, 116, 0.94) 0.07%, #1f2736 59.52%)',
                }}
                className="card shadow-xl"
                key={index}
              >
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <Image
                          src={getVaultImage(vault.strategy_contract)?.image}
                          alt=""
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="avatar -ml-3 mt-6">
                        <div className="w-6 rounded-full">
                          <Image
                            src={getVaultImage(vault.strategy_contract)?.subImage}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="card-title">{vault.name}</h2>
                      <div className="text-sm opacity-50"></div>
                    </div>
                    <span className="flex-auto"></span>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Fixed APY Up To</div>
                    <div className="stat-value text-accent">
                      {`${Number(vaultsMaxFixedAPYs[index]).toFixed(2)} %`}
                    </div>
                    <div className="stat-desc"></div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border-2 border-[#adc9ff] p-2 cursor-pointer hover">
                    <div>
                      <div className="text-xl">My Total Position</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">
                        0&nbsp;{/* {`(ptValues?.[i] || 0) | coinAmount | number : '1.0-2' `} */}
                        {vault.deposit_denom}
                      </div>
                    </div>
                  </div>

                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      onClick={() => router.push(vault.strategy_contract)}
                    >
                      <span>Deposit</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {vaults.length === 0 && <p className="font-bold text-lg text-error">* No vault</p>}
    </div>
  );
}
