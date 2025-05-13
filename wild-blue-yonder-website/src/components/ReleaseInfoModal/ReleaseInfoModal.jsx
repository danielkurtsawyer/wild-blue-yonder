import ReleaseInfoModalTrackList from "../ReleaseInfoModalTrackList/ReleaseInfoModalTrackList.jsx";
import spotifyLogo from "../../assets/icons/spotify-icon.svg";
import appleMusicLogo from "../../assets/icons/musical-notes.svg";
import youtubeLogo from "../../assets/icons/logo-youtube.svg";
import closeIcon from "../../assets/icons/close.svg";
import "./release-info-modal.css";

function ReleaseInfoModal({
  name,
  src,
  spotify,
  appleMusic,
  youtube,
  trackList,
}) {
  function handleReleaseInfoModalClose() {
    const modal = document.querySelector(".release-info-modal-container");
    modal.classList.remove("active");
    document.body.style.overflow = "visible";
  }
  return (
    <div className="release-info-modal-container">
      <div className="release-info-modal shadow-elevation-highest">
        <div className="release-info-modal-title-and-close-container">
          <h3 className="release-info-modal-title">{name}</h3>
          <img
            onClick={handleReleaseInfoModalClose}
            className="release-info-modal-close"
            src={closeIcon}
            alt="Close"
          />
        </div>
        <img
          className="release-info-modal-cover-art"
          src={src}
          alt={`${name} Cover Art`}
        />

        {trackList && <ReleaseInfoModalTrackList trackList={trackList} />}

        <div className="release-info-modal-listen">
          <p className="large-text">Listen</p>
          <div className="release-info-modal-links-container">
            <a href={spotify} target="_blank" rel="noopener noreferrer">
              <img src={spotifyLogo} alt="Spotify" />
            </a>
            <a href={appleMusic} target="_blank" rel="noopener noreferrer">
              <img src={appleMusicLogo} alt="Apple Music" />
            </a>
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseInfoModal;
