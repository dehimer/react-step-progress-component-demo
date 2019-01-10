import React from 'react';
import { connect } from 'react-redux'
import { nextStep, prevStep } from "../../actions/steps";
// import StepProgress from 'react-step-progress-component';
import StepProgress from '../StepProgress';
import styles from './index.css'
import styled, { css } from 'styled-components'

const Step = ({ step, steps, nextStep, prevStep, theme }) => {
  const { color } = theme;
  const SwitchButton = styled.div`
    color: white;
    background-color: ${color};
    border-radius: 5px;
    min-width: 100px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    ${props =>
      props.disabled &&
      css`
        background: #ccc;
    `};
  `;

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div>Step Index: {step}</div>
        <StepProgress
          step={step}
          steps={steps}
          nextStep={nextStep}
          prevStep={prevStep}
          theme={theme}
        />
        <div className={styles.controls}>
          <SwitchButton onClick={prevStep} disabled={step === 0}>Prev</SwitchButton>
          <SwitchButton onClick={nextStep} disabled={step === steps.length - 1}>Next</SwitchButton>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ step, steps, theme }) => ({ step, steps, theme });

const mapDispatchToProps = {
  nextStep, prevStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Step);
