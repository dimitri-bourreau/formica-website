import React, { FC } from "react";
import { Title } from "@/components/common/Title";
import { TextBox } from "@/components/common/TextBox";
import { Link } from "@/components/common/link";

interface HebdoPostsHeaderProps {
  title: string;
  subTitle: string;
}

export const HebdoPostsHeader: FC<HebdoPostsHeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <>
      <TextBox background="bg-cyan-100">
        <Link href="/">⬅️ Revenir à l'accueil</Link>
      </TextBox>
      <div className="my-3">
        <Title level="h1">{title}</Title>
        <Title level="h2">{subTitle}</Title>
      </div>
    </>
  );
};
