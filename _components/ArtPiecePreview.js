import Image from "next/image";

export default function ArtPiecesPreview({
  imageSource,
  title,
  artist,
  dimensions,
}) {
  const { height, width } = dimensions;
  return (
    <div>
      <Image src={imageSource} width={100} height={200} alt="Image" />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
