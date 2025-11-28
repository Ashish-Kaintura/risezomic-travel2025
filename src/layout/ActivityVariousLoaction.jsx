// src/layout/SpecialServices.jsx
import { useState } from "react";

import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    image: "https://i.postimg.cc/wvgXLXTz/p02rmhgr.jpg",
    title: "Take in the ceremony of the nation's guard At the Wagah Border",
    description:
      "Take in the ceremony of the nation's guard At the Wagah Border This ceremony, called the Beating Retreat, consists of lowering the flags, a drill, a demonstration of boot stamping, and quick dance-like movements. Every day at six o'clock in the evening, India and Pakistan demonstrate their fraternity and cooperation at the Wagah Border through this act. If you would love to witness patriotism at its height, this could be an exciting experience to include in your India holiday packages.",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/qBCcTDYT/14371356196_dbb2465402_b.jpg",
    title: "Stay the Night at Purushwadi Under the Light of the Fireflies",
    description:
      " Stay the Night at Purushwadi Under the Light of the Fireflies The Purushwadi village in Maharashtra hosts one of the most exquisite and organic light festivals. Situated 180 kilometers from Mumbai, this grassroots town has seen the incredible display of spectacular light effects in May and June, when soaring herds of fireflies take to the air at dawn. This may be the lesson you learn from your India tour packages.",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/HxdwXwsG/roopkund_lake1_x525.jpg",
    title: "Go to Chamoli's Skeleton Lake at Roopkund.",
    description:
      "Its mere reason for being is what makes this one among the spookiest places to be around—not any ghosts or demons hiding out. More than 200 human skeleton remains, dated from 850 AD, were discovered in this lake. According to the remains, they had perished identically, from strikes to the head that were subsequently determined to have been caused by an intense hailstorm that struck suddenly. To get to the lake, you must journey for three to four days. Your holiday packages to India shouldn't even include this location if you enjoy excitement",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/tTp3W3RK/maxresdefault.jpg",
    title: "Enjoy A Filling Lunch At Amritsar's Golden Temple",
    description:
      "The Golden Temple, which is located in the center of Amritsar, Punjab, is well-known for being a temporal and spiritual hub of religion and spirituality as well as for the tranquil atmosphere of its communal kitchen, or langar. Up to 50,000 complimentary meals are served daily to visitors of the Gurudwara from all over the world at this shrine. Because of its peace, the Golden Temple is one of the most revered holy pilgrimages for Sikhs and should not be missed on any India tour packages.",
  },
  {
    id: 5,
    image: "https://static.toiimg.com/photo/93237358.cms",
    title: " Spend Some Time At Lonar Lake, Buldhana",
    description:
      "This lake, which was created by a meteor impact over 50,000 years ago, is used to investigate the craters and impact structures on the Moon and Mars. It has both salty and alkaline properties. In spite of these alien connections, this lake supports a variety of algae and plankton, giving the water a strikingly multicolored appearance. The local guides say that as one treks through the surrounding woodlands and its secret temples, compasses stop working as one approaches the crater. Therefore, be sure to select your vacation destination in India wisely the next time you travel to the nation!",
  },
  {
    id: 6,
    image:
      "https://i.postimg.cc/XNyKb1PP/fe.jpg",
    title: "Take In The Ajanta Caves' Ancient Art",
    description:
      "In 1983, Maharashtra's Ajanta Caves were inducted into the UNESCO World Heritage List. The rock-cut caves include elaborate patterns that date back over 2,200 years. The Buddhist religious art and temple building found in Ajanta's thirty caves.",
  },
];

const ActivityVariousLoaction = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section
      className="sm:p-12 p-4 max-w-7xl mx-auto"
      aria-label="Activities in various locations in India"
    >
      <div className="py-5">
        <div className="py-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-start text-3xl italic uppercase font-extrabold text-blue-700 underline decoration-yellow-500 underline-offset-8">
              Activities in Various Locations in India
            </h2>
            <p className="mt-3 text-gray-700 text-[15px] font-serif max-w-3xl">
              When it comes to activities, India truly has no rivals. There is
              something to do for individuals of all ages in practically every
              destination in the nation. Explore curated experiences below and
              tap any card to learn more.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 italic">Tip:</span>
            <div className="text-sm px-3 py-2 bg-yellow-50 text-yellow-800 rounded-md shadow-sm border border-yellow-100">
              Click or press Enter on a card to view details
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-0 px-2">
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
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer transform transition will-change-transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover brightness-90"
              loading="lazy"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-yellow-400 drop-shadow-sm line-clamp-2">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-gray-100 line-clamp-3">
                {service.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-200/90 bg-black/20 px-2 py-1 rounded-md">
                  {service.id} of {services.length}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service);
                  }}
                  className="text-sm bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  View details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default ActivityVariousLoaction;
