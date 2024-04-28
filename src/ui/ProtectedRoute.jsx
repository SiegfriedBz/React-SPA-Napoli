import { useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from "../ui/Loading"

const ProtectedRoute = () => {
  const userName = useSelector((state) => state.user.name)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userName) {
      toast.info("Please enter your name to see this page")

      const timer = setTimeout(() => {
        navigate("/")
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [navigate, userName])

  if (!userName) {
    return (
      <div className='absolute inset-0  bg-slate-200/20 backdrop-blur-sm flex justify-center items-center'>
        <Loading />
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
