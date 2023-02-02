import { FC } from "react";
import { Title } from "@/components/common/Title";
import { List } from "@/components/common/List";
import { Link } from "@/components/common/link";

export const HebdoPosts: FC = () => (
  <>
    <Title level="h2">Notes de nos dernières rencontres hebdomadaires</Title>

    <List>
      <li>
        <Link href="/hebdo/2-fevrier-2023">2 février 2023</Link>
      </li>
    </List>
  </>
);
