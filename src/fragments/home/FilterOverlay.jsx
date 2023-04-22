import React from 'react';
import styled from 'styled-components';

import { FILTER } from '@consts/index';

import { Button } from '@components/buttons/Button';
import { CheckboxText } from '@components/checkbox/CheckboxText';

import { Font13W400 } from '@assets/styles/fonts';

import { useFilterVM } from './filterVM';

export const FilterOverlay = (props) => {
  const { filterCheckedState, onFilterCheck, applyFilter } = useFilterVM();

  return (
    <FilterOverlayStyled props={props}>
      <CheckboxText
        className="checkboxText"
        onCheck={onFilterCheck(FILTER.SPELL.id)}
        checked={filterCheckedState(FILTER.SPELL.id)}
      >
        <span>맞춤법</span>
      </CheckboxText>
      <CheckboxText
        className="checkboxText"
        onCheck={onFilterCheck(FILTER.SPACE.id)}
        checked={filterCheckedState(FILTER.SPACE.id)}
      >
        <span>띄어쓰기</span>
      </CheckboxText>
      <Button className="applyButton" onClick={applyFilter}>
        적용
      </Button>
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
    cursor: pointer;
  }
`;
