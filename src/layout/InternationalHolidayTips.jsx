// src/layout/SpecialServices.jsx
import { useState } from "react";

import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    image: "https://miro.medium.com/v2/resize:fit:696/0*X5Yx8FuCfe0muXee.jpg",
    title: "Choose your trip destination",
    description:
      "Choosing your destination is perhaps one of the most crucial steps because it will determine what to do next. Half of the issues can be resolved if you know which location you wish to visit. Therefore, you must first pick where you wish to travel before selecting from the India tour packages.",
  },
  {
    id: 2,
    image:
      "https://assets.cntraveller.in/photos/632d67a767d00ef33fe822d9/3:2/w_3600,h_2400,c_limit/144462145",
    title: " Make sure your passport is valid",
    description:
      "Having a valid passport is essential, regardless of the necessity for a visa. When booking international tour packages, check sure your passport is valid for at least six months after the date of travel.",
  },
  {
    id: 3,
    image:
      "https://www.globotreks.com/wp-content/uploads/2020/05/Visa-requirements-for-United-States-citizens.png",
    title: "Determine whether your destination needs a visa before you go",
    description:
      "Many nations do not require one. Make sure the destination you want to visit does not require a visa before selecting from the international trip packages.",
  },
  {
    id: 4,
    image:
      "https://lh6.googleusercontent.com/proxy/bQPphHJjG49IIZP9FuyFMt6crdAQslCR7qGoqI1q1xAQcNsz2bx6m0oQMkbxsNvIWaQhvC0eJcmBjbn9d-RXzXNQQY5oW6to-3ff6taMC1gk",
    title:
      "Identify the best international travel agency that provides the best international tour packages",
    description:
      "Whether you're looking for an international tour package for couples or a family holiday package, you must first identify the best travel agency for international trips. Additionally, Risezonic Travel offers unmatched international holiday packages.It is crucial to confirm that your credit card is accepted in the nation you are visiting. To do this, check if it is accepted abroad. When you need money in a foreign country, this can be helpful at times.",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9ogyrXdGPF9WOkDDZCTgubKECspbA4nNEA&s",
    title: "Make an effort to carry local currency",
    description:
      "Not all places will accept your credit card. For this reason, you have to have local currency from the nation you are going.",
  },
  {
    id: 6,
    image:
      "https://cms-attachments.storage.googleapis.com/blog/uploads/2021/05/pasted-image-01-e1620631543298.jpg",
    title: "Prior to leaving for your destination, find out the exchange rate",
    description:
      "You may get a fair sense of the kind of money you would need for international travel by checking the conversion rate.",
  },
  {
    id: 7,
    image: "https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg",
    title:
      "Make sure you know everything there is to know about the destination",
    description:
      "every place is unique and has things to discover. You must therefore do your homework on the destination you intend to visit in order to make your trip worthwhile. This will enable you to visit every attraction.",
  },
];

const InternationalHolidayTips = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-12 px-12">
      <div className="py-5 ">
        <div className="py-6">
          <h2 className="text-start text-3xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
            Travel Tips For First International Tour
          </h2>
          <br />
          <div className="block justify-center  text-gray-800 text-[15px] font-serif">
            <p className="text-start">
              An international trip seems like a fantastic plan. We become
              excited the instant we learn about it, dont we? However, if this
              is your first time, you could feel a bit anxious. Here are some
              helpful international travel recommendations for you.
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
              <h2 className="text-yellow-500 line-clamp-1">{service.title}</h2>
              <h3 className="line-clamp-2">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12">
        <h2 className="text-center text-3xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
          Examine Popular International Travel Packages
        </h2>
        <br />
        <div className="block justify-center  text-gray-800 text-[15px] font-serif">
          <p className="text-start">
            At Risezonic Travel, we guarantee to provide the best international
            tour packages at affordable costs. Before deciding which package is
            best for you to include in your tour package, you can look through
            the list of packages available for the destination you wish to
            visit. These are a some of the international tour packages available
            for trensing.
          </p>
        </div>
      </div>
      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default InternationalHolidayTips;
