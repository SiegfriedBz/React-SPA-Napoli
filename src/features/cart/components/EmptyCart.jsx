import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import AsUnderLink from "../../../ui/AsUnderLink"

function EmptyCart() {
  const userName = useSelector((state) => state.user.name)

  return (
    <div className='px-4 py-8'>
      <AsUnderLink As={Link} to='/menu'>
        &larr; Back to menu
      </AsUnderLink>

      <p className='mt-4 font-semibold'>
        <span className='capitalize'>{userName}</span>, your cart is empty.
        Start adding some pizzas :)
      </p>
    </div>
  )
}

export default EmptyCart
