import { Helmet } from "react-helmet";
import VideoList from "../components/VideoList/VideoList";
function Videos() {
  return (
    <>
      <Helmet>
        <title data-react-helmet="true">Wild Blue Yonder | Videos</title>
        <meta
          name="description"
          content="Watch Wild Blue Yonder in action! From live performances, music videos, and short films, the band has done it all."
        />
      </Helmet>
      <VideoList />
    </>
  );
}
export default Videos;
