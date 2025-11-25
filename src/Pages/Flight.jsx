import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Flight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Cheap Flights & Air Tickets | Risezonic Travel</title>
        <meta
          name="description"
          content="Book your flight tickets online through Risezonic Travel to secure the Cheapest fares and the best deals on domestic and international flights. "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/flights-booking" />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" sm:w-full sm:h-[500px] w-full overflow-hidden flex justify-center">
          <img
            className="w-full h-full object-cover object-center"
            src="https://cdn.zeebiz.com/sites/default/files/2023/08/19/256870-air-india-reuters.jpg?im=FitAndFill=(1200,900)"
            alt="flight booking"
          />
        </div>
        <h1 className="text-center sm:text-6xl text-3xl uppercase py-8 font-semibold underline underline-offset-8">
          Flight Tickets by Risezonic Travel
        </h1>
        <div className="sm:flex block justify-start gap-x-5 sm:mt-12 px-4">
          <div className="flex sm:ps-5 object-contain  h-96 ">
            <img
              src="https://www.shutterstock.com/image-photo/commercial-airplane-flying-above-clouds-600nw-553131187.jpg"
              loading="lazy"
              alt="flight booking"
            />
          </div>
          <div>
            <p className="lex sm:w-[850px]  p-5 px-0 text-gray-600">
              Preparing to embark on your next grand adventure? Let Risezonic
              Travel take the stress out of booking your flights. While finding
              the right flights may prove to be a great challenge, you can rest
              assured with us that your tour starts on a high note. At
              Risezonic, instead of arbitrarily providing you with a flight
              ticket, we help you to create a perfect and affordable trip that
              is suited for you. Senior travel consultants shall find you the
              most suitable and affordable flight, whether you are shopping in
              New Delhi or soaring across the Canadian Rockies. Ready to take
              flight? Call us today so we can make your traveling be always a
              great experience that you never wish to end.
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
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                src={
                  "https://www.informalnewz.com/wp-content/uploads/2022/11/Flight-tickets-1200x1041.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl ">
              <img
                src={
                  "https://www.thesun.co.uk/wp-content/uploads/2021/11/add3a4ba-7c7f-4af1-a849-0e6885122438.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl ">
              <img
                src={
                  "https://www.travelandleisure.com/thmb/g88GtwRkLAuhu55e3d402zI_sBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/airline-boarding-SYSTEMGUIDE0717-076f353069d544aba9c68e24ad4349f0.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Flight;
