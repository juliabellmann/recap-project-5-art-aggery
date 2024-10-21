import ArtPieceDetails from "@/_components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <div>Art Piece not found</div>;
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
