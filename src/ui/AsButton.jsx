import { twMerge } from "tailwind-merge"
/**
 * As:
 *  As={Link} => rest to
 *  As='button' => rest onClick
 *
 * variant: undefined | small | small secondary
 */

const AsButton = ({
  As = "button",
  className = "",
  variant,
  children,
  disabled = false,
  ...rest
}) => {
  const baseSize = "text-sm px-4 py-2 sm:px-8 sm:py-4"
  const smallSize = "text-xs px-4 py-2"

  const isBtn = As === "button"
  const isSmallBtn = variant != null && variant?.includes("small")
  const isSecondaryBtn = variant != null && variant?.includes("secondary")

  return (
    <As
      disabled={isBtn && disabled}
      {...rest}
      className={twMerge(
        ` 
          rounded-xl
          uppercase
          font-semibold
          tracking-wide
          ${isSecondaryBtn ? "text-stone-400 bg-stone-100 border border-stone-400" : "text-stone-800 bg-primary"}
          transition-all duration-200 ease-in-out
          
         ${isSecondaryBtn ? "hover:text-stone-100 hover:bg-stone-400" : "hover:bg-primary-light"}
          focus:ring
          active:ring
          ${isSecondaryBtn ? "focus:ring-stone-400" : "focus:ring-primary-light"}
          ${isSecondaryBtn ? "active:ring-stone-400" : "active:ring-primary-light"}
          focus:ring-offset-2
          active:ring-offset-2
          disabled:cursor-not-allowed
          disabled:text-stone-400
          disabled:bg-stone-100 
        `,
        variant == null ? baseSize : isSmallBtn ? smallSize : "",
        className
      )}
    >
      {children}
    </As>
  )
}

export default AsButton
