import Image from 'next/image';
import BinotaLogo from './BinotaLogo';

export default function BrandLogo() {
  return (
    <div className="flex max-w-[1440px] justify-between items-center mb-48">
      <div className="flex">
        <BinotaLogo size={44} />
      </div>
      <div className="flex">
        <Image width={144} height={144} src="/assets/img/Wordmark.svg" alt="Binota Wordmark" />
      </div>
    </div>
  );
}
