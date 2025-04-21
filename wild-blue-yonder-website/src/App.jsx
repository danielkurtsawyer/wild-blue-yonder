import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ButtonPrimary from "./components/Button/ButtonPrimary.jsx";
import ButtonSecondary from "./components/Button/ButtonSecondary.jsx";
import ButtonTertiary from "./components/Button/ButtonTertiary.jsx";
import UpcomingShows from "./components/UpcomingShows/index.jsx";
import ShowItem from "./components/ShowItem/index.jsx";

function App() {
  return (
    <>
      <header className="shadow-gradient-top-elevation-low">
        <Header />
      </header>
      <main>
        <ButtonPrimary
          text="Stream Bridges"
          className="shadow-gradient-bottom-elevation-medium"
        />
        <ButtonSecondary
          text="Watch the Music Video"
          className="shadow-gradient-bottom-elevation-medium"
        />
        <ButtonTertiary
          text="Watch the Live Version"
          className="shadow-gradient-bottom-elevation-medium"
        />
        <UpcomingShows />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
