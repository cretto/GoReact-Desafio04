import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  h1 {
    color: #ff9696;
  }
`;

export const Cart = styled(Link)`
  color: #b3b3b3;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 10px;
  }
`;
