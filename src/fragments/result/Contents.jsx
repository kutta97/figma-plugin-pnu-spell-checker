import React from 'react';

import { EmptyResult } from '@fragments/result/Empty';
import { Results } from '@fragments/result/Results';

export const ResultContents = (props) => {
  const { resultList } = props;

  return resultList.length ? (
    <Results resultList={resultList} />
  ) : (
    <EmptyResult />
  );
};
