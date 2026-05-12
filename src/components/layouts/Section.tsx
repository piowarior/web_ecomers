import React from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>;

export function Section({ children, className = "", ...props }: Props) {
  return (
    <section className={`w-full py-16 sm:py-18 lg:py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}

export default Section;
