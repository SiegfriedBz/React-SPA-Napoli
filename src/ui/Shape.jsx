const Shape = () => {
  return (
    <nav className='w-64 bg-slate-600'>
      <ul className='flex flex-col py-4 gap-y-8 items-center justify-center'>
        <FluidLi>Home</FluidLi>
        <FluidLi>About</FluidLi>
        <FluidLi>Stuff</FluidLi>
      </ul>
    </nav>
  )
}

export default Shape

const FluidLi = ({ children }) => {
  return (
    <li
      className='
        ms-auto
        rounded-l-[100vw]
        text-stone-200
        hover:text-slate-700
        w-3/4 h-12 
        hover:bg-stone-100
        flex items-center justify-center
        relative

        before:absolute
        before:content=""
        before:-top-4
        before:right-0
        before:w-4
        before:h-4
        before:rounded-shape-top
        before:shadow-shape-top
        before:hidden
        before:transition-all before:duration-100 before:ease-in-out
        hover:before:block

        after:absolute
        after:content=""
        after:-bottom-4
        after:right-0
        after:w-4
        after:h-4
        after:rounded-shape-bottom
        after:shadow-shape-bottom
        after:hidden
        after:transition-all after:duration-100 after:ease-in-out
        hover:after:block
      '
    >
      {children}
    </li>
  )
}
