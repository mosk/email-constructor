import { FC, useState } from "react";
import { useDrag } from "react-dnd";
import { TextAlignLeftIcon as TextIcon, ImageIcon, ButtonIcon, TimerIcon, LayoutIcon } from "@radix-ui/react-icons";
import styles from "./item.module.css";

type TBlocksItem = {
  type: string;
};

const Item: FC<TBlocksItem> = ({ type }) => {
  // удалить
  // const [isActive, setActive] = useState(false);

  // dnd
  const [{ isDrag }, dragRef] = useDrag({
    type: type,
    item: { type },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  // if (type === "text") {
  //   setActive(true);
  // }

  return (
    <div
      className={`${styles.wrapper} ${isDrag ? styles.dragged : ""}`}
      ref={dragRef}
      // style={{ opacity: isActive ? "1" : "0.5" }}
    >
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
