import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import RoundedDiv from "../components/RoundedDiv";
import useScrollDirection from "../hooks/useScrollDirection";


function EachClubPage() {
  const scrollDirection = useScrollDirection();
  const { name } = useParams();
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/club/${name}`);
        setClubData(response.data);
      } catch (err) {
        setError("Failed to load club data.");
      } finally {
        setLoading(false);
      }
    };
    fetchClubData();
  }, [name]);

  if (loading) {
    return (
      <>
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7BB9C4]"></div>
      </>
    );
  }

  if (error) {
    return (
      <>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Error Loading Club Data
            </h2>
            <p className="text-gray-600 mb-4">
              Unable to load club information at this time.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#7BB9C4] text-white px-6 py-2 rounded-lg hover:bg-[#6aa8b3] transition-colors"
            >
              Try Again
            </button>
          </div>
      </>
    );
  }

  return (
      <div className="pt-20 overflow-hidden font-poppins flex flex-col">
        <div
           className="relative z-[10] w-full h-[865px] bg-top bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 text-gray-200 before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:z-[-1]"
          style={{ backgroundImage: `url(${clubData.img})` }}
        >
         <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-center text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {clubData.name}
        </p>
        <p className="max-w-[900px] px-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium tracking-tight text-center text-white/90 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {clubData.aboutDesc}
        </p>
        </div>
        <div className="w-full flex items-center justify-center px-2 pt-[6vw] pb-[37vw] sm:pb-[20vw] md:[5vw] bg-[#F5F5F5] text-center">
          <div className="w-full flex flex-col-reverse md:flex-row gap-2 md:justify-between md:items-start px-10 md:px-20">
            <ScrollAnimation
              className="w-full md:w-[50%] flex items-center justify-center"
              animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
              animateOut={
                scrollDirection === "up" ? "slideOutDown" : "slideOutUp"
              }
            >
              <img
                src={clubData.aboutusimg}
                alt="Sports activity"
                className="w-[70%] object-cover"
              />
            </ScrollAnimation>
            <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
              <h1 className="text-[8vw] md:text-[3vw] font-bold text-[#0C0D0D] tracking-tight">
                ABOUT US
              </h1>
              <p className="text-[4vw] md:text-[1.4vw] text-[#3a3a3a] leading-relaxed font-light">
                {clubData?.aboutDesc}
              </p>
            </div>
          </div>
        </div>
        <RoundedDiv Element={() => <RulesAndGuidelinesSection clubData={clubData} />} bg="#7BB9C4" />
        <RoundedDiv
          Element={() => <PastEventsAndAcheivementsSection clubData={clubData} />}
          bg="#F5F5F5"
          top="-100px"
        />
        <RoundedDiv Element={() => <GallerySection clubData={clubData} />} bg="#7BB9C4" top="-100px" />
        <RoundedDiv Element={() => <TeamLeadersSection clubData={clubData} />} bg="#F5F5F5" top="-100px" />
      </div>
  );
}

const RulesAndGuidelinesSection = ({ clubData }) => {
  const scrollDirection = useScrollDirection();
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-6 sm:px-12 md:px-20 pb-[20vw] md:pb-[10vw] lg:pb-[8vw]">
      <div className="w-full md:w-[50%] text-center md:text-left space-y-4">
        <h1 className="text-[8vw] md:text-[3vw] font-bold text-[#0C0D0D] tracking-tight">
          RULES AND GUIDELINES
        </h1>
        <p className="text-[4vw] md:text-[1.4vw] text-[#3a3a3a] leading-relaxed font-light">
          {clubData.rules}
        </p>
      </div>
      <ScrollAnimation
        className="w-full md:w-[45%] flex items-center justify-center mt-8 md:mt-0"
        animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
        animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
        animateOnce={true}
        initiallyVisible={true}
        animatePreScroll={true}
        offset={0}
      >
        <img
          src={clubData?.rulesimg}
          alt="Rules visual"
          className="w-[80%] md:w-[70%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
        />
      </ScrollAnimation>
    </div>
  );
};

const PastEventsAndAcheivementsSection = ({ clubData }) => {
  const scrollDirection = useScrollDirection();
  return (
    <div className="space-y-20 pb-[40vw] sm:pb-[25vw] md:pb-[20vw]">
      {/* Past Events */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-20">
        <div className="w-full md:w-[50%] text-center md:text-left space-y-4">
          <h1 className="text-[8vw] md:text-[3vw] font-bold text-[#0C0D0D] tracking-tight">
            PAST EVENTS
          </h1>
          <ul className="list-disc text-left ml-6 text-[4vw] md:text-[1.4vw] text-[#3a3a3a] leading-relaxed font-light">
            {clubData?.pastEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
        <ScrollAnimation
          className="w-full md:w-[45%] flex items-center justify-center mt-8 md:mt-0"
          animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
          animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
          animateOnce={true}
          initiallyVisible={true}
          animatePreScroll={true}
          offset={0}
        >
          <img
            src={clubData?.pastEventsImg}
            alt="Past events"
            className="w-[80%] md:w-[70%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
          />
        </ScrollAnimation>
      </div>

      {/* Achievements */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-12 md:px-20">
        <ScrollAnimation
          className="w-full md:w-[45%] flex items-center justify-center mt-8 md:mt-0"
          animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
          animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
          animateOnce={true}
          initiallyVisible={true}
          animatePreScroll={true}
          offset={0}
        >
          <img
            src={clubData?.achievementsImg}
            alt="Achievements"
            className="w-[80%] md:w-[70%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
          />
        </ScrollAnimation>

        <div className="w-full md:w-[50%] text-center md:text-left space-y-4">
          <h1 className="text-[8vw] md:text-[3vw] font-bold text-[#0C0D0D] tracking-tight">
            ACHIEVEMENTS
          </h1>
          <ul className="list-disc text-left ml-6 text-[4vw] md:text-[1.4vw] text-[#3a3a3a] leading-relaxed font-light">
            {clubData?.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const GallerySection = ({ clubData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start px-6 sm:px-12 md:px-20 pb-[20vw] md:pb-[10vw] lg:pb-[8vw]">
      {/* Left: Text Section */}
      <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-[8vw] md:text-[3vw] font-extrabold text-[#0C0D0D] tracking-tight font-[Fira Sans Extra Condensed]">
          GALLERY
        </h1>
        <p className="text-[4vw] md:text-[1.5vw] leading-relaxed text-[#1a1a1a] opacity-90 font-[Familjen Grotesk] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
          A glimpse of our club’s most memorable moments and performances.
        </p>
      </div>

      {/* Right: Carousel Section */}
      <ScrollAnimation
  className="w-full md:w-[45%] flex items-center justify-center mt-10 md:mt-0"
  animateIn="fadeIn"
  animateOnce={true}
  initiallyVisible={true}
  animatePreScroll={true}
  offset={0}
>
  <div className="w-[85%] md:w-[70%] rounded-[2rem] overflow-hidden shadow-xl">
    <Carousel
      autoPlay
      interval={2500}
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      emulateTouch
      stopOnHover
      dynamicHeight={true}
      showStatus={true}
    >
      {clubData?.galleryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          className="w-full h-[60vw] md:h-[28vw] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      ))}
    </Carousel>
  </div>
</ScrollAnimation>

    </div>
  );
};



const TeamLeadersSection = ({ clubData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-20 py-[0vw]">
      <div className="w-full md:w-[50%] text-center md:text-left space-y-4">
        <h1 className="text-[8vw] md:text-[3vw] font-bold text-[#0C0D0D] tracking-tight">
          TEAM LEADERS
        </h1>
        <p className="text-[4vw] md:text-[1.4vw] text-[#3a3a3a] leading-relaxed font-light">
          Meet the passionate individuals who lead and inspire the team.
        </p>
      </div>
      <div className="w-full md:w-[45%] flex items-center justify-center mt-8 md:mt-0">
        <Carousel
          className="w-[85%] md:w-[70%] rounded-2xl shadow-lg overflow-hidden"
          autoPlay
          interval={2500}
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          emulateTouch
          stopOnHover
        >
          {clubData?.leaderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Leader ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};


export default EachClubPage;