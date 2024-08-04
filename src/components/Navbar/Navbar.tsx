import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 font-semibold">
      <p>Rick and Morty Wiki</p>
      <div className="flex flex-row gap-5">
        <Link to={"/all-characters"}>All Characters</Link>
        <Link to={"/episodes"}>Episodes</Link>
      </div>
    </div>
  );
};

export default Navbar;
