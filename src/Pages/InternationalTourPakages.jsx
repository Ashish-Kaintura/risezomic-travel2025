import HomeNav from "../layout/HomeNav";
import InternationalHolidayTips from "../layout/InternationalHolidayTips";
// import InternationalHoneymoon from "../layout/InternationalHoneymoon";
import InternatonalHolidayBanner from "../layout/InternatonalHolidayBanner";
import PopularInternationalTourTable from "../layout/PopularInternationalTourTable";
import TrendingInternation from "../layout/TrendingInternation";
import InternationalTrendingDestinationTable from "../layout/TrendingInternationalTourDestinationstable";
import VisaFreeIternational from "../layout/VisaFreeIternational";
import Footer from "../layout/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function InternationalTourPakages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Book International Holiday Packages at Best Price</title>
        <meta
          name="description"
          content="Book  International Holiday Packages Flights and Hotels at the Best Prices with Risezonic Travel."
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/International-Tour-Packages"
        />
      </Helmet>
      <HomeNav />
      <section>
        <InternatonalHolidayBanner />
      </section>
      <section
        className="sm:h-[80vh] items-center flex justify-center"
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
        <div className="py-6 ">
          <h1 className="text-center text-3xl italic sm:pb-12 uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
            International Holiday - International Tour Packages
          </h1>
          <br />
          <div className="block justify-center px-4 text-gray-800 text-[15px] font-serif">
            <p className="text-center">
              An international tour is something that many of us have dreamed of
              doing, but most of us struggle to figure out how to plan the trip.
              Even if many of us lack the time to carefully consider every
              aspect of international tour packages, working with a reliable
              partner can help us make our dream of an international tour into a
              reality. You are in the perfect place if you are looking for an
              international tour. In addition to professional travel guidance,
              comprehensive destination information, and a wealth of travel
              suggestions, you can discover, plan, and reserve your ideal
              international tour packages right here. Risezonic Travel India is
              bound to encourage you to explore the globe. We have a variety of
              international holiday packages to pick from, as well as fully
              personalized holiday choices for the seasoned traveler in you, to
              help you get started on organizing your next international tour.
            </p>
          </div>
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
        <div className="px-4 py-8">
          <h2 className=" text-3xl italic uppercase font-bold text-gray-200 underline decoration-yellow-500 underline-offset-8">
            Why Risezonic Travel For International Trip?
          </h2>
          <div className="py-8 text-[15px] font-serif text-gray-200">
            <p>
              Risezonic Travel, one of the top suppliers of travel solutions,
              has all the knowledge of foreign travel you All need to organize
              your international tour. Our company provides some of the most
              well-liked international tour packages that are sure to captivate
              your imagination. There are lots of fantastic options available,
              whether you Are searching for an international tour package that
              focuses on a particular region or an international tour package
              for a honeymooning couple. Additionally, there are lots of
              affordable international tour packages that might fit within your
              budget. They come in a range of pricing points. Additionally,
              Risezonic Travel allows you to personalize your international tour
              package to just pay for the items you want to include. For
              instance, some of their packages dont include flights.
            </p>
          </div>
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
        <PopularInternationalTourTable />
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
        <TrendingInternation />
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
        <InternationalTrendingDestinationTable />
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
        <VisaFreeIternational />
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
        <InternationalTrendingDestinationTable />
      </section>
      {/* <section
        style={{
          backgroundImage: `
    linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
  `,
        }}
      >
        <InternationalHoneymoon />
      </section> */}
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
        <InternationalHolidayTips />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
