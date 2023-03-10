import React, { useState } from 'react';
import styled from 'styled-components';

import CheckedIcon from '@assets/icons/check/ic_checkbox_checked.svg';
import UncheckedIcon from '@assets/icons/check/ic_checkbox_unchecked.svg';

export const Checkbox = (props) => {
  const { checked, onCheck } = props;

  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onCheck?.(e.target.checked);
  };

  return (
    <CheckboxStyled {...props}>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {isChecked ? (
        <CheckedIcon width={20} height={20} />
      ) : (
        <UncheckedIcon width={20} height={20} />
      )}
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  position: absolute;
  appearance: none;
  width: 20px;
  height: 20px;
`;
