import React from 'react'
import styles from './index.css'

export default ({ color }) => {
  return (
    <div
      className={styles.circle}
      style={{borderColor: color }}
    />
  )
}
