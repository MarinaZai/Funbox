import styles from "../MainPage/styles.module.css";
import React from "react";
import { BuyBlock } from "../components/BuyBlock/BuyBlock";
import { CatBlock } from "../components/CatBlock/CatBlock";

export const MainPage = (props) => {
  return (
    <div className={styles.container}>
      <CatBlock />
      <BuyBlock />
    </div>
  );
};
