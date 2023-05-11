import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: rgb(126, 194, 191);
  box-shadow: 0px 7px 10px rgb(141, 205, 203);
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
  color: white;
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: white;
  &.active {
    color: orangered;
  }
`;
