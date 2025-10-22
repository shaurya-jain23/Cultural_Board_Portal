import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowDown, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnhancedRoundedDiv from "../components/EnhancedRoundedDiv";
import { useEventPageData } from "../hooks/useAllEventsPageData";
import { Link } from "react-router-dom";

function AllEventsPage() {
  const { data, loading, error } = useEventPageData();
  console.log("AllEventsPage data", data);

  if (loading) {
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
              Error Loading Events
            </h2>
            <p className="text-gray-600 mb-4">
              Unable to load events at this time.
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

  const events = data?.events || [];
  const imgdata = data?.homepage[0]?.eventimgurl || [];
  const clubName = data?.homepage[0]?.boardname || [];
  return (
    <>
      <Header />
      <div className="overflow-hidden font-poppins flex flex-col">
        {/* Enhanced Hero Section */}
        <div
          className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-8 text-white"
          style={{ backgroundImage: `url(${imgdata})` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 drop-shadow-2xl animate-fade-in">
              {clubName}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover our journey through memorable events and achievements
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-20 z-50 left-1/2 transform -translate-x-1/2 rounded-full bg-gray-500/30 p-3 animate-bounce">
            <FaArrowDown className="text-white/80 text-2xl" />
          </div>
        </div>

        {/* Events Section */}
        <div className="relative">
          {events.map((event, index) => (
            <EnhancedRoundedDiv
              key={index}
              index={index}
              bg={index % 2 === 0 ? "#F8FAFC" : "#7BB9C4"}
              isFirst={index === 0}
            >
              <EventSection data={event} index={index} />
            </EnhancedRoundedDiv>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

const EventSection = ({ data, index }) => {
    const images = data?.frontImage 
        ? [data.frontImage, ...(data.galleryImages || [])]
        : data?.galleryImages || [];
    const isEven = index % 2 === 0;
    const eventDate = new Date(data.eventDateAndTime);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div
      className={`w-full flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-16 items-center`}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="space-y-6">
          {/* Event Badge */}
          <div className={`inline-flex items-center px-4 py-2 ${isEven ? "bg-gray-500/20" : "bg-white/20"} backdrop-blur-sm rounded-full`}>
            <span className="text-sm font-semibold text-gray-700">Event {index + 1}</span>
          </div>

          {/* Event Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight font-[Fira Sans Extra Condensed]">
            {data.eventName}
          </h2>

          {/* Event Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <FaCalendarAlt className={isEven ? "text-gray-600" : "text-white"} />
              <span className={`font-medium ${isEven ? "text-gray-700" : "text-white"}`}>
                {formattedDate} at {formattedTime}
              </span>
            </div>
          </div>

          {/* Decorative line */}
          <div className={`w-20 h-1 rounded-full ${isEven ? "bg-[#7BB9C4]" : "bg-white"}`}></div>
        </div>

        {/* Event Description */}
        <div className="space-y-6">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-[Familjen Grotesk]">
            {data.eventActivityDesc}
          </p>
          
          {/* View Details Button */}
          <Link 
            to={`/event/${data._id}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
              isEven 
                ? "bg-[#7BB9C4] text-white hover:bg-[#6aa8b3]" 
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            View Event Details
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full lg:w-1/2">
        {images && images.length > 0 ? (
          <div className="relative">
            {/* Decorative background */}
            <div className={`absolute -inset-4 rounded-3xl transform rotate-3 ${
              isEven 
                ? "bg-gradient-to-br from-[#7BB9C4]/20 to-blue-500/20" 
                : "bg-gradient-to-br from-white/20 to-gray-100/20"
            }`}></div>

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Carousel
                autoPlay={true}
                interval={4000}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={true}
                emulateTouch={true}
                stopOnHover={true}
                transitionTime={800}
                showArrows={true}
                showStatus={false}
                className="event-carousel"
              >
                {images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <img
                      src={image}
                      alt={`${data.eventName} ${imgIndex + 1}`}
                      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                      onError={(e) => {
                        e.target.src = '/default-event-image.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          <div className="relative bg-gray-200 rounded-2xl shadow-2xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
            <p className="text-gray-500">No images available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEventsPage;
