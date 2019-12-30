import * as React from 'react';
import { ISignInProps } from './ISignInProps';
import'./SignIn.scss';

const SignIn: React.SFC<ISignInProps> = (props) => {
  return (
    <div className="signIn">
      <h3>SignIn Stateless Component!</h3>
    </div>
  );
};

export default SignIn;
