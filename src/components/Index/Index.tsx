import * as React from 'react';
import { IIndexProps } from './IIndexProps';
import styles from './Index.module.scss';

const Index: React.SFC<IIndexProps> = (props) => {
  return (
    <div className={`${styles.index}`}>
      <h3 className="test-class">Index Stateless Component!</h3>
    </div>
  );
};

export default Index;
