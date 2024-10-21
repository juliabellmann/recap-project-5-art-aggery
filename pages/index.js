import ArtPieces from "@/_components/ArtPieces";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <div>API nicht voranden</div>
  if (!data) return <div>Daten können nicht geladen werden</div>
  
  return (
    <div>
      <ArtPieces pieces={data}/>
    </div>
  );
}
