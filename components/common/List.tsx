import { FC, ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export const List: FC<ListProps> = ({ children }) => (
  <ul className="list-disc">{children}</ul>
);
