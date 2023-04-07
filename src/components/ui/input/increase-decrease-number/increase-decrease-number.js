import PropTypes from 'prop-types';
import styles from './increase-decrease-number.module.css';

// title, desc, placeholder
export const IncreaseDecreaseNumber = ({
  title,
  desc,
  inputId,
  onChange,
  value,
}) => {
  const inputChangeHandler = (e) => {
    e.preventDefault();
    onChange(e.target);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={inputId} className={styles.label}>
        <span className={styles['label-text']}>{title}</span>
      </label>
      <div className={styles['input-wrapper']}>
        <button
          className={`${styles.button} ${styles['button-decrement']}`}
          type="button"
          data-action="decrement"
          onClick={inputChangeHandler}
        >
          Уменьшить
        </button>
        <output className={styles.input} id={inputId}>
          {value}
        </output>
        <button
          className={`${styles.button} ${styles['button-increment']}`}
          type="button"
          data-action="increment"
          onClick={(e) => inputChangeHandler(e)}
        >
          Увеличить
        </button>
      </div>
      {desc && <span className={styles.desc}>desc</span>}
    </div>
  );
};

IncreaseDecreaseNumber.defaultProps = {
  desc: false,
};

IncreaseDecreaseNumber.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inputId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
