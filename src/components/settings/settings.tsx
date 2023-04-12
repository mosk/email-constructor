import { FC, useState } from "react";
import styles from "./settings.module.css";
import Tabs from "../tabs/tabs";
import { Content } from "./content/content";
import { Theme } from "./theme/theme";

const EmailSettings: FC = () => {
  const [currentTab, setCurrentTab] = useState("theme");

  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Настройки</h2>
      <div className={styles["settings-wrapper"]}>
        <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
        {currentTab === "theme" ? <Theme /> : <Content />}
      </div>
    </section>
  );
};

export default EmailSettings;
