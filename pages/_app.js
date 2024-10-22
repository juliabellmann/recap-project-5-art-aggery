import RootLayout from "@/_components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPieceInfo, setArtPieceInfo] = useState([]);

  if (error) return <div>API nicht voranden</div>;
  if (!data) return <div>Daten können nicht geladen werden</div>;

  const toggleFavorite = (slug) => {
    console.log("for slug: " + slug);
    const artPiece = artPieceInfo.find((piece) => piece.slug === slug);
    if (!artPiece) {
      setArtPieceInfo([...artPieceInfo, { slug, isFavorite: true }]);
    } else {
      setArtPieceInfo(
        artPieceInfo.map((piece) =>
          piece.slug === slug ? { slug, isFavorite: !piece.isFavorite } : piece
        )
      );
    }
  };
  console.log("appjs test: ", artPieceInfo);

  return (
    <>
      <GlobalStyle />
      <RootLayout />
      <Component
        {...pageProps}
        artPieces={data}
        artPieceInfo={artPieceInfo}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
