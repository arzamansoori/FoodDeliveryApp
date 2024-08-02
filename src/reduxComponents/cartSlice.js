import { createSlice } from "@reduxjs/toolkit";

//Creating something like a blueprint
//@reduxjs/toolkit gives us this blueprint, we have to follow

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        //state is basically the initial state
        addItems: (state, action) => {
            //mutating the state over here(changing the state)
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop(); //we can use splice
        },
        clearCart: (state) => {
            state.items.length = 0; //[]
        },
    },
});

// {
//     actions: {
//         addItems, removeItem, clearCart
//     }
//     reducer
// }

export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;