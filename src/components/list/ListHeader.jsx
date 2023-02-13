import * as React from 'react';
import styled from 'styled-components';

import CollapseIcon from '@assets/icons/list/ic_collapse.svg';
import Target from '@assets/icons/list/ic_d.svg';
import ExpandIcon from '@assets/icons/list/ic_expand.svg';
import FrameIcon from '@assets/icons/list/ic_frame_active.svg';
import TextIcon from '@assets/icons/list/ic_text_active.svg';
import { Font14W600 } from '@assets/styles/fonts';

export const ListHeader = ({ type, title, isOpen, onToggle, onFocus }) => {
  const handleToggle = () => onToggle();
  const handleFocus = () => onFocus();

  const renderIcon = () => {
    switch (type) {
      case 'FRAME': {
        return <FrameIcon width={20} height={20} />;
      }
      case 'TEXT':
      default: {
        return <TextIcon width={20} height={20} />;
      }
    }
  };

  return (
    <ListHeaderStyled>
      <span className="icon">{renderIcon()}</span>
      <span className="title">
        <p>{title}</p>
        <span className="target">
          <Target width={18} height={18} onClick={handleFocus} />
        </span>
      </span>
      <button type="button" onClick={handleToggle}>
        {isOpen ? <CollapseIcon /> : <ExpandIcon />}
      </button>
    </ListHeaderStyled>
  );
};

const ListHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 4px;

  .title {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    p {
      ${Font14W600}
      margin-right: 2px;
    }
  }
`;
