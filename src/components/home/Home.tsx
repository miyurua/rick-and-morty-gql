import { Button } from "../ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-5 gap-5">
      <p className="text-4xl font-semibold">Welcome to Rick and Morty Wiki</p>
      <p className="text-2xl font-semibold">About Rick and Morty</p>
      <p className="w-1/2 text-justify">
        Welcome to the Rick and Morty Wiki, the ultimate portal for all things
        related to the mind-bending, dimension-hopping, and hilariously dark
        animated series created by Justin Roiland and Dan Harmon. Here, you'll
        find comprehensive information about every episode, character, location,
        and more!
      </p>
      <p className="text-2xl font-semibold">Explore the Multiverse</p>
      <p className="w-1/2 text-justify">
        Dive into the multiverse with us as we explore the bizarre and
        intriguing world of Rick Sanchez, the eccentric and often irresponsible
        scientist, and his good-hearted but easily influenced grandson, Morty
        Smith. From their wild interdimensional adventures to their everyday
        life on Earth, we cover it all.
      </p>
      <p className="text-2xl font-semibold">What You Can Find Here:</p>
      <p className="w-1/2 text-justify">
        <ul className="flex flex-col gap-4">
          <li>
            Episode Guides: Detailed summaries, memorable quotes, and Easter
            eggs for every episode.
          </li>
          <li>
            Characters: In-depth profiles of your favorite (and least favorite)
            characters, from Rick and Morty to Mr. Meeseeks and Birdperson.
          </li>
          <li>
            Locations: Discover the weird and wonderful places visited in the
            show, from the Citadel of Ricks to Gazorpazorp. Lore and Theories:
            Unpack the complex lore and fan theories that make the Rick and
            Morty universe so captivating. News and Updates: Stay up-to-date
            with the latest news, upcoming episodes, and exclusive content.
          </li>
        </ul>
      </p>

      <p className="text-2xl font-semibold">Join the Community</p>
      <p className="w-1/2 text-justify">
        Connect with fellow fans, contribute to our growing database, and share
        your theories and insights. Whether you're a seasoned fan or new to the
        series, there's a place for you in our community.
      </p>

      <Button
        variant={"default"}
        size={"lg"}
        onClick={() => {
          navigate("/all-characters");
        }}
      >
        Get Started
        <ChevronRightIcon className="ml-5 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Home;
