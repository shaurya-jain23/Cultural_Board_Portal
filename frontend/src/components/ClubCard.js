import React from "react";
import { useNavigate } from "react-router-dom";

function ClubCard({ index, clubData }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const urlSafeName = clubData.name.replace(/\s+/g, "-").toLowerCase();
    navigate(`/club/${urlSafeName}`); 
  };

  return (
    <div
      className={`relative my-[2vw] md:-my-[3vw] w-fit cursor-pointer ${
        index % 2 === 0
          ? "right-[15vw] md:right-[25vw]"
          : "left-[15vw] md:left-[25vw]"
      }`}
      onClick={handleNavigate}
    >
      <img
        src={clubData.img}
        alt={clubData.name}
        className="h-[40vw] md:h-[20vw] rounded-3xl"
      />
      <p className="absolute bottom-3 left-3">
        <span className="bg-black/60 text-white px-3 py-1 rounded-md font-semibold text-[2.5vw] md:text-[1.2vw] leading-none backdrop-blur-sm">
          {clubData.name}
        </span>
      </p>
      <p className="absolute bottom-3 right-3 font-semibold text-[4vw] md:text-[1.8vw] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        {index < 9 ? `0${index + 1}` : index + 1}
      </p>
    </div>
  );
}

export default ClubCard;
 