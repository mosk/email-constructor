import React from 'react';
import styles from './app.module.css';

import ErrorBoundary from '../../utils/error-boundary';

import AppHeader from '../app-header/app-header';
import EmailPreview from '../email-preview/email-preview';
import EmailSettings from '../email-settings/email-settings';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <AppHeader />
        <main className={styles.main}>
          <EmailPreview />
          <EmailSettings />
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;
