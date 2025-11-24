// src/layout/SpecialServices.jsx
import { useState } from "react";
import feature1 from "../images/SpecialServices/feature-1.webp";
import feature2 from "../images/SpecialServices/feature-4.webp";
import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    title: "Custom Booking",
    description:
      "Embark on a unique journey with custom booking your gateway to unforgettable adventures. As the leading travel agency near you, we look after unparalleled experiences tailored to your wildest dreams. Recognized as the best travel agency in India, and the best travel agency in Delhi, we are proud to offer exceptional service across borders. Unleash the divine serenity of Tirupati with our carefully crafted itineraries, or embrace the breathtaking beauty of Kashmir, where the fabric of nature comes alive. Whether you’re looking for the thrill of exploration or the tranquility of relaxation, our tours and itineraries cater for every craving.",
    image: feature1,
  },
  {
    id: 2,
    title: "Transportation & Accommodation",
    description:
      "Take your travels to the next level with Risezonic Travel’s superior “Transportation and Accommodation” services. The car service rental is a great option for those of you who want to travel without limits. Experience the beauty of the cities of Bangalore, Goa, Hyderabad and Delhi with our car rental services near me where professional drivers will provide you with transportation opportunities. Experience this lifestyle of corporate elegance with our carefully selected hotel corporate relationships. I tried to stay in the luxurious corporate hotels such as Corporate Point Hotel which provide a good combination of comfort and luxury to the businessmen.",
    image: feature2,
  },
  {
    id: 3,
    title: "Global Reach",
    description:
      "“Global Reach” service of Risezonic Travel gives an ability to travel around the world with great easiness and efficiency. With our car rental services near me, you will have access to exciting destinations and explore the adventure of driving yourself or the luxury of driving while someone else takes the wheel. Enjoy the liveliness of Bangalore, Goa, Hyderabad and Delhi with our cars accompanied by service drivers. Corporate hotel residencies such as Hotel Prominent Corporate Residency and Hotel Corporate Point offer excellent corporate travel experience. These addresses provide an ideal mix of luxury and work environment that will enable tired business travelers to find respite after a lengthy bout of business activity.    ",
    image:
      "https://eadn-wc03-877922.nxedge.io/cdn/wp-content/uploads/2020/01/global-reach.jpg",
  },
];

const SpecialServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-12 px-12">
      <div className="py-5 text-white">
        <h1 className="italic sm:text-5xl text-3xl uppercase text-blue-600 font-heading font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
          Special Services
        </h1>
        <h2 className="italic sm:text-5xl text-3xl uppercase text-blue-600 font-heading font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
          We Provide
        </h2>
      </div>

      <div className="sm:flex block sm:space-y-0 space-y-5 justify-evenly">
        {services.map((service) => (
          <div
            key={service.id}
            className="h-[450px] cursor-pointer sm:w-80 bg-slate-400 rounded-lg outline-offset-4 relative hover:scale-105 overflow-hidden transition-all ease-in duration-150"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => openModal(service)}
          >
            <div className="absolute bottom-0 left-0 p-5 bg-[#0D0C0C] text-white backdrop-blur-[1.4495413303375244px] bg-opacity-65 w-full">
              <h2 className="text-yellow-500">{service.title}</h2>
              <h3 className="line-clamp-2">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 transform -skew-x-12 focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 shadow-inner">
          Know More
        </button>
      </div> */}

      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default SpecialServices;
