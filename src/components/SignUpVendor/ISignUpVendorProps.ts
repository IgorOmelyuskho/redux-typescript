export interface ISignUpVendorProps {}

export interface ISignUpVendorStateProps {
  showFullNameError: boolean,
  showEmailError: boolean,
  showPasswordError: boolean,
  showRePasswordError: boolean,

  fullNameError: string,
  emailError: string,
  passwordError: string,
  rePasswordError: string,

  fullName: string,
  email: string,
  password: string,
  rePassword: string,

  formValid: boolean
  submitted: boolean
}

export interface ISignUpVendorDispatchProps {
  setFullNameError: Function,
  setEmailError: Function,
  setPasswordError: Function,
  setRePasswordError: Function,

  setFullName: Function,
  setEmail: Function,
  setPassword: Function,
  setRePassword: Function,

  setFormValid: Function,
  setSubmitted: Function,

  // thunks
  signUp: Function
}

type PropsType = ISignUpVendorProps & ISignUpVendorStateProps & ISignUpVendorDispatchProps;

export default PropsType;
