import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { ImageBlock } from "./ImageBlock/ImageBlock";
import styles from "../CatBlock/styles.module.css";

export const CatBlock = (props) => {
  return (
    <div className={styles.container}>
      <InfoBlock
        title={"Сказачное заморское явство"}
        name={"Нямушка"}
        taste={"с фуа-гра"}
        amount={"10 порций"}
        present={"мышь в подарок"}
      />
      <ImageBlock weight={'0.5'} text={'кг'}/>
    </div>
    
  );
};
