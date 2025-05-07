import HeroImage from "../../components/HeroImage/HeroImage";
import FeaturedRelease from "../../components/FeaturedRelease/FeaturedRelease";
import UpcomingShows from "../../components/UpcomingShows/UpcomingShows";
import BridgesArt from "../../assets/images/Album Art/bridges cover.jpg";

import "./home.css";

function Home() {
  return (
    <div className="home-page-container">
      <HeroImage />
      <FeaturedRelease
        src={BridgesArt}
        alt=""
        heading="Bridges: Out Now!"
        description="Stream the newest release from Wild Blue Yonder!"
        primaryLink="https://distrokid.com/hyperfollow/wildblueyonder/bridges"
        primaryText="Stream Bridges"
        secondaryLink="https://youtu.be/d_t6Ajy9c9I?si=eQs55cBzLSrjnoQa"
        secondaryText="Watch the Music Video"
      />
      <UpcomingShows />
    </div>
  );
}

export default Home;
