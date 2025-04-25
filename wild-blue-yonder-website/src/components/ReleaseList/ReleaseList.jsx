import ReleaseItem from "../ReleaseItem/ReleaseItem";
import "./release-list.css";

// add new releases here
import BridgesCoverArt from "../../assets/images/Album Art/bridges cover.jpg";
import JoleneCoverArt from "../../assets/images/Album Art/Jolene cover.jpeg";
import WhenImWithYouCoverArt from "../../assets/images/Album Art/when im with you cover.jpeg";
import GreenvilleCoverArt from "../../assets/images/Album Art/live from green cover.jpeg";
import DancingAstrayCoverArt from "../../assets/images/Album Art/dancing astray cover.jpg";

function ReleaseList() {
  return (
    <div className="release-list-container">
      <ReleaseItem coverArt={BridgesCoverArt} releaseName="Bridges" />
      <ReleaseItem coverArt={JoleneCoverArt} releaseName="Jolene" />
      <ReleaseItem
        coverArt={WhenImWithYouCoverArt}
        releaseName="When I'm With You"
      />
      <ReleaseItem
        coverArt={GreenvilleCoverArt}
        releaseName="Greenville, SC 6/17/23 (Live)"
      />
      <ReleaseItem
        coverArt={DancingAstrayCoverArt}
        releaseName="Dancing Astray"
      />
    </div>
  );
}
export default ReleaseList;
