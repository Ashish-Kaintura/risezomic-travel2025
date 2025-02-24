const destinations = [
  { 
    destination: "Delhi", 
    bestTime: "October - March", 
    attractions: "Red Fort, Qutub Minar, Humayun's Tomb, Lotus Temple", 
    popularFor: "History, Architecture, Culture" 
  },
  { 
    destination: "Jaipur", 
    bestTime: "October - March", 
    attractions: "Amer Fort, Hawa Mahal, Jantar Mantar, City Palace", 
    popularFor: "Forts, Palaces, Shopping" 
  },
  { 
    destination: "Kashmir", 
    bestTime: "April - October", 
    attractions: "Dal Lake, Gulmarg, Pahalgam, Mughal Gardens", 
    popularFor: "Natural Beauty, Houseboats" 
  },
  { 
    destination: "Kerala", 
    bestTime: "September - March", 
    attractions: "Backwaters, Beaches, Ayurvedic Resorts, Tea Plantations", 
    popularFor: "Ayurveda, Houseboat Cruises" 
  },
  { 
    destination: "Goa", 
    bestTime: "November - March", 
    attractions: "Beaches, Churches, Nightlife, Flea Markets", 
    popularFor: "Beaches, Parties, Seafood" 
  },
  { 
    destination: "Agra", 
    bestTime: "October - March", 
    attractions: "Taj Mahal, Agra Fort, Fatehpur Sikri", 
    popularFor: "Taj Mahal, Mughal Architecture" 
  },
  { 
    destination: "Ladakh", 
    bestTime: "June - September", 
    attractions: "Pangong Tso, Nubra Valley, Monasteries, Trekking", 
    popularFor: "Adventure, Monasteries" 
  },
  { 
    destination: "Mumbai", 
    bestTime: "October - March", 
    attractions: "Gateway of India, Marine Drive, Elephanta Caves, Bollywood", 
    popularFor: "Bollywood, Street Food" 
  },
  { 
    destination: "Udaipur", 
    bestTime: "September - March", 
    attractions: "Lake Pichola, City Palace, Kumbhalgarh Fort, Monsoon Palace", 
    popularFor: "Lakes, Palaces, Heritage" 
  },
  { 
    destination: "Andaman & Nicobar", 
    bestTime: "December - April", 
    attractions: "Beaches, Scuba Diving, Snorkeling, Cellular Jail", 
    popularFor: "Beaches, Water Sports" 
  },
  { 
    destination: "Lakshadweep", 
    bestTime: "November - May", 
    attractions: "Scuba Diving, Snorkeling, Beaches, Corals", 
    popularFor: "Beaches, Water Sports" 
  }
];

const TopDestinationsTable = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="sm:text-3xl text-xl font-bold mb-4 text-gray-200 py-4 uppercase underline decoration-yellow-500 underline-offset-8  italic">Quick Overview About Indias Top Destinations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-200 border">
          <thead>
            <tr>
              <th className="sm:py-2 sm:px-4 border-b">Top Tour Destinations</th>
              <th className="sm:py-2 sm:px-4 border-b">Best Time To Visit</th>
              <th className="sm:py-2 sm:px-4 border-b">Attractions</th>
              <th className="sm:py-2 sm:px-4 border-b">Popular For</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((item, index) => (
              <tr key={index}>
                <td className="sm:py-2 sm:px-4 border-b">{item.destination}</td>
                <td className="sm:py-2 sm:px-4 border-b">{item.bestTime}</td>
                <td className="sm:py-2 sm:px-4 border-b">{item.attractions}</td>
                <td className="sm:py-2 sm:px-4 border-b">{item.popularFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopDestinationsTable;
