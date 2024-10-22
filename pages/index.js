import SpotlightPage from "@/_components/SpotlightPage";

export default function HomePage({ artPieces }) {
  if (!artPieces) return <div>Lade Kunstwerke...</div>;

  const randomIndex = Math.floor(Math.random() * artPieces.length);

  return (
    <div>
      <SpotlightPage
        image={artPieces[randomIndex]?.imageSource}
        artist={artPieces[randomIndex]?.artist}
      />
    </div>
  );
}
