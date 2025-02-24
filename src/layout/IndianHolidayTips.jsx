// src/layout/SpecialServices.jsx
import { useState } from "react";

import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    image: "https://miro.medium.com/v2/resize:fit:696/0*X5Yx8FuCfe0muXee.jpg",
    title: "Choose your travel destination",
    description:
      "Choosing your destination is perhaps one of the most crucial steps because it will determine what to do next. Half of the issues can be resolved if you know which location you wish to visit. Therefore, you must first pick where you wish to travel before selecting from the India tour packages.",
  },
  {
    id: 2,
    image:
      "https://cdn.britannica.com/34/1634-050-BC7E72FA/map-India-Physical-locator.jpg",
    title: "Reserve a tour package to India",
    description:
      "This is something you ought to do. This will resolve a lot of issues. Choosing an India tour package will relieve you of all worries regarding transportation, lodging, food, and even sightseeing activities.",
  },
  {
    id: 3,
    image:
      "https://images.news18.com/ibnlive/uploads/2020/09/1601540372_credit_card.jpg?im=Resize,width=640,aspect=fit,type=normal",
    title:
      "Bring cash, even though most tour places in India accept digital payments",
    description:
      "Nonetheless, it is a good idea to have some cash on hand if you wish to browse the neighborhood markets. You won't be in danger at all, even if you don't need to spend them.",
  },
  {
    id: 4,
    image: "https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg",
    title:
      "Completing your investigation regarding the destination will help you cover all the attractions of the area.",
    description:
      " This is especially important if you are looking at family vacation packages in India. You will be prepared for every nook and cranny of the destination even before you arrive.",
  },
];

const IndianHolidayTips = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="sm:p-12 p-5 ">
      <div className="py-5 ">
        <div className="py-6">
          <h2 className="text-start text-3xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
            A Memorable Holiday: Insights And Tips
          </h2>
          <br />
          <div className="block justify-center  text-gray-800 text-[15px] font-serif">
            <p className="text-start">
              Dont we have a lot of expectations when we plan a trip? You may,
              however, plan things out thoroughly to ensure that your trip to
              India is successful. Here are some pointers that may come in handy
              when youre planning a trip to India and looking at different tour
              packages.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex block justify-evenly  flex-wrap gap-4 sm:px-0 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="sm:mt-0 mt-4 h-[350px] cursor-pointer sm:w-80 bg-slate-400 rounded-lg outline-offset-4 relative hover:scale-105 overflow-hidden transition-all ease-in duration-150"
            onClick={() => openModal(service)}
          >
            <div className="absolute bottom-0 left-0 p-5 bg-[#0D0C0C] text-white backdrop-blur-[1.4495413303375244px] bg-opacity-65 w-full">
              <h2 className="text-yellow-500 line-clamp-2">{service.title}</h2>
              <h3 className="line-clamp-2">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>

      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default IndianHolidayTips;
