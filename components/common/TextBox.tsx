import clsx from "clsx";
import { FC, ReactNode } from "react";

interface TextBoxProps {
  background?: string;
  children: ReactNode;
}

export const TextBox: FC<TextBoxProps> = ({
  background = "bg-amber-50",
  children,
}) => (
  <div className={clsx("p-5 rounded-xl flex flex-col gap-2", background)}>
    {children}
  </div>
);
