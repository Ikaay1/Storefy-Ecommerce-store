import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      
      const index = state.products.findIndex((product) => product._id === action.payload._id);
      
      if (index === -1){
        state.quantity += action.payload.quantity;
      } else {
        const qty = state.products[index].quantity
        state.quantity += action.payload.quantity - qty;
      }
      if (index === -1){
        state.total += action.payload.price * action.payload.quantity;
      } else {
        const qty = state.products[index].quantity
        state.total += (action.payload.price * action.payload.quantity) - state.products[index].price * qty;
      }

      if (index === -1) {
        state.products.push(action.payload)
      } else {
        state.products = state.products.map((product) => product._id === state.products[index]._id ? action.payload : product )
      }
      
    },
    cleanProduct: (state, action) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
  },
});

export const { addProduct, cleanProduct } = cartSlice.actions;
export default cartSlice.reducer;
