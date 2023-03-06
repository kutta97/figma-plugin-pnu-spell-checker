import React from 'react';
import styled from 'styled-components';

export const Checkbox = (props) => {
  const { onCheck } = props;

  return (
    <CheckboxStyled {...props}>
      <input type="checkbox" onClick={onCheck} />
      <span className="checkmark" />
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  .checkmark {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #aaa;
    border-radius: 3px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='checkbox']:checked + .checkmark {
    background: ${({ theme }) => theme.colors.gray90};
  }

  input[type='checkbox']:checked + .checkmark:after {
    content: '';
    display: block;
    width: 3px;
    height: 6px;
    border: solid ${({ theme }) => theme.colors.gray15};
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
    margin: 2px 0 0 5px;
  }
`;
