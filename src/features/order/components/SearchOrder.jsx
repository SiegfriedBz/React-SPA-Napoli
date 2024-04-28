import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../../ui/Input"

const SearchOrder = () => {
  const [id, setId] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!id) return

    navigate(`/order/${id}`)
    setId("")
  }

  return (
    <form onSubmit={handleSubmit} className='my-2'>
      <Input
        className='
          w-28 xs:w-32 sm:w-64 
          bg-primary-x-light 
          focus:scale-x-[1.05] 
          sm:focus:scale-x-[1.1] 
          focus:ring-primary-dark
          focus:ring-opacity-50
        '
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder='Search order number'
      />
    </form>
  )
}

export default SearchOrder
