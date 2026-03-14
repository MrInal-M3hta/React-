import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value+=1;
      console.log(action.payload);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const cartData = state.items.filter(
        (item) => item.id != action.payload.id,
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
    clearAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
