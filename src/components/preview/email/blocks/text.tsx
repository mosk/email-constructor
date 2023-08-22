import { FC, useState } from "react";

const textStyle = {
  fontSize: "13px",
  lineHeight: "1",
};

export const Text: FC = () => {
  const [isFocus, setIsFocus] = useState(false);

  const focusIn = () => {
    console.log("focus in");

    setIsFocus(true);
  };

  const focusOut = () => {
    console.log("focus out");

    setIsFocus(false);
  };

  const editText = () => {};

  return (
    <p
      style={{
        ...textStyle,
        boxShadow: isFocus ? "inset 0 0 8px rgba(0, 0, 0, 0.6)" : "none",
        cursor: isFocus ? "text" : "auto",
      }}
      onFocus={focusIn}
      onBlur={focusOut}
      onClick={editText}
      tabIndex={0}
      contentEditable={true}
    >
      Текст
    </p>
  );
};
