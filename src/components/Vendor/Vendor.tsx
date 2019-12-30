import * as React from 'react';
import { IVendorProps } from './IVendorProps';
import './Vendor.scss';

const Vendor: React.SFC<IVendorProps> = (props) => {
  return (
    <div className="vendor">
      <h3>Vendor Stateless Component!</h3>
    </div>
  );
};

export default Vendor;
