import React from 'react';
import styled from 'styled-components';

import { ResultListItem } from '@components/list/result/ResultListItem';

import { useResultListVM } from '@fragments/result/resultListVM';

export const ResultList = (props) => {
  const { resultList } = props;
  const { handleCheck, handleClickMore } = useResultListVM();

  return (
    <ResultListStyled>
      {resultList.map((item) => (
        <ResultListItem
          key={item.id}
          data={item.data}
          onCheck={handleCheck(item.id)}
          onClickMore={handleClickMore(item.id)}
        />
      ))}
    </ResultListStyled>
  );
};

const ResultListStyled = styled.section``;
