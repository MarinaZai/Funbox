import React from "react";
import styles from "../ImageBlock/styles.module.css";

export const ImageBlock = (props) => {
  return (
    <div className={styles.wrapperCat}>
      <div className={styles.weight}>
        <div className={styles.numberWeight}>{props.weight}</div>
        <div className={styles.numberText}>{props.text}</div>
      </div>
    </div>
  );
};
