import React from 'react';

import { EmptyResult } from '@fragments/result/Empty';
import { Results } from '@fragments/result/Results';

export const ResultContents = (props) => {
  const { isResultEmpty } = props;

  return isResultEmpty ? <EmptyResult /> : <Results />;
};
