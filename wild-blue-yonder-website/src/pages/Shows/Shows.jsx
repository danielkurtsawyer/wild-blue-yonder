import { Helmet } from "react-helmet";
import UpcomingShows from "../../components/UpcomingShows/UpcomingShows";
import pokerGraphic from "../../assets/images/Graphics/poker.svg";
import "./shows.css";

function Shows() {
  return (
    <>
      <Helmet>
        <title data-react-helmet="true">Wild Blue Yonder | Shows</title>
        <meta
          name="description"
          content="Experience the riveting jams and fresh melodies of Wild Blue Yonder live in concert! Tickets are available now!"
        />
      </Helmet>
      <div className="shows-page-container">
        <UpcomingShows />
        <img className="poker" src={pokerGraphic} alt="" />
      </div>
    </>
  );
}

export default Shows;
