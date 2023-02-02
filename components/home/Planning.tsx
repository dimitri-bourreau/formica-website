import { FC } from "react";
import { TextBox } from "../common/TextBox";
import { MeetingDate } from "@/components/common/MeetingDate";

export const Planning: FC = () => (
  <>
    <h2 className="text-2xl">Nos prochaines rencontres ⬇️</h2>

    <TextBox background="bg-cyan-100">
      <h3 className="text-lg">Rencontre amicale hebdomadaire</h3>
      <p>
        Vient qui veut et qui peut, on échange autour de nos semaines, on
        s'entraide, on partage nos connaissances et on tente d'élever tout le
        monde. ✨
      </p>
      <MeetingDate
        date="Jeudi 9 février 2023"
        time="De 18h à 19h30, vous passez quand vous voulez dans ce créneau !"
        place={{
          name: "Le CUP Bar",
          link: "https://www.google.fr/maps/place/le+CUP+Bar/@45.6501769,0.1538074,17z/data=!3m1!4b1!4m5!3m4!1s0x47fe32771d473f65:0x1c1bc76e6492a25b!8m2!3d45.6501769!4d0.1559961",
        }}
      />
    </TextBox>
  </>
);
