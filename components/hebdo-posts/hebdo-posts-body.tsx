import { FC, ReactNode } from "react";

interface HebdoPostsBodyProps {
  children: ReactNode;
}

export const HebdoPostsBody: FC<HebdoPostsBodyProps> = ({ children }) => (
  <div className="flex flex-col gap-2">{children}</div>
);
