import "./styles.css";
import ButtonPrimary from "../Button/ButtonPrimary.jsx";

export default function ShowItem({
  showDate,
  venueName,
  venueLocation,
  borderTop,
  showTitle,
}) {
  return (
    <div className="show-item-container" style={{ borderTop }}>
      <div className="date-and-title">
        <h4>{showDate ? showDate : "Show Date"}</h4>
        {showTitle ? <h4 className="subtitle">{showTitle}</h4> : null}
      </div>
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
