import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { memoizedGetCartSumz } from "../../cart/state/cartSlice"
import { fetchAddress } from "../../user/state/userSlice"
import { Form, useNavigation, useActionData } from "react-router-dom"
import AsButton from "../../../ui/AsButton"
import Input from "../../../ui/Input"
import EmptyCart from "../../cart/components/EmptyCart"
import { formatCurrency } from "../../../utils/index"

function CreateOrder() {
  const formErrors = useActionData()
  const [withPriority, setWithPriority] = useState(false)
  const { state } = useNavigation()
  const isSubmitting = state === "submitting"

  const {
    name: userName,
    status: geolocationStatus,
    position: geolocationPosition,
    address: geolocationAddress,
    error: geolocationError
  } = useSelector((state) => state.user)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const { sumQuantity, sumPrice } = useSelector(memoizedGetCartSumz)

  const dispatch = useDispatch()

  const handleFetchUserPosition = (e) => {
    e.preventDefault()
    dispatch(fetchAddress())
  }

  const isLoadingLocation = geolocationStatus === "loading"

  // if cart is empty
  if (!sumQuantity) return <EmptyCart />

  // else
  const priorityPrice = withPriority ? Number((0.2 * sumPrice).toFixed(2)) : 0
  const totalPrice = sumPrice + priorityPrice

  return (
    <div className='px-4 py-8'>
      <h2 className='text-xl font-semibold mb-8'>
        <span className='capitalize'>{userName}</span>,ready to order?
        Let&apos;s go!
      </h2>

      <Form method='POST'>
        {/* pass data to action formData */}
        <input type='hidden' name='cart' value={JSON.stringify(cartItems)} />
        <input type='hidden' name='customer' value={userName} />
        <input
          type='hidden'
          name='position'
          value={JSON.stringify(geolocationPosition)}
        />

        <div className='mb-4'>
          <div className='flex flex-col mb-1 space-y-2 sm:flex-row sm:space-y-0 sm:spacex-2 sm:items-center'>
            <label className='whitespace-nowrap sm:basis-[8rem]'>
              Phone number
            </label>
            <Input
              className='ms-2 sm:ms-0 flex-1'
              type='tel'
              name='phone'
              required
            />
          </div>
          {formErrors?.phone && (
            <p className='text-warning-dark ms-2 mb-2'>{formErrors?.phone}</p>
          )}
        </div>

        <div className='mb-4'>
          <div className='flex flex-col mb-1 space-y-2 sm:flex-row sm:space-y-0 sm:spacex-2 sm:items-center'>
            <label className='whitespace-nowrap sm:basis-[8rem]'>Address</label>
            <div className='flex-1 relative'>
              <Input
                disabled={isLoadingLocation}
                className='ms-2 sm:ms-0 w-full text-slate-800'
                type='text'
                name='address'
                defaultValue={geolocationAddress}
                required
              />

              {!geolocationAddress && (
                <AsButton
                  disabled={isLoadingLocation}
                  onClick={handleFetchUserPosition}
                  variant='small'
                  className='absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 disabled:right-4 sm:disabled:right-8'
                >
                  {isLoadingLocation ? (
                    <div className='loading-2' />
                  ) : (
                    "Get position"
                  )}
                </AsButton>
              )}
            </div>
          </div>
          {formErrors?.address && (
            <p className='text-warning-dark ms-2 mb-2'>{formErrors?.address}</p>
          )}
          {geolocationStatus === "error" && (
            <p className='text-warning-dark ms-2 mb-2'>{geolocationError}</p>
          )}
        </div>

        <div className='flex gap-x-4 my-4'>
          <Input
            className='
              w-8 h-8
             accent-primary
             focus:ring-primary
              focus:ring-offset-2
             '
            type='checkbox'
            name='priority'
            id='priority'
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <AsButton disabled={isSubmitting} className='mt-4'>
            {isSubmitting
              ? "Submitting order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </AsButton>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
