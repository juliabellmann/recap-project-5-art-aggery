import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  const router = useRouter();
  return (
    <div>
      <Image src={image} width={100} height={200} alt="Image" />
      <h2>{name}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <button onClick={() => router.push("/art-pieces")}>return</button>
    </div>
  );
}
