import Image from 'next/image';
import Accordion from '@/components/Accordion';
import { CardStyles as cardStyles } from '../app/styles';
import { TypographyClasses as TypeStyles } from '../styles/modules/index';

export default function Uno() {
  return (
    <section className="flex text-white justify-center min-h-[980px] select-none">
      <div className="container relative px-8 py-24 mx-0 sm:mx-8 md:mx-12 lg:mx-16 max-w-[1440px]">
        <div className="relative flex flex-row align-middle justify-center items-center text-white z-[1]">
          <div className="items-stretch grid grid-cols-12 gap-0">
            <div className="col-span-6 md:col-span-3">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-narrowest mb-0 leading-0">UNO</h1>
              </div>
            </div>
            <div className="hidden md:block md:col-span-6">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-4`}>
                <p className={TypeStyles.body}>
                  ONE for $1 worth of collateral at any time, with <br /> unrestricted participation.
                </p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-12`}>
                <Image width={64} height={64} src="/assets/img/uno-no-space.svg" alt="Binota Logo" />
              </div>
            </div>
            <div className="hidden md:block md:col-span-3">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-4`}>
                <h3 className={`${TypeStyles.h3} rotate-270`}>Features</h3>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center`}>
                <Accordion />
              </div>
            </div>
            <div className="hidden md:col-span-3 md:block">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-4 `}>
                <h6 className={TypeStyles.h6}>IMMUTABLE</h6>
              </div>
            </div>
            <div className="hidden md:block md:col-span-3">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-12`}>
                <p className={TypeStyles.body}>The protocol is immutable at deployment and cannot be changed.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-12`}>
                <h6 className={TypeStyles.h6}>IMMUTABLE</h6>
              </div>
            </div>
            <div className="hidden md:block md:col-span-3">
              <div className={`${cardStyles.cardGrid} flex justify-center items-center text-center p-12`}>
                <p className={TypeStyles.body}>The protocol is immutable at deployment and cannot be changed.</p>
              </div>
            </div>
          </div>
          {/* <div className="w-1/3 order-2">
            
            <h2 className={TypeStyles.h2}>UNO</h2>
          </div>
          <div className="w-2/3 order-0">
            <h3 className={TypeStyles.h3}>Features</h3>
            <Accordion/>
          </div> */}
        </div>
      </div>
    </section>
  );
}
