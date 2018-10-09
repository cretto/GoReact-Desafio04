import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import {
  ProductList, Product, Info, Price,
} from './styles';

class Home extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          brand: PropTypes.string,
          name: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.loadProductsList();
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;
    if (prevProps.match.params.id !== params.id) {
      this.loadProductsList();
    }
  }

  loadProductsList = () => {
    const {
      match: {
        params: { id },
      },
      getProductsRequest,
    } = this.props;
    getProductsRequest(id);
  };

  render() {
    const { products } = this.props;
    return (
      <ProductList>
        {products.data.map(product => (
          <Product key={product.id} to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <Info>
              <strong>{product.name}</strong>
              {product.brand}
            </Info>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
