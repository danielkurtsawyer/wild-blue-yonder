import "./release-item.css";
function ReleaseItem({ coverArt, releaseName }) {
  return (
    <div className="release-item-container">
      <img
        className="release-cover-art shadow-gradient-bottom-elevation-medium"
        src={coverArt}
        alt={releaseName}
      />
      <p className="release-name large-text">{releaseName}</p>
    </div>
  );
}

export default ReleaseItem;
