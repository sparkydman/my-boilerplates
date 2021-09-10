import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = rootReducer;

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.ui) nextState.ui = state.ui;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const initStore = () =>
  createStore(reducer, {}, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore, { debug: true });
