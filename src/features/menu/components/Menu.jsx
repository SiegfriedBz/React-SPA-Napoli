import { useLoaderData } from "react-router-dom"
import MenuItem from "./MenuItem"

function Menu() {
  const data = useLoaderData()

  return (
    <ul
      className='
          py-8
          grid
          grid-cols-1
          sm:grid-cols-gridMenuCols
          gap-y-4
          justify-items-center
        '
    >
      {data.map((item) => {
        return <MenuItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default Menu
