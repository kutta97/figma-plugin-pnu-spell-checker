import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';
import { CheckboxText } from '@components/checkbox/CheckboxText';

export const FilterOverlay = (props) => {
  return (
    <FilterOverlayStyled props={props}>
      <CheckboxText className="checkboxText">
        <span>맞춤법</span>
      </CheckboxText>
      <CheckboxText className="checkboxText">
        <span>띄어쓰기</span>
      </CheckboxText>
      <Button className="applyButton">적용</Button>
    </FilterOverlayStyled>
  );
};

const FilterOverlayStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 16px;
  top: ${({ props }) => props.y};
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px 0 #0000001a;

  .checkboxText {
    margin-bottom: 10px;

    span {
      font-size: 13px;
      line-height: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray90};
      padding-top: 2px;
    }
  }

  .applyButton {
    width: 110px;
    font-size: 13px;
    line-height: 16px;
    padding: 6px 12px;
    margin-top: 6px;
  }
`;
