

const Button = ({ title, as = "button", className = "", children, ...props }) => {
  const Component = as;
  return (
    <Component    
      className={` text-[14px] px-4 py-2 rounded-md bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white hover:opacity-90 transition duration-300 ease-in-out cursor-pointer ${className}`}

      {...props}
    >
      {children ?? title}
    </Component>
  );
};

export default Button;