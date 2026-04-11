import Image from "next/image";
import MonButton from "@/components/MonButton";
import ShaderDistribution from "../components/ShaderDistribution";
import { TypographyClasses as TypeStyles } from "../styles/modules/typography";

export default function Distribution() {
  return (
    <section className="flex relative justify-center h-[1440px] select-none">
      <ShaderDistribution className="absolute top-0 left-0 z-[-100] min-h-[1440px]" />
      <div className="container relative px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px] ">
        <div className="flex flex-col items-center justify-center text-white h-full">
          <Image
            width={96}
            height={96}
            src="/assets/img/Hand.svg"
            alt="Binota Sample"
            className="w-24 h-24 mb-12"
          />
          <h2 className={TypeStyles.h2}>Distribution</h2>
          <h6 className={TypeStyles.h6}>COMING SOON</h6>
          <p className={TypeStyles.body}>
            Stake BNT to earn protocol revenue from Binota and gain governance
            power over liquidity incentives.
          </p>
          <div style={{ marginTop: "24px" }}>
            <MonButton href="#" text="Launch App" />
          </div>
        </div>
      </div>
    </section>
  );
}
