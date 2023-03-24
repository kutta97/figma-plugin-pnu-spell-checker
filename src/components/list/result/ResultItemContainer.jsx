import React from 'react';
import styled from 'styled-components';

import { MoreButton } from '@components/buttons/MoreButton';
import { CheckboxText } from '@components/checkbox/CheckboxText';

export const ResultItemContainer = (props) => {
  const { onCheck, onClickMore, children } = props;

  const handleCheck = () => onCheck?.();
  const handleClickMore = () => onClickMore?.();

  return (
    <ResultListItemContainerStyled>
      <CheckboxText className="checkbox" onCheck={handleCheck}>
        {children}
      </CheckboxText>
      <MoreButton className="more" onClick={handleClickMore}>
        자세히
      </MoreButton>
    </ResultListItemContainerStyled>
  );
};

const ResultListItemContainerStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray3};
    .more {
      visibility: visible;
    }
  }

  .checkbox {
    margin-right: 6px;
  }

  .more {
    visibility: hidden;
    margin-left: auto;
  }
`;
