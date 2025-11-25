import { Helmet } from "react-helmet";
import HomeNav from "../layout/HomeNav";
import InternatonalHolidayBanner from "../layout/InternatonalHolidayBanner";
import { useEffect } from "react";
// import InternationalHoneymoon from "../layout/InternationalHoneymoon";
import Footer from "../layout/Footer";
import Fantasticloaction from "../layout/Fantasticloaction";
const packages = [
  {
    title: "Maldives: A Tropical Paradise for Two",
    description:
      "The Maldives tops the list of best international honeymoon destinations for good reason. Imagine yourself sitting on a porch of an overwater bungalow and the view is the clear blue sea. Swim hand-in-hand and snorkel past intensely colored coral gardens filled with beautiful fish. Another interesting activity to do is the bioluminescent plankton tour at night – simply enchanting!Observe how the waters appear to glow like the night sky as you progress through them.",
    image:
      "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0=",
  },
  {
    title: "Bali: Island of Romance and Culture",
    description:
      "Thus, Bali honeymoon packages provide guests with a taste of romance, cultural and natural beauty that Bali has to offer. Wake up early in the morning to climb the Mount Batur, an active volcano with amazing views. Visit the captivating Ubud Monkey Forest, which is inhabited by more than 700 friendly monkeys. For their last moments together with their significant others, guests can indulge in couples’ spa treatments employing Balinese methodologies and natural products",
    image:
      "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=",
  },
  {
    title: "Italian Love Affair: From Venice to the Stunning Amalfi Coast",
    description:
      "Italian honeymoon packages would be ideal for art lovers, history enthusiasts and anyone who enjoys Italian cuisine. Take a romantic gondola ride in Venice with a view of the famous Bridge of Sighs in the backdrop. In Florence, climb up Piazzale Michelangelo to watch the sunset and enjoy the view of the city. End your holiday with a scenic drive along the Amalfi Coast and make a pit stop in picturesque towns like Positano or Ravello.",
    image:
      "https://media.istockphoto.com/id/1380534040/photo/beautiful-view-of-amalfi-on-the-mediterranean-coast-with-lemons-in-the-foreground-italy.jpg?s=612x612&w=0&k=20&c=4UQak9WJkyvN8aEgkLEwjnV5EW2RiGfC_GZNeQaVJeo=",
  },
  {
    title: "Thailand: A Patchwork of Lives",
    description:
      "There are a number of things that the couple can do in Thailand making it a perfect honeymoon destination. On a Bangkok tour, have the opportunity to see the grandeur of the Grand Palace and get to enjoy a beautiful river dinner cruise on the Chao Phraya River. Continue the journey south to Phi Phi Island for more seclusion and some of the best snorkeling experiences. For another exciting activity do a Thai cooking class with each other, and prepare special Thai meals.",
    image:
      "https://media.istockphoto.com/id/1434150819/photo/doi-inthanon-at-chiang-mai-thailand.webp?b=1&s=170667a&w=0&k=20&c=00GLJp7p-9r2AixxsDwh1jRanq-zwf5SGZSY9KuOO_o=",
  },
  {
    title: "Santorini: Greek Island Romance",
    description:
      "In as much as Santorini is associated with many things, the most popular aspect of it would be romanticism. Visit the lovely Oia village and see the sunset where the buildings become all golden. Have a catamaran sail through caldera and visiting hot springs, and beaches with red and white sand. Taste the volcanic wines of the island by going to a local winery.",
    image:
      "https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?s=612x612&w=0&k=20&c=AY_kxRrkTjbDLhqpotxgW8CZp4ovEIM1tRdTrvXKcAM=",
  },
];
const destinations = [
  {
    destination: "Maldives",
    attractions: "Overwater Villas, Snorkeling",
    bestTime: "November - April",
    idealDuration: "5-7 days",
  },
  {
    destination: "Bali",
    attractions: "Ubud Rice Terraces, Uluwatu Temple",
    bestTime: "April - October",
    idealDuration: "7-10 days",
  },
  {
    destination: "Italy",
    attractions: "Venice Canals, Amalfi Coast",
    bestTime: "April - June, September - October",
    idealDuration: "10-14 days",
  },
  {
    destination: "Thailand",
    attractions: "Phi Phi Islands, Bangkok Temples",
    bestTime: "November - March",
    idealDuration: "7-10 days",
  },
  {
    destination: "Santorini",
    attractions: "Oia Sunset, Black Sand Beaches",
    bestTime: "April - October",
    idealDuration: "5-7 days",
  },
];
export default function InternationalHoneymon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Cheapest International Honeymoon Packages</title>
        <meta
          name="description"
          content="Risezonic Travel is a top-rated travel Agency | that Provides the Cheapest International Honeymoon Packages. "
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/international-honeymoon-tour-packages"
        />
      </Helmet>
      <HomeNav />
      <InternatonalHolidayBanner />
      <div
        className="flex justify-center text-center text-4xl font-semibold py-12"
        style={{
          backgroundImage: `
    linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
    linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
  `,
        }}
      >
        <h1>
          International Honeymoon Tour Packages: Exploring Earths Most Romantic
          Destinations
        </h1>
      </div>
      <section
        style={{
          backgroundImage: `
    linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
    linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
  `,
        }}
      >
        <div>
          <p className="text-center font-serif px-4 pb-4">
            Your honeymoon is a once-in-a-lifetime experience. Its no wonder
            that 62% of newlyweds choose international honeymoon tour packages
            for their special getaway. Lets explore some of the best options for
            your romantic escape.
          </p>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `
    linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
    linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
  `,
        }}
      >
        <div className="overflow-x-auto py-12 px-4">
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr className="text-left">
                <th className="py-2 px-4 border-r border-gray-200">
                  Destination
                </th>
                <th className="py-2 px-4 border-r border-gray-200">
                  Top Attractions
                </th>
                <th className="py-2 px-4 border-r border-gray-200">
                  Best Time to Visit
                </th>
                <th className="py-2 px-4">Ideal Duration</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-2 px-4 border-r border-gray-200">
                    {destination.destination}
                  </td>
                  <td className="py-2 px-4 border-r border-gray-200">
                    {destination.attractions}
                  </td>
                  <td className="py-2 px-4 border-r border-gray-200">
                    {destination.bestTime}
                  </td>
                  <td className="py-2 px-4">{destination.idealDuration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `
  linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
`,
        }}
      >
        <div className="flex flex-wrap justify-center gap-8 text-white sm:py-12 p-8">
          {packages.map((item, index) => (
            <div
              className="border-2 p-4  flex flex-col md:flex-row  items-center w-full md:w-[700px] md:h-[350px] gap-x-4 "
              key={index}
            >
              <div className="h-52 w-full md:w-[50%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full md:w-[50%] mt-4 md:mt-0">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <div>
                  <p>{item.description}</p>
                  {/* <p className="text-gray-600 mt-2">
                    <strong>Duration:</strong> {item.duration}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          backgroundImage: `
    linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
    linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
  `,
        }}
      >
        <Fantasticloaction />
      </section>
      
    </div>
  );
}
