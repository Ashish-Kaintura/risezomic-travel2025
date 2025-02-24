// src/layout/SpecialServices.jsx
import { useState } from "react";

import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    image:
      "https://thailandstartshere.com/wp-content/uploads/2024/03/Phi-Phi-2.jpg",
    title: "Thailand",
    description:
      "You do not need to worry about obtaining a visa for Thailand when perusing the international holiday packages on Risezonic Travel. This is one of the international tour destinations where Indian citizens can obtain a visa upon arrival. Therefore, whenever you want to visit Thailand, you can reserve one of the international tour packages. To choose which is the best choice for you, look over the Thailand tour packages.",
  },
  {
    id: 2,
    image:
      "https://cdn.britannica.com/58/125058-050-A96CA305/Port-Louis-Mauritius.jpg",
    title: "Mauritius",
    description:
      "Mauritius, situated in the Southeast of Africa is trendy among couples on their honeymoon. Additionally, you don't need to search elsewhere if you have a special fondness for beaches and water sports. Here, you can also visit markets, forts, museums, and monuments. The visa on arrival is the best option for Indian tour groups in Mauritius. The visa is good for 60 days starting on the day you enter the nation. For this reason, if you look at the Mauritius tour packages, a visa is not included.",
  },
  {
    id: 3,
    image:
      "https://media.cntraveler.com/photos/59404f9157d01262a807f8c9/16:9/w_2560%2Cc_limit/GettyImages-175386102.jpg",
    title: "Indonesia",
    description:
      "See our website's tour packages for Bali for the best in lush nature. In addition to Bali, Indonesia has a plethora of other destinations to visit, like Jakarta, Wae Rebo Village, Gili Islands, Komodo National Park, Nusa Penida, and so forth. Beautiful cultural performances that showcase Indonesia's rich cultural legacy nicely complement the country's abundant natural beauty. You can enter Indonesia with a visa upon arrival, just like you can in many other nations. The visa will be valid for thirty days.",
  },
  {
    id: 4,
    image: "https://static.wanderon.in/wp-content/uploads/2024/03/maldives.jpg",
    title: "Maldives",
    description:
      "The Maldives is another nation that sees a lot of tourism. Upon arrival, you are eligible to get a 30-day valid visa. Why do you wait? Now go through the Maldives tour packages.",
  },
];

const VisaFreeIternational = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };
  return (
    <section className="py-12 sm:px-12 px-5">
      <div className="py-5 ">
        <div className="py-6">
          <h1 className="text-start sm:text-3xl text-2xl italic uppercase font-bold text-gray-200 underline decoration-yellow-500 underline-offset-8">
            Hassle-Free Visa International Destinations
          </h1>
          <br />
          <div className="block justify-center  text-gray-200 text-[15px] font-serif">
            <p className="text-start">
              An international tour can be ruined by attending interviews and
              worrying about the status of your visa. Fortunately, there are 52
              countries worldwide that you can visit and include in your package
              since they provide Indian citizens with a visa on arrival. Lets
              talk about some of the countries that have the easiest visa
              requirements that you can select from international tour packages.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex block sm:justify-evenly justify-center  flex-wrap gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[350px] sm:mt-0 mt-4 cursor-pointer sm:w-80 bg-slate-400 rounded-lg outline-offset-4 relative hover:scale-105 overflow-hidden transition-all ease-in duration-150"
            onClick={() => openModal(service)}
          >
            <div className="absolute bottom-0 left-0 p-5 bg-[#0D0C0C] text-white backdrop-blur-[1.4495413303375244px] bg-opacity-65 w-full">
              <h2 className="text-yellow-500">{service.title}</h2>
              <h3 className="line-clamp-2">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>
      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default VisaFreeIternational;
