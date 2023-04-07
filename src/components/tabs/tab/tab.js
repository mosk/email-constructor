import PropTypes from 'prop-types';
import styles from './tab.module.css';

const Tab = ({ value, onClick, active, children }) => {
  const clickHandler = (e) => {
    e.preventDefault();

    onClick();
  };

  return (
    <li className={styles.item}>
      <button
        className={`${styles.button} ${active ? styles['button--active'] : ''}`}
        type="button"
        value={value}
        onClick={clickHandler}
      >
        {children}
      </button>
    </li>
  );
};

export default Tab;

Tab.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
