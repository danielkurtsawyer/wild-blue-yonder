import "./release-info-modal-track-list.css";

function ReleaseInfoModalTrackList({ trackList }) {
  return (
    <div className="release-info-modal-track-container">
      <h4 className="large-text">Track List</h4>
      <ol className="release-info-modal-track-list">
        {trackList.map((track) => (
          <li>{track}</li>
        ))}
      </ol>
    </div>
  );
}

export default ReleaseInfoModalTrackList;
