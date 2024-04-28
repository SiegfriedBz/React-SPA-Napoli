import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import SearchOrder from "../features/order/components/SearchOrder"
import Username from "../features/user/components/Username"
import SkewHoverLink from "./SkewHoverLink"

const Header = () => {
  const userName = useSelector((state) => state.user.name)

  return (
    <header className='px-4 py-2 sm:px-8 sm:py-4 bg-primary uppercase border-b border-stone-500'>
      <div className='flex items-center justify-between'>
        <Link to='/' className='tracking-widest'>
          <h1 className='text-xl md:text-3xl text-stone-800 font-bold'>
            React Napoli
          </h1>
        </Link>
        <div className={`flex items-center ${userName ? "md:gap-x-4" : ""}`}>
          <SearchOrder />
          <Username />
        </div>
      </div>

      <div className='flex items-center gap-x-2'>
        <nav>
          <ul className='flex gap-x-2'>
            <li>
              <SkewHoverLink to='/'>Home</SkewHoverLink>
            </li>
            <li>
              <SkewHoverLink to='/menu'>Menu</SkewHoverLink>
            </li>
            <li>
              <SkewHoverLink to='/cart'>Cart</SkewHoverLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
