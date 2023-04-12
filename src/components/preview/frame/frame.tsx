import { useEffect, useContext, FC } from "react";
import { DndProvider, DndContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import Frame, { FrameContext } from "react-frame-component";
import styles from "./frame.module.css";
import EmailStructure from "../email/template/template";

const DndFrame = ({ children }: { children: any }) => {
  const { dragDropManager } = useContext(DndContext) as any;
  const { window } = useContext(FrameContext);

  useEffect(() => {
    dragDropManager!.getBackend().addEventListeners(window);
  });

  return children;
};

const EmailFrame: FC = () => {
  const emailTheme = useSelector((state: any) => state.emailSettings.title);

  const head = () => {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        <title>{emailTheme}</title>
      </>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Frame
        className={styles.container}
        sandbox="allow-same-origin allow-scripts allow-modals"
        mountTarget="body"
        head={head()}
        initialContent='<!DOCTYPE html><html><body style="margin: 0; padding: 0;"></body></html>'
        style={{ minHeight: "calc(100% -81px)" }}
      >
        <DndFrame>
          <EmailStructure />
        </DndFrame>
      </Frame>
    </DndProvider>
  );
};

export default EmailFrame;
