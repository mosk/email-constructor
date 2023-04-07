import styles from './preview.module.css';

import EmailFrame from './frame/frame';

const EmailPreview = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Превью письма</h2>
      <div className={styles['email-wrapper']}>
        <EmailFrame />
      </div>
    </section>
  );
};

export default EmailPreview;
