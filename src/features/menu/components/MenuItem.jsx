import { useSelector, useDispatch } from "react-redux"
import { memoizedGetItemQty } from "../../cart/state/cartSlice"
import AsButton from "../../../ui/AsButton"
import { formatCurrency } from "../../../utils/index"
import UpdateQuantityButtons from "../../../ui/UpdateQuantityButtons"

const MenuItem = ({ item }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item
  const dispatch = useDispatch()
  const itemQuantityInCart = useSelector(memoizedGetItemQty(id))
  const itemIsInCart = itemQuantityInCart !== 0

  /** handlers */
  const handleAddToCart = () => {
    dispatch({
      type: "cart/add-item",
      payload: {
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice
      }
    })
  }

  return (
    <li
      className={`
        w-[300px]
        md:w-[400px]
        p-4
        flex 
        flex-col
        space-y-4
        md:flex-row
        md:space-x-4
        md:space-y-0
    
        border border-stone-200
        rounded-sm
        shadow-sm
        transition-all duration-200 ease-in-out
        ${soldOut ? "hover:shadow-md" : "max-sm:hover:scale-[1.025] sm:hover:scale-105 hover:shadow-lg"}
        
      `}
    >
      <img
        className={`h-24 
          rounded-md
          ${soldOut ? "opacity-50 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className='flex flex-col'>
        <p className='w-full font-medium'>{name}</p>
        <p className='text-sm capitalize italic opacity-90 '>
          {ingredients.join(", ")}
        </p>
        <div
          className='
            text-sm 
            w-full 
            flex 
            justify-between
            items-center
            mt-4 
            md:mt-auto'
        >
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='font-medium uppercase text-stone-500 opacity-70'>
              Sold out
            </p>
          )}

          <div className='flex flex-col gap-y-2'>
            {!soldOut && !itemIsInCart && (
              <AsButton onClick={handleAddToCart} variant='small'>
                Add
              </AsButton>
            )}

            {itemIsInCart && (
              <UpdateQuantityButtons
                pizzaId={id}
                quantity={itemQuantityInCart}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
