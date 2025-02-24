import formimg from "../images/formimage.webp";
import { useRef, useState } from "react";
import { sendEmail } from "../layout/Email";
export default function HomeForm() {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(formRef.current);
    setMessage(response.message);
  };
  return (
    <>
      <div
        className="flex flex-wrap justify-center py-20 "
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
        <div
          className="shadow-2xl mt-8 p-5"
          style={{
            backgroundImage: `url(${"src/images/form-bg.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ps-9">
            <h2 className="text-4xl font-bold">
              “Experience the world of business
            </h2>
            <h3 className="text-4xl font-bold ps-3 ">
              travel with seamless precision.”
            </h3>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="px-7 grid justify-center items-center"
          >
            <div className="grid gap-6 p-5" id="form">
              <div className="w-full flex gap-3">
                <input
                  className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  required
                />
                <input
                  className="p-3 capitalize shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                />
              </div>
              <div className="grid gap-6 w-full">
                <input
                  className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="flex gap-3">
                <input
                  className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
                <input
                  className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="text"
                  placeholder="City"
                  name="city"
                  required
                />
              </div>
              <div className="grid gap-6 w-full">
                <textarea
                  name="message"
                  className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                className="outline-none glass shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
                type="submit"
              >
                Submit
              </button>
              {message && (
                <p className="text-center text-green-600 mt-2">{message}</p>
              )}
            </div>
          </form>
        </div>
        <div className="shadow-2xl  overflow-hidden ">
          <img
            className="h-[550px] sm:w-[450px] w-full"
            src={formimg}
            loading="lazy"
            alt="risezonictraveform"
          />
        </div>
      </div>
    </>
  );
}
