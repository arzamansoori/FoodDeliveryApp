//Creating the REDUX STORE
//two types of reducer: slice level reducer, app level reducer

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
});

export default appStore;