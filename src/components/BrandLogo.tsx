import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div className="flex max-w-[1440px] justify-between items-center mb-48">
      <div className="flex">
        <Image width={44} height={40} src="/assets/img/Hand.svg" alt="Monata Logomark" />
      </div>
      <div className="flex">
        <Image width={144} height={144} src="/assets/img/Wordmark.svg" alt="Monata Wordmark" />
      </div>
    </div>
  );
}
