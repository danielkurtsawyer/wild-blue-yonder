import "./about.css";
import oakland from "../../assets/images/Photos/oakland.jpg";
import thunderbirdOverhead from "../../assets/images/Photos/thunderbird overhead.jpg";
import thunderbirdFloor from "../../assets/images/Photos/thunderbird floor.jpg";
import LinkPrimary from "../../components/Link/LinkPrimary";
import LinkTertiary from "../../components/Link/LinkTertiary.jsx";
import press from "./press.js";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="content-sections">
        <div className="pic-and-paragraph">
          <img
            className="shadow-elevation-medium"
            src={oakland}
            alt="Oakland"
          />
          <p className="band-members">
            <b>Frank Mileto</b> (Aux Percussion), <b>Mark Riggio</b> (Drums),{" "}
            <b>Dan Sawyer</b> (Bass/Guitar/Vocals), <b>Jason Kuehnle</b> (Keys),{" "}
            <b>Eli Alfieri</b> (Guitar/Bass/Vocals), and <b>Lucas Sherman</b>{" "}
            (Saxophone)
          </p>
        </div>
        <div className="pic-and-paragraph">
          <h2>Biography</h2>
          <img
            className="shadow-elevation-medium"
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
            className="shadow-elevation-medium"
            src={thunderbirdOverhead}
            alt="ThunderBirdOverhead"
          />
          <p className="booking-text">
            Interested in booking Wild Blue Yonder? Booking inquiries can be
            sent to <strong>Mark Bluemle</strong> at: <br /> <br />
            <LinkPrimary
              href="mailto:booking@wildblueyondermusic.com"
              text="booking@wildblueyondermusic.com"
              className="large-text"
              // className="shadow-gradient-bottom-elevation-medium"
            />
          </p>
        </div>
        <div className="pic-and-paragraph">
          <h2>WBY: In the Press</h2>
          <ul>
            {press.map((article) => (
              <li>
                <LinkTertiary href={article.link} text={article.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
