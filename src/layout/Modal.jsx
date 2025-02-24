// eslint-disable-next-line react/prop-types
const Modal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute -top-6 -right-4 m-4 text-4xl text-black hover:text-red-500"
        >
          &times;
        </button>
        <div className="flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="mb-4 rounded"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">
          {service.title}
        </h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Modal;
