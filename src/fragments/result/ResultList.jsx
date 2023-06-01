import React from 'react';
import styled from 'styled-components';

import { ResultListItem } from '@components/list/result/ResultListItem';

import { useResultListVM } from '@fragments/result/resultListVM';

export const ResultList = (props) => {
  const { resultList } = props;
  const { handleCheck } = useResultListVM();

  return (
    <ResultListStyled>
      {resultList.map((item) => (
        <ResultListItem
          key={item.id}
          result={item.data}
          onCheck={handleCheck(item.id)}
          checked={item.checked}
        />
      ))}
    </ResultListStyled>
  );
};

const ResultListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
