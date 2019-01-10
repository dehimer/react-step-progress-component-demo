import React from 'react'
import styles from './index.css'


export default ({ color, label }) => ((
  <div className={styles.label} style={{ color }}>
    { label }
  </div>
))
