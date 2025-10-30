import useRoundedStyle from "../hooks/useRoundedStyle";
import { useHomePageData } from "../hooks/useHomePageData";
import Ticker from './Ticker';

function HeroSection() {
  const roundedStyle = useRoundedStyle();
  const { data } = useHomePageData();

  // console.log("data", data);
  // if (loading) return <div>Loading...</div>;
  // Display loading state
  // if (error) return <div>Error fetching homepage data.</div>;
  //  Handle errors
  const teamMember = data ? data.teamMember : [];

  return (
    <div className="w-full overflow-x-hidden font-poppins flex flex-col items-center">
      <Ticker />
      <div
        className="w-full h-[865px] bg-top bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 text-gray-200 relative z-0"
        style={{ backgroundImage: `url(${data?.homepage[0]?.heroimage})` }}
      >
        <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-center text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          CULTURAL BOARD IIT GUWAHATI
        </p>
      </div>

      <div
        style={roundedStyle}
        className="top-[-100px] w-full min-h-[975px] h-auto flex items-center justify-center bg-[#F5F5F5] text-center py-16 md:py-0"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-8 px-6 md:px-8">
          <div className="w-full max-w-md md:max-w-none md:basis-1/2 h-[350px] md:h-[470px]">
            <img
              src={data?.aboutData[0]?.image}
              alt="Sports activity"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="text-center md:text-left basis-1/2">
            <h1 className="text-[#0C0D0D] font-semibold text-6xl md:text-8xl lg:text-[96px] leading-none font-[Fira Sans Extra Condensed]">
              ABOUT US<span className="text-[#7BB9C4]">.</span>
            </h1>
            <p className="text-[#565656] text-base leading-relaxed font-[Familjen Grotesk] mt-4">
              {data?.aboutData[0]?.description}
            </p>
          </div>
        </div>
      </div>

      <div
        className="top-[-20rem] bg-[#7BB9C4] w-full flex flex-col px-10 md:px-20 pb-[115vw] xs:pb-[80vw] sm:pb-[57vw] md:pb-[40vw] lg:pb-[30vw] xl:pb-[22vw]"
        style={roundedStyle}
      >
        <div className="hidden lg:block w-full">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="lg:ml-10 mt-20 w-full lg:w-[30%] text-center lg:text-left flex flex-col items-center lg:items-start space-y-2">
              <h1 className="mb-10 text-5xl md:text-7xl leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
                Team Members<span className="text-[#fff]">.</span>
              </h1>
            </div>

            <div className="mt-20 mb-10 grid grid-cols-3 gap-8 justify-items-center overflow-hidden">
              {teamMember &&
                teamMember.slice(0, 3).map((member, index) => (
                  <div key={index} className="w-[240px] h-[330px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full mb-[10rem] grid grid-cols-1 lg:grid-cols-5 gap-4 justify-items-center">
            {teamMember &&
              teamMember.slice(3).map((member, index) => (
                <div key={index + 3} className="w-[240px] h-[330px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="block lg:hidden w-full">
          <div className="mt-20 w-full text-center flex flex-col items-center space-y-2">
            <h1 className="mb-10 text-5xl md:text-7xl leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
              Team Members<span className="text-[#fff]">.</span>
            </h1>
          </div>

          <div className="mt-10 mb-[10rem] w-full h-[330px] gap-4 flex overflow-x-scroll scrollbar-thin px-4">
            {teamMember &&
              teamMember.map((member, index) => (
                <div key={index} className="w-[240px] h-[330px] flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="top-[-25rem] space-y-8 pb-[83vw] xs:pb-[60vw] sm:pb-[40vw] md:pb-[15vw] lg:pb-[13vw] hidden md:block"
        style={roundedStyle}
      >
        <div className="mt-[10rem] w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 md:py-20 relative">
          <div className="z-10 w-full md:w-[50%] flex items-center justify-center">
            <img
              src={data?.homepage[0]?.chairmanimgurl}
              alt="Chairman"
              className="w-[461px] h-[438px] object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-3">
            <h1 className="text-5xl lg:text-7xl leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
              CHAIRMAN<span className="text-[#7BB9C4]">.</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed text-[#565656] font-[Familjen Grotesk]">
              {data?.homepage[0]?.chairmanname}
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-[#565656] font-[Familjen Grotesk]">
              {data?.homepage[0]?.chairmandescription}
            </p>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#7BB9C4] w-full">
              <h2 className="text-xl lg:text-2xl leading-none font-semibold text-[#565656] font-[Familjen Grotesk]">
                Message from the Chairman-
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-[#565656] font-[Familjen Grotesk] italic mt-3">
                {data?.homepage[0]?.aboutchairman}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 md:py-20 relative">
          <div className="w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start justify-start space-y-3">
            <h1 className="text-5xl lg:text-7xl leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
              GENERAL SECRETARY<span className="text-[#7BB9C4]">.</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed text-[#565656] font-[Familjen Grotesk]">
              {data?.homepage[0]?.gensecname}
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-[#565656] font-[Familjen Grotesk]">
              {data?.homepage[0]?.gensecdescription}
            </p>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#7BB9C4] w-full">
              <h2 className="text-xl lg:text-2xl leading-none font-semibold text-[#565656] font-[Familjen Grotesk]">
                Message from the General Secretary-
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-[#565656] font-[Familjen Grotesk] italic mt-3">
                {data?.homepage[0]?.aboutgensec}
              </p>
            </div>
          </div>

          <div className="z-10 w-full md:w-[50%] flex items-center justify-center">
            <img
              src={data?.homepage[0]?.gensecimg}
              alt="General Secretary"
              className="w-[461px] h-[438px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;