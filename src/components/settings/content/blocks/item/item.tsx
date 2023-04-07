import { FC } from "react";
import { useDrag } from "react-dnd";
import { RxDragHandleDots2 as DragIcon } from "react-icons/rx";
import styles from "./item.module.css";

type TBlocksItem = {
  type: string;
};

const Item: FC<TBlocksItem> = ({ type }) => {
  // dnd
  const [{ isDrag }, dragRef] = useDrag({
    type: type,
    item: { type },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const Text: FC = () => {
    return (
      <p className={styles.text}>
        <span>Lorem, ipsum dolor.</span>
      </p>
    );
  };

  const Image: FC = () => {
    return (
      <div className={styles.image}>
        <img alt="Lorem, ipsum dolor." />
      </div>
    );
  };

  const Button: FC = () => {
    return (
      <div className={styles.button}>
        <button type="button">Button</button>
      </div>
    );
  };

  return (
    <div className={`${styles.wrapper} ${isDrag ? styles.dragged : ""}`} ref={dragRef}>
      <DragIcon />
      {type === "text" ? (
        <Text />
      ) : type === "image" ? (
        <Image />
      ) : type === "button" ? (
        <Button />
      ) : (
        <span className={styles.col}>{type}</span>
      )}
    </div>
  );
};

export default Item;
