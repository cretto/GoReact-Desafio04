import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Cart } from './styles';

const Header = () => (
  <Container>
    <Logo>
      <Link to="/">
        <h1>GoCommerce</h1>
      </Link>
    </Logo>
    <Cart>
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      Meu carrinho (3)
    </Cart>
  </Container>
);

export default Header;
