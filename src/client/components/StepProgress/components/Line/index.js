import React from 'react'
import styles from "./index.css";

export default ({ color, isLastStep }) => {
  if (isLastStep) {
    return null;
  } else {
    return (
      <div
        className={styles.line}
        style={{ backgroundColor: color }}
      />
    )
  }
}
