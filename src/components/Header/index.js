import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Container, Logo, Cart } from './styles';

const Header = ({ cart }) => (
  <Container>
    <Logo>
      <Link to="/">
        <h1>GoCommerce</h1>
      </Link>
    </Logo>
    <Cart to="/cart">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      {`Meu carrinho (${cart.length})`}
    </Cart>
  </Container>
);

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(Header);
