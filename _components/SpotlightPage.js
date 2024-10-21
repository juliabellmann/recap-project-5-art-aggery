import Image from "next/image";

export default function SpotlightPage({ image, artist }) {
  return (
    <div>
      <Image src={image} width={100} height={200} alt="image" />
      <p>{artist}</p>
    </div>
  );
}
