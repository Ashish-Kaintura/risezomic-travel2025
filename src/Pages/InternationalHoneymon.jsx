import { Helmet } from "react-helmet";
import HomeNav from "../layout/HomeNav";
import InternatonalHolidayBanner from "../layout/InternatonalHolidayBanner";
import { useEffect } from "react";
// import InternationalHoneymoon from "../layout/InternationalHoneymoon";
import Footer from "../layout/Footer";
import Fantasticloaction from "../layout/Fantasticloaction";
import Internationalhonemoonbanner from "../components/Internationalhonemoonbanner";
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
        <title>Best Deals on International Honeymoon Packages | Risezonic Travel</title>
        <meta
          name="description"
          content="Find the best deals on international honeymoon packages with Risezonic Travel. Enjoy romantic stays, smooth planning, flights, and memorable trips to top destinations."
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/international-honeymoon-tour-packages"
        />
      </Helmet>
      <HomeNav />
      {/* <InternatonalHolidayBanner /> */}
      <Internationalhonemoonbanner/>
      <div
        className="flex justify-center text-center text-4xl font-semibold py-12  "
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
          International Honeymoon Packages
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
          <p className="text-center font-serif px-4 pb-4 mx-auto max-w-7xl">
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
        <div className="overflow-x-auto max-w-7xl mx-auto py-12 px-4">
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
      //         style={{
      //           backgroundImage: `
      //   linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
      // `,
      //         }}
      >
        <section id="packages" className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Featured Honeymoon Packages</h2>

            <div className="flex flex-col gap-6">
              {packages.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-stretch gap-6 bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-[1.01] transition-transform"
                >
                  <div className="md:w-1/3 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="inline-block bg-gradient-to-r from-rose-100 to-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm shadow-inner">Romantic</span>
                      <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-50 text-indigo-700 px-3 py-1 rounded-full text-sm">All Inclusive</span>
                      <div className="ml-auto flex gap-3">
                        <a
                          href="tel:8178857250"
                          className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow hover:bg-blue-500 transition"
                        >
                          Book Now
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
      > <div className=" max-w-7xl mx-auto px-6 py-10" >        <Fantasticloaction /></div>
      </section>

      {/* Premium Hero */}
      {/* <header
        className="relative overflow-hidden"
        style={{
          minHeight: "48vh",
          background:
            "linear-gradient(120deg, rgba(14,165,233,0.08), rgba(99,102,241,0.06)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=60') center/cover no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            International Honeymoon Packages
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light">
            Curated escapes, private experiences and seamless planning for newlyweds —
            handpicked destinations, exclusive stays and personalised add-ons.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white px-5 py-3 rounded-full shadow-xl transform hover:-translate-y-1 transition"
            >
              Explore Packages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/10 transition"
            >
              Contact an Expert
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-4 bg-white/5 rounded-full px-4 py-2 shadow-inner text-sm text-white/90">
            <strong className="px-3 py-1 bg-white/10 rounded-full">Premium</strong>
            Complimentary room upgrade & private transfer on select bookings
          </div>
        </div>
      </header> */}

      {/* Intro */}
      {/* <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <p className="text-center text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Your honeymoon is a once-in-a-lifetime experience. Explore world-class
            resorts, private excursions and couples-first itineraries. Below are our
            top destinations and a selection of curated premium packages to inspire
            your perfect escape.
          </p>
        </div>
      </section> */}

      {/* Destinations — cards for better UX */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <article
              key={i}
              className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/10 hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-tr from-indigo-400 to-blue-300 flex items-center justify-center text-white text-lg font-bold shadow">
                  {d.destination.slice(0, 1)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{d.destination}</h3>
                  <p className="text-sm text-gray-600 mt-1">{d.attractions}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Best time: <strong className="text-gray-700">{d.bestTime}</strong></span>
                <span>Ideal: <strong className="text-gray-700">{d.idealDuration}</strong></span>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href="#packages"
                  className="inline-block px-3 py-2 rounded-md bg-indigo-600 text-white text-sm shadow hover:bg-indigo-500 transition"
                >
                  View Packages
                </a>
                <a
                  href="#contact"
                  className="inline-block px-3 py-2 rounded-md border border-indigo-100 text-indigo-700 text-sm hover:bg-indigo-50 transition"
                >
                  Ask an Advisor
                </a>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* Packages — premium, glass cards */}
      {/* <section id="packages" className="py-12" style={{ background: "linear-gradient(180deg,#ffffff,#f8fafc)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Featured Honeymoon Packages</h2>

          <div className="flex flex-col gap-6">
            {packages.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-stretch gap-6 bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-[1.01] transition-transform"
              >
                <div className="md:w-1/3 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-block bg-gradient-to-r from-rose-100 to-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm shadow-inner">Romantic</span>
                    <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-50 text-indigo-700 px-3 py-1 rounded-full text-sm">All Inclusive</span>
                    <div className="ml-auto flex gap-3">
                      <a
                        href="#contact"
                        className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow hover:bg-blue-500 transition"
                      >
                        Book Now
                      </a>
                      <a
                        href="#contact"
                        className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition"
                      >
                        Customize
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Fantastic locations / CTA */}
      {/* <section className="max-w-7xl mx-auto px-6 py-10">
        <Fantasticloaction />
      </section> */}



    </div>
  );
}
