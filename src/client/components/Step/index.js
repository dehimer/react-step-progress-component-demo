import React from 'react';
import { connect } from 'react-redux'
import { nextStep, prevStep } from "../../actions/steps";
// import StepProgress from 'react-step-progress-component';
import StepProgress from '../StepProgress';

const Step = ({ step, steps, nextStep, prevStep }) => (
  <div>
    <div>step: {step}</div>
    <StepProgress
      step={step}
      steps={steps}
      nextStep={nextStep}
      prevStep={prevStep}
    />
    <div onClick={prevStep}>prev</div>
    <div onClick={nextStep}>next</div>
  </div>
);

const mapStateToProps = ({ step, steps }) => ({ step, steps });

const mapDispatchToProps = {
  nextStep, prevStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Step);
