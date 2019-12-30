import * as React from 'react';
import { ISharedHeaderProps } from './ISharedHeaderProps';
import'./SharedHeader.scss';
import Header from '../Header/Header';

const SharedHeader: React.SFC<ISharedHeaderProps> = (props) => {
  return (
    <div className="sharedHeader">
      <Header></Header>
    </div>
  );
};

export default SharedHeader;
