import ReleaseList from "../../components/ReleaseList/ReleaseList";
import "./music.css";

function Music() {
  return (
    <div className="music-container">
      <h1 className="page-header">Our Music</h1>
      <ReleaseList />
    </div>
  );
}

export default Music;
