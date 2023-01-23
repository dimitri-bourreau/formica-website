import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => (
  <Html lang="fr">
    <Head />
    <body className="font-sans flex justify-center items-center min-h-screen px-20 py-10">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
