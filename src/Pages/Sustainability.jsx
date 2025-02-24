import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import HomeNav from "../layout/HomeNav";
import InidanHolidayBanner from "../layout/InidanHolidayBanner";
import { useEffect } from "react";
const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Sustainable Development Goals | Risezonic Travels </title>
        <meta
          name="description"
          content=" Risezonic Travels' strategy is to reduce the negative environmental impact resulting steps to protect Nature .  "
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/Sustainability"
        />
      </Helmet>
      <HomeNav />
      <InidanHolidayBanner />
      <div
        className=" mx-auto bg-white shadow-lg rounded-lg p-6"
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
        <h1 className="text-3xl font-bold mb-4 text-center italic py-9 text-blue-700 underline decoration-yellow-500 underline-offset-8">
          Risezonic Travel: Pioneering Sustainable Corporate Travel Through Tree
          Plantation
        </h1>

        <p className="text-lg mb-6">
          At Risezonic Travel, we are committed to fostering a greener and more
          sustainable future for the tourism industry. Our purpose is not only
          to deliver unique corporate travel experiences but also to address the
          issues of environmental conservation and encourage the protection of
          the Earth’s treasures.
        </p>

        <p className="text-lg mb-6">
          Acknowledging the fact that the climate change and the environmental
          challenges are real and escalating, we stand well aware of the need to
          run the business sustainably and where necessary, seek sustainable
          solutions to our operations. Therefore, we seek environmental
          sustainability so that we can lower our impact and encourage tourists
          to be responsible. Our commitment to sustainable practices is not a
          mere lip service but an unyielding principle that guides all our
          operations.
        </p>

        <p className="text-lg mb-6">
          We are privileged to have established good working relationships with
          highly acclaimed non-governmental organisations and government
          agencies that advocate the involvement in environmental conservation.
        </p>

        <p className="text-lg mb-6">
          The program became a result of these collaborations that formed a
          holistic tree-planting initiative to par with the carbon emissions
          from corporate travels.
        </p>

        <p className="text-lg mb-6">
          Risezonic Travel has policies that ensure that trees are planted for
          every customer booking, thus helping in the restoration of lost
          forests and climate change.
        </p>
        <section className="">
          <div className="w-full  bg-black">
            <img
              src="https://sb.ecobnb.net/app/uploads/sites/3/2022/03/Schermata-2022-02-21-alle-20.54.50.png"
              alt="travel-sustainbilty"
              loading="lazy"
            />
          </div>
        </section>
        <h2 className="text-2xl font-bold mb-4 italic py-9 text-blue-700 underline decoration-yellow-500 underline-offset-8">
          Key Sustainability Initiative: Carbon Offsetting through Tree
          Plantation
        </h2>

        <ul className="list-disc list-inside mb-6">
          <li>
            Collaboration with other credible NGOs and the government for tree
            planting exercises.
          </li>
          <li>
            Planting trees for every customer travel booking, no matter the
            distance the business travel needs, or the type of transport used.
          </li>
          <li>
            The process involves the proper choice of the indigenous tree
            species that will grow well and sustain themselves in the local
            climate.
          </li>
          <li>
            Observing the planted trees and supporting them so that they grow
            and are healthy so as to help in reforestation and conservation of
            biodiversity.
          </li>
          <li>
            Reporting not only the quantities of trees planted but also the
            corresponding CO2 reduction accomplished.
          </li>
        </ul>

        <p className="text-lg mb-6">
          In Risezonic Travel, we recognize that sustainable corporate travel is
          not only the right thing to do but also the smart thing to do. Through
          practices like tree plantation, therefore, we declare ourselves
          environmentally sensitive and willing to ensure that the natural
          beauty of the destinations we offer is preserved for future
          generations.
        </p>

        <p className="text-lg mb-6">
          Join us on this journey towards a greener tomorrow, where corporate
          travel and environmental stewardship coexist in perfect harmony.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Sustainability;
