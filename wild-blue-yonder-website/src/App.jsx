import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ButtonPrimary from "./components/Button/ButtonPrimary.jsx";
import ButtonSecondary from "./components/Button/ButtonSecondary.jsx";
import ButtonTertiary from "./components/Button/ButtonTertiary.jsx";
import LinkPrimary from "./components/Link/LinkPrimary.jsx";
import LinkSecondary from "./components/Link/LinkSecondary.jsx";
import LinkTertiary from "./components/Link/LinkTertiary.jsx";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows.jsx";

function App() {
  return (
    <>
      <header className="shadow-gradient-top-elevation-low">
        <Header />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
