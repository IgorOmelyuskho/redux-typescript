import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from "react-redux";
import SignUpVendor from "./SignUpVendor";
import { ISignUpVendorProps, ISignUpVendorDispatchProps, ISignUpVendorStateProps } from "./ISignUpVendorProps";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { SignUpVendorState } from "../../types/store/signUpVendorState";

const mapStateToProps: MapStateToPropsParam<
  ISignUpVendorStateProps,
  ISignUpVendorProps,
  SignUpVendorState
> = (state: SignUpVendorState) => {
  return {};
};

const mapDispatchToProps: MapDispatchToPropsParam<ISignUpVendorDispatchProps, ISignUpVendorProps> =
  (dispatch: ThunkDispatch<SignUpVendorState, undefined, AnyAction>) => ({
    // dispatch actions
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpVendor);
