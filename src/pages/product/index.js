import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductDetailsActions } from '../../store/ducks/productDetails';

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
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getProductDetailsRequest,
    } = this.props;
    getProductDetailsRequest(id);
  }

  render() {
    const { productDetails } = this.props;
    return (
      <Container>
        <Image>
          <img src={productDetails.data.image} alt={productDetails.data.name} />
        </Image>
        <Info>
          <Detail>
            <strong>{productDetails.data.name}</strong>
            {productDetails.data.brand}
          </Detail>
          <Actions>
            <strong>{`R$${productDetails.data.price}`}</strong>
            <button type="button">adicionar ao carrinho</button>
          </Actions>
        </Info>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.productDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
