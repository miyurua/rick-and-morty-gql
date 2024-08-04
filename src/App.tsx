import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCharacters from "./components/characters/AllCharacters";
import Navbar from "./components/Navbar/Navbar";
import SingleCharacter from "./components/characters/SingleCharacter";
import Home from "./components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-characters" element={<AllCharacters />} />
        <Route path="/all-characters/:id" element={<SingleCharacter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
