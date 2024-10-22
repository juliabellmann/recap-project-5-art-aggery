import ArtPieces from "@/_components/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  toggleFavorite,
  artPieceInfo,
}) {
  // console.log(artPieces);
  return (
    <ArtPieces
      pieces={artPieces}
      toggleFavorite={toggleFavorite}
      artPieceInfo={artPieceInfo}
    />
  );
}
