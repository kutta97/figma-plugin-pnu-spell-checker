import React from 'react';
import styled from 'styled-components';

export const Checkbox = (props) => {
  const { onCheck } = props;

  return (
    <CheckboxStyled type="checkbox" {...props}>
      <input type="checkbox" onClick={onCheck} />
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.div`
  input {
    width: 16px;
    height: 16px;
  }
`;
