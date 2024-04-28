import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/index.jsx"
import { Provider } from "react-redux"
import "./index.css"

const router = createBrowserRouter(routes)
import store from "./store/index.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
