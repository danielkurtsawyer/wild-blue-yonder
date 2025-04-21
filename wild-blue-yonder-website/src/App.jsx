import { useState } from "react";

<<<<<<< HEAD
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ButtonPrimary from './components/Button/ButtonPrimary.jsx'
import ButtonSecondary from './components/Button/ButtonSecondary.jsx'
import ButtonTertiary from './components/Button/ButtonTertiary.jsx'
import LinkPrimary from './components/Link/LinkPrimary.jsx'
import LinkSecondary from './components/Link/LinkSecondary.jsx'
import LinkTertiary from './components/Link/LinkTertiary.jsx'
=======
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ButtonPrimary from "./components/Button/ButtonPrimary.jsx";
import ButtonSecondary from "./components/Button/ButtonSecondary.jsx";
import ButtonTertiary from "./components/Button/ButtonTertiary.jsx";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows.jsx";
import ShowItem from "./components/ShowItem/ShowItem.jsx";
>>>>>>> origin/show-list

function App() {
  return (
    <>
      <header className="shadow-gradient-top-elevation-low">
        <Header />
      </header>
      <main>
<<<<<<< HEAD
        <ButtonPrimary href='https://www.google.com/' text='Stream Bridges' className='shadow-gradient-bottom-elevation-medium'/>
        <ButtonSecondary href='https://www.google.com/' text='Watch the Music Video' className='shadow-gradient-bottom-elevation-medium'/>
        <ButtonTertiary href='https://www.google.com/' text='Watch the Live Version' className='shadow-gradient-bottom-elevation-medium'/>
        <LinkPrimary href='https://www.google.com/' text='Primary' className='link-primary'/>
        <LinkSecondary href='https://www.google.com/' text='Secondary' className='link-secondary'/>
        <LinkTertiary href='https://www.google.com/' text='Tertiary' className='link-tertiary'/>
=======
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
>>>>>>> origin/show-list
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
