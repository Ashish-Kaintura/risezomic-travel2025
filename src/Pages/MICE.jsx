import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import InternatonalHolidayBanner from "../layout/InternatonalHolidayBanner";
import YouTubeShortsGallery from "../layout/YouTubeShortsGallery";
import MiceImageGallery from "../layout/MiceImageGallery";
const MICE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Book you MICE Travel Packages with Risezonic Travel</title>
        <meta
          name="description"
          content="Unforgettable travel with MICE Tourism from Risezonic Travel India for all your business needs, including meetings, conferences, events etc."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/mice" />
      </Helmet>
      <HomeNav />
      <InternatonalHolidayBanner />

      <div
        className=" mx-auto shadow-lg rounded-lg p-6"
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
          <h1 className="text-3xl font-bold mb-4 text-center  text-blue-700 underline decoration-yellow-500 underline-offset-8">
            Best Corporate Events with Risezonic Travels MICE Services
          </h1>

          <p className="text-lg mb-6">
            Risezonic Travel is your trusted corporate travel management service
            expert, providing high-quality and exceptional services for your
            MICE events that will propel your business to a whole new level.
            From reliable transportation and comfortable accommodations to
            diverse and entertaining recreation and spectacular corporate
            meeting venues and technologies, we arrange out of this world
            experiences for the team.
          </p>
        </div>

        <div
          className="mb-6 p-6"
          style={{
            backgroundImage: `
        linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
        linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
        linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
        linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
      `,
          }}
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-200 uppercase py-6 italic underline decoration-yellow-500 underline-offset-8">
            Highlights of Risezonic Travels MICE Services:
          </h2>
          <div className="flex flex-wrap justify-evenly">
            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                1. Tailored Transportation Solutions:
              </h3>
              <ul className="list-disc list-inside">
                <li>Luxury coach buses for seamless group travel</li>
                <li>Private charter flights for convenience and comfort</li>
                <li>Dedicated airport transfers and ground transportation</li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                2. Luxurious Accommodation:
              </h3>
              <ul className="list-disc list-inside">
                <li>Upscale hotels and resorts in prime locations</li>
                <li>Exclusive corporate rates and negotiated discounts</li>
                <li>Customized room configurations for corporate needs</li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                3. Engaging Team-Building Activities:
              </h3>
              <ul className="list-disc list-inside">
                <li>Thrilling outdoor adventures and team challenges</li>
                <li>Cultural immersion experiences and culinary tours</li>
                <li>Unique theme parties and gala events</li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                4. State-of-the-Art Meeting Facilities:
              </h3>
              <ul className="list-disc list-inside">
                <li>Properly designed conference and board meeting areas</li>
                <li>
                  High-tech audiovisual equipment and other presentation tools
                </li>
                <li>
                  Reliable Wireless fidelity and telecommunication services
                </li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                5. Curated Destination Experiences:
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Local and overseas destinations for various types of
                  travellers
                </li>
                <li>
                  Tourist attractions such as historic buildings, sites of
                  cultural importance, and nature-made wonders
                </li>
                <li>
                  Privileged spaces and experiences that are only available to
                  locals
                </li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                6. Customized Dining Options:
              </h3>
              <ul className="list-disc list-inside">
                <li>Gourmet catering services with diverse cuisine choices</li>
                <li>Private dining events and themed dinners</li>
                <li>Local culinary experiences and wine tastings</li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                7. Professional Event Management:
              </h3>
              <ul className="list-disc list-inside">
                <li>Dedicated event coordinators for seamless execution</li>
                <li>Comprehensive logistics and on-site support</li>
                <li>Expertise in handling large-scale corporate events</li>
              </ul>
            </div>

            <div
              className="border p-4 py-5 gap-4 w-96 m-4 "
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
              <h3 className="text-xl font-semibold mb-1">
                8. Corporate Social Responsibility Initiatives:
              </h3>
              <ul className="list-disc list-inside">
                <li>Sustainable and eco-friendly event practices</li>
                <li>
                  Collaboration with local communities and charitable
                  organizations
                </li>
                <li>Promoting responsible tourism and cultural preservation</li>
              </ul>
            </div>
          </div>
        </div>
        <MiceImageGallery/>
        <YouTubeShortsGallery />
        <p className="text-lg mb-6 mt-4">
          Rizeonic Travel’s MICE services will guarantee that your corporate
          events are out of this world mirroring the company’s vision of making
          your events extraordinary. Call for bookings today for your company to
          begin its next corporate adventure.
        </p>

        <div className="text-start">
          <p className="text-lg font-bold">Risezonic Travel</p>
          <p className="text-lg">+918178857250</p>
          <p className="text-lg">Info@risezonictravel.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default MICE;
