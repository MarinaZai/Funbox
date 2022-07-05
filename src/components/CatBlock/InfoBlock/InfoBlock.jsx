import React from "react";
import styles from "../InfoBlock/styles.module.css";
export const InfoBlock = (props) => {
  return (
    <div className={styles.InfoBlock}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.taste}>{props.taste}</div>
      <div className={styles.amount}>{props.amount}</div>
      <div className={styles.present}>{props.present}</div>
    </div>
  );
};
