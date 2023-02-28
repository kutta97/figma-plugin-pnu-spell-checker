import * as React from 'react';

import { ResultDetailList } from '../common/ResultDetailList';
import { ResultDetailListItem } from '../common/ResultDetailListItem';

export const TextItem = (props) => {
  const { data } = props;

  return (
    <ResultDetailList headerTitle={data.title} type="TEXT">
      <ResultDetailListItem>{data.content}</ResultDetailListItem>
    </ResultDetailList>
  );
};
