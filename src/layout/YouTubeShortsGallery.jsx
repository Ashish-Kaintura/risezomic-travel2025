const YoutubeShortsGallery = () => {
  const videoLinks = [
    "https://youtube.com/shorts/f8F8oEHIFfs?si=fyGbXJ1CEfmYY8om",
    "https://youtube.com/shorts/DxvwwN8TfJo?si=pKHvvZL5d4T-fp_t",
    "https://youtube.com/shorts/PndvsLYnLJQ?si=m9uPYzAsOnqdVZlL",
    "https://youtube.com/shorts/cEIEIHOQV4I?si=9vYUPXotgHs8hRn9",
  ];

  return (
    <div className=" flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Shorts Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoLinks.map((link, index) => {
          const videoId = new URL(link).pathname.split("/").pop();
          return (
            <div key={index} className="aspect-[9/16] w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}`}
                title={`YouTube Shorts Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default YoutubeShortsGallery;
