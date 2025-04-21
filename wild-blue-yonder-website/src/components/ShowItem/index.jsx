import "./styles.css";
import ButtonPrimary from "../Button/ButtonPrimary.jsx";

export default function ShowItem({
  showDate,
  venueName,
  venueLocation,
  borderTop,
}) {
  console.log("showDate (index):", showDate); // See if 0 shows up

  return (
    <div className="show-item-container" style={{ borderTop }}>
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
