const MiceImageGallery = () => {
  const imageLinks = [
    "/mice/1.jpg",
    "/mice/2.jpg",
    "/mice/3.jpg",
    "/mice/4.jpg",
    "/mice/5.jpg",
    "/mice/6.jpg",
    "/mice/7.jpg",
    "/mice/8.jpg",
  ];

  return (
    <div className=" flex flex-col items-center p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Mice Image Gallery</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageLinks.map((link, index) => (
          <div key={index} className="w-full">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
              src={link}
              alt={`Mice Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiceImageGallery;
