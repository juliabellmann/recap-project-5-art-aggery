import FavIcon from "@/public/assets/heart.svg";
import FavIconFilled from "@/public/assets/heartfill.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? <FavIconFilled /> : <FavIcon />}
    </button>
  );
}
