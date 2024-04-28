import { useSelector } from "react-redux"
import CreateUser from "../features/user/components/CreateUser"
import AsButton from "./AsButton"
import { Link } from "react-router-dom"

function Home() {
  const userName = useSelector((state) => state.user.name)

  return (
    <div className='my-10 px-4 sm:my-16 text-center'>
      <h1 className='mb-8 text-xl md:text-3xl font-semibold'>
        The best pizza.
        <br />
        <span className='text-primary-dark'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName ? (
        <AsButton As={Link} to='/menu'>
          Check our menu, {userName}
        </AsButton>
      ) : (
        <CreateUser />
      )}
    </div>
  )
}

export default Home
