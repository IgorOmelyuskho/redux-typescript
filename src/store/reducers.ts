import { combineReducers, createStore } from 'redux';
import signUpReducer from './signUpVendor/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer
})

export const Store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>
