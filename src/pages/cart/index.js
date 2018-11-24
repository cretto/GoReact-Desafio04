import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  CartInfo, CartList, CartItem, CartTotal,
} from './styles';

const Cart = ({ cart, setQuantity, removeCart }) => {
  if (cart.data.length) {
    return (
      <CartList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>produto</th>
          <th>valor</th>
          <th>qtd</th>
          <th>subtotal</th>
          <th />
        </thead>
        <tbody>
          { cart.data.map(item => (
            <CartItem key={item.id}>
              <td>
                <div className="imagem">
                  <img src={item.image} alt={item.name} />
                </div>
              </td>
              <td className="descricao">
                <div className="descricao">
                  <strong>{item.name}</strong>
                  {item.brand}
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={e => setQuantity(e.target.value, item.id)}
                />
              </td>
              <td>{`R$${(item.price * item.quantity).toFixed(2)}`}</td>
              <td>
                <button
                  type="button"
                  onClick={(_e) => {
                    removeCart(item.id);
                    console.toast.info('Produto removido do carrinho');
                  }}
                >
                  <i className="fa fa-times" />
                </button>
              </td>
            </CartItem>
          )) }
          <CartTotal>
            <td colSpan="4" align="right" className="total">
              <span>TOTAL</span>
            </td>
            <td colSpan="2" className="value">
              <span>{`R$ ${cart.data.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2)}`}</span>
            </td>
          </CartTotal>
        </tbody>
      </CartList>
    );
  }

  return (
    <CartInfo>
      <span>Carrinho vazio</span>
    </CartInfo>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ),
  }).isRequired,
  setQuantity: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
