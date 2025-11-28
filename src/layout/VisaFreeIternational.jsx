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
    image: "https://i.postimg.cc/fyzwkqcB/maldiv.jpg",
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
    <section className="py-12 px-5 sm:px-12 max-w-7xl mx-auto">
      <div className="py-5">
        <div className="py-6">
          <h2 className="text-start sm:text-3xl text-2xl italic uppercase font-bold text-gray-200 underline decoration-yellow-500 underline-offset-8">
            Hassle-Free Visa International Destinations
          </h2>
          <br />
          <div className="block text-gray-200 text-[15px] font-serif">
            <p className="text-start">
              An international tour can be ruined by attending interviews and worrying about the status of your visa.
              Fortunately, there are 52 countries worldwide that you can visit and include in your package since they
              provide Indian citizens with a visa on arrival. Here are a few popular, easy-entry destinations to consider.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${service.title}`}
            onClick={() => openModal(service)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(service);
              }
            }}
            className="relative h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-gray-800"
          >
            {/* image (lazy) */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* top-left badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Visa on Arrival
              </span>
            </div>

            {/* content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 className="text-yellow-400 text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-gray-100 mt-1 line-clamp-3 leading-5">
                {service.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service);
                  }}
                  className="bg-yellow-500 text-black text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  aria-label={`View more details about ${service.title}`}
                >
                  View Details
                </button>

                <span className="text-xs text-gray-200/80 italic">Popular choice</span>
              </div>
            </div>

            {/* subtle animated focus ring for keyboard users */}
            <span className="sr-only">Press Enter to open details</span>
          </article>
        ))}
      </div>

      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default VisaFreeIternational;
