import { KeyboardArrowUpOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Positions() {
  const router = useRouter();
  const [sortType, setSortType] = useState();
  const [positionTab, setPositionTab] = useState('fixed');

  const changeAdvanced = () => {};

  const vaultsImages = [];
  const ptPositionValue = 0;
  const maturedPtValue = 0;
  const ptPositions = [];
  const ytPositions = [];
  const lpPositions = [];

  const calcMaturity = (pool: any) => {
    if (!pool) {
      return 0;
    }
    const maturity = Number(pool.maturity) + Number(pool.start_time);
    return maturity * 1000;
  };

  const calcRestDays = (pool: any) => {
    if (!pool) {
      return 0;
    }
    const maturity = Number(pool.maturity) + Number(pool.start_time);
    const diff = maturity * 1000 - Date.now();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days;
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

  const getVaultImage = (contract) => {
    return vaultsImages?.find((vault) => vault.contract === contract);
  };

  return (
    <div className="mx-auto max-w-screen-xl w-full p-8">
      <div className="flex flex-row flex-wrap mb-8">
        <div className="text-xl breadcrumbs">
          <ul>
            <li>
              <a onClick={() => router.push('/interest-rate-swap/simple-vaults')}>
                Earn Fixed Yield
              </a>
            </li>
            <li>Positions</li>
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
              <div className="stat-title">My Total Position Value</div>
              <div className="stat-value">{ptPositionValue}</div>
            </div>
          </div>
          <div>
            <div className="stat">
              <div className="stat-title">Claimable Rewards</div>
              <div className="stat-value">{maturedPtValue}</div>
              {maturedPtValue && (
                <button
                  type="button"
                  className="btn btn-sm btn-primary mt-4"
                  onClick={() => router.push('/interest-rate-swap/rewards')}
                >
                  Claim
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-2xl text-neutral mb-4">My Position Summary</h2>
      <div className="tabs w-full mb-4">
        <a
          className={`tab tab-lg tab-bordered ${
            positionTab === 'fixed' ? 'text-accent border-accent' : ''
          }`}
          onClick={() => setPositionTab('fixed')}
        >
          Fixed Yield
        </a>
        <a
          className={`tab tab-lg tab-bordered ${
            positionTab === 'long' ? 'border-primary text-primary' : ''
          }`}
          onClick={() => setPositionTab('long')}
        >
          Long Yield
        </a>
        <a
          className={`tab tab-lg tab-bordered ${
            positionTab === 'liquidity' ? 'border-secondary text-secondary' : ''
          }`}
          onClick={() => setPositionTab('liquidity')}
        >
          Liquidity
        </a>
      </div>

      {positionTab === 'fixed' && (
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                      <KeyboardArrowUpOutlined />
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
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Position</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'position' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Fixed APY</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'apy' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {ptPositions.map((p, i) => {
                return (
                  <tr
                    className="hover cursor-pointer border-b-2 border-[#adc9ff]"
                    onClick={() =>
                      router.push(
                        `/interest-rate-swap/simple-vaults/${p.tranche?.strategy_contract}?tranche=${p.id}&tx=redeem`
                      )
                    }
                    key={i}
                  >
                    <th>#{p.id}</th>
                    <td>
                      <div>
                        <div className="text-xl font-bold">{p.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="text-xl font-bold">{calcMaturity(p.tranche)}</div>
                      <div className="text-sm opacity-50">{calcRestDays(p.tranche)} Days</div>
                    </td>
                    <td>
                      <div className="flex flex-row items-center gap-2">
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image
                              src={getVaultImage(p.tranche?.strategy_contract)?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="avatar -ml-2 mt-4">
                            <div className="w-4 rounded-full">
                              <Image
                                src={getVaultImage(p.tranche?.strategy_contract)?.subImage}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold">
                          {Number(p.positionAmount).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm opacity-50">{p.positionValue | currency}</div>
                    </td>

                    <td>
                      <div className="text-xl font-bold text-accent">
                        {Number(p.apy?.pt_apy || 0).toFixed() + ' %'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {positionTab === 'long' && (
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                      <KeyboardArrowUpOutlined />
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
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Position</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'position' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Long Yield APY</span>
                    <span
                      className={`material-symbols-outlined ${
                        sortType === 'apy' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {ytPositions.map((p) => {
                return (
                  <tr
                    className="hover cursor-pointer border-b-2 border-[#adc9ff]"
                    onClick={() =>
                      router.push(
                        `/interest-rate-swap/vaults/${p.tranche?.strategy_contract}/${p.id}?swap=yt&mode=swap&tx=redeem`
                      )
                    }
                    key={i}
                  >
                    <th>#{p.id}</th>
                    <td>
                      <div>
                        <div className="text-xl font-bold">{p.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="text-xl font-bold">{calcMaturity(p.tranche)}</div>
                      <div className="text-sm opacity-50">{calcRestDays(p.tranche)} Days</div>
                    </td>
                    <td>
                      <div className="flex flex-row items-center gap-2">
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image
                              src={getVaultImage(p.tranche?.strategy_contract)?.image}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="avatar -ml-2 mt-4">
                            <div className="w-4 rounded-full">
                              <Image
                                src={getVaultImage(p.tranche?.strategy_contract)?.subImage}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold">
                          {Number(p.positionAmount).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm opacity-50">{p.positionValue}</div>
                    </td>

                    <td>
                      <div className="text-xl font-bold text-primary">
                        {Number(p.apy?.yt_apy || 0).toFixed(2) + ' %'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {positionTab === 'liquidity' && (
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Maturity</span>
                    <span
                      className={`material-symbols-outlined  ${
                        sortType === 'maturity' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Position</span>
                    <span
                      className={`material-symbols-outlined  ${
                        sortType === 'position' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs flex-nowrap">
                    <span>Pool APY</span>
                    <span
                      className={`material-symbols-outlined  ${
                        sortType === 'apy' ? 'text-info' : ''
                      }`}
                    >
                      <KeyboardArrowUpOutlined />
                    </span>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {lpPositions.map((p, i) => {
                return (
                  <tr
                    className="hover cursor-pointer border-b-2 border-[#adc9ff]"
                    onClick={() =>
                      router.push(
                        `/interest-rate-swap/pools/${p.tranche?.strategy_contract}/${p.id}?&tx=redeem`
                      )
                    }
                    key={i}
                  >
                    <th>#{p.id}</th>
                    <td>
                      <div>
                        <div className="text-xl font-bold">{p.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="text-xl font-bold">{calcMaturity(p.tranche)}</div>
                      <div className="text-sm opacity-50">{calcRestDays(p.tranche)} Days</div>
                    </td>
                    <td>
                      <div className="flex flex-row items-center gap-2">
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image src={getVaultImage(p.tranche?.strategy_contract)?.image} />
                          </div>
                          <div className="avatar -ml-2 mt-4">
                            <div className="w-4 rounded-full">
                              <Image src={getVaultImage(p.tranche?.strategy_contract)?.subImage} />
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold">
                          {Number(p.positionAmount).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm opacity-50">{p.positionValue | currency}</div>
                    </td>

                    <td>
                      <div className="text-xl font-bold text-secondary">
                        {Number(calcTotalPoolAPY(p.apy, p.ytApy) || 0).toFixed() + ' %'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
