const honeymoonPackages = {
  hotelsInGoa: {
    title: "Honeymoon Hotels in Goa: Sun, Sand, and Romance",
    description:
      "Goa being a favorite honeymoon destination due to its beautiful beaches and lively night life. The following are some honeymoon hotels in Goa that provide the best experience by coupling luxury with privacy: At our hotels ranging from beachfront hotels to boutique hotels, your stay will as romantic as it is comfortable.",
  },
  hotelHoneymoonInn: {
    title: "Hotel Honeymoon Inn: Comfort Across Popular Destinations",
    description:
      "The Hotel Honeymoon Inn is a series of hotels and resorts about comfort and intimate atmosphere for newlyweds in the most popular bridal tourist destinations. Let's explore some of their properties:",
    properties: [
      "Hotel Honeymoon Inn Manali",
      "Hotel Honeymoon Inn Shimla",
      "Hotel Honeymoon Inn Mussoorie",
    ],
  },
  bestHotelUdaipur: {
    title: "Best Hotel in Udaipur for Honeymoon",
    description:
      "For couples seeking luxury in Udaipur, we recommend the Taj Lake Palace. This iconic hotel, floating on Lake Pichola, offers unparalleled romance and royal treatment.",
  },
  affordableAccommodations: {
    title: "Affordable Accommodation Options",
    description:
      "For couples on a budget, we offer a range of cheap hotels across popular destinations:",
    locations: [
      "Cheap Hotels in Delhi",
      "Cheap Hotels in Goa",
      "Cheap Hotels in Ooty",
      "Cheap Hotels in Srinagar",
      "Cheap Hotels in Manali",
      "Cheap Hotels in Lonavala",
    ],
  },
  conclusion:
    "India offers a diverse range of honeymoon experiences, from the snowy peaks of the Himalayas to the sunny beaches of Goa. That is why our carefully selected Indian honeymoon packages allow every couple to choose the most suitable romantic vacation. No matter whether you are an adventurer, a leisure lover or a history and culture enthusiast, we have a package for you. This means that regardless of the type of honeymoon you wish to have we have both the budget and luxury honeymoon here for you. Let yourself and your beloved start your married life with unique memories in the amazing India!",
};

export default function Honeymoonpacages() {
  return (<>
    <div className="max-w-7xl  mx-auto p-4">
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-2">
          {honeymoonPackages.hotelsInGoa.title}
        </h2>
        <p className="text-center mb-8">
          {honeymoonPackages.hotelsInGoa.description}
        </p>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-2">
          {honeymoonPackages.hotelHoneymoonInn.title}
        </h2>
        <p className="text-center mb-8">
          {honeymoonPackages.hotelHoneymoonInn.description}
        </p>
        <ul className="list-disc list-inside">
          {honeymoonPackages.hotelHoneymoonInn.properties.map(
            (property, index) => (
              <li key={index}>{property}</li>
            )
          )}
        </ul>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-2">
          {honeymoonPackages.bestHotelUdaipur.title}
        </h2>
        <p className="text-center mb-8">
          {honeymoonPackages.bestHotelUdaipur.description}
        </p>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-2">
          {honeymoonPackages.affordableAccommodations.title}
        </h2>
        <p className="text-center mb-8">
          {honeymoonPackages.affordableAccommodations.description}
        </p>
        <ul className="list-disc list-inside">
          {honeymoonPackages.affordableAccommodations.locations.map(
            (location, index) => (
              <li key={index}>{location}</li>
            )
          )}
        </ul>
      </section>
      <section className="py-12">
        <p className="text-center font-serif px-4">
          {honeymoonPackages.conclusion}
        </p>
      </section>
      {/*  */}
    </div>
  </>
  );
}



// import React, { useState } from "react";

