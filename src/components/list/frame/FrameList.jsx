import * as React from 'react';
import styled from 'styled-components';

import { ListHeader } from '../ListHeader';
import { FrameItem } from './FrameItem';

export const FrameList = (props) => {
  const { onFocus, data } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleFocus = () => onFocus();

  return (
    <FrameListStyled>
      <ListHeader
        type="FRAME"
        title={data.title}
        isOpen={isOpen}
        onToggle={handleToggle}
        onFocus={handleFocus}
      />
      {isOpen && (
        <ListContent>
          {data.items.map((item) => (
            <FrameItem key={item.id} data={item.data} />
          ))}
        </ListContent>
      )}
    </FrameListStyled>
  );
};

const FrameListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray70};
`;

const ListContent = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-top: 2px solid ${({ theme }) => theme.colors.white};
`;
