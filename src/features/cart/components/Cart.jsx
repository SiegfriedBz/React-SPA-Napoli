import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { memoizedGetCartSumz } from "../../cart/state/cartSlice"
import AsUnderLink from "../../../ui/AsUnderLink"
import AsButton from "../../../ui/AsButton"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const { sumQuantity } = useSelector(memoizedGetCartSumz)
  const userName = useSelector((state) => state.user.name)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    console.log("handleClearCart")
    dispatch({
      type: "cart/clear"
    })
  }

  if (!sumQuantity) return <EmptyCart />

  return (
    <div className='px-4 py-8'>
      <AsUnderLink As={Link} to='/menu'>
        &larr; Back to menu
      </AsUnderLink>

      <h2 className='mt-8 text-xl font-semibold'>
        Your cart, <span className='capitalize'>{userName}</span>
      </h2>

      <ul
        className='
        mt-4
          divide-y divide-stone-200
          border-b
          '
      >
        {cartItems?.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />
        })}
      </ul>

      <div className='flex flex-col mt-4 gap-y-[0.55rem]'>
        <AsButton As={Link} to='/order/new' variant='small' className='w-36'>
          Order pizzas
        </AsButton>

        <AsButton
          onClick={handleClearCart}
          variant='secondary small'
          className='w-32'
        >
          Clear cart
        </AsButton>
      </div>
    </div>
  )
}

export default Cart