// const honeymoonPackages = {
//   hotelsInGoa: {
//     title: "Honeymoon Hotels in Goa: Sun, Sand, and Romance",
//     description:
//       "Goa remains a favourite honeymoon destination for its beautiful beaches and lively nightlife. From beachfront resorts to intimate boutique stays, these hotels combine luxury with privacy to make your honeymoon unforgettable.",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
//   },
//   hotelHoneymoonInn: {
//     title: "Hotel Honeymoon Inn: Comfort Across Popular Destinations",
//     description:
//       "Hotel Honeymoon Inn is a collection of cozy hotels and resorts designed for newlyweds, offering intimate atmospheres and excellent service across multiple destinations.",
//     properties: [
//       "Hotel Honeymoon Inn Manali",
//       "Hotel Honeymoon Inn Shimla",
//       "Hotel Honeymoon Inn Mussoorie",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
//   },
//   bestHotelUdaipur: {
//     title: "Best Hotel in Udaipur for Honeymoon",
//     description:
//       "For couples seeking romance and royal treatment in Udaipur, the Taj Lake Palace — floating on Lake Pichola — offers an unforgettable experience.",
//     image:
//       "https://images.unsplash.com/photo-1534856284118-4f0b5a0f2a1f?auto=format&fit=crop&w=800&q=60",
//   },
//   affordableAccommodations: {
//     title: "Affordable Accommodation Options",
//     description:
//       "Budget-conscious couples can still enjoy comfortable stays. Below are popular cheap hotel options across India.",
//     locations: [
//       "Cheap Hotels in Delhi",
//       "Cheap Hotels in Goa",
//       "Cheap Hotels in Ooty",
//       "Cheap Hotels in Srinagar",
//       "Cheap Hotels in Manali",
//       "Cheap Hotels in Lonavala",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1501117716987-c8e1ecb5d7d8?auto=format&fit=crop&w=800&q=60",
//   },
//   conclusion:
//     "India offers a diverse range of honeymoon experiences — from Himalayan peaks to sun-kissed beaches. Whether you want adventure, relaxation, or culture, our curated packages have options for every couple and budget. Start your married life with memories you'll cherish forever.",
// };

// export default function HoneymoonPackages() {
//   const [open, setOpen] = useState({
//     hotelHoneymoonInn: false,
//     affordableAccommodations: false,
//   });

//   const toggle = (key) =>
//     setOpen((s) => ({ ...s, [key]: !s[key] }));

//   const Card = ({ title, description, image, children }) => (
//     <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
//       <div className="md:grid md:grid-cols-3 gap-6 items-center p-6">
//         <div className="md:col-span-2">
//           <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
//             {description}
//           </p>
//           {children}
//           <div className="mt-4 flex gap-3">
//             <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm shadow-sm hover:opacity-95 transition">
//               Enquire
//             </button>
//             <button className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//         {image && (
//           <div className="hidden md:block md:col-span-1">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-40 object-cover rounded-lg border border-gray-100 dark:border-gray-700"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
//       <header className="text-center">
//         <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
//           Honeymoon Packages & Hotels
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Carefully selected stays across India — from romantic lakeside palaces to cosy mountain retreats.
//         </p>
//       </header>

//       <Card
//         title={honeymoonPackages.hotelsInGoa.title}
//         description={honeymoonPackages.hotelsInGoa.description}
//       // image={honeymoonPackages.hotelsInGoa.image}
//       />

//       <Card
//         title={honeymoonPackages.hotelHoneymoonInn.title}
//         description={honeymoonPackages.hotelHoneymoonInn.description}
//       // image={honeymoonPackages.hotelHoneymoonInn.image}
//       >
//         <div>
//           <button
//             onClick={() => toggle("hotelHoneymoonInn")}
//             aria-expanded={open.hotelHoneymoonInn}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             {open.hotelHoneymoonInn ? "Hide properties ▲" : "View properties ▼"}
//           </button>
//           <div
//             className={`mt-3 overflow-hidden transition-all duration-300 ${open.hotelHoneymoonInn ? "max-h-40" : "max-h-0"
//               }`}
//             aria-hidden={!open.hotelHoneymoonInn}
//           >
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
//               {honeymoonPackages.hotelHoneymoonInn.properties.map(
//                 (property, idx) => (
//                   <li key={idx} className="py-1">
//                     {property}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//       </Card>

//       <Card
//         title={honeymoonPackages.bestHotelUdaipur.title}
//         description={honeymoonPackages.bestHotelUdaipur.description}
//       // image={honeymoonPackages.bestHotelUdaipur.image}
//       />

//       <Card
//         title={honeymoonPackages.affordableAccommodations.title}
//         description={honeymoonPackages.affordableAccommodations.description}
//       // image={honeymoonPackages.affordableAccommodations.image}
//       >
//         <div>
//           <button
//             onClick={() => toggle("affordableAccommodations")}
//             aria-expanded={open.affordableAccommodations}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             {open.affordableAccommodations ? "Hide locations ▲" : "View locations ▼"}
//           </button>
//           <div
//             className={`mt-3 overflow-hidden transition-all duration-300 ${open.affordableAccommodations ? "max-h-48" : "max-h-0"
//               }`}
//             aria-hidden={!open.affordableAccommodations}
//           >
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-200 list-disc list-inside">
//               {honeymoonPackages.affordableAccommodations.locations.map(
//                 (loc, i) => (
//                   <li key={i} className="py-1">
//                     {loc}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//       </Card>

//       <section className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-6 text-center">
//         <p className="text-gray-700 dark:text-gray-200 italic max-w-3xl mx-auto">
//           {honeymoonPackages.conclusion}
//         </p>
//       </section>
//     </div>
//   );
// }
