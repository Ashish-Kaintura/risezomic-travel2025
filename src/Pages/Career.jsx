import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import HomeForm from "../layout/HomeForm";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> Career in Travel and Tourism | Risezonic Travel </title>
        <meta
          name="description"
          content="Risezonic Travel is the Best Corporate business travel agency in India. Contact us for a free consultation."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/Career" />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" object-center object-contain">
          <img
            className="h-[500px] w-full"
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
          />
        </div>
        <h1 className="text-center text-6xl decoration-yellow-500 text-blue-700 uppercase py-8 font-semibold  underline underline-offset-8">
          Risezonic Travel - Career
        </h1>
        <p className="px-4 py-6 font-serif">
          At Risezonic Travels, we are an equal opportunity employer committed
          to providing equal opportunities for all applicants and employees. We
          strictly prohibit discrimination or harassment based on race,
          religion, color, gender, national origin, sexual orientation,
          disability, marital status, medical condition, pregnancy, or any other
          protected characteristic under applicable law. This policy extends to
          all aspects of employment, including recruitment, hiring, promotions,
          training, compensation, benefits, discipline, and termination. We aim
          to foster an inclusive and accessible environment for all candidates.
          If you require reasonable accommodation during the application or
          recruitment process, please contact your recruiter or contact our team
          at info@risezonictravel.com.
        </p>
        <HomeForm />
      </div>
      
    </div>
  );
};

export default Career;
