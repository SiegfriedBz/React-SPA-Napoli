import { useDispatch } from "react-redux"
import UpdateQuantityButtons from "../../../ui/UpdateQuantityButtons"
import AsButton from "../../../ui/AsButton"
import { formatCurrency } from "../../../utils/index"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch({
      type: "cart/delete-item",
      payload: pizzaId
    })
  }

  return (
    <li className='py-4 sm:flex sm:justify-between sm:items-center'>
      <p>
        {quantity}&times; {name}
      </p>
      <div className='flex justify-between items-center sm:space-x-4'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

        <div className='flex justify-between items-center space-x-4'>
          <UpdateQuantityButtons pizzaId={pizzaId} quantity={quantity} />

          <AsButton
            onClick={handleDelete}
            variant='secondary small'
            className='w-24'
          >
            Delete
          </AsButton>
        </div>
      </div>
    </li>
  )
}

export default CartItem
