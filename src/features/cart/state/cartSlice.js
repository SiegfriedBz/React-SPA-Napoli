import { createSelector } from "@reduxjs/toolkit"

const CART_INIT_STATE = {
  cartItems: []
}

/** reducer */
export const cartReducer = (state = CART_INIT_STATE, action) => {
  switch (action.type) {
    case "cart/clear": {
      return { ...state, cartItems: [] }
    }

    case "cart/add-item": {
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    }

    case "cart/delete-item":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.pizzaId !== action.payload
        )
      }

    case "cart/increment-item":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.pizzaId !== action.payload
            ? item
            : {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.unitPrice * (item.quantity + 1)
              }
        })
      }

    case "cart/decrement-item": {
      const item = state.cartItems.find((itm) => itm.pizzaId === action.payload)

      /** delete item from cart if current qutity <= 1 */
      if (item?.quantity <= 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.pizzaId !== action.payload
          )
        }
      }

      /** else, decrease item qutity in cart */
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.pizzaId !== action.payload
            ? item
            : {
                ...item,
                quantity: item.quantity <= 1 ? 0 : item.quantity - 1,
                totalPrice:
                  item.quantity < 1 ? 0 : item.unitPrice * (item.quantity - 1)
              }
        })
      }
    }
    default:
      return state
  }
}

export const memoizedGetCartSumz = createSelector(
  [(state) => state.cart.cartItems],
  (cartItems) => {
    return cartItems.reduce(
      (acc, curr) => {
        acc.sumQuantity += curr.quantity
        acc.sumPrice += curr.totalPrice

        return acc
      },
      { sumQuantity: 0, sumPrice: 0 }
    )
  }
)

export const memoizedGetItemQty = (id) =>
  createSelector([(state) => state.cart.cartItems], (cartItems) => {
    return cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0
  })
