import Image from "next/image";
import { ButtonClasses as ButtonStyles } from "../styles/modules/buttons";

type MonButtonProps = {
  text: string;
  addArrow?: boolean;
  href?: string;
  onClick?: () => void;
};

const MonButton: React.FC<MonButtonProps> = ({
  text,
  addArrow = true,
  href,
  onClick,
}) => {
  return (
    <a
      href={href ?? "/#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex"
    >
      <button
        type="button"
        className={ButtonStyles.button}
        onClick={onClick}
        style={{
          cursor: "pointer",
        }}
      >
        <span className={ButtonStyles.buttonText}>{text}</span>
        {addArrow && (
          <Image
            width={24}
            height={24}
            className={ButtonStyles.buttonIcon}
            src="/assets/img/arrow-right.svg"
            alt="Arrow Right"
          />
        )}
      </button>
    </a>
  );
};

export default MonButton;
