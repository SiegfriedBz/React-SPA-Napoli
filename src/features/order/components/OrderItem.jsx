import { formatCurrency } from "../../../utils/index"

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item

  return (
    <li className='py-4 text-sm'>
      <div className='flex justify-between'>
        <span>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </span>
        <span className='font-bold'>{formatCurrency(totalPrice)}</span>
      </div>

      {isLoadingIngredients ? (
        <div className='loading-3 mt-2' />
      ) : (
        <p className='text-sm text-stone-500 capitalize italic'>
          {ingredients.join(", ")}
        </p>
      )}
    </li>
  )
}

export default OrderItem
