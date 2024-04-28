import { Link } from "react-router-dom"

const SkewHoverLink = ({ to, children }) => {
  return (
    <div className='skew-link'>
      <Link to={to}>{children}</Link>
    </div>
  )
}

export default SkewHoverLink
