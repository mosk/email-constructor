import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { Dropzone } from "../../../ui/dropzone/dropzone";

// import { addRowInColumn } from "../../../../services/actions/index";

type TColumnProps = {
  id: string;
  columnsAmount: number;
};

const Column: FC<TColumnProps> = ({ id, columnsAmount }) => {
  const dispatch = useDispatch();
  const { rows } = useSelector((store: any) => store.emailContent.rows);
  const emailWidth = useSelector((state: any) => state.emailSettings.width);

  const columnWidthPercent = 100 / columnsAmount;
  const columnWidthPixels = emailWidth / columnsAmount;

  const [{ isHover, isDrop }, dropColumn] = useDrop({
    accept: "row",
    drop: (item) => {
      // dispatch(addRowInColumn({ item, id }));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      isDrop: monitor.didDrop(),
    }),
  });

  return (
    <td
      width={`"${columnWidthPercent}%"`}
      valign="top"
      style={{
        padding: "0",
        width: `${columnWidthPixels}px`,
        textAlign: "center",
      }}
      data-set-col-id={id}
    >
      <Dropzone isHover={isHover} ref={dropColumn} />
    </td>
  );
};

export default Column;
