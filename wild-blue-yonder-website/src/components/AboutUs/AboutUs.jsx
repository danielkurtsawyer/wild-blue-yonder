import "./about-us.css";
import oakland from "../../assets/images/Photos/oakland.jpg";
import thunderbirdOverhead from "../../assets/images/Photos/thunderbird overhead.jpg";
import thunderbirdFloor from "../../assets/images/Photos/thunderbird floor.jpg";
import LinkPrimary from "../Link/LinkPrimary";

export default function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="content-sections">
        <div className="pic-and-paragraph">
          <img
            className="shadow-gradient-bottom-elevation-medium"
            src={oakland}
            alt="Oakland"
          />
          <p>
            <b>Frank Mileto </b> (Aux Percussion), <b>Mark Riggio</b> (Drums),{" "}
            <b>Dan Sawyer</b>
            (Bass/Guitar/Vocals), <b>Jason Kuehnle</b> (Keys),{" "}
            <b>Eli Alfieri</b>
            (Guitar/Bass/Vocals), and <b>Lucas Sherman</b> (Saxophone)
          </p>
        </div>
        <div className="pic-and-paragraph">
          <h2>Biography</h2>
          <img
            className="shadow-gradient-bottom-elevation-medium"
            src={thunderbirdFloor}
            alt="ThunderBirdFloor"
          />
          <p>
            Coming from Pittsburgh, PA, Wild Blue Yonder draws inspiration from
            funk, jazz, R&B/soul, and folk music, creating music that flows like
            rivers and blossoms like wildflowers. Their style mixes deliberate
            songwriting and spontaneous improvisation, making each song into an
            organic voyage of growth and exploration.
          </p>
        </div>
        <div className="pic-and-paragraph">
          <h2>Book Us</h2>
          <img
            className="shadow-gradient-bottom-elevation-medium"
            src={thunderbirdOverhead}
            alt="ThunderBirdOverhead"
          />
          <p>
            Interested in booking Wild Blue Yonder? Booking inquiries can be
            sent to: <br /> <br />
            <LinkPrimary
              href="https://google.com"
              text="booking@wildblueyondermusic.com"
              // className="shadow-gradient-bottom-elevation-medium"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
