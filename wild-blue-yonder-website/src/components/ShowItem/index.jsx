import "./styles.css";
import ButtonPrimary from "../Button/ButtonPrimary.jsx";

export default function ShowItem({ showDate, venueName, venueLocation }) {
  return (
    <div className="show-item-container">
      <h4>{showDate ? showDate : "Show Date"}</h4>
      <p className="large-text">{venueName ? venueName : "Venue Name"}</p>
      <p className="large-text">
        {venueLocation ? venueLocation : "Venue Location"}
      </p>
      <ButtonPrimary
        text="TICKETS"
        className="shadow-gradient-bottom-elevation-medium"
      />
    </div>
  );
}
