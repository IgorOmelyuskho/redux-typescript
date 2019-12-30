import * as React from 'react';
import { ISignUpVendorState } from './ISignUpVendorState';
import {
  ISignUpVendorStateProps,
  ISignUpVendorDispatchProps,
  ISignUpVendorProps
} from './ISignUpVendorProps';
import './SignUpVendor.scss';
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type propsType = ISignUpVendorStateProps & ISignUpVendorDispatchProps & ISignUpVendorProps;

class SignUpVendor extends React.Component<
  propsType,
  ISignUpVendorState
  > {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="signUpVendor">
        <div className="container">

          <div className="row">
            <div className="col-6 offset-3">
              <div className="role">SignUp as Vendor</div>
              <div className={this.props.formValid === true ? 'text-success' : 'text-danger'}>Form is valid: {this.props.formValid.toString()}</div>
              <form>
                <div className="mb-3 form-group">
                  <div>FullName</div>
                  <input className={'form-control ' + (this.props.showFullNameError ? 'is-invalid' : '')} value={this.props.fullName} onChange={this.handleUserInput} type="text" name="fullName" />
                  {this.props.showFullNameError && <div className="invalid-feedback">{this.props.fullNameError}</div>}
                </div>

                <div className="mb-3 form-group">
                  <div>Email</div>
                  <input className={'form-control ' + (this.props.showEmailError ? 'is-invalid' : '')} value={this.props.email} onChange={this.handleUserInput} type="email" name="email" />
                  {this.props.showEmailError && <div className="invalid-feedback">{this.props.emailError}</div>}
                </div>

                <div className="mb-3 form-group">
                  <div>Password</div>
                  <input className={'form-control ' + (this.props.showPasswordError ? 'is-invalid' : '')} value={this.props.password} onChange={this.handleUserInput} type="password" name="password" />
                  {this.props.showPasswordError && <div className="invalid-feedback">{this.props.passwordError}</div>}
                </div>

                <div className="mb-3 form-group">
                  <div>Repeat password</div>
                  <input className={'form-control ' + (this.props.showRePasswordError ? 'is-invalid' : '')} value={this.props.rePassword} onChange={this.handleUserInput} type="password" name="rePassword" />
                  {this.props.showRePasswordError && <div className="invalid-feedback">{this.props.rePasswordError}</div>}
                </div>

                <button disabled={this.props.formValid === false && this.props.submitted === true} className="btn btn-success" type="button" onClick={this.signUp}>Sign up</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'fullName':
        this.props.setFullName(value);
        break;
      case 'email':
        this.props.setEmail(value);
        break;
      case 'password':
        this.props.setPassword(value);
        break;
      case 'rePassword':
        this.props.setRePassword(value);
        break;
      default: break;
    }
    this.validateField(name, value)
  }

  validateField(fieldName, value) {
    let formValid = false;
    let fullNameError = this.props.fullNameError;
    let emailError = this.props.emailError;
    let passwordError = this.props.passwordError;
    let rePasswordError = this.props.rePasswordError;

    switch (fieldName) {
      case 'fullName':
        if (value === "") {
          fullNameError = 'fullName is required';
        } else if (value.length <= 3) {
          fullNameError = 'fullName length must be > 3';
        } else {
          fullNameError = '';
        }
        break;
      case 'email':
        if (value === "") {
          emailError = 'Email is required';
        } else if (!value.match(emailPattern)) {
          emailError = 'Not valid email';
        } else {
          emailError = '';
        }
        break;
      case 'password':
        if (value === "") {
          passwordError = 'Password is required';
        } else if (value.length < 6) {
          passwordError = 'Min length is 6';
        } else {
          passwordError = '';
        }
        if (value !== this.props.rePassword) {
          rePasswordError = 'Passwords not match';
        } else {
          rePasswordError = '';
        }
        break;
      case 'rePassword':
        if (value === "") {
          rePasswordError = 'Repeat password is required';
        } else if (value !== this.props.password) {
          rePasswordError = 'Passwords not match';
        } else {
          rePasswordError = '';
        }
        break;
      default:
        break;
    }

    if (
      fullNameError.length === 0 &&
      emailError.length === 0 &&
      passwordError.length === 0 &&
      rePasswordError.length === 0
    ) {
      formValid = true;
    }

    this.props.setFormValid(formValid);
    this.props.setFullNameError(fullNameError);
    this.props.setEmailError(emailError);
    this.props.setPasswordError(passwordError);
    this.props.setRePasswordError(rePasswordError)
  }

  signUp = () => {
    this.props.setSubmitted(true);
    if (this.props.formValid === true) {
      this.props.signUp();
    }
  }
  
}

export default SignUpVendor;
