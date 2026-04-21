import Image from 'next/image';
import MonButton from '@/components/MonButton';
import ShaderBorrow from '@/components/ShaderBorrow';
import ShaderEarn from '@/components/ShaderEarn';
import Stack from '@/components/Stack';
import ShaderNOISE from '../components/ShaderNOISE';
import { TypographyClasses as TypeStyles } from '../styles/modules/index';

export default function Products() {
  return (
    <section className="bg-black text-white flex justify-center ">
      <div className="container relative px-8 py-6 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px] select-none">
        <Stack direction="column" align="center" justify="space-between" spacing="150px">
          <div className="w-full flex flex-col lg:flex-row items-center justify-start border-1 border-solid border-white">
            <ShaderEarn className="min-h-[500px] max-h-[500px] w-full flex-col lg:pb-0 lg:w-[50%] lg:row-span-6 lg:flex-row" />
            <div className="duration-300 p-16 w-full row-span-12 border-t-1 border-solid border-white lg:h-[505px] lg:border-t-0 lg:border-l-1 lg:w-[50%] lg:row-span-6">
              <div className="mb-16">
                <Image
                  width={96}
                  height={96}
                  src="/assets/img/Hand.svg"
                  alt="Binota Hand"
                  className="w-24 h-24"
                  style={{ marginLeft: '-24px' }}
                />
              </div>
              <h4 className={TypeStyles.h4}>EARN</h4>
              <p className={TypeStyles.lead}>Depositing B1 into the Stability Pool earns fees from borrowers</p>
              <div style={{ marginTop: '24px' }}>
                <MonButton href="#" text="Earn BNT" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-start border-1 border-solid border-white">
            <div className="duration-300 border-t-1 border-solid border-white p-16 w-full h-full lg:h-[500px] lg:border-t-0 lg:border-r-1 lg:w-[50%]">
              <div className="mb-16">
                <Image
                  width={96}
                  height={96}
                  src="/assets/img/Pinky.svg"
                  alt="Binota Pinky"
                  className="w-24 h-24"
                  style={{ marginLeft: '-24px' }}
                />
              </div>
              <h4 className={TypeStyles.h4}>COLLATERALS</h4>
              <p className={TypeStyles.lead + ' text-left'}>B1 is backed by BNB collateral on Binance Smart Chain</p>
              <div style={{ marginTop: '24px' }}>
                <MonButton href="#" text="Borrow B1" />
              </div>
            </div>
            <ShaderBorrow className="min-h-[500px] max-h-[500px] w-full flex-col lg:pb-0 lg:w-[50%] lg:row-span-6 lg:flex-row" />
          </div>
        </Stack>
      </div>
    </section>
  );
}
