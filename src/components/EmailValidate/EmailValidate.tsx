import * as React from 'react';
import { IEmailValidateProps } from './IEmailValidateProps';
import styles from './EmailValidate.module.scss';

const EmailValidate: React.SFC<IEmailValidateProps> = (props) => {
  return (
    <div className={`${styles.emailValidate}`}>
      <h3>EmailValidate Stateless Component!</h3>
    </div>
  );
};

export default EmailValidate;
