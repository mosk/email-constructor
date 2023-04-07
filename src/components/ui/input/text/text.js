import PropTypes from 'prop-types';
import styles from './text.module.css';

// title, desc, placeholder
export const Text = ({ title, desc, placeholder, inputId, onChange }) => {
  const inputChangeHandler = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={inputId} className={styles.label}>
        <span className={styles['label-text']}>{title}</span>
      </label>
      <div className={styles['input-wrapper']}>
        <input
          type="text"
          className={styles.input}
          id={inputId}
          placeholder={placeholder}
          onChange={inputChangeHandler}
        />
      </div>
      {desc && <span className={styles.desc}>desc</span>}
    </div>
  );
};

Text.defaultProps = {
  desc: false,
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
