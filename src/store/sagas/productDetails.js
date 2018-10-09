import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductDetailsActions } from '../ducks/productDetails';

export function* getProductDetails(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.id}`);

    yield put(ProductDetailsActions.getProductDetailsSuccess(response));
  } catch (err) {
    console.log(err);
  }
}
