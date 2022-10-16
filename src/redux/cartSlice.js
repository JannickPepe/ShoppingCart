// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// we make the method and start with an empty array state with nothing in the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  // now we will do the reducers part where we can get x amount of stored items in the cart and it will increase by 1
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // here we will have in increment method which has state n action as parameter
    // it will we hooked into your products on each item so you can increase the number of the item which will go into the quantity
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    // same locic here but you decrement instead ;)
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    // here you can remove and items so it goes away and the new state will update
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;