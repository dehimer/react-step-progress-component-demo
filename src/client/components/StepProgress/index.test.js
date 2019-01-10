import React from 'react';
import { mount } from 'enzyme';
import StepProgress from './index';
import Circle from './components/Circle'
import Line from './components/Line'
import Label from './components/Label'

test('StepProgress renders three Circles, Labels and Lines', () => {
  const step = 1;
  const steps = ['One', 'Two', 'Three'];
  const wrapper = mount(
    <StepProgress step={step} steps={steps}/>
  );

  expect(wrapper.find(Circle)).toHaveLength(steps.length);
  expect(wrapper.find(Label)).toHaveLength(steps.length);
  expect(wrapper.find(Line)).toHaveLength(steps.length);
});

test('StepProgress has empty last Line', () => {
  const step = 1;
  const steps = ['One', 'Two', 'Three'];
  const wrapper = mount(
    <StepProgress step={step} steps={steps}/>
  );

  expect(wrapper.find(Line).last().html()).toBeNull()
});

test('StepProgress switch from first to second should work', () => {
  let step = 0;
  const steps = ['One', 'Two', 'Three'];
  const color = 'red';
  const inactiveColor = 'grey';

  const wrapper = mount(
    <StepProgress
      step={step}
      steps={steps}
      color={color}
      inactiveColor={inactiveColor}
      nextStep={() => step = step + 1}
      prevStep={() => step = step - 1}
    />
  );
  expect(step).toBe(0);
  expect(wrapper.find(Circle).at(1).childAt(0).prop('style')).toHaveProperty('borderColor', inactiveColor);

  wrapper.find(Circle).at(1).simulate('click');
  expect(step).toBe(1);

  const wrapperAfterSwitch = mount(
    <StepProgress
      step={step}
      steps={steps}
      color={color}
      inactiveColor={inactiveColor}
      nextStep={() => step = step + 1}
      prevStep={() => step = step - 1}
    />
  );

  expect(wrapperAfterSwitch.find(Circle).at(1).childAt(0).prop('style')).toHaveProperty('borderColor', color);
});

test('StepProgress switch from first to last should not work', () => {
  let step = 0;
  const steps = ['One', 'Two', 'Three'];
  const color = 'red';
  const inactiveColor = 'grey';

  const wrapper = mount(
    <StepProgress
      step={step}
      steps={steps}
      color={color}
      inactiveColor={inactiveColor}
      nextStep={() => step = step + 1}
      prevStep={() => step = step - 1}
    />
  );
  expect(step).toBe(0);
  expect(wrapper.find(Circle).at(1).childAt(0).prop('style')).toHaveProperty('borderColor', inactiveColor);

  wrapper.find(Circle).last().simulate('click');
  expect(step).toBe(0);
});
