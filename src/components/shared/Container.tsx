import { ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
}

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full max-w-[1220px] px-5 md:px-10 lg:px-[20px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
