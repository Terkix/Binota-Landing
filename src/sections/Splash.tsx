"use client";

import MonButton from "@/components/MonButton";
import BrandLogo from "../components/BrandLogo";
import ShaderSplash from "../components/ShaderSplash";
import { TypographyClasses as TypeStyles } from "../styles/modules/typography";

export default function Splash() {
  return (
    <section className="flex bg-black justify-center h-[980px]">
      <ShaderSplash className="absolute top-0 left-0 min-h-[900px]" />
      <div className="container relative px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px] select-none">
        <div className="relative flex flex-col align-middle justify-center text-white z-[1]">
          <BrandLogo />
          <h1 className={TypeStyles.h2}>
            The <i>only</i> MONAD
            <br />
            Stablecoin Experience
            <br />
          </h1>
          {/* <h5 className={TypeStyles.h5}>Now live on testnet!</h5> */}
          <p className={TypeStyles.lead}>
            Monata Stable (UNO) is backed by a diverse range of collaterals,
            such as MON, shMON, sMON, and gMON
          </p>
          <div className="flex justify-between items-center pt-12">
            <MonButton href="https://app.monata.xyz" text="Launch App" />
          </div>
        </div>
        {/* <ShaderSplash className="absolute top-0 left-0 min-h-[900px]" /> */}
      </div>
    </section>
  );
}
