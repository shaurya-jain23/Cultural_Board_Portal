import React, { useEffect, useRef, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import InitiativeCard from "../components/InitiativeCard";
import { useAllInitiativesPageData } from '../hooks/useAllInitiativesPageData';

// Mock Data as fallback


const Initiatives = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const {data,error, loading} = useAllInitiativesPageData();
  const initiatives = data.initiatives;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [initiatives]);

  if(loading){
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7BB9C4]"></div>
        </div>
        <Footer />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Error Loading Initiatives
            </h2>
            <p className="text-gray-600 mb-4">
              Unable to load Initiatives at this time.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#7BB9C4] text-white px-6 py-2 rounded-lg hover:bg-[#6aa8b3] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-gradient-to-r from-[#7BB9C4] to-[#6aa8b3] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[Fira Sans Extra Condensed]">
            INITIATIVES
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-poppins">
            Celebrating culture, creativity, and community through diverse initiatives
          </p>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                id={`initiative-${index}`}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`transform transition-all duration-1000 ease-out ${
                  visibleSections[`initiative-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <InitiativeCard initiative={initiative} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Initiatives;