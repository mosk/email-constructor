import PropTypes from 'prop-types';
import styles from './item.module.css';

const Item = ({
  name,
  value,
  setCurrentSettings,
  currentSettings,
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  const buttonClickHandler = (e) => {
    e.preventDefault();

    if (currentSettings === value) {
      setCurrentSettings('');
    } else {
      setCurrentSettings(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        type="button"
        data-active={currentSettings === value}
        onClick={buttonClickHandler}
      >
        {name}
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setCurrentSettings: PropTypes.func.isRequired,
  currentSettings: PropTypes.string.isRequired,
  // children: PropTypes.React.ReactNode.isRequired,
};
