import {
  SIGN_UP_VENDOR_REDUX_UPDATE
} from './actions';
import { SignUpVendorState } from '../../types/store/signUpVendorState';


const defaultState: SignUpVendorState = {
  formValid: false,
  submitted: false,
  fullName: "",
  fullNameError: 'fullName is required',
  email: "",
  emailError: 'Email is required',
  password: "",
  passwordError: 'Password is required',
  rePassword: "",
  rePasswordError: 'Repeat password is required',
}

const signUpReducer = (state: SignUpVendorState = defaultState, action): SignUpVendorState => {
  switch (action.type) {
    case SIGN_UP_VENDOR_REDUX_UPDATE:
      return {
        ...state,
        ...action.payload
      }

    default: return state;
  }
}

export default signUpReducer;
