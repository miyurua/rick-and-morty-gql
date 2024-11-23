import React from "react";
import { useNavigate } from "react-router-dom";

interface CharacterProps {
  id: string;
  image: string;
  status: string; // Assuming these are the only statuses
  name: string;
  species: string;
}

const CharacterCard: React.FC<CharacterProps> = ({
  id,
  image,
  status,
  name,
  species,
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="flex border rounded-xl p-4 gap-3 flex-col hover:cursor-pointer hover:bg-slate-200 duration-500 w-80 h-96"
      onClick={() => {
        navigate(`/all-characters/${id}`);
      }}
    >
      <div className="relative">
        <img src={image} className="rounded-xl w-full h-72" alt={name} />
        <div
          className={`absolute top-0 right-0 text-white p-2 rounded-tr-xl rounded-bl-xl ${
            status === "Alive" ? "bg-lime-600" : "bg-red-600"
          }`}
        >
          <p className="font-semibold">{status.toUpperCase()}</p>
        </div>
      </div>
      <p className="font-semibold">{name}</p>
      <div>
        <p className="text-sm">Species: {species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
