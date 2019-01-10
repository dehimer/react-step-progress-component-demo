import { NEXT_STEP, PREV_STEP } from "../constants/steps";

const defaultState = {
  step: 0,
  steps: ['Design', 'Build', 'Launch'],
  color: '#4858d7',
  inactiveColor: '#ccc'
};

export default function rootReducer(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case NEXT_STEP:
    {
      const { steps, step: currentStep } = state;
      const maxStep = steps.length-1;
      const step = Math.min(maxStep, currentStep + 1);

      return { ...state, step };
    }
    case PREV_STEP:
    {
      const { step: currentStep } = state;
      const minStep = 0;
      const step = Math.max(minStep, currentStep - 1);

      return { ...state, step };
    }
    default:
      return state;
  }
}

