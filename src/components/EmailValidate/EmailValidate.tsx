import * as React from 'react';
import { IEmailValidateProps } from './IEmailValidateProps';
import'./EmailValidate.scss';

const EmailValidate: React.SFC<IEmailValidateProps> = (props) => {
  return (
    <div className="emailValidate">
      <h3>EmailValidate Stateless Component!</h3>
    </div>
  );
};

export default EmailValidate;
