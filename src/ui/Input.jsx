import { twMerge } from "tailwind-merge"

const Input = ({ className = "", type, name, id, ...rest }) => {
  return (
    <input
      className={twMerge(
        `
          transition-all
          duration-300
          ease-in-out
          outline-none
          focus:ring
        focus:ring-primary
       
         [&:not([type="checkbox"]) 
          px-4 py-2
          md:px-6 md:py-3
         
          border
          border-stone-200
          rounded-full
          text-sm 
          placeholder:text-stone-400]
      `,
        className
      )}
      type={type}
      name={name}
      id={id}
      {...rest}
    />
  )
}

export default Input
