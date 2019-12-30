import {
  SIGN_UP_VENDOR_SET_FORM_VALID,
  SIGN_UP_VENDOR_SET_SUBMITTED,
  SIGN_UP_VENDOR_SET_FULL_NAME,
  SIGN_UP_VENDOR_SET_FULL_NAME_ERROR,
  SIGN_UP_VENDOR_SET_EMAIL,
  SIGN_UP_VENDOR_SET_EMAIL_ERROR,
  SIGN_UP_VENDOR_SET_PASSWORD,
  SIGN_UP_VENDOR_SET_PASSWORD_ERROR,
  SIGN_UP_VENDOR_SET_RE_PASSWORD,
  SIGN_UP_VENDOR_SET_RE_PASSWORD_ERROR,
  SignUpVendorActions,
  SIGN_UP_VENDOR_SET_LOADER_VISIBLE
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
  loaderVisible: false,
}

const signUpReducer = (state: SignUpVendorState = defaultState, action: SignUpVendorActions): SignUpVendorState => {
  switch (action.type) {
    case SIGN_UP_VENDOR_SET_FORM_VALID:
      return {
        ...state,
        formValid: action.payload as boolean
      }
    case SIGN_UP_VENDOR_SET_SUBMITTED:
      return {
        ...state,
        submitted: action.payload as boolean
      }
    case SIGN_UP_VENDOR_SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_FULL_NAME_ERROR:
      return {
        ...state,
        fullNameError: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_EMAIL:
      return {
        ...state,
        email: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_PASSWORD:
      return {
        ...state,
        password: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_RE_PASSWORD:
      return {
        ...state,
        rePassword: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_RE_PASSWORD_ERROR:
      return {
        ...state,
        rePasswordError: action.payload as string
      }
    case SIGN_UP_VENDOR_SET_LOADER_VISIBLE:
      return {
        ...state,
        loaderVisible: action.payload as boolean
      }
    default: return state;
  }
}

export default signUpReducer;
