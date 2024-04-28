import { Link } from "react-router-dom"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='px-4 py-2 sm:px-8  bg-primary-dark'>
      <Link to='/'>
        <h3 className='text-xs md:text-sm text-stone-800 font-semibold'>
          &copy;{currentYear} | React Napoli all rights reserved.
        </h3>
      </Link>
    </div>
  )
}

export default Footer
