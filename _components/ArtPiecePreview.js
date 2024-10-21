import Image from "next/image";
import Link from "next/link";

export default function ArtPiecesPreview({
  imageSource,
  title,
  artist,
  dimensions,
  slug,
}) {
  const { height, width } = dimensions;
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={imageSource} width={100} height={200} alt="Image" />
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
