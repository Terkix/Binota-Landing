import MonButton from '@/components/MonButton';
import { CardStyles as cardStyles } from '../app/styles';
import { TypographyClasses as TypeStyles } from '../styles/modules/typography';

export default function Governance() {
  return (
    <section className="flex text-white justify-center select-none pb-24">
      <div className="container px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px]">
        <p className={TypeStyles.body}>BNT Governance</p>
        <h2 className={TypeStyles.h2}>
          Protocol-Incentivised Liquidity Pools
          <br />
        </h2>
        <h3 className={TypeStyles.h3}>
          Governance directs 25% to protocol fees and liquidations
          <br /> to LP's
        </h3>
        <p className={TypeStyles.body}>Aligned Incentives for Sustainable Liquidity</p>
        <div className="mt-12 mb-24">
          <MonButton href="https://github.com/BinotaLQTY/Binota-FE-Org/blob/main/DOCS.md" text="Read Docs" />
        </div>
        <div className="items-stretch grid grid-cols-4 xl:grid-cols-8">
          <div className="col-span-4 lg:col-span-4 xl:col-span-4">
            <div className={`${cardStyles.cardGrid} p-12`}>
              <h6 className={TypeStyles.h6}>GOVERNANCE</h6>
              <p className={TypeStyles.body}>BNT holders direct emissions to LPs through a gauge system.</p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-4 xl:col-span-4">
            <div className={`${cardStyles.cardGrid} p-12`}>
              <h6 className={TypeStyles.h6}>REDEMPTIONS</h6>
              <p className={TypeStyles.body}>B1 for $1 worth of collateral at any time, with unrestricted participation.</p>
            </div>
          </div>

          <div className="col-span-4 lg:col-span-4 xl:col-span-4">
            <div className={`${cardStyles.cardGrid} p-12`}>
              <h6 className={TypeStyles.h6}>STABILITY</h6>
              <p className={TypeStyles.body}>
                Earn protocol fees and liquidation rewards by depositing B1 into the Stability Pool.
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-4 xl:col-span-4">
            <div className={`${cardStyles.cardGrid} p-12`}>
              <h6 className={TypeStyles.h6}>IMMUTABLE</h6>
              <p className={TypeStyles.body}>The protocol is immutable at deployment and cannot be changed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
