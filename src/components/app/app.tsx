import React, { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ErrorBoundary from "../../utils/error-boundary";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import EmailPreview from "../preview/preview";
import EmailSettings from "../settings/settings";

const App: FC = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={styles.main}>
            <EmailPreview />
            <EmailSettings />
          </main>
        </DndProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
