import ReleaseItem from "../ReleaseItem/ReleaseItem";
import "./release-list.css";

// import new releases here
import BridgesCoverArt from "../../assets/images/Album Art/bridges cover.jpg";
import JoleneCoverArt from "../../assets/images/Album Art/Jolene cover.jpeg";
import WhenImWithYouCoverArt from "../../assets/images/Album Art/when im with you cover.jpeg";
import GreenvilleCoverArt from "../../assets/images/Album Art/live from green cover.jpeg";
import DancingAstrayCoverArt from "../../assets/images/Album Art/dancing astray cover.jpg";

const releases = [
  // add new releases here
  {
    src: BridgesCoverArt,
    name: "Bridges",
  },
  {
    src: JoleneCoverArt,
    name: "Jolene",
  },
  {
    src: WhenImWithYouCoverArt,
    name: "When I'm With You",
  },
  {
    src: GreenvilleCoverArt,
    name: "Greenville, SC 6/17/23 (Live)",
  },
  {
    src: DancingAstrayCoverArt,
    name: "Dancing Astray",
  },
];

function ReleaseList() {
  return (
    <div className="release-list-container">
      {releases.map((release) => (
        <ReleaseItem coverArt={release.src} releaseName={release.name} />
      ))}
    </div>
  );
}
export default ReleaseList;
