import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { Dropzone } from "../../../ui/dropzone/dropzone";
import { Row } from "../structures/row";
import { addRow } from "../../../../services/actions/index";
import { TRow } from "../../../../types/types";

const EmailContainer: FC = () => {
  const dispatch = useDispatch();
  const { rows } = useSelector((store: any) => store.emailContent);

  const [{ isHover }, dropEmailContainer] = useDrop({
    accept: "row",
    drop: (item) => {
      dispatch(addRow(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  // useEffect(() => {}, [rows]);

  return (
    <table cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <td
            style={{
              padding: "0",
            }}
          >
            {rows.length > 0 && rows.map((item: TRow) => <Row key={item.id} id={item.id} />)}
            <Dropzone
              isHover={isHover}
              minHeight={160}
              desc="Перетащите сюда нужную&nbsp;структуру (ряд&nbsp;с&nbsp;одной&nbsp;колонкой и&nbsp;т.п.)"
              ref={dropEmailContainer}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmailContainer;
