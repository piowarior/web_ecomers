import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export function PageContainer({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;
