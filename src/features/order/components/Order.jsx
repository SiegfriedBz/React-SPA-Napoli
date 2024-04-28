// Test ID: IIDSAT
import { useEffect } from "react"
import { useLoaderData, useLocation, useFetcher } from "react-router-dom"
import { useDispatch } from "react-redux"
import OrderItem from "./OrderItem"
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate
} from "../../../utils/index"
import UpdateOrder from "./UpdateOrder"

function Order() {
  // get data fetched in orderLoader
  const orderData = useLoaderData()

  // get data fetched in menuLoader
  const fetcher = useFetcher()

  useEffect(() => {
    if (fetcher?.state === "idle" && !fetcher?.data) {
      fetcher.load("/menu")
    }
  }, [fetcher])

  const menu = fetcher?.data
  const isLoadingMenu = fetcher?.state === "loading"

  // clear cart if redirected (from /order/new)
  const { state: locationState } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (locationState?._isRedirect) {
      dispatch({
        type: "cart/clear"
      })
    }
  }, [dispatch, locationState?._isRedirect])

  // Everyone can search for all orders, so for privacy reasons we're gonna  exclude names or address, these are only for the restaurant staff
  const { id, status, priority, orderPrice, estimatedDelivery, cart } =
    orderData

  const priorityPrice = priority ? Number((0.2 * orderPrice).toFixed(2)) : 0
  const totalPrice = orderPrice + priorityPrice

  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  return (
    <div className='px-4 py-8 space-y-8'>
      <div className='flex flex-wrap justify-between items-center gap-2'>
        <h2 className='text-xl font-semibold'>Order #{id} Status</h2>

        <div className='space-x-2'>
          {priority && (
            <span className='px-4 py-2 text-stone-100 text-sm tracking-wide uppercase font-semibold bg-warning-dark rounded-full'>
              Priority
            </span>
          )}
          <span className='px-4 py-2 text-stone-100 text-sm tracking-wide uppercase font-semibold bg-green-500 rounded-full'>
            {status} order
          </span>
        </div>
      </div>

      <div className='px-8 py-4 flex flex-wrap justify-between items-center gap-2 bg-stone-200'>
        <p className='font-medium'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className='text-xs text-stone-500'>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className='space-y-2 divide-y divide-stone-200 border-t border-b'>
        {cart?.map((item, index) => {
          const ingredients =
            menu?.find((menuItem) => menuItem.id === item.pizzaId)
              ?.ingredients ?? []

          return (
            <OrderItem
              key={index}
              item={item}
              ingredients={ingredients}
              isLoadingIngredients={isLoadingMenu}
            />
          )
        })}
      </ul>

      <div className='px-8 py-4 space-y-2 bg-stone-200'>
        <p className='text-sm font-medium text-stone-600'>
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className='text-sm font-medium text-stone-600'>
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className='text-sm font-bold text-stone-600'>
          To pay on delivery: {formatCurrency(totalPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={orderData} />}
    </div>
  )
}

export default Order
