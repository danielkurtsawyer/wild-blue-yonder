import "./video-list.css";
import videos from "./videos.js";
import VideoItem from "../VideoItem/VideoItem.jsx";

export default function VideoList() {
  return (
    <div className="videos-container">
      <h1>Our Videos</h1>
      {videos.map((video, index) => {
        const videoId = video.link.split("youtu.be/")[1];
        const embedLink = `https://www.youtube.com/embed/${videoId}`;
        return <VideoItem key={index} title={video.title} link={embedLink} />;
      })}
    </div>
  );
}
