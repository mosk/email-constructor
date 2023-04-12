import { FC } from "react";
import styles from "./app-header.module.css";

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.nav__item}>
          Ссылка 1
        </a>
        <a href="/" className={styles.nav__item}>
          Ссылка 2
        </a>
      </nav>
      <div className={styles["nav-user"]}>user</div>
    </header>
  );
};

export default AppHeader;
