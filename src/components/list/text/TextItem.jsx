import * as React from 'react';
import styled from 'styled-components';

import { ListHeader } from '../ListHeader';
import { ListItem } from '../ListItem';

export const TextItem = (props) => {
  const { onFocus, data } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleFocus = () => onFocus();

  return (
    <TextItemStyled>
      <ListHeader
        type="TEXT"
        title={data.title}
        isOpen={isOpen}
        onToggle={handleToggle}
        onFocus={handleFocus}
      />
      {isOpen && (
        <ListContent>
          <ListItem>{data.content}</ListItem>
        </ListContent>
      )}
    </TextItemStyled>
  );
};

const TextItemStyled = styled.li`
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
