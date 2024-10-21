import ArtPiecesPreview from "./ArtPiecePreview";

export default function ArtPieces({pieces}) {

    return (
        <div>
            {pieces.map((piece) => 
                <ArtPiecesPreview 
                    key={piece.slug}
                    imageSource={piece.imageSource}
                    title={piece.title}
                    artist={piece.artist}
                    dimensions={piece.dimensions}
                />
            )}           
        </div>
    );
}


