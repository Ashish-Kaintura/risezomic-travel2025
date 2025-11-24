import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
import HomeNav from "../layout/HomeNav";
const MemorableHolidayDetails = () => {
  const { UrlTitle } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("/Services/MemorableHoliday.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Fetched data:", data);
        const selectedService = data.find(
          (service) => service.UrlTitle === decodeURIComponent(UrlTitle)
        );
        // console.log("Selected service:", selectedService);
        setService(selectedService);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [UrlTitle]);

  if (!service) {
    return <div>Loading...</div>;
  }
  const canonicalUrl = `https://www.risezonictravel.com/holiday/${UrlTitle}`;
  const pageTitle = `${service.metatitle}`;
  const pagedes = `${service.metades}`;
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={pagedes}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" sm:w-full h-screen w-full overflow-hidden flex justify-center">
          <img
            className="w-full h-full object-cover object-center"
            src={service.bannerImage}
            alt={service.title}
          />
        </div>
        <h1 className="text-center sm:text-6xl text-3xl uppercase py-8 font-semibold underline underline-offset-8">
          {service.title}
        </h1>
        <div className="sm:flex block justify-start gap-x-5 sm:mt-12 px-4">
          <div className=" flex sm:ps-5 object-contain  h-96 ">
            <img src={service.image} alt={service.title} />
          </div>
          <div>
            <p className="flex sm:w-[850px]  p-5 px-0 text-gray-600">
              {service.desc}
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
                className="objct-cover w-full h-full"
                src={service.subImage}
                alt={service.title}
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                className="objct-cover w-full h-full"
                src={service.subImage1}
                alt={service.title}
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                className="objct-cover w-full h-full"
                src={service.subImage2}
                alt={service.title}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MemorableHolidayDetails;
