import ReleaseItem from "../components/ReleaseItem/ReleaseItem";
import BridgesCoverArt from "../assets/images/Album Art/bridges cover.jpg";

function Music() {
  return (
    <div className="music-container">
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
    </div>
  );
}

export default Music;
