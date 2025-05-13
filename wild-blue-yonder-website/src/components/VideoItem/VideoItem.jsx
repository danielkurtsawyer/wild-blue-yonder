import "./video-item.css";

export default function VideoItem({ title, link }) {
  console.log(link);
  return (
    <div className="video-item-container">
      <h4>{title ? title : "Video Title"}</h4>
      <iframe
        className="youtube-container shadow-elevation-medium"
        src={link}
      ></iframe>
    </div>
  );
}
