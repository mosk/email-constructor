import { useState, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { Dropzone } from "../../../ui/dropzone/dropzone";
import { Text } from "../blocks/text";

import { addContent } from "../../../../services/actions/index";
import { TRow } from "../../../../types/types";

type TColumnProps = {
  id: string;
  columnsAmount: number;
};

const Column: FC<TColumnProps> = ({ id, columnsAmount }) => {
  const dispatch = useDispatch();
  const [isMouseHover, setIsHover] = useState(false);
  const { rows } = useSelector((store: any) => store.emailContent);

  const rowID: string = id.split(`_`)[0];
  const columnID: string = id.split(`_`)[1];
  const row: any = rows.find((item: TRow) => item.id === rowID);

  let columnContent: any = null;

  if (typeof row !== "undefined" && row.columns !== undefined) {
    columnContent = row.columns[+columnID].content;
  }

  const emailWidth = useSelector((state: any) => state.emailSettings.width);

  const columnWidthPercent = 100 / columnsAmount;
  const columnWidthPixels = emailWidth / columnsAmount;

  const [{ isHover, isDrop }, dropColumn] = useDrop({
    accept: "text",
    drop: (item) => {
      console.log(item);
      dispatch(addContent({ item, id }));
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
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: "0",
        width: `${columnWidthPixels}px`,
        textAlign: "center",
        boxShadow: isMouseHover ? "inset 0 0 8px rgba(0, 0, 0, 0.6)" : "none",
        cursor: isMouseHover ? "move" : "none",
      }}
      data-set-col-id={id}
    >
      {columnContent && columnContent.map((item: any) => <Text key={item.id} />)}
      <Dropzone isHover={isHover} ref={dropColumn} />
    </td>
  );
};

export default Column;
