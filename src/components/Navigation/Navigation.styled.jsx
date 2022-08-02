import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;

  width: 190px;
  height: 38px;

  margin-bottom: 15px;

  border-radius: 6px;

  > * {
    &:not(:last-child) {
      margin-right: 38px;
    }
  }
`;

export const NavButton = styled(NavLink)`
  display: block;

  width: 38px;
  height: 38px;

  border-radius: 6px;

  background-color: var(--blue-color);
  opacity: 0.8;

  &:hover {
    background-color: var(--category-household-products-color);
    backdrop-filter: blur(50px);
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    opacity: 1;
  }

  > * {
    border-radius: 6px;
    background-color: var(--white-color);
  }

  &.active {
    background-color: var(--category-household-products-color);
    backdrop-filter: blur(50px);
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    opacity: 1;
  }
`;
