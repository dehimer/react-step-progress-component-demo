import React from 'react'
import styles from './index.css'

export default ({ color, handler }) => (
  <div
    onClick={handler}
    className={styles.circle}
    style={{borderColor: color }}
  />
)
