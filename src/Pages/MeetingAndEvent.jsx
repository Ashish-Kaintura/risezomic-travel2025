import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const MeetingAndEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Best Meeting Planners | Event Organisers In Delhi , India</title>
        <meta
          name="description"
          content="Risezonic Travel is the Best Meeting, convention, and event planner to arrange all aspects of events and professional gatherings "
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/Meeting-And-Event"
        />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" object-center object-contain">
          <img
            className="h-[500px] w-full"
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
          />
        </div>
        <h2 className="text-center text-6xl uppercase py-8 font-semibold underline underline-offset-8">
          Meeting/Event Services
        </h2>
        <div className="flex justify-start gap-x-5 sm: mt-12">
          <div className=" flex ps-5 object-contain w-[500px] ">
            <img
              src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
              loading="lazy"
            />
          </div>
          <div>
            {/* <h2 className="text-4xl uppercase font-semibold flex items-center gap-x-2">
              {service.title}
            </h2> */}
            <p className="flex sm:w-[850px]  p-5 px-0 text-gray-600">
              Besides, offering you best travel insurance solutions, Risezonic
              Travel is also happy to help you organize meetings and events.
              Whether you are planning an exquisite corporate event or casual
              team-building day, our devoted event planners, will ensure your
              exclusive event comes to life with perfect execution. Take your
              next event up a notch with Risezonic Travel’s professional skills
              and commitment to perfection. We will coordinate and manage all
              the small features of the events with regards to venue, meals,
              transportation services as well as event technology to make it an
              ideal event.
            </p>
            <div className="flex gap-x-5">
              <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-x-2 ">
                Call Now <IoCall />
              </button>
              <button className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 flex items-center gap-x-2  ">
                Book Now <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 py-8">
          <div className="flex justify-evenly bg-white">
            <div className="w-96 h-96 bg-black overflow-hidden">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeetingAndEvent;
