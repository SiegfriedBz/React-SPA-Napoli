import { useFetcher } from "react-router-dom"
import AsButton from "../../../ui/AsButton"

const UpdateOrder = () => {
  const fetcher = useFetcher()
  const isIdle = fetcher.state === "idle"

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <AsButton disabled={!isIdle}>Add priority</AsButton>
    </fetcher.Form>
  )
}

export default UpdateOrder
