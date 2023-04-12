import { FC } from "react";

const textStyle = {
  fontSize: "13px",
  lineHeight: "1",
};

export const Text: FC = () => {
  return <p style={textStyle}>Текст</p>;
};
