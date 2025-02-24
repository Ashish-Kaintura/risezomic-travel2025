import { useState } from "react";
import Adventure from "../images/Frequently Asked Questions banner.webp"
const FAQ = () => {
  // Dummy FAQ data
  const faqs = [
    {
      question:
        " Is Risezonic experienced in managing large corporate travel programs? ",
      answer:
        "Risezonic excels in managing travel programs for all company sizes, including large corporations. They handle complex arrangements and group bookings and provide customized solutions for large-scale corporate travel. ",
    },
    {
      question:
        " What makes Risezonic different from other corporate travel management companies? ",
      answer:
        "Risezonic stands out with its personalized approach, cost-saving strategies, extensive industry connections, and 24/7 customer support, ensuring a seamless and efficient travel experience for corporate clients. ",
    },
    {
      question:
        " How can I get in touch with Risezonic for corporate travel inquiries? ",
      answer:
        "You can easily reach Risezonic by phone or email. Their dedicated team of travel experts will be ready to assist you with all your corporate travel inquiries and provide tailored solutions based on your specific needs. ",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Adventure})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto sm:h-[80vh] items-center flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 pt-5">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" shadow-xl border-2 rounded p-4 sm:w-[550px] "
            >
              <div
                className="font-bold cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              {openIndex === index && <div className="mt-2">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
