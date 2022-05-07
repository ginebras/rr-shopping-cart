import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  quantity: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].cartQuantity += 1;
        state.amount += state.cartProducts[itemIndex].price;
      } else {
        const temp = {
          ...action.payload,
          cartQuantity: 1,
          price: parseInt(action.payload.price),
        };
        state.quantity += 1;
        state.amount += temp.price;
        state.cartProducts.push(temp);
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemAmount =
        state.cartProducts[itemIndex].cartQuantity *
        state.cartProducts[itemIndex].price;

      if (state.quantity === 0) state.quantity = 0;
      else state.quantity -= 1;

      if (state.amount === 0 || state.amount - itemAmount < 0) state.amount = 0;
      else state.amount -= itemAmount;

      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },

    changeQuantity: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (action.payload.msg === 'increase') {
        state.cartProducts[itemIndex].cartQuantity += 1;
        state.amount += state.cartProducts[itemIndex].price;
      } else {
        if (state.cartProducts[itemIndex].cartQuantity > 0) {
          state.cartProducts[itemIndex].cartQuantity -= 1;
          state.amount -= state.cartProducts[itemIndex].price;
        }
      }
    },

    clearCart: (state, action) => {
      state.cartProducts = [];
      state.amount = 0;
      state.quantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
