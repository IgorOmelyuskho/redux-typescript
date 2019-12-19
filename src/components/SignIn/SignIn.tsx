import * as React from 'react';
import { ISignInProps } from './ISignInProps';
import styles from './SignIn.module.scss';

const SignIn: React.SFC<ISignInProps> = (props) => {
  return (
    <div className={`${styles.signIn}`}>
      <h3>SignIn Stateless Component!</h3>
    </div>
  );
};

export default SignIn;
