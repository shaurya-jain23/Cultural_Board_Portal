import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="pt-20 overflow-hidden font-poppins flex flex-col">
        <div
           className="relative z-[10] w-full h-[865px] bg-top bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 text-gray-200"
          style={{ backgroundImage: `url(${clubData.img})` }}
        >
          <p className="text-4xl md:text-7xl font-semibold tracking-tight text-center">
            {clubData.name} CLUB
          </p>
          <p className="text-sm sm:text-base md:text-lg tracking-tight text-center">
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
              <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
                ABOUT US
              </h1>
              <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
                {clubData?.aboutDesc}
              </p>
            </div>
          </div>
        </div>
        <RoundedDiv Element={() => <RulesAndGuidelinesSection clubData={clubData} />} bg="#7BB9C4" />
        <RoundedDiv
          Element={() => <PastEventsAndAcheivementsSection clubData={clubData} />}
          bg="#F5F5F5"
          top="-200px"
        />
        <RoundedDiv Element={() => <GallerySection clubData={clubData} />} bg="#7BB9C4" top="-300px" />
        <RoundedDiv Element={() => <TeamLeadersSection clubData={clubData} />} bg="#F5F5F5" top="-400px" />
      </div>
      <Footer />
    </div>
  );
}

const RulesAndGuidelinesSection = ({ clubData }) => {
  const scrollDirection = useScrollDirection();
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 pb-[50vw] sm:pb-[35vw] md:pb-[15vw] lg:pb-[10vw]">
      <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
        <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
          RULES AND GUIDELINES
        </h1>
        <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
          {clubData.rules}
        </p>
      </div>
      <ScrollAnimation
        className="w-full md:w-[50%] flex items-center justify-center"
        animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
        animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
        animateOnce={true}
        initiallyVisible={true}
        animatePreScroll={true}
        offset={0}
      >
        <img
          src={clubData?.rulesimg}
          alt="Sports activity"
          className="w-[70%] object-cover"
        />
      </ScrollAnimation>
    </div>
  );
};

const PastEventsAndAcheivementsSection = ({ clubData }) => {
  const scrollDirection = useScrollDirection();
  return (
    <div className="space-y-8 pb-[83vw] xs:pb-[60vw] sm:pb-[40vw] md:pb-[15vw] lg:pb-[13vw]">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 md:py-20">
        <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
          <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
            PAST EVENTS
          </h1>
         {clubData?.pastEvents.map((event,index)=>(
            <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
              {event}
          </p>
         ))}
        </div>
              <ScrollAnimation
        className="w-full md:w-[50%] flex items-center justify-center"
        animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
        animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
        animateOnce={true}
        initiallyVisible={true}
        animatePreScroll={true}
        offset={0}
      >
        <img
          src={clubData?.rulesimg}
          alt="Sports activity"
          className="w-[70%] object-cover"
        />
      </ScrollAnimation>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-start px-10 md:px-20 md:py-20">
              <ScrollAnimation
        className="w-full md:w-[50%] flex items-center justify-center"
        animateIn={scrollDirection === "up" ? "slideInDown" : "slideInUp"}
        animateOut={scrollDirection === "up" ? "slideOutDown" : "slideOutUp"}
        animateOnce={true}
        initiallyVisible={true}
        animatePreScroll={true}
        offset={0}
      >
        <img
          src={clubData?.rulesimg}
          alt="Sports activity"
          className="w-[70%] object-cover"
        />
      </ScrollAnimation>
        <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
          <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
            ACHIEVEMENTS
          </h1>
          {clubData?.achievements.map((event,index)=>(
            <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
              {event}
          </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const GallerySection = ({ clubData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 pb-[115vw] xs:pb-[80vw] sm:pb-[57vw] md:pb-[40vw] lg:pb-[30vw] xl:pb-[22vw]">
      <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
        <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
          GALLERY
        </h1>
        <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
          {/* {clubData.rulesSection.text} */}
        </p>
      </div>
      <div className="relative z-[10] w-full md:w-[50%] flex items-center justify-center">
        <Carousel
          className="w-[70%] min-h-[500px]"
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          emulateTouch={true}
          stopOnHover={true}
          transitionTime={1000}
        >
          {clubData?.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sports activity ${index + 1}`}
              className="w-[70%] h-[500px] object-cover"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const TeamLeadersSection = ({ clubData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20">
      <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-1">
        <h1 className="text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
          TEAM LEADERS
        </h1>
        <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk] list-disc">
          {/* {clubData.rulesSection.text} */}
        </p>
      </div>
      <div className="relative z-[1] w-full md:w-[50%] flex items-center justify-center">
        <Carousel
          className="w-[70%]  min-h-[500px]"
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          emulateTouch={true}
          stopOnHover={true}
          transitionTime={1000}
        >
          {clubData?.leaderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sports activity ${index + 1}`}
              className="w-[70%] h-[500px] object-cover"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EachClubPage;