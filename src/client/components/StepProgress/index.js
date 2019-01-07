import React from 'react'

export default ({ step, steps, nextStep, prevStep }) => (
  <div>
    <div>Step Progress</div>
    <div>
      {
        steps.map((label, idx) => {
          console.log(`idx: ${idx}`);
          const isActiveStep = (idx === step);

          const isNextStep = (step - idx === -1);
          const isPrevStep = (step - idx === 1);
          console.log(`isNextStep: ${isNextStep}`);
          console.log(`isPrevStep: ${isPrevStep}`);

          let handler = () => {};

          if (isNextStep) handler = nextStep;
          if (isPrevStep) handler = prevStep;

          return (
            <span key={idx} onClick={handler}>
              { isActiveStep ? `[${label}]` : `(${label})` }
            </span>
          )
        })
      }
    </div>
  </div>
);
