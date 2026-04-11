import { TypographyClasses as TypeStyles } from '../styles/modules/typography';
import { fetchProtocolStats } from '@/lib/fetchStats';
import { formatCurrency, formatPercentage, formatCount } from '@/lib/formatters';

export default async function Stats() {
  const stats = await fetchProtocolStats();

  return (
    <section className="flex justify-center text-white select-none">
      <div className="container relative px-8 py-24 text-center sm:text-left sm:justify-center sm:p-12 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px] bg-black">
        <h3 className={`mb-16 ${TypeStyles.h3}`}>Stats</h3>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-8 xl:grid-cols-12">
          <div className="col-span-4 xl:col-span-3">
            <p className={TypeStyles.body}>Total Value Locked</p>
            <h6 className={TypeStyles.h6}>{formatCurrency(stats.tvl)}</h6>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <p className={TypeStyles.body}>UNO Borrowed</p>
            <h6 className={TypeStyles.h6}>{formatCurrency(stats.unoBorrowed)}</h6>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <p className={TypeStyles.body}>Total Troves Open</p>
            <h6 className={TypeStyles.h6}>{formatCount(stats.trovesOpen)}</h6>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <p className={TypeStyles.body}>Avg. Trove Interest</p>
            <h6 className={TypeStyles.h6}>{formatPercentage(stats.avgInterest)}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
