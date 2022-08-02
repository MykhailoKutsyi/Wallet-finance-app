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

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const NavButton = styled(NavLink)`
  display: block;
  width: max-content;

  border-radius: 6px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    margin-bottom: 12px;

    border-radius: 2px;

    &:last-child {
      display: none;
    }
  }

  &:hover {
    > * {
      &:first-child {
        backdrop-filter: blur(50px);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        opacity: 1;
      }

      &:last-child {
        font-weight: 700;
        backdrop-filter: none;
        filter: none;
      }
    }
  }

  &.active {
    > * {
      &:first-child {
        backdrop-filter: blur(50px);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        opacity: 1;
      }

      &:last-child {
        font-weight: 700;
      }
    }
  }

  &:visited {
    color: inherit;
  }

  > * {
    border-radius: 6px;
    background-color: var(--white-color);
  }
`;

export const IconWrapper = styled.div`
  width: 38px;
  height: 38px;
  opacity: 0.8;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Text = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    margin-left: 23px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    background-color: transparent;
  }
`;
