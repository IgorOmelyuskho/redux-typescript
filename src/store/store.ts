import { combineReducers, createStore, applyMiddleware } from 'redux';
import signUpReducer from './signUpVendor/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  signUpVendor: signUpReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export type RootState = ReturnType<typeof rootReducer>
