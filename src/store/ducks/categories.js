export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  SET_SELECTED: 'categories/SET_SELECTED',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  selected: null,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.SET_SELECTED:
      return { ...state, selected: action.payload.selected };
    default:
      return state;
  }
}

export const Creators = {
  getCategoriesRequest: () => ({ type: Types.GET_REQUEST }),

  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),

  setCategory: selected => ({
    type: Types.SET_SELECTED,
    payload: { selected },
  }),
};
