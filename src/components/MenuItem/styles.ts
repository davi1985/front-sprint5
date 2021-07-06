import styled from 'styled-components';

export const Item = styled.li`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  padding-bottom: 5px;
  vertical-align: baseline;
  position: relative;
  transition: all 0.3s;

  &:hover::after {
    display: flex;
    content: '';
    border: 1px solid #222;
    background: #222;
    width: 100%;
    margin-top: 0.5rem;
    position: absolute;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
