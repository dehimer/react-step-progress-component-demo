import React from 'react'
import styles from 'styled-components'

export default ({ theme: { color, thickness } }) => {
  const Circle = styles.div`
    border: ${thickness}px solid ${color};
  `;
  return (
    <Circle />
  )
}
