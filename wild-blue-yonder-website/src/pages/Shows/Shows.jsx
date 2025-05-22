import UpcomingShows from "../../components/UpcomingShows/UpcomingShows";
import pokerGraphic from "../../assets/images/Graphics/poker.svg";
import "./shows.css";

function Shows() {
  document.title = "Wild Blue Yonder | Shows";
  return (
    <>
      <title>Wild Blue Yonder | Shows</title>
      <meta
        name="description"
        content="Experience the riveting jams and fresh melodies of Wild Blue Yonder live in concert! Tickets are available now!"
      />
      <div className="shows-page-container">
        <UpcomingShows />
        <img className="poker" src={pokerGraphic} alt="" />
      </div>
    </>
  );
}

export default Shows;
