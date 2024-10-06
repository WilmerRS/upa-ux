const GridBackground = ({
  children,
  className='',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-full w-full bg-white 
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
      bg-[size:70px_70px] ${className}`}
    >
      {children}
    </div>
  );
};

export default GridBackground;
