import { createOrder, updateOrder } from "../../../services/apiRestaurant"
import { redirect } from "react-router-dom"
import { isValidPhone } from "../utils/index"

export async function createOrderAction({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const cart = JSON.parse(data.cart)
  const { latitude, longitude } = JSON.parse(data.position)

  /** validation */
  const errors = [...formData].reduce((acc, [k, v]) => {
    if (k === "customer" && v.trim().length < 3) {
      return { ...acc, [k]: "Your name must be at least 3 chars long" }
    }
    if (k === "phone" && !isValidPhone(v.trim())) {
      return { ...acc, [k]: "Please enter a valid phone number" }
    }
    if (k === "address" && v.trim().length < 5) {
      return { ...acc, [k]: "Your address must be at least 5 chars long" }
    }
    return acc
  }, {})

  if (Object.keys(errors).length !== 0) {
    return errors
  }

  const order = await createOrder({ ...data, cart, latitude, longitude })

  return redirect(`/order/${order.id}`)
}

export async function updateOrderAction({ params }) {
  const { orderId } = params

  await updateOrder(orderId)

  return null
}
