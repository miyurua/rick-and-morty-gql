import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 font-semibold border border-b-slate-200">
      <Link to={"/"} className="hidden sm:flex sm:flex-row gap-2 items-center">
        Rick and Morty Wiki
        <img
          src="https://static-00.iconduck.com/assets.00/morty-icon-1772x2048-dmm773c0.png"
          className="w-[25px] h-[25px] mx-auto my-auto"
        />
      </Link>
      <Link to={"/"} className="sm:hidden block">
        <img
          src="https://static-00.iconduck.com/assets.00/morty-icon-1772x2048-dmm773c0.png"
          className="w-[25px] h-[25px] mx-auto my-auto"
        />
      </Link>
      <div className="flex flex-row gap-5">
        <Link to={"/all-characters"}>Characters</Link>
        <Link to={"/all-episodes"}>Episodes</Link>
        <Link to={"/all-locations"}>Locations</Link>
      </div>
    </div>
  );
};

export default Navbar;
