import React from 'react';

import { Container, Logo, Cart } from './styles';

const Header = () => (
  <Container>
    <Logo>
      <h1>GoCommerce</h1>
    </Logo>
    <Cart>
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      Meu carrinho (3)
    </Cart>
  </Container>
);

export default Header;
