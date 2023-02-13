import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import TextIcon from '@assets/icons/list/ic_text_inactive.svg';
import { Font13W500 } from '@assets/styles/fonts';

import { ListHeader } from './ListHeader';
import { ListItem } from './ListItem';

export const List = ({ type, title, onFocus, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleFocus = () => onFocus();

  const renderList = () => {
    switch (type) {
      case 'FRAME': {
        return items.map((item) => (
          <li className="li-frame" key={item.id}>
            <div className="header">
              <span className="icon">
                <TextIcon width={18} height={18} />
              </span>
              <span className="title">
                <p>{title}</p>
              </span>
            </div>
            <div className="content">
              <ListItem>{item.content}</ListItem>
            </div>
          </li>
        ));
      }
      case 'TEXT':
      default: {
        return (
          <li className="li-text">
            <ListItem>{items[0].content}</ListItem>
          </li>
        );
      }
    }
  };

  return (
    <ListStyled>
      <ListHeader
        type={type}
        title={title}
        isOpen={isOpen}
        onToggle={handleToggle}
        onFocus={handleFocus}
      />
      {isOpen && <ListContent>{renderList()}</ListContent>}
    </ListStyled>
  );
};

const ListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray70};
`;

const ListContent = styled.ul`
  width: 100%;
  padding-bottom: 12px;
  border-top: 2px solid ${({ theme }) => theme.colors.white};

  .li-frame {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 0 0 16px;
    gap: 6px;

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      gap: 4px;

      .title {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;

        p {
          ${Font13W500}
          margin-right: 2px;
        }
      }
    }
    .content {
      padding: 0 16px;
    }
  }

  .li-text {
    padding: 0 16px;
  }
`;
