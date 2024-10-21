import Image from "next/image";

export default function ArtPiecesPreview({imageSource, title, artist, dimensions}) {

    const {height, width} = dimensions;
    return (
        <div>
       <Image src={imageSource} width={width} height={height} alt="Image" />
       <h2>{title}</h2>
       <p>{artist}</p>
        </div>
    );
}
