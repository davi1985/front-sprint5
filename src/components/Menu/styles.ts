import styled from 'styled-components';

export const Nav = styled.nav`
  .header__drawer .menu__title,
  .header__drawer .close__title {
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
  }

  @media (max-width: 1200px) {
    .header__menu {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  list-style: none;
`;
