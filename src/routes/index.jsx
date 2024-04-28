import { Navigate } from "react-router-dom"

import AppLayout from "../ui/AppLayout"
import ProtectedRoute from "..//ui/ProtectedRoute"
import Home from "../ui/Home"
import Error from "../ui/Error"
import Menu from "../features/menu/components/Menu"
import { menuLoader } from "../features/menu/loaders"
import Cart from "../features/cart/components/Cart"
import Order from "../features/order/components/Order"
import { orderLoader } from "../features/order/loaders"
import CreateOrder from "../features/order/components/CreateOrder"
import { createOrderAction, updateOrderAction } from "../features/order/actions"

const routes = [
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader
      },
      {
        element: <ProtectedRoute />,
        errorElement: <Error />,
        children: [
          {
            path: "/cart",
            errorElement: <Error />,

            element: <Cart />
          },
          {
            path: "/order",
            children: [
              {
                path: "",
                element: <Navigate replace to='/order/new' />
              },
              {
                path: "new",
                element: <CreateOrder />,
                errorElement: <Error />,
                action: createOrderAction
              },
              {
                path: ":orderId",
                element: <Order />,
                errorElement: <Error />,
                loader: orderLoader,
                action: updateOrderAction
              }
            ]
          }
        ]
      },

      {
        path: "*",
        errorElement: <Error />
      }
    ]
  }
]

export default routes
