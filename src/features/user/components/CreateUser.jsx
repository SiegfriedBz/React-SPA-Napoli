import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import AsButton from "../../../ui/AsButton"
import Input from "../../../ui/Input"
import { toast } from "react-toastify"

const CreateUser = () => {
  const [username, setUsername] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  /** handler */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.trim().length < 3) {
      toast.info("Please enter a valid name (at least 3 characters)")
      return
    }

    dispatch({
      type: "user/createName",
      payload: username
    })

    setUsername("")
    navigate("/menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm md:text-base text-stone-600'>
        👋 Welcome! Please start by telling us your name:
      </p>

      <Input
        className='w-full max-w-72 mb-4'
        type='text'
        placeholder='Your full name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <AsButton>Start ordering</AsButton>
        </div>
      )}
    </form>
  )
}

export default CreateUser
