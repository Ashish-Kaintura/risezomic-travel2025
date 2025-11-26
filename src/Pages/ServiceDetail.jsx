import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Homenav from "../layout/HomeNav";
import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
const ServiceDetail = () => {
  const { UrlTitle } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("/Services/servicesData.json")
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

  const canonicalUrl = `https://www.risezonictravel.com/services/${UrlTitle}`;
  const pageTitle = `${service.metatitle}`;
  const pagedes = `${service.metades}`;
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={pagedes} />
      </Helmet>
      <Homenav />
   
      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={service.bannerImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            {service.title}
          </h1>
        </div>
      </div>

      {/* MAIN DETAILS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={service.image} alt={service.title} className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {service.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href="tel:+8178857250"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transition"
              >
                <IoCall /> Call Now
              </a>

              <a
                href={`https://wa.me/8178857250?text=Hi, I'm interested in ${service.title} package`}
                target="_blank"
                className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 flex items-center gap-2 shadow-lg transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Experience {service.title}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[service.subImage, service.subImage1, service.subImage2].map(
              (img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-xl hover:scale-95 transition duration-200 cursor-pointer"
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ServiceDetail;
