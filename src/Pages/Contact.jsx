import { useEffect } from "react";
import Footer from "../layout/Footer";
import HomeForm from "../layout/HomeForm";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { ImOffice } from "react-icons/im";
import { Helmet } from "react-helmet";
import HomeNav from "../layout/HomeNav";
export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Contact us | Risezonic Travel </title>
        <meta
          name="description"
          content="Risezonic Travels is the leading tour and travel agency in Delhi. We are providing premium India tour packages at affordable prices."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/Contact-us" />
      </Helmet>
      <div>
     <HomeNav/>
      </div>
      <div className="pt-28">
        {/* <div
          className="visme_d h-[100vh]"
          data-title="Contact Form"
          data-url="8r64zdrm-contact-form?fullPage=true"
          data-domain="forms"
          data-min-height="100vh"
          data-form-id="64983"
        ></div> */}

        <div className="flex flex-wrap  gap-y-8 sm:gap-y-0  sm:justify-evenly justify-center py-8">
          <div className="group w-64 h-64 shadow-xl bg-gray-200 rounded-xl flex flex-col justify-center items-center text-center hover:text-white hover:bg-black ">
            <div>
              <IoCall className="text-5xl" />
            </div>
            <div>
              <h2 className="text-xl pt-5 font-bold uppercase">Call Us</h2>
              <Link to="tel:8178857250">
                <h2 className="text-2xl pt-1 font-bold uppercase p-2 rounded">
                  8178857250
                </h2>
              </Link>
            </div>
          </div>
          <div className="group w-64 h-64 shadow-xl bg-gray-200 rounded-xl flex flex-col justify-center items-center text-center hover:text-white hover:bg-black ">
            <div>
              <IoMail className="text-5xl" />
            </div>
            <div>
              <h2 className="text-xl pt-5 font-bold uppercase">mail Us</h2>
              <Link to="mailto:Info@risezonictravel.com">
                <h2 className="text-sm pt-1 font-bold uppercase p-2 rounded">
                  Info@risezonictravel.com
                </h2>
              </Link>
            </div>
          </div>
          <div className="group w-64 h-64 shadow-xl bg-gray-200 rounded-xl flex flex-col justify-center items-center text-center hover:text-white hover:bg-black ">
            <div>
              <ImOffice className="text-5xl" />
            </div>
            <div>
              <h2 className="text-xl pt-5 font-bold uppercase">Visit Us</h2>
              <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1414535187223!2d77.09380427526675!3d28.505391589843356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19358b009269%3A0xbf65549b8130f4b1!2sAwfis%20Gurgaon!5e0!3m2!1sen!2sin!4v1699080676505!5m2!1sen!2sin">
                <h2 className=" text-xs pt-1 font-bold uppercase p-2 rounded">
                  07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48,
                  Gurugram, 122002
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <HomeForm />
      </div>
      <div className="flex flex-wrap sm:px-0 px-4 justify-evenly py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1414535187223!2d77.09380427526675!3d28.505391589843356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19358b009269%3A0xbf65549b8130f4b1!2sAwfis%20Gurgaon!5e0!3m2!1sen!2sin!4v1699080676505!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="sm:w-[600px] w-[410px] sm:h-[450px] h-[450px]"
        ></iframe>
        <div className="text-start flex flex-col justify-start">
          <h2 className="text-start sm:text-2xl text-lg font-semibold pb-4 uppercase sm:pt-0 pt-4">
            Connecting You to Global brCorporate <br /> Destinations
          </h2>
          <p>
            In our commitment to providing unparalleled corporate travel <br />
            experiences, SKIL Travel ensures that your corporate journeys are{" "}
            <br />
            backed by a worldwide network of expertise. With global presence and{" "}
            <br />
            experts spread strategically across the globe SKIL Travel guides you{" "}
            <br />
            seamlessly through the worlds landmark locations, so your business{" "}
            <br />
            travels are as efficient and personalised as can be. Explore the{" "}
            <br />
            globe with SKIL Travel – your trusted partner in corporate travel{" "}
            <br />
            excellence.
          </p>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}
