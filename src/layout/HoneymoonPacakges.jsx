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
  return (
    <div>
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
      {/* <Footer /> */}
    </div>
  );
}
