import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export function Section({ children, className = "" }: Props) {
  return <section className={`mb-6 w-full ${className}`}>{children}</section>;
}

export default Section;
