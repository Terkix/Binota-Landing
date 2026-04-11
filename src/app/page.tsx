import Distribution from '../sections/Distribution';
import Footer from '../sections/Footer';
import Governance from '../sections/Governance';
import Products from '../sections/Products';
import Splash from '../sections/Splash';
import Stats from '../sections/Stats';
import Tokenomics from '../sections/Tokenomics';
import Uno from '../sections/Uno';

export default function Home() {
  return (
    <div>
      <Splash />
      <Stats />
      <Uno />
      <Products />
      <Governance />
      <Tokenomics />
      <Distribution />
      <Footer />
    </div>
  );
}
