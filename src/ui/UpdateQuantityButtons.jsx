import { useDispatch } from "react-redux"
import AsButton from "./AsButton"
import { twMerge } from "tailwind-merge"

const UpdateQuantityButtons = ({ quantity, pizzaId, className = "" }) => {
  const dispatch = useDispatch()

  /** handlers */
  const handleIncrement = () => {
    dispatch({
      type: "cart/increment-item",
      payload: pizzaId
    })
  }

  const handleDecrement = () => {
    dispatch({
      type: "cart/decrement-item",
      payload: pizzaId
    })
  }

  return (
    <div
      className={twMerge(
        "flex justify-between items-center w-[5.5rem]",
        className
      )}
    >
      <AsButton
        onClick={handleDecrement}
        variant='small'
        className='flex justify-center items-center w-8 h-8 rounded-full'
      >
        -
      </AsButton>

      <span className='text-sm font-bold'>{quantity}</span>

      <AsButton
        onClick={handleIncrement}
        variant='small'
        className='flex justify-center items-center w-8 h-8 rounded-full'
      >
        +
      </AsButton>
    </div>
  )
}

export default UpdateQuantityButtons
