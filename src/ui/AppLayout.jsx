import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Loading from "./Loading"
import CartOverview from "../features/cart/components/CartOverview"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AppLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <div className='grid grid-rows-[max-content_1fr_max-content_max-content] h-screen'>
      <Header />

      <main className='main'>{isLoading ? <Loading /> : <Outlet />}</main>

      <CartOverview />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default AppLayout
