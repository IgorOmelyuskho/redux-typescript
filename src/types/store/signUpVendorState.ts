export interface SignUpVendorState {
  formValid: boolean,
  submitted: boolean,
  fullName: string,
  fullNameError: string,
  email: string,
  emailError: string,
  password: string,
  passwordError: string,
  rePassword: string,
  rePasswordError: string,
  loaderVisible: boolean
}