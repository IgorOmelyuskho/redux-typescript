import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from "react-redux";
import SignUpVendor from "./SignUpVendor";
import { ISignUpVendorProps, ISignUpVendorDispatchProps, ISignUpVendorStateProps } from "./ISignUpVendorProps";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import PropsType from "./ISignUpVendorProps";
import { RootState } from "../../store/store";
import { SignUpVendorState } from "../../types/store/signUpVendorState";
import { SetFormValid, SetSubmitted, SetFullName, SetFullNameError, SetEmail, SetEmailError, SetPassword, SetPasswordError, SetRePassword, SetRePasswordError, signUpAsVendor } from "../../store/signUpVendor/actions";
import { VendorDto } from "../../types/vendorDto";

const mapStateToProps: MapStateToPropsParam<
  ISignUpVendorStateProps,
  ISignUpVendorProps,
  RootState
> = (state: RootState) => {
  const st: SignUpVendorState = state.signUpVendor;

  return {
    showFullNameError: st.fullNameError !== '' && st.submitted,
    showEmailError: st.emailError !== '' && st.submitted,
    showPasswordError: st.passwordError !== '' && st.submitted,
    showRePasswordError: st.rePasswordError !== '' && st.submitted,

    fullNameError: st.fullNameError,
    emailError: st.emailError,
    passwordError: st.passwordError,
    rePasswordError: st.rePasswordError,

    fullName: st.fullName,
    email: st.email,
    password: st.password,
    rePassword: st.rePassword,

    formValid: st.formValid,
    submitted: st.submitted
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<ISignUpVendorDispatchProps, ISignUpVendorProps> =
  (dispatch: ThunkDispatch<RootState, undefined, AnyAction>): ISignUpVendorDispatchProps => ({
    setFormValid: (data: boolean) => dispatch(SetFormValid(data)),
    setSubmitted: (data: boolean) => dispatch(SetSubmitted(data)),
    setFullName: (data: string) => dispatch(SetFullName(data)),
    setFullNameError: (data: string) => dispatch(SetFullNameError(data)),
    setEmail: (data: string) => dispatch(SetEmail(data)),
    setEmailError: (data: string) => dispatch(SetEmailError(data)),
    setPassword: (data: string) => dispatch(SetPassword(data)),
    setPasswordError: (data: string) => dispatch(SetPasswordError(data)),
    setRePassword: (data: string) => dispatch(SetRePassword(data)),
    setRePasswordError: (data: string) => dispatch(SetRePasswordError(data)),

    // thunks
    signUp: () => dispatch(signUpAsVendor())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpVendor);


