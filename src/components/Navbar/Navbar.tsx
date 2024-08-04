import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 font-semibold">
      <Link to={"/"}>Rick and Morty Wiki</Link>
      <div className="flex flex-row gap-5">
        <Link to={"/all-characters"}>All Characters</Link>
        <Link to={"/episodes"}>Episodes</Link>
        <Link to={"/locations"}>Locations</Link>
      </div>
    </div>
  );
};

export default Navbar;
