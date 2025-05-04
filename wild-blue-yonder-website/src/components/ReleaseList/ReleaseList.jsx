import { useState } from "react";
import ReleaseItem from "../ReleaseItem/ReleaseItem";
import ReleaseInfoModal from "../ReleaseInfoModal/ReleaseInfoModal";
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
  const [activeRelease, setActiveRelease] = useState(releases[0]);
  console.log(activeRelease);
  function handleReleaseInfoModalOpen() {
    const modal = document.querySelector(".release-info-modal-container");
    modal.classList.add("active");
  }

  const onReleaseClick = (releaseIndex) => () => {
    setActiveRelease(releases[releaseIndex]);
    console.log(activeRelease);
    handleReleaseInfoModalOpen();
  };

  const releaseList = releases.map((release, index) => (
    <ReleaseItem
      coverArt={release.src}
      releaseName={release.name}
      releaseIndex={index}
      onClick={onReleaseClick}
    />
  ));
  return (
    <div className="release-list-container">
      {releaseList}
      <ReleaseInfoModal data={activeRelease} />
    </div>
  );
}
export default ReleaseList;
