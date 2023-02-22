import { useState } from 'react';
import styles from './email-settings.module.css';

import Tabs from '../tabs/tabs';

const EmailSettings = () => {
  const [currentTab, setCurrentTab] = useState('theme');

  const settingsContent = () => {
    return (
      <div>
        <h3>Структуры</h3>
        <h3>Блоки</h3>
      </div>
    );
  };

  const settingsTheme = () => {
    return (
      <div>
        <h3>Общие настройки</h3>
        <div>
          <p>Ширина письма</p>
          <div>
            <input type="range" id="b" name="b" step="10" min="400" max="720" />
            <output name="result" htmlFor="b">
              600
            </output>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Настройки</h2>
      <div className={styles['settings-wrapper']}>
        <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
        {currentTab === 'theme' ? settingsTheme() : settingsContent()}
      </div>
    </section>
  );
};

export default EmailSettings;
