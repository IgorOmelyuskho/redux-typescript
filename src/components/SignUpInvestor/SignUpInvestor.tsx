import * as React from 'react';
import { ISignUpInvestorState } from './ISignUpInvestorState';
import {
  ISignUpInvestorStateProps,
  ISignUpInvestorDispatchProps,
  ISignUpInvestorProps
} from './ISignUpInvestorProps';
import './SignUpInvestor.scss';

export type propsType = ISignUpInvestorStateProps & ISignUpInvestorDispatchProps & ISignUpInvestorProps;

class SignUpInvestor extends React.Component<
  propsType,
  ISignUpInvestorState
  > {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="signUpInvestor">
        <h3>SignUpInvestor Component!</h3>
      </div>
    );
  }
}

export default SignUpInvestor;
