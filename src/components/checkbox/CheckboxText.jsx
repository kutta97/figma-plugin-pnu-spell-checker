import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '@components/checkbox/Checkbox';

export const CheckboxText = (props) => {
  const { onCheck, children } = props;

  return (
    <CheckboxStyled {...props}>
      <Checkbox onCheck={onCheck} />
      {children}
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray90};

  input {
    margin-right: 4px;
  }
`;
