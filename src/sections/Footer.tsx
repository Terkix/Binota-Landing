export default function Footer() {
  return (
    <>
      {/*    <!-- Component: Footer with Four Columns and Sub Footer --> */}
      <footer className="">
        {/*      <!-- Main footer --> */}

        <div className="text-sm flex text-white justify-center select-none">
          <div className="container relative max-w-[1440px] px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24">
            <div className="relative grid grid-cols-4 gap-8 sm:grid-cols-8 xl:grid-cols-12">
              <nav className="col-span-4 sm:col-span-4 xl:col-span-3" aria-labelledby="footer-get-in-touch-4-sub">
                <h3 className="mb-4 text-base font-medium text-secondary-400" id="footer-get-in-touch-4-sub">
                  Socials
                </h3>
                <ul>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a href="linkname" className="pointer-events-none cursor-default opacity-50">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a href="linkname" className="pointer-events-none cursor-default opacity-50">
                      Discord
                    </a>
                  </li>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a href="linkname" className="pointer-events-none cursor-default opacity-50">
                      Telegram
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-4 sm:col-span-4 xl:col-span-3" aria-labelledby="footer-about-4-sub">
                <h3 className="mb-4 text-base font-medium text-secondary-400" id="footer-about-4-sub">
                  About
                </h3>
                <ul>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a
                      href="linkname"
                      className="transition-colors duration-300 hover:text-secondary-400 focus:text-secondary-600"
                    >
                      Liquidity Whitepaper
                    </a>
                  </li>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a href="#" className="transition-colors duration-300 hover:text-secondary-400 focus:text-secondary-600">
                      Documentation
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-4 sm:col-span-4 xl:col-span-3" aria-labelledby="footer-product-4-sub">
                <h3 className="mb-4 text-base font-medium text-secondary-400" id="footer-product-4-sub">
                  Governance
                </h3>
                <ul>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a
                      href="linkname"
                      className="transition-colors duration-300 hover:text-secondary-400 focus:text-secondary-600"
                    >
                      Soon
                    </a>
                  </li>
                </ul>
              </nav>

              <nav className="col-span-4 md:col-span-4 lg:col-span-3" aria-labelledby="footer-docs-4-sub">
                <h3 className="mb-4 text-base font-medium text-secondary-400" id="footer-docs-4-sub">
                  Developers
                </h3>
                <ul>
                  <li className="mb-2 leading-6 font-sans text-lg">
                    <a href="#" className="transition-colors duration-300 hover:text-secondary-400 focus:text-secondary-600">
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*      <!-- Sub Footer --> */}
        <div className="flex justify-center border-t-24 border-black bg-secondary-400 text-sm text-white select-none">
          <div className="container max-w-[1440px] p-8 md:px-24 mx-0 sm:mx-12 lg:mx-24 py-4">
            <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
              <a
                id="WindUI-4-sub"
                aria-label="WindUI logo"
                aria-current="page"
                className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
                href="linkname"
                style={{
                  cursor: 'pointer',
                }}
              >
                Binota
              </a>
              <nav className="col-span-3 md:col-span-4 lg:col-span-6" aria-labelledby="subfooter-links-3-sub">
                <h3 className="sr-only" id="subfooter-links-3-sub">
                  Get in touch
                </h3>
                <ul className="flex flex-wrap items-center justify-end gap-4 lg:gap-4">
                  <li className="leading-6">
                    <a
                      href="linkname"
                      className="transition-colors duration-300 hover:text-secondary-600 focus:text-secondary-600"
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      T&C
                    </a>
                  </li>
                  <div className="w-1 h-1 bg-white" />
                  <li className="leading-6">
                    <a
                      href="linkname"
                      className="transition-colors duration-300 hover:text-secondary-600 focus:text-secondary-600"
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Footer with Four Columns and Sub Footer --> */}
    </>
  );
}
