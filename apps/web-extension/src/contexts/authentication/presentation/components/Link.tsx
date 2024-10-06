const Link = ({
  children,
  href,
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) => {
  return (
    <a
      href={href}
      className="text-gray-900 px-2 py-1 ease group relative z-[1] flex cursor-pointer items-center justify-center  gap-8
      overflow-hidden transition-colors motion-safe:duration-150 
      motion-reduce:duration-0 motion-safe:lg:duration-300 gap-15 text-base"
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      <span
        className="
          ease pointer-events-none absolute inset-0 z-[0] block h-full 
          w-full origin-right scale-x-0 opacity-0 transition-opacity 
          group-active:origin-left group-active:scale-x-[1] group-active:opacity-100 
          motion-safe:duration-150 motion-reduce:duration-0 lg:scale-x-[0] lg:opacity-100 
          lg:transition-transform lg:group-hover:origin-left lg:group-hover:scale-x-[1] 
          lg:group-focus-visible:origin-left lg:group-focus-visible:scale-x-[1] 
          motion-safe:lg:duration-300 lg:motion-reduce:duration-0 bg-primary/15"
      >
        {" "}
      </span>
      <span
        className="ease relative z-[1] inline-block
        transition-transform motion-safe:duration-150 motion-reduce:duration-0 
        motion-safe:lg:duration-300"
      >
        {children}
      </span>
    </a>
  );
};

export default Link;
