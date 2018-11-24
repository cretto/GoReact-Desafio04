import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductDetailsActions } from '../../store/ducks/productDetails';
import { Creators as CartActions } from '../../store/ducks/cart';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import Loading from '../../components/Loading';

import {
  Container, Image, Info, Detail, Actions,
} from './styles';

class Product extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    productDetails: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
    getProductDetailsRequest: PropTypes.func.isRequired,
    addCart: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getProductDetailsRequest,
      setCategory,
    } = this.props;
    setCategory();
    getProductDetailsRequest(id);
  }

  handleClickAdd = (product) => {
    const { addCart } = this.props;
    addCart(product);
    console.toast.success('Produto adicionado ao carrinho');
  };

  renderProductDetails = productDetails => (
    <Container>
      <Image>
        <img src={productDetails.image} alt={productDetails.name} />
      </Image>
      <Info>
        <Detail>
          <strong>{productDetails.name}</strong>
          {productDetails.brand}
        </Detail>
        <Actions>
          <strong>{`R$${productDetails.price}`}</strong>
          <button type="button" onClick={() => this.handleClickAdd(productDetails)}>
            adicionar ao carrinho
          </button>
        </Actions>
      </Info>
    </Container>
  );

  render() {
    const { productDetails } = this.props;
    return (
      <Fragment>
        {productDetails.loading && <Loading />}
        {!productDetails.loading && this.renderProductDetails(productDetails.data)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.productDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ProductDetailsActions,
    ...CartActions,
    ...CategoriesActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
