import ArtPieces from "@/_components/ArtPieces";
import Spotlight from "@/_components/Spotlight";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>API nicht voranden</div>;
  if (!data) return <div>Daten können nicht geladen werden</div>;

  const randomIndex = Math.floor(Math.random() * data.length);
  console.log(randomIndex);

  return (
    <div>
      <ArtPieces pieces={data} />
      <Spotlight
        image={data[randomIndex].imageSource}
        artist={data[randomIndex].artist}
      />
    </div>
  );
}

// function getRandomArtPieces(min, max) {
//   const minPiece = Math.ceil(min);
//   const maxPiece = Math.floor(max);
//   return Math.floor(Math.random() * (maxPiece - minPiece) + minPiece);
// }
// const randomArtPieces = getRandomArtPieces(0, 12);
