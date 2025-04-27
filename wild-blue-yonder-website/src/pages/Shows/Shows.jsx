import UpcomingShows from "../../components/UpcomingShows/UpcomingShows";
import pokerGraphic from "../../assets/images/Graphics/poker.svg";
import "./shows.css";

function Shows() {
  return (
    <div className="shows-page-container">
      <UpcomingShows />
      <img className="poker" src={pokerGraphic} alt="" />
    </div>
  );
}

export default Shows;
