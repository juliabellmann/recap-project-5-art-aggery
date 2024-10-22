import ArtPieces from "@/_components/ArtPieces";

export default function FavouritesPage({pieces, toggleFavorite, artPieceInfo, artPieces}) {
    console.log("pieces test", pieces);
    const favPieces = pieces.fiter((piece) => artPieceInfo.find((item) => item.slug === piece.slug)?.isFavourite );
    
    return (
        <div>
            <ArtPieces 
            favPieces={favPieces}
                pieces={artPieces}
                toggleFavorite={toggleFavorite}
                artPieceInfo={artPieceInfo}
            />
        </div>
    );
}