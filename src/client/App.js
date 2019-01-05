import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Step from './components/Step';
import StepProgress from './components/StepProgress';

export default () => (
  <div>
    <Switch>
      <Route exact path="/:step?" component={Step} />
    </Switch>
  </div>
);
