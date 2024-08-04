import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 font-semibold border border-b-slate-200">
      <Link to={"/"} className="hidden sm:block">
        Rick and Morty Wiki
      </Link>
      <Link to={"/"} className="sm:hidden block">
        Home
      </Link>
      <div className="flex flex-row gap-5">
        <Link to={"/all-characters"}>Characters</Link>
        <Link to={"/episodes"}>Episodes</Link>
        <Link to={"/locations"}>Locations</Link>
      </div>
    </div>
  );
};

export default Navbar;
