import * as React from 'react';
import { ISharedHeaderProps } from './ISharedHeaderProps';
import styles from './SharedHeader.module.scss';
import Header from '../Header/Header';

const SharedHeader: React.SFC<ISharedHeaderProps> = (props) => {
  return (
    <div className={`${styles.sharedHeader}`}>
      <Header></Header>
    </div>
  );
};

export default SharedHeader;
