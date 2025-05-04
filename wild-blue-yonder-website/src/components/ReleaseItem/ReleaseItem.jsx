import ReleaseInfoModal from "../ReleaseInfoModal/ReleaseInfoModal.jsx";

import "./release-item.css";
function ReleaseItem({ coverArt, releaseName, releaseIndex, onClick }) {
  return (
    <div
      className="release-item-container"
      onClick={() => {
        console.log(releaseIndex + " Clicked");
        onClick(releaseIndex);
      }}
    >
      <img
        className="release-cover-art shadow-gradient-bottom-elevation-medium"
        src={coverArt}
        alt={releaseName}
      />
      <p className="release-name large-text">{releaseName}</p>
    </div>
  );
}

export default ReleaseItem;
