import React from "react";
import styles from "../Header/styles.module.css";

export const Header = (props) =>{
   return(
     <div>
    <span className={styles.mainQuestion}>{props.title}</span>
  </div>
  )
}