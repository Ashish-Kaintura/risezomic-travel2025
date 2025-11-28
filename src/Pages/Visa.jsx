import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const VIsa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Travel Visa Assistance Services | Risezonic Travel</title>
        <meta
          name="description"
          content="Get smooth travel visa assistance with Risezonic Travel—support for tourist, business, and group visas, quick processing, and reliable guidance for every destination."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/visa" />
      </Helmet>
      <HomeNav />
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.postimg.cc/RCcLDyKW/Travel_Visa_Assistance_Support.jpg"
          alt="visa free & Deals"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            Travel Visa Assistance & Support
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://i.postimg.cc/4dr0XhN7/600_by_405.jpg"
              loading="lazy"
              alt="visa free" className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Experience Extraordinary Adventures with Risezonic Travels - your number one Travel Agency near you for Visa Assistance and unrivalled travel packages! Adopt a new voyage with Risezonic Travels, the leading travel agency in India and your ultimate entrance gate to the most thrilling destinations in the world. Taking pride at being the best travel agency in Delhi we provide visa assistance and exclusive travel packages, tour and travel packages, tirupati travel package, kashmir travel packages, dubai travel packages, goa travel package, and singapore travel package.Our wide-ranging network as a well-known business to business travel agency allows us to offer unsullied deals on cheaper flight tickets, book cheap flight tickets, cheap domestic flight tickets, cheap international flight tickets, and cheap flight tickets mumbai. Try to imagine the ease of the direct flights such as mumbai to goa flight, mumbai to bangalore flight, bangalore to mumbai flight, and the highly desired mumbai to dubai flight.Risezonic Travels is not only a travel agency but also a reliable companion through your voyage of self-exploration. Our visa assistance team, who works full time, simplifies the process and maintains a hassle-free journey for you. Transforming your travel visions into reality, we will also take care of every minute detail as our unparalleled service is our pride. Step into a world of great adventures with Risezonic Travels - a travel company that will take you to the unknown and unfamiliar. Connect with us now and allow our specialists create a dream tour exclusively for you. Embrace the beauty of the world and start a journey that will alter your vision forever.            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href="tel:+8178857250"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transition"
              >
                <IoCall /> Call Now
              </a>

              <a
                href={`https://wa.me/8178857250?text=Hi, I'm interested in visa free & Deals  package`}
                target="_blank"
                className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 flex items-center gap-2 shadow-lg transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY */}

      </section>

      <div className="">
        <div className="mt-4 py-8">
          <div className="flex justify-evenly bg-white">
            <div className="w-96 h-96 bg-black overflow-hidden">
              <img
                src={
                  "https://i.postimg.cc/k4kH7tXW/384_by_384_jpg_01.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/d1zfJTtr/384_by_384_jpg_02.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/DZtN7bys/384_by_384_jpg_03.jpg"
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

export default VIsa;
