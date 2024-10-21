import ArtPiecesPreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecesPreview
          key={piece.slug}
          slug={piece.slug}
          imageSource={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          dimensions={piece.dimensions}
        />
      ))}
    </div>
  );
}
