import Image from "next/image";
import FavoriteButton from "./FavouriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <Image
        src={image}
        height={height}
        width={width}
        alt={`Picture of ${title}`}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
