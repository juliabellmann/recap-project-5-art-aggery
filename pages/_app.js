"use client";

import RootLayout from "@/_components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState("");

  const saveFavourites = () => {
    localStorageState("key", artPiecesInfo);
  };

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>API nicht voranden</div>;
  if (!data) return <div>Daten können nicht geladen werden</div>;

  return (
    <>
      <GlobalStyle />
      <RootLayout></RootLayout>
      <Component {...pageProps} artPieces={data} />
    </>
  );
}
