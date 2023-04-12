import { FC } from "react";
import styles from "./tabs.module.css";
import Tab from "./tab/tab";

type TTabs = {
  setCurrentTab: (tab: string) => void;
  currentTab: string;
};

const Tabs: FC<TTabs> = ({ setCurrentTab, currentTab }) => {
  const tabClickHandler = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <ul className={styles.wrapper}>
      <Tab value="theme" active={currentTab === "theme"} key="theme" onClick={() => tabClickHandler("theme")}>
        Оформление
      </Tab>
      <Tab value="content" active={currentTab === "content"} key="content" onClick={() => tabClickHandler("content")}>
        Контент
      </Tab>
    </ul>
  );
};

export default Tabs;
