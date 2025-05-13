import "./featured-release.css";
import BridgesArt from "../../assets/images/Album Art/bridges cover.jpg";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonTertiary from "../Button/ButtonTertiary";

export default function FeaturedRelease({
  src,
  alt,
  heading,
  description,
  primaryLink,
  secondaryLink,
  tertiaryLink,
  primaryText,
  secondaryText,
  tertiaryText,
}) {
  return (
    <div className="release-container">
      <div className="release-art">
        <img src={src} alt={alt} className="shadow-elevation-medium" />
      </div>
      <div className="release-info">
        <h1>{heading}</h1>
        <p className="large-text">{description}</p>
        {primaryLink && (
          <ButtonPrimary
            href={primaryLink}
            text={primaryText}
            className="shadow-elevation-medium release-button"
          />
        )}
        {secondaryLink && (
          <ButtonSecondary
            href={secondaryLink}
            text={secondaryText}
            className="shadow-elevation-medium release-button"
          />
        )}
        {tertiaryLink && (
          <ButtonTertiary
            href={tertiaryLink}
            text={tertiaryText}
            className="shadow-elevation-medium release-button"
          />
        )}
      </div>
    </div>
  );
}
