import React from 'react';
import styled from 'styled-components';

import { ResultDetailListBody } from './ResultDetailListBody';
import { ResultDetailListHeader } from './ResultDetailListHeader';

export const ResultDetailList = (props) => {
  const { children, type, headerTitle, onFocus } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleFocus = () => onFocus?.();
  return (
    <ListStyled>
      <ResultDetailListHeader
        title={headerTitle}
        type={type}
        onToggle={handleToggle}
        onFocus={handleFocus}
      />
      {isOpen && <ResultDetailListBody>{children}</ResultDetailListBody>}
    </ListStyled>
  );
};

const ListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray70};
`;
