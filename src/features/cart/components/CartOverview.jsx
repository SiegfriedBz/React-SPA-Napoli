import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { memoizedGetCartSumz } from "../state/cartSlice"

function CartOverview() {
  const { sumQuantity, sumPrice } = useSelector(memoizedGetCartSumz)

  if (!sumQuantity) return null

  return (
    <div className='flex items-center justify-between text-sm md:text-base bg-stone-800 text-stone-200 uppercase p-4 sm:px-6'>
      <p className='font-semi-bold text-stone-300 space-x-4'>
        <span className='inline-block'>
          {sumQuantity <= 1 ? `${sumQuantity} pizza` : `${sumQuantity} pizzas`}
        </span>
        <span className='inline-block'>${sumPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
