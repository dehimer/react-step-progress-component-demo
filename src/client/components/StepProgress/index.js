import React from 'react'
import Line from './components/Line'
import Circle from './components/Circle'
import Label from './components/Label'

import styles from './index.css'

export default ({ step, steps, nextStep, prevStep, theme }) => {
  const { color } = theme;

  return (
    <div className={styles.wrapper}>
      {
        steps.map((label, idx) => {
          const segmentTheme = {
            ...theme,
            color: idx <= step ? color : '#CCC'
          };


          const isNextStep = (step - idx === -1);
          const isPrevStep = (step - idx === 1);

          let handler = () => {};

          if (isNextStep) handler = nextStep;
          if (isPrevStep) handler = prevStep;

          return (
            <div key={idx}>
              <Label label={label} theme={segmentTheme} />
              <Circle onClick={handler} theme={segmentTheme} />
              <Line key={`line-${idx}`} theme={segmentTheme} />
            </div>
          )
        })
      }
    </div>
  );
}
