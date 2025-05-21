import { Helmet } from "react-helmet";
import ReleaseList from "../../components/ReleaseList/ReleaseList";
import "./music.css";

function Music() {
  return (
    <>
      <Helmet>
        <title data-react-helmet="true">Wild Blue Yonder | Music</title>
        <meta
          name="description"
          content="Stream Wild Blue Yonder! Dive into original genre-blending songs from Pittsburgh's premier improvisational jam band."
        />
      </Helmet>
      <div className="music-container">
        <h1 className="page-header">Our Music</h1>
        <ReleaseList />
      </div>
    </>
  );
}

export default Music;
