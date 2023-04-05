import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h3: "font-semibold sm:text-4xl md:text-[38px] text-[40px]",
  h4: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h5: "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  h6: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  body1: "font-normal text-2xl md:text-[22px] sm:text-xl",
  body2: "text-xl",
  body3: "font-medium text-lg",
  body4: "text-base",
  body5: "text-[15px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
