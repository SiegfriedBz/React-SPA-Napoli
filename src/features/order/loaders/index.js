import { getOrder } from "../../../services/apiRestaurant"

export async function orderLoader({ params }) {
  const { orderId } = params
  const order = await getOrder(orderId)

  return order
}
