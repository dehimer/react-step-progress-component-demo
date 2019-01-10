import React from 'react'
import Line from './components/Line'
import Circle from './components/Circle'
import Label from './components/Label'

import styles from './index.css'

export default ({ step, steps, nextStep, prevStep, color, inactiveColor }) => {
  return (
    <div className={styles.wrapper}>
      {
        steps.map((label, idx) => {
          const isLastStep = idx === steps.length - 1;
          const isNextStep = (step - idx === -1);
          const isPrevStep = (step - idx === 1);

          let handler = () => {};

          if (isNextStep) handler = nextStep;
          if (isPrevStep) handler = prevStep;

          return (
            <div key={idx} className={isLastStep ? styles.laststep : styles.step}>
              <Label label={label} color={idx <= step ? color : inactiveColor} />
              <Circle onClick={handler} color={idx <= step ? color : inactiveColor}/>
              <Line isLastStep={isLastStep} color={idx < step ? color : inactiveColor}/>
            </div>
          )
        })
      }
    </div>
  );
}
