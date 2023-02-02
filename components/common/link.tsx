import { FC, ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  color?: string;
}

export const Link: FC<LinkProps> = ({
  href,
  children,
  color = "text-cyan-700",
}) => (
  <a href={href} className={color}>
    {children}
  </a>
);
