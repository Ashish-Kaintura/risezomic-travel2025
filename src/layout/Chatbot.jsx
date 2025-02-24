import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    // Send initial message when the component mounts
    setMessages([
      { text: "🌟 Welcome to Risezonic Travel Assistant! 🌄🌍", sender: "bot" },
      { text: 'Type "Hi" or "Hello"', sender: "bot" },
    ]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      generateBotResponse(input);
    }
  };

  const generateBotResponse = (input) => {
    setTimeout(() => {
      let botResponse;
      if (["hi", "hy", "hello"].includes(input.toLowerCase())) {
        botResponse = {
          text: "Please choose one of the following options:",
          options: ["B2C Services", "Corporate Services", "Others"],
          sender: "bot",
        };
      } else {
        botResponse = {
          text: "I didn't get that. Please choose one of the following options:",
          options: ["B2C Services", "Corporate Services", "Others"],
          sender: "bot",
        };
      }
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  const handleOptionClick = (option) => {
    const userMessage = { text: option, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      let botResponse;
      switch (option) {
        case "B2C Services":
          botResponse = {
            text: "Here are the B2C Services we provide. Your query is related to:",
            options: [
              "B2C Services1",
              "B2C Services2",
              "B2C Services3",
              "B2C Services4",
              "B2C Services5",
              "B2C Services6",
            ],
            sender: "bot",
          };
          break;
        case "Corporate Services":
          botResponse = {
            text: "Here are the Corporate Services we provide. Your query is related to:",
            options: [
              "Corporate Services1",
              "Corporate Services2",
              "Corporate Services3",
              "Corporate Services4",
              "Corporate Services5",
              "Corporate Services6",
            ],
            sender: "bot",
          };
          break;
        case "Others":
          botResponse = {
            text: "Please choose one of the following options to reach us:",
            options: ["Mail Us", "Contact Us"],
            sender: "bot",
          };
          break;
        case "Mail Us":
          window.location.href = "mailto:support@example.com";
          return; // Prevent adding the bot response to messages
        case "Contact Us":
          window.location.href = "tel:+1234567890";
          return; // Prevent adding the bot response to messages
        default:
          botResponse = {
            text: "I didn't get that. Please choose one of the following options:",
            options: ["B2C Services", "Corporate Services", "Others"],
            sender: "bot",
          };
      }
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openChatModal}
        className=" bg-blue-600 text-white rounded-full flex justify-center items-center"
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          bottom: "250px",
          right: "15px",
          zIndex: 9999,
        }}
      >
        <FaRobot className="text-3xl" />
      </button>

      {isChatModalOpen && (
        <div className="flex justify-center items-center bg-gray-100 bg-opacity-75 chat-modal">
          <div className="flex flex-col w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-lg relative ">
            <button
              onClick={closeChatModal}
              className="absolute -top-5 -right-4 text-2xl font-bold m-4 text-black hover:text-red-500"
            >
              &times;
            </button>
            <div className="flex-grow p-4 overflow-auto h-80 w-96">
              {messages.map((message, index) => (
                <div key={index} className="my-2">
                  <div
                    className={`p-2 rounded-md max-w-xs ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white self-end"
                        : "bg-gray-300 self-start"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.options && (
                    <div className="flex  flex-wrap gap-x-4 justify-center mt-2">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(option)}
                          className="p-2 my-1 bg-blue-500 text-white rounded-md max-w-xs self-start"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
