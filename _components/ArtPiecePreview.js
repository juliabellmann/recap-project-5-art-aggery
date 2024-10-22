import FavoriteButton from "./FavouriteButton";

export default function ArtPiecePreview({
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
