import { useState } from "react";
import ReleaseItem from "../ReleaseItem/ReleaseItem";
import ReleaseInfoModal from "../ReleaseInfoModal/ReleaseInfoModal";
import "./release-list.css";
import releases from "./releases.js";

function ReleaseList() {
  const [activeRelease, setActiveRelease] = useState(releases[0]);
  function handleReleaseInfoModalOpen() {
    const modal = document.querySelector(".release-info-modal-container");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  const onReleaseClick = (releaseIndex) => {
    setActiveRelease(releases[releaseIndex]);
    handleReleaseInfoModalOpen();
  };

  const releaseList = releases.map((release, index) => (
    <ReleaseItem
      key={release.name}
      coverArt={release.src}
      releaseName={release.name}
      releaseIndex={index}
      onClick={onReleaseClick}
    />
  ));
  return (
    <div className="release-list-container">
      {releaseList}
      <ReleaseInfoModal
        name={activeRelease.name}
        src={activeRelease.src}
        spotify={activeRelease.spotify}
        appleMusic={activeRelease.appleMusic}
        youtube={activeRelease.youtube}
        trackList={activeRelease.trackList}
      />
    </div>
  );
}
export default ReleaseList;
