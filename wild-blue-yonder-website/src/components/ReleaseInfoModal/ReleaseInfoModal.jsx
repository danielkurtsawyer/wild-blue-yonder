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
    const modalContainer = document.querySelector(
      ".release-info-modal-container"
    );
    const modal = document.querySelector(".release-info-modal");
    modalContainer.classList.remove("active");
    modal.classList.remove("active");
    document.body.style.overflow = "visible";
  }
  function handleHover(index) {
    let allATags = document.querySelectorAll(
      ".release-info-modal-links-container a"
    );
    allATags.forEach((tag) => {
      let indexOfTag = +tag.getAttribute("index");
      if (indexOfTag === index) {
        tag.classList.add("active");
        if (tag.classList.contains("inactive")) {
          tag.classList.remove("inactive");
        }
      } else {
        if (tag.classList.contains("active")) {
          tag.classList.remove("active");
        }
        tag.classList.add("inactive");
      }
    });
  }

  function handleLeave() {
    let allATags = document.querySelectorAll(
      ".release-info-modal-links-container a"
    );
    allATags.forEach((tag) => {
      if (tag.classList.contains("active")) {
        tag.classList.remove("active");
      }
      if (tag.classList.contains("inactive")) {
        tag.classList.remove("inactive");
      }
    });
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
            <a
              href={spotify}
              target="_blank"
              rel="noopener noreferrer"
              index="0"
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => handleLeave()}
            >
              <img src={spotifyLogo} alt="Spotify" />
            </a>
            <a
              href={appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              index="1"
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleLeave()}
            >
              <img src={appleMusicLogo} alt="Apple Music" />
            </a>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              index="2"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleLeave()}
            >
              <img src={youtubeLogo} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseInfoModal;
