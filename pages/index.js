import ArtPieces from "@/_components/ArtPieces";
import Navigation from "@/_components/Navigation";
import SpotlightPage from "@/_components/SpotlightPage";

export default function HomePage({artPieces}) {

  // console.log("Text test", artPieces);
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  return (
    <div>
      {/* <Navigation></Navigation> */}
      {/* <ArtPieces pieces={artPieces} /> */}
      <SpotlightPage
        image={artPieces[randomIndex]?.imageSource}
        artist={artPieces[randomIndex]?.artist}
      />
    </div>
  );
}