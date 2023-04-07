import PropTypes from 'prop-types';
import styles from './range.module.css';

// title, desc, placeholder
const SettingsInputRange = ({
  title,
  desc,
  inputId,
  onChange,
  min,
  max,
  step,
}) => {
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
          type="range"
          min={min}
          max={max}
          step={step}
          className={styles.input}
          id={inputId}
          onChange={inputChangeHandler}
        />
      </div>
      {desc && <span className={styles.desc}>desc</span>}
    </div>
  );
};

export default SettingsInputRange;

SettingsInputRange.defaultProps = {
  desc: false,
  step: 1,
};

SettingsInputRange.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inputId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number,
};
