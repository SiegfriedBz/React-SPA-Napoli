import { useSelector } from "react-redux"

const Username = () => {
  const userName = useSelector((state) => state.user.name)

  return (
    <span className='hidden md:block text-sm font-semibold'>{userName}</span>
  )
}

export default Username
