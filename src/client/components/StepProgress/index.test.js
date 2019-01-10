import React from 'react';
import { mount } from 'enzyme';
import StepProgress from './index';

test('TodoComponent renders the text inside it', () => {
  const step = 1;
  const steps = ['One', 'Two', 'Three'];
  const wrapper = mount(
    <StepProgress step={step} steps={steps}/>
  );
  console.log(wrapper);
  // const p = wrapper.find('.toggle-todo');
  // expect(p.text()).toBe('Buy Milk');
});
