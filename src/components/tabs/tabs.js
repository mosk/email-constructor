import PropTypes from 'prop-types';
import styles from './tabs.module.css';

import Tab from './tab/tab';

const Tabs = ({ setCurrentTab, currentTab }) => {
  const tabClickHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <ul className={styles.wrapper}>
      <Tab
        value="theme"
        active={currentTab === 'theme'}
        key="theme"
        onClick={() => tabClickHandler('theme')}
      >
        Оформление
      </Tab>
      <Tab
        value="content"
        active={currentTab === 'content'}
        key="content"
        onClick={() => tabClickHandler('content')}
      >
        Контент
      </Tab>
    </ul>
  );
};

export default Tabs;

Tabs.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};
