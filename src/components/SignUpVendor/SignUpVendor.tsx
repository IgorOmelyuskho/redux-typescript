import * as React from 'react';
import { ISignUpVendorState } from './ISignUpVendorState';
import {
  ISignUpVendorStateProps,
  ISignUpVendorDispatchProps,
  ISignUpVendorProps
} from './ISignUpVendorProps';
import styles from './SignUpVendor.module.scss';

export type propsType = ISignUpVendorStateProps & ISignUpVendorDispatchProps & ISignUpVendorProps;

class SignUpVendor extends React.Component<
  propsType,
  ISignUpVendorState
  > {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(styles);
  }

  public render() {
    return (
      <div className={`${styles.signUpVendor}`}>
        <h3 className="header">SignUpVendor Component!</h3>
      </div>
    );
  }
}

export default SignUpVendor;
