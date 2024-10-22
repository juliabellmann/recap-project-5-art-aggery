import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ pieces, toggleFavorite, artPieceInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        const isFavorite = artPieceInfo.find(
          (item) => item.slug === piece.slug
        )?.isFavorite;
        return (
          <div key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <Image
                src={piece.imageSource}
                height={200}
                width={200}
                alt="image"
              />
            </Link>
            <ArtPiecePreview
              title={piece.name}
              artist={piece.artist}
              isFavorite={isFavorite}
              onToggleFavorite={() => toggleFavorite(piece.slug)} // Favoriten umschalten
            />
          </div>
        );
      })}
    </ul>
  );
}
