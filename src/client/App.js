import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Step from './components/Step';

export default () => (
  <div>
    <Switch>
      <Route exact path="/:step?" component={Step} />
    </Switch>
  </div>
);
