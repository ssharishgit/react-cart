import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[]
  },
  reducers:{
    addToCart: (state,action) =>{
      state.items.push({...action.payload,quantity: 1})
    },
    removeFromCart: (state,action) =>{
      const arr = state.items.filter(x=>x.id !== action.payload)
      state.items = arr
    },
    plusQuantity: (state,action) =>{
      const selectedItem = state.items.find(i => i.id === action.payload)
      selectedItem.quantity += 1
    },
    minusQuantity: (state,action) =>{
      const selectedItem = state.items.find(i => i.id === action.payload)
      if (selectedItem.quantity > 1){
        selectedItem.quantity -= 1
      }
    },
  }
})

export const {addToCart,removeFromCart,plusQuantity,minusQuantity} = cartSlice.actions

export default cartSlice.reducer