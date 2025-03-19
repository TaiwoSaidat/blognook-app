import React from "react";
import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = ({ message }: any) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <h2 className={styles.errorTitle}>Error</h2>
        <p className={styles.errorMessage}>{message}</p>
        <button
          className={styles.refreshButton}
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
