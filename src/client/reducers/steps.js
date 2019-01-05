const defaultState = {
  step: 0,
  steps: ['Design', 'Build', 'Launch']
};

export default function reducer(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case 'NEXTSTEP':
      {
        const { steps, step: currentStep } = state;
        const maxStep = steps.length;
        const step = Math.min(maxStep, currentStep + 1);

        return { ...state, currentStep: step };
      }
    case 'PREVSTEP':
      {
        const { step: currentStep } = state;
        const minStep = 0;
        const step = Math.max(minStep, currentStep - 1);

        return { ...state, currentStep: step };
      }
    default:
      return state;
  }
}
