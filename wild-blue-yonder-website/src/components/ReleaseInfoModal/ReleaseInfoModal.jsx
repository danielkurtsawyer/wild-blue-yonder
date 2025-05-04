import "./release-info-modal.css";

function ReleaseInfoModal({ data }) {
  console.log(data.name);
  return (
    <div className="release-info-modal-container">
      <div className="release-info-modal">
        <div className="release-modal-title">{data.name}</div>
      </div>
    </div>
  );
}

export default ReleaseInfoModal;
