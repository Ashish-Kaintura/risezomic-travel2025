import formimg from "../images/formimage.webp";
import { useRef, useState } from "react";
import { sendEmail } from "../layout/Email";

export default function HomeForm() {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await sendEmail(formRef.current);
    setMessage(response.message);
    setLoading(false);
  };

  return (
    <div
      className="flex flex-wrap items-center justify-center py-20 px-3 bg-gray-50"
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
  {/* Left: Image */ }
  <div className = "shadow-2xl rounded-xl overflow-hidden mb-8 lg:mb-0" >
    <img
      className="h-[550px] sm:w-[450px] w-full object-contain"
      src={formimg}
      loading="lazy"
      alt="form visual"
    />
      </div >

  {/* Right: Form Card */ }
  <div className = "backdrop-blur-xl bg-white/80 shadow-2xl rounded-2xl p-10 max-w-lg w-full border border-white/40" >
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Experience the world of business travel with
          <span className="text-blue-600"> seamless precision</span>.
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6"
        >
          {/* Row 1 */}
          <div className="flex gap-4">
            <input
              className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="First Name"
              name="first_name"
              required
            />
            <input
              className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="Last Name"
              name="last_name"
            />
          </div>

          {/* Email */}
          <input
            className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />

          {/* Row 3 */}
          <div className="flex gap-4">
            <input
              className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <input
              className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="City"
              name="city"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            rows="4"
            placeholder="Message"
            required
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {message && (
            <p className="text-center text-green-600 font-medium">
              {message}
            </p>
          )}
        </form>
      </div >
    </div >
  );
}
