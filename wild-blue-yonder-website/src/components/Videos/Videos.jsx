import "./videos.css";
import videos from "./videos.js";
import VideoItem from "../VideoItem/VideoItem.jsx";

export default function Videos() {
  return (
    <div className="videos-container">
      <h2>Our Videos</h2>
      {videos.map((video, index) => {
        const videoId = video.link.split("youtu.be/")[1];
        const embedLink = `https://www.youtube.com/embed/${videoId}`;
        return <VideoItem key={index} title={video.title} link={embedLink} />;
      })}
    </div>
  );
}
