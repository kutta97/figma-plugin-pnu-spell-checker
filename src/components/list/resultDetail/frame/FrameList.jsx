import * as React from 'react';

import { ResultDetailList } from '../common/ResultDetailList';
import { FrameItem } from './FrameItem';

export const FrameList = (props) => {
  const { data } = props;
  return (
    <ResultDetailList headerTitle={data.title} type="FRAME">
      {data.items.map((item) => (
        <FrameItem key={item.id} data={item.data} />
      ))}
    </ResultDetailList>
  );
};
