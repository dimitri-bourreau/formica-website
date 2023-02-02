import { FC } from "react";
import { HtmlHead } from "@/components/common/HtmlHead";
import { HebdoPostsHeader } from "@/components/hebdo-posts/hebdo-posts-header";
import { HebdoPostsBody } from "@/components/hebdo-posts/hebdo-posts-body";

const HebdoPost: FC = () => (
  <>
    <HtmlHead />

    <HebdoPostsHeader title="Rencontre hebdo" subTitle="du 2 février 2023" />

    <HebdoPostsBody>
      <p>
        Cette rencontre est la première de l'année, c'était très chouette de
        tous nous retrouver ! 😄
      </p>

      <p>On a parlé de plein de choses !</p>

      <p>
        On développera probablement plusieurs des sujets de ce soir une autre
        fois, notamment la négociation d'un salaire, comment gérer un
        collaborateur désintéressé voir handicapant, ou encore comment optimiser
        son temps de repos à côté du travail.
      </p>

      <p>
        On a chacun partagé quelques évènements marquants de notre semaine, ce
        qui nous a amené à parler de pédagogie, de pair programming, de la
        relation freelance-client mais aussi des revues de code.
      </p>

      <p>
        C'était une chouette rencontre informelle, rien d'important s'y est
        passé, aucune décision pour le groupe n'a été prise. On a juste profité
        d'un bon moment ensemble !
      </p>

      <p>
        Ha, et si, Guillaume a sorti son téléphone !.. mais on attend l'accord
        de tout le monde pour partager la photo ! 😁
      </p>
    </HebdoPostsBody>
  </>
);

export default HebdoPost;
