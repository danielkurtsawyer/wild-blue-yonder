import ReleaseList from "../../components/ReleaseList/ReleaseList";
import "./music.css";

function Music() {
  return (
    <div className="music-container">
      <h2 className="page-header">Our Music</h2>
      <ReleaseList />
    </div>
  );
}

export default Music;
