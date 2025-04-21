import "./hero-image.css";
import heroImage from "../../assets/images/Photos/banner_image.jpg";

export default function HeroImage() {
  return (
    <div className="image-container">
      <img src={heroImage} alt="Wild Blue Yonder Banner" />
    </div>
  );
}
