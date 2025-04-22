import "./video-item.css";

export default function VideoItem({ title, link }) {
  console.log(link);
  return (
    <div className="show-item-container">
      <h4>{title ? title : "Video Title"}</h4>
      <iframe className="youtube-container" src={link}></iframe>
    </div>
  );
}
