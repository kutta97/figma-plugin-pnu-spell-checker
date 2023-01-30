import * as React from 'react';
import styled from 'styled-components';

export function Navbar({ name }) {
  return (
    <NavbarStyled>
      <h2>{name}</h2>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header``;
