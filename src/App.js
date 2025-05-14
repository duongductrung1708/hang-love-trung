import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoveStory from "./pages/LoveStory";
import Diary from "./pages/Diary";
import LoveLetter from "./pages/LoveLetter";
import Gallery from "./pages/Gallery";
import SpecialDates from "./pages/SpecialDates";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/love-story" element={<LoveStory />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/special-dates" element={<SpecialDates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
