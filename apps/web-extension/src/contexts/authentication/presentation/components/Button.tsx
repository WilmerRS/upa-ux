const Button = ({
  children,
  type = 'submit'
}: {
  children: React.ReactNode
  type?: 'submit'
}) => {
  return (
    <button
      type={type}
      className='ease group relative z-[1] flex cursor-pointer items-center justify-center  gap-8
      overflow-hidden transition-colors motion-safe:duration-150
      motion-reduce:duration-0 motion-safe:lg:duration-300
      pt-[16px] pb-[15px] gap-15 bg-gray-900 text-white text-xl
      w-full font-semibold'
    >
      <span
        className='
          ease pointer-events-none absolute inset-0 z-[0] block h-full
          w-full origin-right scale-x-0 opacity-0 transition-opacity
          group-active:origin-left group-active:scale-x-[1] group-active:opacity-100
          motion-safe:duration-150 motion-reduce:duration-0 lg:scale-x-[0] lg:opacity-100
          lg:transition-transform lg:group-hover:origin-left lg:group-hover:scale-x-[1]
          lg:group-focus-visible:origin-left lg:group-focus-visible:scale-x-[1]
          motion-safe:lg:duration-300 lg:motion-reduce:duration-0 bg-primary'
      >
        {' '}
      </span>
      <span
        className='ease relative z-[1] inline-block translate-x-0
        transition-transform motion-safe:duration-150 motion-reduce:duration-0
        motion-safe:lg:duration-300 lg:group-hover:motion-safe:translate-x-[4px] mb-1'
      >
        {children}
      </span>
      <svg
        className='ease relative z-[1] translate-x-0 transition-transform motion-safe:duration-150
         motion-reduce:duration-0 motion-safe:lg:duration-300
         lg:group-hover:motion-safe:translate-x-[-2px] arrowStyles w-15 h-15 transform rotate-0'
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='15'
        viewBox='0 0 12 20'
        fill='none'
      >
        <rect x='8' y='8' width='4' height='4' fill='currentColor' />
        <rect x='4' y='4' width='4' height='4' fill='currentColor' />
        <rect width='4' height='4' fill='currentColor' />
        <rect x='4' y='12' width='4' height='4' fill='currentColor' />
        <rect y='16' width='4' height='4' fill='currentColor' />
      </svg>
    </button>
  )
}

export default Button
