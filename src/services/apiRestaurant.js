const API_URL = "https://react-fast-pizza-api.onrender.com/api"

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`)

  if (!res.ok) throw Error("Failed getting menu")

  const { data } = await res.json()
  return data
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`)
  if (!res.ok) throw Error(`Couldn't find order #${id}`)

  const { data } = await res.json()
  return data
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!res.ok) throw Error()
    const { data } = await res.json()
    return data
  } catch {
    throw Error("Failed creating your order")
  }
}

/** allow user to update priority on existing order */
export async function updateOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ priority: true }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!res.ok) throw Error()
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order")
  }
}
