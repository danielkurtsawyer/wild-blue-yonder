import HeroImage from "../../components/HeroImage/HeroImage";
import FeaturedRelease from "../../components/FeaturedRelease/FeaturedRelease";
import UpcomingShows from "../../components/UpcomingShows/UpcomingShows";
import "./home.css";

function Home() {
  return (
    <div className="home-page-container">
      <HeroImage />
      <FeaturedRelease />
      <UpcomingShows />
    </div>
  );
}

export default Home;
