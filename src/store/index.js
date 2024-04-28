import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user/state/userSlice"
import { cartReducer } from "../features/cart/state/cartSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})

export default store
