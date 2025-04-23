import ReleaseItem from "../ReleaseItem/ReleaseItem";
import "./release-list.css";
import BridgesCoverArt from "../../assets/images/Album Art/bridges cover.jpg";

function ReleaseList() {
  return (
    <div className="release-list-container">
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
    </div>
  );
}
export default ReleaseList;
