// import new releases here
import BridgesCoverArt from "../../assets/images/Album Art/bridges cover.jpg";
import JoleneCoverArt from "../../assets/images/Album Art/Jolene cover.jpeg";
import WhenImWithYouCoverArt from "../../assets/images/Album Art/when im with you cover.jpeg";
import GreenvilleCoverArt from "../../assets/images/Album Art/live from green cover.jpeg";
import DancingAstrayCoverArt from "../../assets/images/Album Art/dancing astray cover.jpg";

const releases = [
  // add new releases here
  {
    src: BridgesCoverArt,
    name: "Bridges",
    spotify:
      "https://open.spotify.com/track/1QHWUuaM5nbOtZSU9ebt5B?si=74f43b8165aa49e0",
    appleMusic: "https://music.apple.com/us/album/bridges-single/1805530035",
    youtube: "https://youtu.be/I_pmaDxSd1o?si=5b7IhwfrPaPmwwAs",
  },
  {
    src: JoleneCoverArt,
    name: "Jolene",
  },
  {
    src: WhenImWithYouCoverArt,
    name: "When I'm With You",
  },
  {
    src: GreenvilleCoverArt,
    name: "Greenville, SC 6/17/23 (Live)",
    trackList: [
      "Storms on Jupiter - Live 6/17/2023",
      "Sun Jam - Live 6/17/2023",
      "Game of Life - Live 6/17/2023",
    ],
  },
  {
    src: DancingAstrayCoverArt,
    name: "Dancing Astray",
    trackList: [
      "Lighthouse",
      "Nothing to Lose",
      "Storms on Jupiter",
      "Icarus",
      "Fake Yellow Sun (Sun Jam pt. 1)",
      "Heart of the Sun (Sun Jam pt. 2)",
      "Masakali",
      "Dig a Hole",
      "Angels Prevail",
    ],
  },
];

export default releases;
