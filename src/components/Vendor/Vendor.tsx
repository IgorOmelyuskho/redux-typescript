import * as React from 'react';
import { IVendorProps } from './IVendorProps';
import styles from './Vendor.module.scss';

const Vendor: React.SFC<IVendorProps> = (props) => {
  return (
    <div className={`${styles.vendor}`}>
      <h3>Vendor Stateless Component!</h3>
    </div>
  );
};

export default Vendor;
