import { FC, PropsWithChildren } from "react";
import styles from "./item.module.css";

type TItemProps = {
  name: string;
  value: string;
  setCurrentSettings: (value: string) => void;
  currentSettings: string;
};

const Item: FC<PropsWithChildren<TItemProps>> = ({ name, value, setCurrentSettings, currentSettings, children }) => {
  const buttonClickHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (currentSettings === value) {
      setCurrentSettings("");
    } else {
      setCurrentSettings(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        type="button"
        data-active={currentSettings === value}
        onClick={buttonClickHandler}
      >
        {name}
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Item;
