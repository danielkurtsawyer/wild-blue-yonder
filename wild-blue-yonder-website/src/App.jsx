import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Shows from "./pages/Shows.jsx";
import Videos from "./pages/Videos.jsx";
import Music from "./pages/Music/Music.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
