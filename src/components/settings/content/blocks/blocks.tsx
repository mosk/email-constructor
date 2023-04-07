import { FC } from "react";
import styles from "./blocks.module.css";
import Item from "./item/item";
// import Item from './item/item';

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
    </ul>
  );
};

export default Blocks;
