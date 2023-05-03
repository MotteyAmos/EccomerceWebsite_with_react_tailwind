import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    selectedItems:  localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
            openCart: (state,action)=>{
                return {
                    ...state, 
                    open: true
                }
            },
            closeCart: (state)=>{
                return{
                    ...state,
                    open: false
                }
            },
            addItem: (state, action)=>{               
                const item = state.selectedItems.find((item)=>{
                    return item.id === action.payload.id
                })
                if (item){
                    item.quantity +=1
                    
                }else{
                   let new_item = {...action.payload, quantity: 1};
                    state.selectedItems.push(new_item);
                    
                    
                }
                let newItem = JSON.stringify(state.selectedItems);
                localStorage.setItem("cartItems", newItem)
            
                
            }

    }
});

export default cartSlice.reducer;
export const {openCart, closeCart, addItem} = cartSlice.actions;
export const selectCartState = (state)=>state.cart.open
export const selectSelectedItems = (state)=>state.cart.selectedItems