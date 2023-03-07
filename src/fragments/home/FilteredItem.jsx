import React from 'react';
import styled from 'styled-components';

import CheckIcon from '@assets/icons/check/ic_check.svg';

export const FilteredItem = (props) => {
  const { filteredItems } = props;
  return (
    <FilteredItemStyled {...props}>
      <h3>선택된 필터 항목</h3>
      <section className="filterList">
        {filteredItems.map((item) => (
          <article className="filteredItem" key={item.id}>
            <CheckIcon className="checkIcon" width="18px" height="18px" />
            <span>{item.text}</span>
          </article>
        ))}
      </section>
    </FilteredItemStyled>
  );
};

const FilteredItemStyled = styled.div`
  width: 100%;
  height: 63px;
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray50};
    margin-bottom: 8px;
  }

  .filterList {
    display: flex;
    margin-bottom: 20px;
    gap: 8px;
  }

  .filteredItem {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray70};

    .checkIcon {
      margin-right: 2px;
    }

    span {
      margin-top: 1px;
    }
  }
`;
