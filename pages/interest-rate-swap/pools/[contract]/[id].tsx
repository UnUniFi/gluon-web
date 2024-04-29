import { ArrowDownwardOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Pools() {
  const router = useRouter();
  const [txMode, setTxMode] = useState('');

  const onDepositPool = () => {};
  const onChangeDepositUt = () => {};
  const inputMaxUT = () => {};
  const onChangeDepositPt = () => {};
  const inputMaxPT = () => {};

  const onWithdrawPool = () => {};
  const inputMaxLP = () => {};

  const vaultImage = undefined;
  const vault = {
    strategy_contract: 'ununifi14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sm5z28e',
    name: 'stATOM v2',
    description: 'Interest Rate Swap Vault for stATOM (Stride)',
    max_maturity: '63072000',
    cycle: '15768000',
    last_tranche_time: '1711362451',
    denom: 'uatom',
    deposit_denom: 'ustatom',
  };
  const poolId = 1;
  const pool = {
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
  };
  const poolAPYs = {
    liquidity_apy: '0.000000000000000000',
    discount_pt_apy: '0.354349759116742967',
    liquidity_rate_per_deposit: '627023.073471605825882547',
    deposit_token_percentage_in_pool: '0.315376171027539898',
    pt_percentage_in_pool: '0.469811342224300825',
  };
  const trancheYtAPYs = {
    yt_apy: '0.588102715479888871',
    yt_rate_per_deposit: '3.720163359813456128',
    ls_apy: '0.158085185675657720',
  };
  const lpBalanceUSD = null;
  const totalLiquidityUSD = {
    total: 345190.2021897277,
    assets: {
      'irs/tranche/1/pt': 162174.3745053003,
      ustatom: 183015.8276844274,
    },
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

  const calcUnderlyingAPY = (poolApy: any, ytApy: any) => {
    let apy = 0;
    if (poolApy && ytApy) {
      apy += Number(ytApy.ls_apy) * Number(poolApy.pt_percentage_in_pool);
    }
    return apy;
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
          <div className="text-xl breadcrumbs">
            <ul>
              <li>
                <a onClick={() => router.push('../..')}>Liquidity Pools</a>
              </li>
              <li>
                <a onClick={() => router.push('..')}>{vault?.name}</a>
              </li>
              <li>Pool #{poolId}</li>
            </ul>
          </div>
          <span className="flex-auto"></span>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, rgba(53, 75, 116, 0.94) 0.07%, #1f2736 59.52%)',
          }}
          className="card mb-8"
        >
          <div className="card-body">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image src={vaultImage?.image} alt="" />
                </div>
                <div className="avatar -ml-3 mt-6">
                  <div className="w-6 rounded-full">
                    <Image src={vaultImage?.subImage} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {vault?.name} Pool #{poolId}
                </div>
                <div className="text-sm opacity-50"></div>
              </div>
              {pool && <div className="text-sm opacity-50 ml-4">{calcMaturity(pool)}</div>}
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mb-8">
          <div className="card bg-base-200 shadow-xl w-full lg:w-1/2">
            <div className="tabs w-full">
              <a
                className={`tab tab-lg tab-bordered w-1/2 ${
                  txMode === 'deposit' ? 'tab-active' : ''
                }`}
                onClick={() => setTxMode('deposit')}
              >
                Add
                <p className="hidden sm:inline">&nbsp;Liquidity</p>
              </a>
              <a
                className={`tab tab-lg tab-bordered w-1/2 ${
                  txMode === 'redeem' ? 'tab-active' : ''
                }`}
                onClick={() => setTxMode('redeem')}
              >
                Remove
                <p className="hidden sm:inline">&nbsp;Liquidity</p>
              </a>
            </div>
            <div className="card-body">
              {txMode === 'deposit' && (
                <form onSubmit={() => onDepositPool()}>
                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Input</span>
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="hidden sm:avatar">
                            <div className="w-8 rounded-full">
                              <Image src={vaultImage?.image} alt="" />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image src={vaultImage?.subImage} alt="" />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>{vault?.deposit_denom}</div>
                        </span>
                        <input
                          // #depositUtAmountNgModelRef="ngModel"
                          className="join-item input input-bordered input-secondary w-full"
                          // [class]="{
                          //   'input-error': depositUtAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          // [(ngModel)]="inputUT"
                          min={0}
                          // max="denomBalancesMap?.[vault?.deposit_denom || '']?.amount | coinAmount: vault?.deposit_denom"
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="depositUtAmount"
                          onChange={() => onChangeDepositUt()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputMaxUT()}
                      >
                        Max
                      </button>
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* { denomBalancesMap?.[vault?.deposit_denom || '']?.amount | coinAmount:vault?.deposit_denom } */}
                        0{vault?.deposit_denom}
                      </span>
                    </span>

                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="hidden sm:avatar">
                            <div className="w-8 rounded-full border-2 border-primary">
                              <Image src={vaultImage?.image} alt="" />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image src={vaultImage?.subImage} alt="" />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            PT {vault?.denom} #{poolId}
                          </div>
                        </span>
                        <input
                          // #depositPtAmountNgModelRef="ngModel"
                          className="join-item input input-bordered input-secondary w-full"
                          // [class]="{
                          //   'input-error': depositPtAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          // [(ngModel)]="inputPT"
                          min={0}
                          // [max]="denomBalancesMap?.[ptDenom || '']?.amount | coinAmount: vault?.deposit_denom"
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="depositPtAmount"
                          onChange={() => onChangeDepositPt()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputMaxPT()}
                      >
                        Max
                      </button>
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* { denomBalancesMap?.[ptDenom || '']?.amount | coinAmount:ptDenom } */}0
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-row justify-center">
                    <ArrowDownwardOutlined />
                  </div>
                  <div className="divider"></div>

                  <div className="form-control gap-2">
                    <span className="label">
                      <span className="label-text">Output (Estimated)</span>
                    </span>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="hidden sm:avatar">
                          <div className="w-8 rounded-full border-2 border-secondary">
                            <Image src={vaultImage?.image} alt="" />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image src={vaultImage?.subImage} alt="" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          LP {vault?.name} #{poolId}
                        </div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        // value="{ estimatedMintAmount?.mintAmount }"
                        readOnly
                      />
                    </label>
                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      // [disabled]="depositFormRef.invalid"
                    >
                      <span>Deposit</span>
                    </button>
                  </div>
                </form>
              )}

              {txMode === 'redeem' && (
                <form onSubmit={() => onWithdrawPool()}>
                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Input</span>
                    </span>

                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="hidden sm:avatar">
                            <div className="w-8 rounded-full border-2 border-secondary">
                              <Image src={vaultImage?.image} alt="" />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image src={vaultImage?.subImage} alt="" />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            LP {vault?.name} #{poolId}
                          </div>
                        </span>
                        <input
                          // #withdrawAmountNgModelRef="ngModel"
                          className="join-item input input-bordered input-secondary w-full"
                          // [class]="{
                          //   'input-error': withdrawAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          // [(ngModel)]="inputLP"
                          min={0}
                          // [max]="denomBalancesMap?.[lpDenom || '']?.amount | coinAmount: vault?.deposit_denom"
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="withdrawAmount"
                          onChange={() => onChangeWithdraw()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputMaxLP()}
                      >
                        Max
                      </button>
                    </div>

                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* { denomBalancesMap?.[lpDenom || '']?.amount | coinAmount:lpDenom } */}0
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-row justify-center">
                    <ArrowDownwardOutlined />
                  </div>
                  <div className="divider"></div>

                  <div className="form-control gap-2">
                    <span className="label">
                      <span className="label-text">Output (Estimated)</span>
                    </span>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="hidden sm:avatar">
                          <div className="w-8 rounded-full">
                            <Image src={vaultImage?.image} alt="" />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image src={vaultImage?.subImage} alt="" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>{vault?.deposit_denom}</div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        // value="{ estimatedRedeemAmount?.utAmount }"
                        readOnly
                      />
                    </label>

                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="hidden sm:avatar">
                          <div className="w-8 rounded-full border-2 border-primary">
                            <Image src={vaultImage?.image} alt="" />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image src={vaultImage?.subImage} alt="" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          PT {vault?.denom} #{poolId}
                        </div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        // value="{ estimatedRedeemAmount?.ptAmount }"
                        readOnly
                      />
                    </label>
                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      // [disabled]="withdrawFormRef.invalid"
                    >
                      <span>Redeem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="lg:flex-auto"></div>

          <div className="w-full lg:w-5/12">
            <div className="card bg-base-200 shadow-xl w-full lg:w-auto mb-4">
              <div className="card-body">
                <h2 className="card-title">
                  <span>APY</span>
                  <span className="flex-auto" />
                  <span className="text-accent">
                    Over {Number(calcTotalPoolAPY(poolAPYs, trancheYtAPYs)).toFixed(2) + ' %'}
                  </span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      <tr className="bg-base-100">
                        <th>Underlying Yield</th>
                        <td>
                          {Number(calcUnderlyingAPY(poolAPYs, trancheYtAPYs)).toFixed(2) + ' %'}
                        </td>
                      </tr>
                      <tr className="bg-base-100">
                        <th>PT Yield</th>
                        <td>{Number(poolAPYs?.discount_pt_apy).toFixed(2) + ' %'}</td>
                      </tr>
                      <tr>
                        <th>My Liquidity</th>
                        <td>{lpBalanceUSD}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl w-full lg:w-auto">
              <div className="card-body">
                <h2 className="card-title">
                  <span>Total Liquidity</span>
                  <span className="flex-auto"></span>
                  <span className="text-accent">{totalLiquidityUSD?.total}</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      {pool &&
                        pool.pool_assets &&
                        pool.pool_assets.map((asset, index) => {
                          return (
                            <tr key={index}>
                              <th>
                                <div className="flex flex-row items-center gap-2">
                                  <div className="avatar">
                                    <div className="w-8 rounded-full">
                                      <Image src={vaultImage?.image} alt="" />
                                    </div>
                                    {vaultImage?.subImage && (
                                      <div className="avatar -ml-2 mt-4">
                                        <div className="w-4 rounded-full">
                                          <Image src={vaultImage?.subImage} alt="" />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  {asset.denom}
                                </div>
                              </th>
                              <td>
                                <div className="text-xl font-bold">{asset.amount}</div>
                                <div className="text-sm opacity-50">
                                  {totalLiquidityUSD?.assets?.[asset.denom!]}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
