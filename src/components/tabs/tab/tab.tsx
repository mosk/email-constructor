import { FC, SyntheticEvent } from "react";
import styles from "./tab.module.css";

type TTab = {
  value: string;
  onClick: () => void;
  active: boolean;
  children: string;
};

const Tab: FC<TTab> = ({ value, onClick, active, children }) => {
  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    onClick();
  };

  return (
    <li className={styles.item}>
      <button
        className={`${styles.button} ${active ? styles["button--active"] : ""}`}
        type="button"
        value={value}
        onClick={clickHandler}
      >
        {children}
      </button>
    </li>
  );
};

export default Tab;
