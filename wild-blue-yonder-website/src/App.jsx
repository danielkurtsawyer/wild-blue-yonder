import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Shows from "./pages/Shows.jsx";
import Videos from "./pages/Videos.jsx";
import Music from "./pages/Music.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ButtonPrimary from "./components/Button/ButtonPrimary.jsx";
import ButtonSecondary from "./components/Button/ButtonSecondary.jsx";
import ButtonTertiary from "./components/Button/ButtonTertiary.jsx";
import LinkPrimary from "./components/Link/LinkPrimary.jsx";
import LinkSecondary from "./components/Link/LinkSecondary.jsx";
import LinkTertiary from "./components/Link/LinkTertiary.jsx";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows.jsx";
import HeroImage from "./components/HeroImage/HeroImage.jsx";
import FeaturedRelease from "./components/FeaturedRelease/FeaturedRelease.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
