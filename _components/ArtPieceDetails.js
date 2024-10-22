import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        height={300}
        width={300}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <p>jahr: {year}</p>
      <p>genre: {genre}</p>
    </>
  );
}
