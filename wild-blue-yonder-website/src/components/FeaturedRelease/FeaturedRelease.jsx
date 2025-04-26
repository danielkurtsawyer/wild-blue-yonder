import "./featured-release.css";
import BridgesArt from "../../assets/images/Album Art/bridges cover.jpg";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonTertiary from "../Button/ButtonTertiary";

export default function FeaturedRelease() {
  return (
    <div className="release-container">
      <div className="release-art">
        <img
          src={BridgesArt}
          alt=""
          className="shadow-gradient-bottom-elevation-medium"
        />
      </div>
      <div className="release-info">
        <h1>Bridges: Out Now!</h1>
        <p className="large-text">
          Stream the newest release from Wild Blue Yonder!
        </p>
        <ButtonPrimary
          href="https://google.com"
          text="Stream Bridges"
          className="shadow-gradient-bottom-elevation-medium release-button"
        />
        <ButtonSecondary
          href="https://google.com"
          text="Watch the Music Video"
          className="shadow-gradient-bottom-elevation-medium release-button"
        />
        <ButtonTertiary
          href="https://google.com"
          text="Watch the Live Version"
          className="shadow-gradient-bottom-elevation-medium release-button"
        />
      </div>
    </div>
  );
}
