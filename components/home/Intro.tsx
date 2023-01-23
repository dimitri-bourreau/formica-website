import { FC } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { TextBox } from "../common/TextBox";

export const Intro: FC = () => (
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl text-center">Formica</h1>
    <Image src={logo} alt="Logo Formica" />

    <TextBox>
      <p>
        Nous sommes un groupement de développeuses et développeurs passionnés
        sur Angoulême.
      </p>

      <p>
        Nous échangeons sur Slack,{" "}
        <a
          className="text-orange-500"
          href="https://join.slack.com/t/formica-angouleme/shared_invite/zt-1noxh3zj9-84dl91PAd2jradhuESv5_g"
        >
          venez nous rejoindre
        </a>{" "}
        ! ✌️
      </p>
    </TextBox>
  </div>
);
