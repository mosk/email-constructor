import styles from './email-preview.module.css';

const EmailPreview = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Конструктор</h2>
      <div className={styles['preview-wrapper']}>Конструктор</div>
    </section>
  );
};

export default EmailPreview;
