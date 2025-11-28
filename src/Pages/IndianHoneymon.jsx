import { Helmet } from "react-helmet";
import HomeNav from "../layout/HomeNav";
import InidanHolidayBanner from "../layout/InidanHolidayBanner";
import TopDestinationsTable from "../layout/TopDestinationsTable";
import Footer from "../layout/Footer";
import Honeymoonpacages from "../layout/HoneymoonPacakges";
import { useEffect } from "react";
import IndianHoneymoonBanner from "../components/IndianHoneymoonBanner";
const packages = [
  {
    title: "Darjeeling Honeymoon Package",
    description:
      "Explore the beauty of the Eastern Himalayas through our Darjeeling honeymoon tour package. Experience the enchanting morning mists and wake up to the magnificent sight of Mount Kanchenjunga. Couples can enjoy a romantic train journey on the UNESCO World Heritage listed Darjeeling Himalayan Railway. Our Tiger tour that lasts 5 nights entails a visit to tea estates, monasteries, and the famous Tiger Hill sunrise view.",
    duration: "5 nights",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/DarjeelingTrainFruitshop_%282%29.jpg/1200px-DarjeelingTrainFruitshop_%282%29.jpg",
  },
  {
    title: "Manali Honeymoon Package",
    description:
      "Our Manali honeymoon tour package has been designed exclusively for couples who are looking to explore and relax. Located in the Kullu Valley, Manali has snow-capped mountains, green pastures, and flowing rivers. Some of the recreational facilities include paragliding, river rafting, and lovely evenings around the campfire at night. For instance, our 5-night tour involves a trip to Rohtang Pass and Hadimba Temple tours.",
    duration: "5 nights",
    image:
      "https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg",
  },
  {
    title: "Rajasthan Honeymoon Packages",
    description:
      "Take a royal tour of Rajasthan with our honeymoon packages. From the pink city of Jaipur to the blue city of Jodhpur, Rajasthan gives the tourists a lot of sightseeing opportunities. This 7-night tour brings together heritage accommodations, dune-crossing camel rides, and sunset dinner beside brightly-lit fortresses.",
    duration: "7 nights",
    image:
      "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
  },
  {
    title: "Lakshadweep Honeymoon Packages",
    description:
      "For beach lovers, our Lakshadweep honeymoon packages offer an idyllic escape. Lakshadweep is one of the most popular honeymoon destinations since it offers pristine white sand beaches and clear seawater. Go swimming, snorkeling, sailing and even have a romantic dinner while watching the sunset on any of the islands.",
    duration: "6 nights",
    image:
      "https://cdn.britannica.com/32/1632-050-940FB0E6/Beach-resort-Bangaram-Island-India-Lakshadweep.jpg",
  },
  {
    title: "Andaman Honeymoon Package",
    description:
      "Take pleasure in the South Asian paradise of the Andaman Islands with our selected honeymoon offer. Stroll through Radhanagar, snorkel at the coral reefs and see the glowing sea of Havelock Islands. The 6 night package comes with a Candle Light dinner on the beach and a tour to the Cellular Jail.",
    duration: "6 nights",
    image: "https://static.toiimg.com/photo/104400974.cms",
  },
  {
    title: "Udaipur Honeymoon Package",
    description:
      "Often referred to as the City of Lakes, a perfect romantic getaway awaits tourists in Udaipur. Honeymoon package to Udaipur also involves accommodation in a palace on the shores of Lake Pichola, a boat ride along the lake, and a trip to the magnificent City Palace. Spend a cultural night with Rajasthani music and dance show and have a fairy-tale dinner with a view of the sparkling lit up marvel, Lake Palace.",
    duration: "5 nights",
    image:
      "https://static.toiimg.com/thumb/msid-82304823,width-748,height-499,resizemode=4,imgsize-647878/.jpg",
  },
  {
    title: "Kashmir Honeymoon Package",
    description:
      "Discover the fairy-tale like charm of Kashmir through our exclusive honeymoon tour package. Spend nights in wooden houseboats, travel across the Dal Lake in shikaras, and visit the Mughal garden of Srinagar. The 6-night stay offer covers a trip to Gulmarg, known for its skiing terrains as well as the highest gondola on earth.",
    duration: "6 nights",
    image:
      "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407.jpg",
  },
  {
    title: "Ooty Honeymoon Package",
    description:
      "Ooty is located at Nilgiri Hills which makes it a perfect place for honeymooners who are looking for a cool climate and scenic beauty. This Ooty honeymoon package will take you to a colonial bungalow style accommodation visit on Nilgiri Mountain Toy Train and also the Botanical Gardens. Go for picnicking by the side of Ooty Lake or take romantic strolls through tea gardens.",
    duration: "5 nights",
    image:
      "https://www.trawell.in/blog/wp-content/uploads/2024/03/ooty-main-730x410.jpg",
  },
  {
    title: "Shimla-Manali Honeymoon Package",
    description:
      "Combine the colonial charm of Shimla with the alpine beauty of Manali in our specially curated honeymoon package. Stroll with your partner on Shimla’s famous Mall Road, ride the toy train to Kufri and go for the daring adventure in Manali. The package is a perfect 6-night honeymoon that will give couples an option of the two different locations within their first week of marriage.",
    duration: "6 nights",
    image:
      "https://static.toiimg.com/photo/msid-72520428,width-96,height-65.cms",
  },
];

export default function IndianHoneymon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Book Honeymoon Packages in India | Risezonic Travel</title>
        <meta
          name="description"
          content="Book the best honeymoon packages in India with Risezonic Travel. Enjoy romantic stays, smooth planning, and great prices at top destinations like Goa, Kerala, Manali, and more."
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/honeymoon-packages"
        />
      </Helmet>
      <HomeNav />
      <IndianHoneymoonBanner />
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
        <h1>Book Honeymoon Packages in India</h1>
      </div>
      <section>
        <div>
          <p className="text-center font-serif px-4 pb-4">
            Are you ready to embark on the most romantic adventure of your life?
            Look no further than our Indian honeymoon packages, designed to
            create unforgettable memories for newlyweds. From the snow-capped
            peaks of Kashmir to the sun-kissed beaches of Lakshadweep, India
            offers a diverse range of experiences for couples seeking the
            perfect start to their married life.
          </p>
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
        <TopDestinationsTable />
      </section>
      <section
        className="py-8 mt-8 max-w-7xl mx-auto"
      //         style={{
      //           backgroundImage: `
      //   linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
      //   linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
      // `,
      //         }}
      >
        <div>
          <h2 className="flex justify-center text-center text-4xl font-semibold py-12 ">
            Best Honeymoon Packages: Specific for Each Pair
          </h2>
        </div>
        <p className="text-center px-4 pb-8">
          Our best honeymoon packages are specially designed to create a loving
          atmosphere for the couple. It is always important to remember that
          every couple is also different and therefore comes with a choice or
          budget of their own. Luxury resorts to small and romantic boutiques –
          we guarantee your stay in a hotel is going to be perfect.
        </p>
        <section id="packages" className="py-12">
          <div className="max-w-7xl mx-auto px-6">
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
      >
        <Honeymoonpacages />

      </section>

    </div>
  );
}
