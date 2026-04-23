import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div className="flex max-w-[1440px] justify-between items-center mb-48">
      <div className="flex">
        <Image width={23} height={44} src="/assets/img/logo.svg" alt="B1 Logo" />
      </div>
      <div className="flex">
        <Image width={144} height={144} src="/assets/img/Wordmark.svg" alt="Binota Wordmark" />
      </div>
    </div>
  );
}
