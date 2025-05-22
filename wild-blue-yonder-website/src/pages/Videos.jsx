import VideoList from "../components/VideoList/VideoList";
function Videos() {
  document.title = "Wild Blue Yonder | Videos";

  return (
    <>
      <title>Wild Blue Yonder | Videos</title>
      <meta
        name="description"
        content="Watch Wild Blue Yonder in action! From live performances, music videos, and short films, the band has done it all."
      />
      <VideoList />
    </>
  );
}
export default Videos;
