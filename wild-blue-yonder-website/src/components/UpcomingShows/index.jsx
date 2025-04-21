import "./styles.css";
import ShowItem from "../ShowItem/index.jsx";
import shows from "./shows.js";

export default function UpcomingShows() {
  return (
    <div className="shows-container">
      <h2 className="upcoming-shows-header">Upcoming Shows</h2>
      {shows.map((show, index) => {
        return (
          <ShowItem
            key={index}
            showDate={show.date}
            venueName={show.name}
            venueLocation={show.location}
            borderTop={index === 0 ? "2px solid black" : ""}
          />
        );
      })}
      {/* <ShowItem
        showDate="August 16, 2025"
        venueName="Yonder Fest"
        venueLocation="ButtFuck, PA"
      />
      <ShowItem /> */}
    </div>
  );
}
