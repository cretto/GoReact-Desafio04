import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  padding: 20px;
  margin-top: 20px;

  background: #ff9696;
  list-style: none;
  border-radius: 5px;
`;

export const Category = styled.li`
  color: ${props => (props.selected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  font-weight: ${props => (props.selected ? 'bolder' : 'normal')};
  text-transform: uppercase;
  padding: 0 10px;
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;
