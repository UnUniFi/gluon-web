import { ArrowDownwardOutlined, SwapVertOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function VaultPage() {
  const router = useRouter();
  const [swapTab, setSwapTab] = useState<any>('pt');
  const [modeTab, setModeTab] = useState<any>('swap');
  const [txMode, setTxMode] = useState<any>('deposit');

  const trancheId = 1;
  const estimateMintPt = undefined;
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
  const tranchePool = {
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
  const vaultImage = {
    contract: 'ununifi1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqhp8g9l',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    subImage: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png',
  };
  const denomBalancesMap = null;
  const ptDenom = 'irs/tranche/1/pt';
  const ytDenon = 'irs/tranche/1/yt';
  const totalLiquidityUSD = {
    total: 345112.1413919779,
    assets: {
      'irs/tranche/1/pt': 162132.7918802723,
      ustatom: 182979.34951170557,
    },
  };
  const trancheYtAPYs = {
    yt_apy: '0.588037087659057252',
    yt_rate_per_deposit: '3.719748217682641497',
    ls_apy: '0.158085185675657720',
  };
  const tranchePtAPYs = {
    pt_apy: '0.754205301289820506',
    pt_rate_per_deposit: '1.681223000000000000',
  };

  const calcMaturity = (pool: any) => {
    const maturity = Number(pool.maturity) + Number(pool.start_time);
    return maturity * 1000;
  };

  const isMatured = (pool: any) => {
    return calcMaturity(pool) * 1000 < Date.now();
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

  const isNegativeValue = (value: string | undefined) => {
    if (value === undefined) {
      return false;
    }
    return Number(value) < 0;
  };

  const depositPriceImpact = () => {
    return 0;
  };

  const onSubmitSwap = () => {};

  const onChangeSwapUnderlyingAmount = () => {};

  const inputSwapMaxUT = () => {};

  const onChangeSwapDesiredYtAmount = () => {};

  const depositPricImpact = () => {
    return 0;
  };

  const onSubmitSwapRedeem = () => {};

  const onChangeSwapPtAmount = () => {};

  const onChangeSwapYtAmount = () => {};

  const inputSwapMaxPT = () => {};

  const inputSwapMaxYT = () => {};

  const onSubmitMint = () => {};

  const onChangeMintUnderlyingAmount = () => {};

  const inputMintMaxUT = () => {};

  const onSubmitRedeem = () => {};

  const onChangeRedeemPtAmount = () => {};

  const inputRedeemMaxPT = () => {};

  const onChangeRedeemYtAmount = () => {};

  const inputRedeemMaxYT = () => {};

  return (
    <div className={`bg-[#39465d] min-h-screen`}>
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="flex flex-row flex-wrap mb-8">
          <div className="text-xl breadcrumbs">
            <ul>
              <li>Markets</li>
              <li>{vault.name}</li>
              <li>Tranche #{trancheId}</li>
            </ul>
          </div>
          <span className="flex-auto"></span>
          <div className="join">
            <button
              className="btn btn-sm btn-primary glass join-item"
              onClick={() => router.push('/interest-rate-swap/simple-vaults')}
            >
              Earn
            </button>
            <button className="btn btn-sm btn-accent text-neutral join-item">Trade</button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mb-4">
          <div className="card bg-base-200 shadow-xl w-full 2xl:w-1/2">
            <div className="tabs w-full">
              <a
                className={`tab tab-lg tab-bordered w-1/2 ${
                  modeTab === 'swap' && swapTab === 'pt' ? 'border-accent text-accent' : ''
                } ${modeTab === 'swap' && swapTab === 'yt' ? 'border-primary text-primary' : ''}`}
                onClick={() => setModeTab('swap')}
              >
                Swap
              </a>
              <a
                className={`tab tab-lg tab-bordered w-1/2 ${
                  modeTab === 'mint' && swapTab === 'pt' ? 'border-accent text-accent' : ''
                } ${modeTab === 'mint' && swapTab === 'yt' ? 'border-primary text-primary' : ''}`}
                onClick={() => setModeTab('mint')}
              >
                Mint
              </a>
            </div>
            <div className="card-body">
              {modeTab === 'swap' && txMode === 'deposit' && (
                <form onSubmit={() => onSubmitSwap()}>
                  <div className="form-control">
                    <span className="label">
                      {swapTab === 'pt' && <span className="label-text">Input</span>}
                      {swapTab === 'yt' && <span className="label-text">Input (Max Limit)</span>}
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <Image
                                src={vaultImage?.image}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={vaultImage?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>{vault?.deposit_denom}</div>
                        </span>
                        {swapTab === 'pt' && (
                          <input
                            className={`join-item input input-bordered input-info w-full`}
                            // [class]="{
                            //   'input-error': swapUnderlyingAmountNgModelRef.errors
                            // }"
                            placeholder="0.000000"
                            required
                            type="number"
                            min={0}
                            // max={denomBalancesMap?[vault?.deposit_denom || '']?.amount}
                            pattern="^[0-9]*\.?[0-9]{0,6}$"
                            name="swapUnderlyingAmount"
                            onChange={() => onChangeSwapUnderlyingAmount()}
                          />
                        )}
                        {swapTab === 'yt' && (
                          <input
                            className="join-item input input-bordered w-full"
                            // [class]="{
                            //   'input-error': requiredUnderlyingAmountNgModelRef.errors
                            // }"
                            // disabled="!inputDesiredYT"
                            placeholder="0.000000"
                            required
                            type="number"
                            min={0}
                            // max={denomBalancesMap?[vault?.deposit_denom || '']?.amount}
                            pattern="^[0-9]*\.?[0-9]{0,6}$"
                            name="requiredUnderlyingAmount"
                          />
                        )}
                      </label>
                      {swapTab === 'pt' && (
                        <button
                          type="button"
                          className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                          onClick={() => inputSwapMaxUT()}
                        >
                          Max
                        </button>
                      )}
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* {denomBalancesMap?[vault?.deposit_denom || '']?.amount} */}
                        {vault?.deposit_denom}
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-row justify-center">
                    <button
                      type="button"
                      className="btn btn-circle"
                      onClick={() => setTxMode('redeem')}
                    >
                      <SwapVertOutlined />
                      <span className="material-symbols-outlined"> swap_vert </span>
                    </button>
                  </div>
                  <div className="divider"></div>

                  <div className="form-control">
                    <span className="label">
                      {swapTab === 'pt' && <span className="label-text">Output (Estimated)</span>}
                      {swapTab === 'yt' && <span className="label-text">Output</span>}
                    </span>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="avatar">
                          <div
                            className={`w-8 rounded-full border-2 ${
                              swapTab === 'pt' ? 'border-accent' : ''
                            } ${swapTab === 'yt' ? 'border-primary' : ''}`}
                          >
                            <Image
                              src={vaultImage?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image
                                  src={vaultImage?.subImage}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          {swapTab} {vault?.denom} #{trancheId}
                        </div>
                      </span>
                      {swapTab === 'pt' && (
                        <input
                          className="join-item input input-bordered w-full"
                          value={estimateMintPt}
                          readOnly
                        />
                      )}
                      {swapTab === 'yt' && (
                        <input
                          className="join-item input input-bordered input-info w-full"
                          // [class]="{
                          //   'input-error': desiredYtNgModelRef.errors
                          // }"
                          // placeholder="0.000000"
                          required
                          type="number"
                          min={0}
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="desiredYt"
                          onChange={() => onChangeSwapDesiredYtAmount()}
                        />
                      )}
                    </label>
                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 -mt-4">
                    <div className="flex flex-col justify-center items-center ml-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="17"
                        viewBox="0 0 2 17"
                        fill="none"
                      >
                        <path d="M1 0.00585938V17.0059" stroke="#ADC9FF" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8.00586"
                          r="7.5"
                          fill="#ADC9FF"
                          fill-opacity="0.2"
                          stroke="#ADC9FF"
                        />
                      </svg>
                    </div>
                    {swapTab === 'pt' && (
                      <>
                        <div className="text-xl text-secondary mt-4">Fixed APY</div>
                        <div className="flex-auto"></div>
                        <div
                          className={`text-xl flex flex-row items-center text-accent mt-4 ${
                            isNegativeValue(tranchePtAPYs?.pt_apy) ? 'text-error' : ''
                          }`}
                        >
                          <span> {Number(tranchePtAPYs?.pt_apy || 0).toFixed(2) + ' %'} </span>
                        </div>
                      </>
                    )}
                    {swapTab === 'yt' && (
                      <>
                        <div className="text-xl text-secondary mt-4">Long Yield APY</div>
                        <div className="flex-auto"></div>
                        <div
                          className={`text-xl flex flex-row items-center text-accent mt-4 ${
                            isNegativeValue(trancheYtAPYs?.yt_apy) ? 'text-error' : ''
                          }`}
                        >
                          <span> {Number(trancheYtAPYs?.yt_apy || 0).toFixed(2) + ' %'} </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex flex-row items-center gap-4 -mt-2">
                    <div className="flex flex-col justify-center items-center sm:ml-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="17"
                        viewBox="0 0 2 17"
                        fill="none"
                      >
                        <path d="M1 0.00585938V17.0059" stroke="#ADC9FF" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8.00586"
                          r="7.5"
                          fill="#ADC9FF"
                          fill-opacity="0.2"
                          stroke="#ADC9FF"
                        />
                      </svg>
                    </div>
                    <div className="text-xl text-secondary mt-4">Price Impact</div>
                    <div className="flex-auto"></div>
                    <div
                      className={`text-xl flex flex-row items-center text-accent mt-4 ${
                        depositPricImpact() < 0 ? 'text-error' : ''
                      }`}
                    >
                      {depositPriceImpact() >= 0 && (
                        <span className="material-symbols-outlined mt-1">add</span>
                      )}
                      <span> {Number(depositPriceImpact()).toFixed(2)} </span>
                    </div>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      // [disabled]="swapMintFormRef.invalid || !estimateRequiredUtForYt"
                    >
                      <span>Swap</span>
                    </button>
                  </div>
                </form>
              )}

              {modeTab === 'swap' && txMode === 'redeem' && (
                <form onSubmit={() => onSubmitSwapRedeem()}>
                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Input</span>
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="avatar">
                            <div
                              className={`w-8 rounded-full border-2 ${
                                swapTab === 'pt' ? 'border-accent' : ''
                              } ${swapTab === 'yt' ? 'border-primary' : ''}`}
                            >
                              <Image
                                src={vaultImage?.image}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={vaultImage?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            {swapTab} {vault?.denom} #{trancheId}
                          </div>
                        </span>
                        {swapTab === 'pt' && (
                          <input
                            className="join-item input input-bordered input-info w-full"
                            // [class]="{
                            //   'input-error': swapPtAmountNgModelRef.errors
                            // }"
                            placeholder="0.000000"
                            required
                            type="number"
                            min={0}
                            // max={denomBalancesMap?[ptDenom || '']?.amount}
                            pattern="^[0-9]*\.?[0-9]{0,6}$"
                            name="swapPtAmount"
                            onChange={() => onChangeSwapPtAmount()}
                          />
                        )}
                        {swapTab === 'yt' && (
                          <input
                            className="join-item input input-bordered input-info w-full"
                            // [class]="{
                            //   'input-error': swapYtAmountNgModelRef.errors
                            // }"
                            placeholder="0.000000"
                            required
                            type="number"
                            min={0}
                            // max={denomBalancesMap?[ytDenom || '']?.amount}
                            pattern="^[0-9]*\.?[0-9]{0,6}$"
                            name="swapYtAmount"
                            onChange={() => onChangeSwapYtAmount()}
                          />
                        )}
                      </label>
                      {swapTab === 'pt' && (
                        <button
                          type="button"
                          className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                          onClick={() => inputSwapMaxPT()}
                        >
                          Max
                        </button>
                      )}
                      {swapTab === 'yt' && (
                        <button
                          type="button"
                          className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                          onClick={() => inputSwapMaxYT()}
                        >
                          Max
                        </button>
                      )}
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      {swapTab === 'pt' && (
                        <span className="label-text-alt">
                          {/* {denomBalancesMap?[ptDenom || '']?.amount} */}0
                        </span>
                      )}
                      {swapTab === 'yt' && (
                        <span className="label-text-alt">
                          {/* {denomBalancesMap?[ytDenom || '']?.amount} */}0
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-row justify-center">
                    <button
                      type="button"
                      className="btn btn-circle"
                      onClick={() => setTxMode('deposit')}
                    >
                      <SwapVertOutlined />
                    </button>
                  </div>
                  <div className="divider"></div>

                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Output (Estimated)</span>
                    </span>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image
                              src={vaultImage?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image
                                  src={vaultImage?.subImage}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>{vault?.deposit_denom}</div>
                      </span>
                      {swapTab === 'pt' && (
                        <input
                          className="join-item input input-bordered w-full"
                          // value="{ estimateRedeemPt }"
                          readOnly
                        />
                      )}
                      {swapTab === 'yt' && (
                        <input
                          className="join-item input input-bordered w-full"
                          placeholder="0.000000"
                          required
                          type="number"
                          min={0}
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="desiredUt"
                        />
                      )}
                    </label>
                    {swapTab === 'yt' && tranchePool && !isMatured(tranchePool) && (
                      <span className="label">
                        <span className="label-text font-bold text-lg text-error">
                          YT cannot swap until maturity!
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      // disabled={
                      //   swapRedeemFormRef.invalid ||
                      //   !tranchePool ||
                      //   (swapTab === 'yt' && !isMatured(tranchePool))
                      // }
                    >
                      <span>Swap</span>
                    </button>
                  </div>
                </form>
              )}

              {modeTab === 'mint' && txMode === 'deposit' && (
                <form onSubmit={() => onSubmitMint()}>
                  <div className="join mb-4">
                    <button
                      type="button"
                      className={`btn btn-sm join-item ${
                        txMode === 'deposit' ? 'btn-neutral' : ''
                      }`}
                      onClick={() => setTxMode('deposit')}
                    >
                      Mint
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm join-item"
                      onClick={() => setTxMode('redeem')}
                    >
                      Redeem
                    </button>
                  </div>
                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Input</span>
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <Image
                                src={vaultImage?.image}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={vaultImage?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>{vault?.deposit_denom}</div>
                        </span>
                        <input
                          className="join-item input input-bordered input-info w-full"
                          // #mintUnderlyingAmountNgModelRef="ngModel"
                          // [class]="{
                          //   'input-error': mintUnderlyingAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          min={0}
                          // max={denomBalancesMap?[vault?.deposit_denom || '']?.amount}
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="mintUnderlyingAmount"
                          onChange={() => onChangeMintUnderlyingAmount()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputMintMaxUT()}
                      >
                        Max
                      </button>
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* {denomBalancesMap?[vault?.deposit_denom || '']?.amount} */}0
                        {vault?.deposit_denom}
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
                        <div className="avatar">
                          <div className="w-8 rounded-full border-2 border-accent">
                            <Image
                              src={vaultImage?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image
                                  src={vaultImage?.subImage}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          PT {vault?.denom} #{trancheId}
                        </div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        // value={estimateMintPtYt?.ptAmount}
                        readOnly
                      />
                    </label>
                    <label className="input-group join">
                      <span className="gap-2 w-full">
                        <div className="avatar">
                          <div className="w-8 rounded-full border-2 border-primary">
                            <Image
                              src={vaultImage?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image
                                  src={vaultImage?.subImage}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          YT {vault?.denom} #{trancheId}
                        </div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        // value={estimateMintPtYt?.ytAmount}
                        readOnly
                      />
                    </label>
                    <span className="label">
                      <span className="label-text"></span>
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 -mt-6">
                    <div className="flex flex-col justify-center items-center ml-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="17"
                        viewBox="0 0 2 17"
                        fill="none"
                      >
                        <path d="M1 0.00585938V17.0059" stroke="#ADC9FF" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8.00586"
                          r="7.5"
                          fill="#ADC9FF"
                          fill-opacity="0.2"
                          stroke="#ADC9FF"
                        />
                      </svg>
                    </div>
                    <div className="text-xl text-secondary mt-4">Underlying APY</div>
                    <div className="flex-auto"></div>
                    <div className="text-xl flex flex-row items-center text-accent mt-4">
                      <span> {Number(trancheYtAPYs?.ls_apy || 0).toFixed(2) + ' %'} </span>
                    </div>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary w-full gap-1"
                      // disabled="mintMintFormRef.invalid"
                    >
                      <span>Mint</span>
                    </button>
                  </div>
                </form>
              )}

              {modeTab === 'mint' && txMode === 'redeem' && (
                <form onSubmit={() => onSubmitRedeem()}>
                  <div className="join mb-4">
                    <button
                      type="button"
                      className="btn btn-sm join-item"
                      onClick={() => setTxMode('deposit')}
                    >
                      Mint
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm join-item ${txMode === 'redeem' ? 'btn-neutral' : ''}`}
                      onClick={() => setTxMode('redeem')}
                    >
                      Redeem
                    </button>
                  </div>
                  <div className="form-control">
                    <span className="label">
                      <span className="label-text">Input</span>
                    </span>
                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="avatar">
                            <div className="w-8 rounded-full border-2 border-accent">
                              <Image
                                src={vaultImage?.image}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={vaultImage?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            PT {vault?.denom} #{trancheId}
                          </div>
                        </span>
                        <input
                          // #pairPtAmountNgModelRef="ngModel"
                          className="join-item input input-bordered input-info w-full"
                          // [class]="{
                          //   'input-error': pairPtAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          min={0}
                          // max={denomBalancesMap?[ptDenom || '']?.amount}
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="pairPtAmount"
                          onChange={() => onChangeRedeemPtAmount()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputRedeemMaxPT()}
                      >
                        Max
                      </button>
                    </div>
                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* {denomBalancesMap?[ptDenom || '']?.amount} */}0
                      </span>
                    </span>

                    <span className="label">
                      <span className="label-text"></span>
                    </span>

                    <div>
                      <label className="input-group join">
                        <span className="gap-2 w-full">
                          <div className="avatar">
                            <div className="w-8 rounded-full border-2 border-primary">
                              <Image
                                src={vaultImage?.image}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            {vaultImage?.subImage && (
                              <div className="avatar -ml-2 mt-4">
                                <div className="w-4 rounded-full">
                                  <Image
                                    src={vaultImage?.subImage}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            YT {vault?.denom} #{trancheId}
                          </div>
                        </span>
                        <input
                          // #pairYtAmountNgModelRef="ngModel"
                          className="join-item input input-bordered input-info w-full"
                          // [class]="{
                          //   'input-error': pairYtAmountNgModelRef.errors
                          // }"
                          placeholder="0.000000"
                          required
                          type="number"
                          min={0}
                          // max={denomBalancesMap?[ytDenom || '']?.amount}
                          pattern="^[0-9]*\.?[0-9]{0,6}$"
                          name="pairYtAmount"
                          onChange={() => onChangeRedeemYtAmount()}
                        />
                      </label>
                      <button
                        type="button"
                        className="hidden sm:inline-flex btn btn-xs btn-primary mt-3 mr-9 absolute right-0"
                        onClick={() => inputRedeemMaxYT()}
                      >
                        Max
                      </button>
                    </div>

                    <span className="label">
                      <span className="label-text-alt">Available Balance:</span>
                      <span className="label-text-alt">
                        {/* {denomBalancesMap?[ytDenom || '']?.amount} */}0
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
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image
                              src={vaultImage?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          {vaultImage?.subImage && (
                            <div className="avatar -ml-2 mt-4">
                              <div className="w-4 rounded-full">
                                <Image
                                  src={vaultImage?.subImage}
                                  alt=""
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>{vault?.deposit_denom}</div>
                      </span>
                      <input
                        className="join-item input input-bordered w-full"
                        value={estimateRedeemPtYt?.redeemAmount}
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
                      // [disabled]="mintRedeemFormRef.invalid"
                    >
                      <span>Redeem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="2xl:flex-auto"></div>

          <div className="card bg-base-200 shadow-xl w-full 2xl:w-9/20">
            <div className="card-body">
              <div className="flex flex-wrap gap-2 items-center">
                <div className="join mb-4">
                  <button
                    className={`btn btn-sm join-item btn-accent text-neutral ${
                      swapTab === 'yt' ? 'glass' : ''
                    }`}
                    onClick={() => setSwapTab('pt')}
                  >
                    PT
                  </button>
                  <button
                    className={`btn btn-sm join-item btn-primary ${
                      swapTab === 'pt' ? 'glass' : ''
                    }`}
                    onClick={() => setSwapTab('yt')}
                  >
                    YT
                  </button>
                </div>
                <div className="flex-auto"></div>
                <div className="card bg-base-100 flex-row flex-wrap px-4 py-2 gap-3 items-center mb-4">
                  <div className="avatar">
                    <div
                      className={`w-8 rounded-full border-2 ${
                        swapTab === 'pt' ? 'border-accent' : ''
                      } ${swapTab === 'yt' ? 'border-primary' : ''}`}
                    >
                      <Image src={vaultImage?.image} alt="" layout="fill" objectFit="contain" />
                    </div>
                    {vaultImage?.subImag && (
                      <div className="avatar -ml-2 mt-4">
                        <div className="w-4 rounded-full">
                          <Image
                            src={vaultImage?.subImage}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mr-4">
                    <div className="text-xl font-bold">
                      {swapTab} {vault?.denom} #{trancheId}
                    </div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                  {tranchePool && (
                    <div className="text-xl font-bold">{calcMaturity(tranchePool)}</div>
                  )}
                  {tranchePool && (
                    <div className="text-sm opacity-50">{calcRestDays(tranchePool)} Days</div>
                  )}
                </div>
              </div>

              <div className="stats stats-vertical shadow mb-4">
                <div className="stat">
                  <div className="stat-title">Liquidity</div>
                  <div className="stat-value">{totalLiquidityUSD?.total}</div>
                  <div className="stat-desc"></div>
                </div>
                <div className="stat">
                  <div className="stat-title">Underlying APY</div>
                  <div className="stat-value">
                    {Number(trancheYtAPYs?.ls_apy || 0).toFixed(2) + ' %'}
                  </div>
                  <div className="stat-desc"></div>
                </div>
                {swapTab === 'pt' && (
                  <div className="stat">
                    <div className="stat-title">{`Fixed APY (with 1${vault?.deposit_denom})`}</div>
                    <div className="stat-value">
                      {Number(tranchePtAPYs?.pt_apy || 0).toFixed(2) + ' %'}
                    </div>
                    <div className="stat-desc"></div>
                  </div>
                )}
                {swapTab === 'yt' && (
                  <div className="stat">
                    <div className="stat-title">Long Yield APY (with 10YT)</div>
                    <div className="stat-value">
                      {Number(trancheYtAPYs?.yt_apy || 0).toFixed(2) + ' %'}
                    </div>
                    <div className="stat-desc"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
