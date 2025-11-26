// src/layout/SpecialServices.jsx
import { useState } from "react";

import Modal from "../layout/Modal"; // Ensure the correct import path

const services = [
  {
    id: 1,
    image: "https://ychef.files.bbci.co.uk/1280x720/p02rmhgr.jpg",
    title: "Take in the ceremony of the nation's guard At the Wagah Border",
    description:
      "Take in the ceremony of the nation's guard At the Wagah Border This ceremony, called the Beating Retreat, consists of lowering the flags, a drill, a demonstration of boot stamping, and quick dance-like movements. Every day at six o'clock in the evening, India and Pakistan demonstrate their fraternity and cooperation at the Wagah Border through this act. If you would love to witness patriotism at its height, this could be an exciting experience to include in your India holiday packages.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1683808405%2Fvktpxatyzyphl4v1lpml.jpg",
    title: " Stay the Night at Purushwadi Under the Light of the Fireflies",
    description:
      " Stay the Night at Purushwadi Under the Light of the Fireflies The Purushwadi village in Maharashtra hosts one of the most exquisite and organic light festivals. Situated 180 kilometers from Mumbai, this grassroots town has seen the incredible display of spectacular light effects in May and June, when soaring herds of fireflies take to the air at dawn. This may be the lesson you learn from your India tour packages.",
  },
  {
    id: 3,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/roopkund-lake1-x525.jpg?scFdzoxD7vv31ZyTb9hN1ijd74gNQZGF",
    title: "Go to Chamoli's Skeleton Lake at Roopkund.",
    description:
      "Its mere reason for being is what makes this one among the spookiest places to be around—not any ghosts or demons hiding out. More than 200 human skeleton remains, dated from 850 AD, were discovered in this lake. According to the remains, they had perished identically, from strikes to the head that were subsequently determined to have been caused by an intense hailstorm that struck suddenly. To get to the lake, you must journey for three to four days. Your holiday packages to India shouldn't even include this location if you enjoy excitement",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/i9Iw3mTJueQ/maxresdefault.jpg",
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
      "https://wp-assets.rooftopapp.com/wp-content/uploads/2023/07/3ebb500c-440a-11eb-be92-09cd005df0bf_image_hires_105956.jpg",
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
    <section className="sm:p-12 p-4 max-w-7xl mx-auto">
      <div className="py-5 ">
        <div className="py-6">
          <h2 className="text-start text-3xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
            Activities in Various Locations In the Indian
          </h2>
          <br />
          <div className="block justify-center  text-gray-800 text-[15px] font-serif">
            <p className="text-start">
              When it comes to activities, India truly has no rivals. There is
              something to do for individuals of all ages in practically every
              destination in the nation. You will also have a plethora of
              options if you decide to visit one of the popular tour
              destinations in India. The following list of activities can be
              enjoyed in the most popular places in India:
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex block  justify-evenly flex-wrap gap-4 sm:px-0 px-5">
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

export default ActivityVariousLoaction;
