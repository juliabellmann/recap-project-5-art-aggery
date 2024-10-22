import ArtPieces from "@/_components/ArtPieces";

export default function FavouritesPage({artPieces, toggleFavorite, artPieceInfo}) {

    const favPieces = artPieces?.filter((piece) => artPieceInfo.find((item) => item.slug === piece.slug && item.isFavorite));
    
    return (
        <div>
            <ArtPieces 
                pieces={favPieces}
                toggleFavorite={toggleFavorite}
                artPieceInfo={artPieceInfo}
            />
        </div>
    );
}