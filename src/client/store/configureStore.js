import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore() {
  const store = compose(createStore)(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers/index').rootReducer);
    });
  }

  return store;
}
