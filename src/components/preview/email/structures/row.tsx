import { FC, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import Column from "./column";

import { TRow, TColumn } from "../../../../types/types";

import { reorderRow } from "../../../../services/actions/index";

type TRowProps = TRow;

export const Row: FC<TRowProps> = ({ id }) => {
  const dispatch = useDispatch() as any;
  const [isMouseHover, setIsHover] = useState(false);
  const { rows } = useSelector((store: any) => store.emailContent);
  const row = rows.find((item: TRowProps) => item.id === id);

  const ref = useRef(null);

  const [{ isDrag }, drag] = useDrag({
    type: "SORTING_ROW",
    item: () => {
      return { id };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, drop] = useDrop({
    accept: "SORTING_ROW",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item: any, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragId: string | unknown = item.id;
      const hoverId: string | unknown = id;

      if (dragId === hoverId) {
        return;
      }

      dispatch(
        reorderRow({
          from: dragId,
          to: hoverId,
        })
      );

      item.id = hoverId;
    },
  });

  drag(drop(ref));

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      className="row"
      ref={ref}
      data-handler-id={handlerId}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={isMouseHover ? { boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.6)", cursor: "move" } : {}}
    >
      <tbody>
        <tr style={{ fontSize: "0", textAlign: "center" }}>
          {row.id &&
            row.columns.map((column: TColumn, i: number) => (
              <Column key={`${id}_${+i}`} id={`${id}_${+i}`} columnsAmount={row.columns.length} />
            ))}
        </tr>
      </tbody>
    </table>
  );
};
