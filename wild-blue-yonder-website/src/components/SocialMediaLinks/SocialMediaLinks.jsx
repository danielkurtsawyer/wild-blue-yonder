import spotifyLogo from "../../assets/icons/spotify-icon.svg";
import appleMusicLogo from "../../assets/icons/musical-notes.svg";
import instagramLogo from "../../assets/icons/logo-instagram.svg";
import youtubeLogo from "../../assets/icons/logo-youtube.svg";
import facebookLogo from "../../assets/icons/logo-facebook.svg";
import tiktokLogo from "../../assets/icons/logo-tiktok.svg";

import "./social-media-links.css";

function SocialMediaLinks() {
  function handleHover(index) {
    let allATags = document.querySelectorAll(".social-media-links-wrapper a");
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
    let allATags = document.querySelectorAll(".social-media-links-wrapper a");
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
    <div className="social-media-links-wrapper">
      <a
        href="https://open.spotify.com/artist/7CneY53wJ8pyuYpU0uk3vE?si=NFtAy3c_TgCLIgtTSds-Og"
        target="_blank"
        rel="noopener noreferrer"
        index="0"
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={spotifyLogo} alt="Spotify" />
      </a>
      <a
        href="https://music.apple.com/us/artist/wild-blue-yonder/1483149496"
        target="_blank"
        rel="noopener noreferrer"
        index="1"
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={appleMusicLogo} alt="Apple Music" />
      </a>
      <a
        href="https://instagram.com/wildblueyonderjams"
        target="_blank"
        rel="noopener noreferrer"
        index="2"
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={instagramLogo} alt="Instagram" />
      </a>
      <a
        href="https://www.youtube.com/@wildblueyonder3557"
        target="_blank"
        rel="noopener noreferrer"
        index="3"
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={youtubeLogo} alt="Youtube" />
      </a>
      <a
        href="https://tiktok.com/@wildblueyonderjams"
        target="_blank"
        rel="noopener noreferrer"
        index="4"
        onMouseEnter={() => handleHover(4)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={tiktokLogo} alt="TikTok" />
      </a>
      <a
        href="https://www.facebook.com/WildBlueYonderJams/"
        target="_blank"
        rel="noopener noreferrer"
        index="5"
        onMouseEnter={() => handleHover(5)}
        onMouseLeave={() => handleLeave()}
      >
        <img src={facebookLogo} alt="FaceBook" />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
