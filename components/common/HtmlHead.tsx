import Head from "next/head";
import { FC } from "react";

export const HtmlHead: FC = () => (
  <Head>
    <title>Formica</title>
    <meta
      name="description"
      content="Groupement de développeurs passionnés à Angoulême"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
