import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const DealsDetail = () => {
  const { title } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("/Deals/CorporateDeals.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        const selectedService = data.find(
          (service) => service.title === decodeURIComponent(title)
        );
        console.log("Selected service:", selectedService);
        setService(selectedService);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [title]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <Navbar />
      <div className="pt-28">
        <div className=" object-center object-contain">
          <img
            className="h-[500px] w-full"
            src={service.bannerImage}
            alt={service.title}
          />
        </div>
        <h1 className="text-center text-6xl uppercase py-8 font-semibold underline underline-offset-8">
          {service.title}
        </h1>
        <div className="flex justify-start gap-x-5 sm: mt-12">
          <div className=" flex ps-5 object-contain  h-96 ">
            <img src={service.bannerImage} alt={service.title} />
          </div>
          <div>
            <h2 className="text-4xl uppercase font-semibold flex items-center gap-x-2">
              {service.location} <FaLocationDot className="text-blue-900" />
            </h2>
            <p className="flex sm:w-[850px] p-5 px-0 text-gray-600">
              {service.Desc}
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
            <div className="w-96 bg-black">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="w-96 bg-black">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="w-96 bg-black">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DealsDetail;
