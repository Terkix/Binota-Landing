import { fetchTokenomics } from "@/lib/fetchTokenomics";
import { CardStyles as cardStyles } from "../app/styles";
import { TypographyClasses as TypeStyles } from "../styles/modules/typography";
import { formatCurrency, formatCount } from "@/lib/formatters";

export default async function Tokenomics() {
  const data = await fetchTokenomics();

  return (
    <section className="flex text-white justify-center select-none bg-black">
      <div className="container px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px]">
        <h2 className={TypeStyles.h2}>Token Distribution</h2>
        <h4 className={TypeStyles.h4}>
          Total Supply: {formatCount(data.totalSupply)} BNT
        </h4>

        {/* Allocation Cards Grid */}
        <div className="items-stretch grid grid-cols-4 xl:grid-cols-8 mt-12">
          {data.allocations.map((allocation) => (
            <div
              key={allocation.name}
              className="col-span-4 lg:col-span-4 xl:col-span-4"
            >
              <div className={`${cardStyles.cardGrid} p-12`}>
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-4 h-4 rounded-full mt-1 shrink-0"
                    style={{ backgroundColor: allocation.color }}
                  />
                  <h6 className={`${TypeStyles.h6} mb-0`}>
                    {allocation.name.toUpperCase()}
                  </h6>
                </div>
                <div className="text-3xl font-bold text-primary-200 mb-2">
                  {allocation.percentage}%
                </div>
                <p className={TypeStyles.body}>{allocation.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Bar */}
        <div className="mt-12">
          <div className="flex h-8 w-full overflow-hidden">
            {data.allocations.map((allocation) => (
              <div
                key={allocation.name}
                className="h-full transition-all duration-300 hover:opacity-80"
                style={{
                  width: `${allocation.percentage}%`,
                  backgroundColor: allocation.color,
                }}
                title={`${allocation.name}: ${allocation.percentage}%`}
              />
            ))}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            {data.allocations.map((allocation) => (
              <div key={allocation.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: allocation.color }}
                />
                <span className="text-sm text-neutral-400">
                  {allocation.name} ({allocation.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
