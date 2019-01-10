import React from 'react'
import Line from './components/Line'
import styled, {css} from 'styled-components'
import Label from './components/Label'

import styles from './index.css'

export default ({ step, steps, nextStep, prevStep, color }) => {
  const inactiveColor = '#ccc';

  return (
    <div className={styles.wrapper}>
      {
        steps.map((label, idx) => {
          const isNextStep = (step - idx === -1);
          const isPrevStep = (step - idx === 1);

          let handler = () => {};

          if (isNextStep) handler = nextStep;
          if (isPrevStep) handler = prevStep;

          const line = idx !== steps.length - 1 && (
            <div
              className={styles.line}
              style={{
                'background-color': idx < step ? color : inactiveColor,
              }}
            />
          );

          return (
            <div className={styles.step} key={idx}>
              <Label label={label} color={idx <= step ? color : inactiveColor} />
              <div
                className={styles.circle}
                onClick={handler}
                style={{'border-color': idx <= step ? color : inactiveColor}}
              />
              { line }
            </div>
          )
        })
      }
    </div>
  );
}
