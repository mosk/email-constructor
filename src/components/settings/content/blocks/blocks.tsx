import { FC } from "react";
import styles from "./blocks.module.css";
import Item from "./item/item";

// Мелкие элементы, например, картинка, текстовой блок, баннер, кнопка и т.п.
const Blocks: FC = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.col}>
        <Item type="text" />
      </li>
      <li className={styles.col}>
        <Item type="button" />
      </li>
      <li className={styles.col}>
        <Item type="image" />
      </li>
      <li className={styles.col}>
        <Item type="menu" />
      </li>
      <li className={styles.col}>
        <Item type="timer" />
      </li>
      <li className={styles.col}>
        <Item type="social" />
      </li>
    </ul>
  );
};

export default Blocks;
