export default function FavouriteButton() {
    retunr (
        <button>
            {isFavourite ? "remove from favourite" : "add to favourite"}
        </button>
    );
}