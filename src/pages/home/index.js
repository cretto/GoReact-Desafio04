import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import Loading from '../../components/Loading';

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
    setCategory: PropTypes.func.isRequired,
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
      setCategory,
    } = this.props;
    getProductsRequest(id);
    setCategory(id);
  };

  renderProductList = products => (
    <ProductList>
      {products.map(product => (
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

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        {products.loading && <Loading />}
        {!products.loading && this.renderProductList(products.data)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ProductsActions,
    ...CategoriesActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
