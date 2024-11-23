import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 font-semibold border border-b-slate-200">
      <Link to={"/"} className="hidden sm:flex sm:flex-row gap-2 items-center">
        Rick and Morty Wiki
        <img
          src="https://img.icons8.com/?size=100&id=Ocfm6Fh6OeYW&format=png&color=000000"
          className="w-[25px] h-[25px] mx-auto my-auto"
        />
      </Link>
      <Link to={"/"} className="sm:hidden block">
        <img
          src="https://img.icons8.com/?size=100&id=Ocfm6Fh6OeYW&format=png&color=000000"
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
