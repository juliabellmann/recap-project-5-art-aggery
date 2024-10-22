import ArtPieceDetails from "@/_components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPieceDetailPage({
  artPieces,
  artPieceInfo,
  toggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <div>Art Piece not found</div>;
  }

  const isFavorite = artPieceInfo.find(
    (item) => item.slug === slug
  )?.isFavorite;

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      isFavorite={isFavorite}
      onToggleFavorite={() => toggleFavorite(artPiece.slug)}
    />
  );
}
