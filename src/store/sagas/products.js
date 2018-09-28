import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';
import { Creators as CategoriesActions } from '../ducks/categories';

export function* getProducts(action) {
  try {
    const categoryId = action.payload.id;

    let response;
    if (!categoryId) {
      response = yield call(api.get, '/products');
    } else {
      response = yield call(api.get, `/category_products/${action.payload.id}`);
      response.data = response.data.products;
      yield put(CategoriesActions.setCategory(action.payload.id));
    }

    yield put(ProductsActions.getProductsSuccess(response));
  } catch (err) {
    console.log(err);
  }
}
