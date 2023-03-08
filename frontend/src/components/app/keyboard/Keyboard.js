import React from "react";
import styles from "./Keyboard.module.css";

const Keyboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.keyboard}>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={styles.key}></div>
        <div className={`${styles.blackKey} ${styles.blackKey1}`}></div>
        <div className={`${styles.blackKey} ${styles.blackKey2}`}></div>
        <div className={`${styles.blackKey} ${styles.blackKey3}`}></div>
        <div className={`${styles.blackKey} ${styles.blackKey4}`}></div>
        <div className={`${styles.blackKey} ${styles.blackKey5}`}></div>
      </div>
    </div>
  );
};

export default Keyboard;
