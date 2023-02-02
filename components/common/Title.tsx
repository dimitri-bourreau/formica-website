import { FC, ReactNode } from "react";

interface TitleProps {
  level: "h1" | "h2";
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children, level }) => {
  switch (level) {
    case "h1":
      return <h1 className="text-3xl">{children}</h1>;
    case "h2":
      return <h2 className="text-2xl">{children}</h2>;
    default:
      return <h1 className="text-3xl">{children}</h1>;
  }
};
