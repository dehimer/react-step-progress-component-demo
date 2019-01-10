import React from 'react'
import styles from './index.css'

export default ({ color }) => (
  <div
    className={styles.circle}
    style={{borderColor: color }}
  />
)
