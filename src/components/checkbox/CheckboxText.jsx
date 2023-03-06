import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '@components/checkbox/Checkbox';

export const CheckboxText = (props) => {
  const { onCheck, children } = props;

  return (
    <CheckboxStyled {...props}>
      <Checkbox className="checkbox" onCheck={onCheck} />
      {children}
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.div`
  display: flex;
  align-items: center;

  .checkbox {
    margin-right: 4px;
  }
`;
