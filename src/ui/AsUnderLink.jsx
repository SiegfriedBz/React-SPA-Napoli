import { Link } from "react-router-dom"
/**
 * As shape
 *  As={Link} => rest to
 *  As='button' => rest onClick
 */

const AsUnderLink = ({ As = { Link }, children, ...rest }) => {
  return (
    <As
      {...rest}
      className="
      text-blue-500 
        transition-all
        duration-300
        ease-in-out
      hover:text-blue-600
        relative

        after:absolute
        after:content-['']
        after:right-0
        after:left-0
        after:-bottom-[0.1rem]
        after:h-[0.1rem]
        after:w-0
        after:bg-blue-600
        after:transition-all
        after:duration-300
        after:ease-in-out
        hover:after:w-full
      "
    >
      {children}
    </As>
  )
}

export default AsUnderLink
