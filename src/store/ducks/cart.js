export const Types = {
  ADD_CART: 'cart/ADD_CART',
  REMOVE_CART: 'cart/REMOVE_CART',
  SET_QUANTITY: 'cart/SET_QUANTITY',
};

const INITIAL_STATE = {
  data: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_CART: {
      const { product } = action.payload;
      const cartList = state.data;
      const listIndex = cartList.findIndex(item => item.id === product.id);
      if (listIndex > -1) {
        return {
          ...state,
          data: cartList.map(item => ({
            ...item,
            quantity: item.id === product.id ? item.quantity + 1 : item.quantity,
          })),
        };
      }

      return { ...state, data: [...state.data, { ...product, quantity: 1 }] };
    }
    case Types.REMOVE_CART:
      return {
        ...state,
        data: state.data.filter(product => product.id !== action.payload.id),
      };
    case Types.SET_QUANTITY:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          quantity: item.id === action.payload.id ? action.payload.value : item.quantity,
        })),
      };
    default:
      return state;
  }
}

export const Creators = {
  addCart: product => ({
    type: Types.ADD_CART,
    payload: { product },
  }),

  removeCart: id => ({
    type: Types.REMOVE_CART,
    payload: { id },
  }),

  setQuantity: (value, id) => ({
    type: Types.SET_QUANTITY,
    payload: { value, id },
  }),
};
