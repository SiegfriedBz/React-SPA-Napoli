import { useRouteError } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import AsUnderLink from "./AsUnderLink"

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        <i>{error.statusText || error.message || "Page not found"}</i>
      </p>
      <AsUnderLink As='button' onClick={() => navigate(-1)}>
        &larr; Go back
      </AsUnderLink>
    </div>
  )
}

export default Error
