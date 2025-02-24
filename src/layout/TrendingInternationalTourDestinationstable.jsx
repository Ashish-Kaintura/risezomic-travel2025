const destinations = [
  {
    destination: "Dubai",
    bestTime: "November to February",
    attractions:
      "Burj Khalifa, The Dubai Mall, Ski Dubai, Dubai Miracle Garden, Global Village, Dubai Garden Glow, etc.",
    popularFor: "Contemporary sightseeing attractions and desert safari",
    Currency: "The UAE Dirham",
  },
  {
    destination: "Egypt",
    bestTime: "October to April",
    attractions:
      "The Egyptian Museum, Abu Simbel Temples, Valley of the Kings, Great Sphinx of Giza, Karnak, etc.",
    popularFor: "Monuments and ancient civilization",
    Currency: "Egyptian Pound",
  },
  {
    destination: "Vietnam",
    bestTime: "March and April",
    attractions:
      "Cu Chi Tunnel, Temple of Literature, Hoan Kiem Lake, War Remnants Museum, Reunification Palace, etc.",
    popularFor: "History, food, natural beauty",
    Currency: "Vietnamese Dong",
  },
  {
    destination: "Thailand",
    bestTime: "November to April",
    attractions:
      "The Grand Palace, Wat Arun Ratchawararam, Temple of the Emerald Buddha - Wat Phra Si, Railay Beach, etc.",
    popularFor: "Buddhist temples, beaches, Thai massage, and nightlife",
    Currency: "Thai Baht",
  },
  {
    destination: "Maldives",
    bestTime: "November to April",
    attractions:
      "Alimatha Island, Utheemu Ganduvaru, Thulusdhoo, Male City, China Maldives Friendship Bridge, Grand Friday Mosque, etc.",
    popularFor: "Beaches, greenery, vibrant culture",
    Currency: "Rufiyaa",
  },
  {
    destination: "Turkey",
    bestTime: "April, May, September, and October",
    attractions:
      "Hagia Sophia Museum, The City Of Ephesus, Ottomania, Port Of Istanbul, Topkapı Palace, Butterfly Valley, Marmaris, etc.",
    popularFor: "Historical monuments, Turkish tea Turkish Lira",
    Currency: "Turkish Lira",
  },
  {
    destination: "Europe",
    bestTime: "June to September",
    attractions:
      "Eiffel Tower in France, the Colosseum in Italy, the Acropolis of Athens in Greece, Prague Castle in the Czech Republic, The Matterhorn in Switzerland, etc.",
    popularFor: "Famous attractions, old-world charm, scenic beauty, history",
    Currency: "Euro",
  },
];

const InternationalTrendingDestinationTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-4 py-4 uppercase underline decoration-yellow-500 underline-offset-8 italic">
        Quick Overview About Top Trending International Tour Destinations
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-black border hidden lg:table">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-black">
                Top International Tour Destinations
              </th>
              <th className="py-2 px-4 border-b border-black">
                Best Time To Visit
              </th>
              <th className="py-2 px-4 border-b border-black">Attractions</th>
              <th className="py-2 px-4 border-b border-black">Popular For</th>
              <th className="py-2 px-4 border-b border-black">Currency</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-black">
                  {item.destination}
                </td>
                <td className="py-2 px-4 border-b border-black">
                  {item.bestTime}
                </td>
                <td className="py-2 px-4 border-b border-black">
                  {item.attractions}
                </td>
                <td className="py-2 px-4 border-b border-black">
                  {item.popularFor}
                </td>
                <td className="py-2 px-4 border-b border-black">
                  {item.Currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {destinations.map((item, index) => (
            <div key={index} className="border-b border-black py-2">
              <div className="font-bold">{item.destination}</div>
              <div>
                <span className="font-semibold">Best Time To Visit: </span>
                {item.bestTime}
              </div>
              <div>
                <span className="font-semibold">Attractions: </span>
                {item.attractions}
              </div>
              <div>
                <span className="font-semibold">Popular For: </span>
                {item.popularFor}
              </div>
              <div>
                <span className="font-semibold">Currency: </span>
                {item.Currency}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalTrendingDestinationTable;
