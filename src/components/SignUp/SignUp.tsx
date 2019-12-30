import * as React from 'react';
import { ISignUpProps } from './ISignUpProps';
import'./SignUp.scss';
import SignUpVendor from '../SignUpVendor/SignUpVendorContainer';
import SignUpInvestor from '../SignUpInvestor/SignUpInvestorContainer';

const SignUp: React.SFC<ISignUpProps> = (props) => {
  const [userRole, setUserRole] = React.useState('Vendor');
  
  const asVendor = () => {
    setUserRole('Vendor');
  }

  const asInvestor = () => {
    setUserRole('Investor');
  }

  let signUpComponent;
  if (userRole === "Vendor") {
    signUpComponent = <SignUpVendor />;
  }
  if (userRole === "Investor") {
    signUpComponent = <SignUpInvestor />;
  }

  return (
    <div className="signUp">
      <div className="text-center">
        <button onClick={asVendor} className="btn btn-primary select-role">Sign up as Vendor</button>
        <button /* disabled */ onClick={asInvestor} className="btn btn-primary select-role">Sign up as Investor</button>
      </div >

      {signUpComponent}
    </div>
  );
};

export default SignUp;
