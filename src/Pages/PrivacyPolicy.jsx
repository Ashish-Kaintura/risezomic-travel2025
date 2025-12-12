import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";

import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Risezonic Travel</title>
        <meta
          name="description"
          content="Read our Privacy Policy to learn how Risezonic Travel collects, uses, and protects your personal information. Your data privacy matters to us."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/privacy-policy" />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" object-center object-contain">
          <img
            className="h-full w-full"
            src="https://i.postimg.cc/d1zvPbBM/privacy-policy.png"
            alt="Privacy Policy Banner"
          />
        </div>
        <h1 className="text-center text-6xl decoration-yellow-500 uppercase py-8 font-semibold underline underline-offset-8 text-blue-700">
          Privacy Policy
        </h1>
        <p className="px-4 py-6 font-serif">
          Risezonic Travel values your privacy and understands the need to
          safeguard any personally identifiable information—any piece of
          information that may be used to identify you—that you entrust to us,
          including your name, address, and phone number. We want to reassure
          you that when it comes to safeguarding your privacy on our websites,
          we adhere to the proper guidelines. Generally speaking, you can visit
          Risezonic Travel without providing any personal information about
          yourself or identifying yourself to us. <br /> <br /> Although we
          monitor the domain names from which visitors come to our website, we
          do not personally identify each individual user. Instead, we utilize
          this information to identify patterns and statistics. A few of our
          webpages employ cookies in order to provide you a more personalized
          service the next time you visit. Cookies are unique identifiers that
          websites can transmit to your browser and store on your computer to
          make it easier for you to visit our site again in the future. To
          choose whether or not to accept a cookie, you can configure your
          browser to alert you when one is received. We use the data we gather
          and examine to enhance the quality of our offerings to you. Sometimes
          we might ask for personal information from you, like your name,
          address, or phone number. We want you to know what we plan to do with
          the information and to let you know before we take that action. You
          will typically be given the choice to withhold the information, and
          you will eventually have the opportunity to opt out of certain uses of
          the data. You can still visit Risezonic Travel even if you decide not
          to provide us the information we ask for, but you might not be able to
          take advantage of all the options, deals, and services. <br /> <br />{" "}
          Unless required by subpoena, search warrant, or other legal process,
          or in the event of an impending physical threat to the user or others,
          Risezonic Travel will not sell, trade, or disclose to third parties
          any information obtained from the registration for, or use of, any
          online service (including names and addresses). Risezonic Travel will
          grant its suppliers access to the data in order to verify your
          registration and provide you with the benefits to which you are
          legally entitled. Risezonic Travel will take the necessary precautions
          to safeguard the data you entrust to us. To prevent unauthorized
          access, incorrect use, or disclosure of your personally identifiable
          information, we have put in place stringent policy guidelines,
          technology, and security features.Risezonic Travel is committed to
          improving its security protocols in line with emerging technological
          advancements. We will update this page with any future modifications
          to our privacy statement, along with the updated effective date. To
          make sure you are aware of our most recent policies, you should
          frequently review our privacy policy. Kindly mention the privacy
          policy in the subject line of your email. Within seven business days
          of receiving your questions or issues, Risezonic Travel will make an
          effort to address them. We appreciate you using Risezonic Travel.
        </p>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;
