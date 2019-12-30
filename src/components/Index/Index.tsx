import * as React from 'react';
import { IIndexProps } from './IIndexProps';
import './Index.scss';

const Index: React.SFC<IIndexProps> = (props) => {
  return (
    <div className="index">
      <h3 className="test-class">Index Stateless Component!</h3>
    </div>
  );
};

export default Index;
