import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from "react-redux";
import SignUpInvestor from "./SignUpInvestor";
import { ISignUpInvestorProps, ISignUpInvestorDispatchProps, ISignUpInvestorStateProps } from "./ISignUpInvestorProps";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { SignUpInvestorState } from "../../types/store/signUpInvestorState";

const mapStateToProps: MapStateToPropsParam<
  ISignUpInvestorStateProps,
  ISignUpInvestorProps,
  SignUpInvestorState
> = (state: SignUpInvestorState) => {
  return {};
};

const mapDispatchToProps: MapDispatchToPropsParam<ISignUpInvestorDispatchProps, ISignUpInvestorProps> =
  (dispatch: ThunkDispatch<SignUpInvestorState, undefined, AnyAction>) => ({
    // dispatch actions
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpInvestor);
