import Accordion from "../components/Accordion";
import { TypographyClasses as TypeStyles } from "../styles/modules/typography";

export default function Features() {
  return (
    <section className="flex relative justify-center text-white">
      <div className="container relative px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px] select-none">
        <h2 className={TypeStyles.h2}>Features</h2>
        <Accordion />
      </div>
    </section>
  );
}
