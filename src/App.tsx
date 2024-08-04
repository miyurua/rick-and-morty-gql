import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCharacters from "./components/characters/AllCharacters";
import Navbar from "./components/Navbar/Navbar";
import SingleCharacter from "./components/characters/SingleCharacter";
import Home from "./components/home/Home";
import AllEpisodes from "./components/episodes/AllEpisodes";
import SingleEpisode from "./components/episodes/SingleEpisode";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-characters" element={<AllCharacters />} />
        <Route path="/all-characters/:id" element={<SingleCharacter />} />
        <Route path="/all-episodes" element={<AllEpisodes />} />
        <Route path="/all-episodes/:id" element={<SingleEpisode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
