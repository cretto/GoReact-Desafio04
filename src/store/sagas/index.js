import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { Types as ProductsTypes } from '../ducks/products';
import { Types as ProductsDetailsTypes } from '../ducks/productDetails';

import { getCategories } from './categories';
import { getProducts } from './products';
import { getProductDetails } from './productDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(ProductsDetailsTypes.GET_REQUEST, getProductDetails),
  ]);
}
