import { NEXT_STEP, PREV_STEP } from '../constants/steps'

export function prevStep() {
  return {
    type: PREV_STEP
  }
}

export function nextStep() {
  return {
    type: NEXT_STEP
  }
}
