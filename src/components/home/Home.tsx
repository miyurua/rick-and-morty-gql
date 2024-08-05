import { Button } from "../ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { MdOutlineWavingHand } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GiTeleport } from "react-icons/gi";
import { GiLongLeggedSpider } from "react-icons/gi";
import { CgGhostCharacter } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-grow flex-col items-center justify-center p-5 gap-5">
      <p className="text-4xl font-semibold text-center flex gap-4 items-center">
        Welcome to Rick and Morty Wiki <MdOutlineWavingHand />
      </p>
      <div className="flex w-full sm:w-1/2  flex-col gap-5">
        <p className="flex justify-start text-2xl font-semibold flex-row gap-4 items-center">
          <GiTeleport />
          About Rick and Morty
        </p>
        <p className="text-justify">
          Welcome to the Rick and Morty Wiki, the ultimate portal for all things
          related to the mind-bending, dimension-hopping, and hilariously dark
          animated series created by Justin Roiland and Dan Harmon. Here, you'll
          find comprehensive information about every episode, character,
          location, and more!
        </p>
        <p className="flex justify-start text-2xl font-semibold flex-row gap-4 items-center">
          <GiLongLeggedSpider />
          Explore the Multiverse
        </p>
        <p className="text-justify">
          Dive into the multiverse with us as we explore the bizarre and
          intriguing world of Rick Sanchez, the eccentric and often
          irresponsible scientist, and his good-hearted but easily influenced
          grandson, Morty Smith. From their wild interdimensional adventures to
          their everyday life on Earth, we cover it all.
        </p>
        <p className="flex justify-start text-2xl font-semibold flex-row gap-4 items-center">
          <CgGhostCharacter />
          What You Can Find Here:
        </p>
        <p className="text-justify">
          <ul className="flex flex-col gap-4">
            <li>
              Characters: In-depth profiles of your favorite (and least
              favorite) characters, from Rick and Morty to Mr. Meeseeks and
              Birdperson.
            </li>
            <li>
              Episode Guide: Explore each episode, complete with air dates and
              the characters featured.
            </li>
            <li>
              Locations: Discover the weird and wonderful places visited in the
              show, from the Citadel of Ricks to Gazorpazorp.
            </li>
          </ul>
        </p>

        <p className="flex justify-start text-2xl font-semibold flex-row gap-4 items-center">
          <FaPeopleGroup />
          Join the Community
        </p>
        <p className="text-justify">
          Connect with fellow fans, contribute to our growing database, and
          share your theories and insights. Whether you're a seasoned fan or new
          to the series, there's a place for you in our community.
        </p>

        <Button
          size={"lg"}
          variant={"default"}
          onClick={() => {
            navigate("/all-characters");
          }}
          className="w-1/2 mx-auto rounded-xl"
        >
          Get Started
          <ChevronRightIcon className="ml-5 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
