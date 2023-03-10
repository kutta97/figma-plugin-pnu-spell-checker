import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';
import { CheckboxText } from '@components/checkbox/CheckboxText';

import { Font13W400 } from '@assets/styles/fonts';

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
  border-radius: 4px;
  z-index: 1;

  .checkboxText {
    margin-bottom: 10px;

    span {
      ${Font13W400};
      line-height: 16px;
      color: ${({ theme }) => theme.colors.gray90};
      padding-top: 2px;
    }
  }

  .applyButton {
    width: 110px;
    ${Font13W400};
    line-height: 16px;
    padding: 6px 12px;
    margin-top: 6px;
  }
`;
