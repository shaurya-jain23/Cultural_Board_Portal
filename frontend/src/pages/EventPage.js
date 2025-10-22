import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaUsers,
} from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnhancedRoundedDiv from "../components/EnhancedRoundedDiv";
import { useEventPageData } from "../hooks/useEventPageData";

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { event, loading, error } = useEventPageData(id);
  console.log(event);
  

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#7BB9C4] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-6">
              {error.message || "The event you're looking for doesn't exist or may have been removed."}
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => navigate(-1)}
                className="block w-full bg-[#7BB9C4] text-white px-6 py-3 rounded-lg hover:bg-[#6aa8b3] transition-colors"
              >
                Go Back
              </button>
              <Link 
                to="/events"
                className="block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
            <Link 
              to="/events"
              className="bg-[#7BB9C4] text-white px-6 py-3 rounded-lg hover:bg-[#6aa8b3] transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const eventDate = new Date(event.eventDateAndTime);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  console.log(eventDate);
  
  // Combine all images for carousel
  const allImages = event.frontImage 
    ? [event.frontImage, ...(event.galleryImages || [])]
    : event.galleryImages || [];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Back Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                <FaArrowLeft className="text-sm" />
                Back to Events
              </button>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        {event.frontImage && (
          <div className="relative flex h-80 sm:h-96 md:h-fit xl:h-[80vh] bg-gray-200">
            <img
              src={event.frontImage}
              alt={event.eventName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}

        {/* Event Content */}
        <div className="relative">
          <EnhancedRoundedDiv
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Event Header */}
                  <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                    <div className="space-y-6">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-[Fira Sans Extra Condensed]">
                        {event.eventName}
                      </h1>
                      
                      <div className="w-20 h-1 bg-[#7BB9C4] rounded-full"></div>

                      {/* Event Details Grid */}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-gray-700">
                          <RiTeamLine className="text-[#7BB9C4] text-lg"  />
                          <div>
                            <p className="font-semibold">Organised by</p>
                            <p>{event.organisedBy}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaCalendarAlt className="text-[#7BB9C4] text-lg" />
                          <div>
                            <p className="font-semibold">Date & Time</p>
                            <p>{formattedDate} at {formattedTime}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaMapMarkerAlt className="text-[#7BB9C4] text-lg" />
                          <div>
                            <p className="font-semibold">Venue</p>
                            <p>{event.eventVenue}</p>
                          </div>
                        </div>

                        {event.eventLink && (
                          <div className="flex items-center gap-3 text-gray-700 sm:col-span-1">
                            <FaExternalLinkAlt className="text-[#7BB9C4] text-lg" />
                            <div>
                              <p className="font-semibold">Event Link</p>
                              <a 
                                href={event.eventLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                Join Event
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Event</h2>
                    <div className="prose max-w-none text-gray-700 leading-relaxed">
                      <p className="text-lg">{event.eventIntroDesc}</p>
                      
                      {event.eventActivityDesc && (
                        <>
                          <h3 className="text-xl font-semibold mt-6 mb-4">Event Activities</h3>
                          <p>{event.eventActivityDesc}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* Sidebar */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Image Gallery */}
                  {allImages.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-4 border-b">
                        <h3 className="font-semibold text-gray-900">Event Gallery</h3>
                      </div>
                      <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={allImages.length > 1}
                        infiniteLoop={allImages.length > 1}
                        className="event-gallery"
                      >
                        {allImages.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`${event.eventName} ${index + 1}`}
                              className="w-full h-fit object-cover"
                              onError={(e) => {
                                e.target.src = '/default-event-image.jpg';
                              }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  )}
                  {/* Member Photos */}
                  {event.memberImages && event.memberImages.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-4 border-b">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <FaUsers className="text-[#7BB9C4]" />
                          Event Members
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-2">
                          {event.memberImages.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Event member ${index + 1}`}
                              className="w-full h-40 object-cover rounded-lg"
                              onError={(e) => {
                                e.target.src = '/default-member-image.jpg';
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl shadow-sm p-4">
                    <Link 
                      to="/events"
                      className="block w-full text-center bg-[#7BB9C4] text-white py-3 rounded-lg hover:bg-[#6aa8b3] transition-colors font-medium mb-3"
                    >
                      View All Events
                    </Link>
                    {event.eventLink && (
                      <a 
                        href={event.eventLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center border border-[#7BB9C4] text-[#7BB9C4] py-3 rounded-lg hover:bg-[#7BB9C4] hover:text-white transition-colors font-medium"
                      >
                        Join Event
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </EnhancedRoundedDiv>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;