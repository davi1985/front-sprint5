import styled from 'styled-components';

export const Item = styled.li`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;
  position: relative;
  margin-right: 2rem;

  &:not(:last-child):hover {
    text-decoration: underline;
  }

  &:not(:last-child)::after {
    position: absolute;
    content: '/';
    margin-left: 0.5rem;
  }

  &.breadcrumbs__item--active {
    color: #261e1e;
  }

  @media (max-width: 1200px) {
    .breadcrumbs__item {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .main__breadcrumbs .breadcrumbs__item--active {
      display: block;
      text-align: center;
      font-size: 1.4375rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`;
