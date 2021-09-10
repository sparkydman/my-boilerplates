import { FOO } from './constants';

const initialState = {
  foo: '',
};

export default function uiReducers(state = initialState, action) {
  switch (action.type) {
    case FOO:
      return {
        ...state,
        foo: 'hey foo',
      };

    default:
      return state;
  }
}
