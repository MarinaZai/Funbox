import React from "react";
import styles from "../BuyBlock/styles.module.css";
export const BuyBlock = (props) => {
  return (
    <div className={styles.buy}>
    <span className={styles.question}>Чего сидишь?Порадуй котэ, <a href="#">купи</a></span>
  </div>
  );
};
