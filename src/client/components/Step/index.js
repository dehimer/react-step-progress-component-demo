import React from 'react';
import { connect } from 'react-redux'
import { nextStep, prevStep } from "../../actions/steps";
import StepProgress from 'react-step-progress-component';

const Step = ({ step, nextStep, prevStep }) => (
  <div>
    <div>step: {step}</div>
    <StepProgress/>
    <div onClick={prevStep}>prev</div>
    <div onClick={nextStep}>next</div>
  </div>
);

const mapStateToProps = ({ step, steps }) => ({ step, steps });

const mapDispatchToProps = {
  nextStep, prevStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Step);
