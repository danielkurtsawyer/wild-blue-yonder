import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Shows from "./pages/Shows/Shows.jsx";
import Videos from "./pages/Videos.jsx";
import Music from "./pages/Music/Music.jsx";
import About from "./pages/About/About.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
