import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '_reducers';

export default (history, initialState) => {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  const composeEnhancers =
    (__DEV__ &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      try {
        const nextReducer = require('../reducers').default;
        store.replaceReducer(nextReducer);
      } catch (error) {
        console.error(`Reducer hot reloading error ${error}`);
      }
    });
  }

  return store;
};
