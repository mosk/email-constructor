import { FC } from "react";
import { useDrag } from "react-dnd";
import { TextAlignLeftIcon as TextIcon, ImageIcon, ButtonIcon, TimerIcon, LayoutIcon } from "@radix-ui/react-icons";
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

  return (
    <div className={`${styles.wrapper} ${isDrag ? styles.dragged : ""}`} ref={dragRef}>
      {type === "text" ? (
        <TextIcon />
      ) : type === "button" ? (
        <ButtonIcon />
      ) : type === "image" ? (
        <ImageIcon />
      ) : type === "menu" ? (
        <LayoutIcon />
      ) : type === "timer" ? (
        <TimerIcon />
      ) : type === "social" ? (
        ""
      ) : (
        ""
      )}
      <span className={styles.desc}>{type}</span>
    </div>
  );
};

export default Item;
