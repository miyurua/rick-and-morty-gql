import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCharacters from "./components/characters/AllCharacters";
import Navbar from "./components/Navbar/Navbar";
import SingleCharacter from "./components/characters/SingleCharacter";
import Home from "./components/home/Home";
import AllEpisodes from "./components/episodes/AllEpisodes";
import SingleEpisode from "./components/episodes/SingleEpisode";
import AllLocations from "./components/locations/AllLocations";
import SingleLocation from "./components/locations/SingleLocation";

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
        <Route path="/all-locations" element={<AllLocations />} />
        <Route path="/all-locations/:id" element={<SingleLocation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
