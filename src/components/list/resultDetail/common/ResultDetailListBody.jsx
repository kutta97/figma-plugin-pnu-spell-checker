import React from 'react';
import styled from 'styled-components';

export const ResultDetailListBody = (props) => {
  const { children } = props;
  return <ListBodyStyled>{children}</ListBodyStyled>;
};

const ListBodyStyled = styled.article`
  width: 100%;
  padding-bottom: 12px;
  border-top: 2px solid ${({ theme }) => theme.colors.white};
`;
