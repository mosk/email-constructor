import { forwardRef } from "react";

type TDropzone = {
  isHover: boolean;
  minHeight?: number;
  margin?: number;
  desc?: string;
};

export const Dropzone = forwardRef(
  ({ isHover, minHeight = 80, margin = 0, desc = "Место для контента" }: TDropzone, ref: any) => {
    return (
      <div
        ref={ref}
        style={{
          boxSizing: "border-box",
          position: "relative",
          height: "100%",
          minHeight: `${minHeight}px`,
          margin: `${margin}px 0`,
          padding: "8px",
          textAlign: "center",
          backgroundColor: "transparent",
          border: `2px dashed ${isHover ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)"}`,
          borderRadius: "8px",
          boxShadow: `${isHover ? "inset 0 0 8px rgba(173, 255, 47, 0.8)" : "none"}`,
          transition: "border-color ease 0.4s, box-shadow ease 0.4s",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: '"Segoe UI", "Helvetica", sans-serif',
            fontSize: "13px",
            lineHeight: "1",
            color: "#333333",
            transform: "translate(-50%, -50%)",
          }}
        >
          {desc}
        </span>
      </div>
    );
  }
);
