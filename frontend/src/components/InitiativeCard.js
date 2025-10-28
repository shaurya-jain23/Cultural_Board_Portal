import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const InitiativeCard = ({ initiative, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div className="relative">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
          <img
            src={initiative.image}
            alt={initiative.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `linear-gradient(to bottom right, #7BB9C4E6, #7BB9C4B3)`,
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="p-6 lg:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[Fira Sans Extra Condensed]">
            <span className="inline-block">{initiative.name}</span>
          </h3>
          
          {/* Underline that extends to the full width of the name */}
          <div className={`h-1 rounded-full mb-4`} style={{ backgroundColor: '#7BB9C4', width: '100%' }}></div>
          
          <p className="text-gray-600 leading-relaxed mb-6 font-[Familjen Grotesk]">
            {initiative.description}
          </p>

          {/* Link Button */}
          <Link
            to={`/initiatives/${initiative.name}`}
            className={`inline-flex items-center gap-2 group-hover:gap-3 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              isHovered
                ? "transform scale-105"
                : ""
            }`}
            style={{ backgroundColor: '#7BB9C4'}}
          >
            Learn More
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#7BB9C4'}}></div>
    </div>
  );
};

export default InitiativeCard;