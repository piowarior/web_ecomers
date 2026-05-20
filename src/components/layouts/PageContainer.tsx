import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
}>;

export function PageContainer({ children, className = "", style }: Props) {
  return (
    <div
      className={`mx-auto w-full  max-w-[88rem] px-5 sm:px-8 lg:px-12 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default PageContainer;
