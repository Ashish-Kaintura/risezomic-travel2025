const pilgrimagePlaces = [
  {
    place: "Varanasi",
    bestTime: "October - March",
    attractions: "Ganga Ghats, Kashi Vishwanath Temple, Sarnath",
    popularFor: "Spiritual Capital, Hindu Rituals, Ganga Aarti",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Rishikesh",
    bestTime: "September - June",
    attractions: "Ram Jhula, Lakshman Jhula, Ganga Beach",
    popularFor: "Yoga, Meditation, River Rafting",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Amritsar",
    bestTime: "October - March",
    attractions: "Golden Temple, Wagah Border, Jallianwala Bagh",
    popularFor: "Sikhism, Golden Temple, Indo-Pak Border Ceremony",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Shirdi",
    bestTime: "October - March",
    attractions: "Sai Baba Temple, Dwarkamai Mosque, Shani Shinganapur",
    popularFor: "Sai Baba Devotion, Inter-faith Harmony",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Tirupati",
    bestTime: "September - March",
    attractions: "Tirumala Venkateswara Temple, Govindaraja Swamy Temple",
    popularFor: "Lord Venkateshwara, Spiritual Enlightenment",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Rameshwaram",
    bestTime: "October - March",
    attractions: "Ramanathaswamy Temple, Dhanushkodi Beach",
    popularFor: "Lord Rama, Coastal Pilgrimage",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Dwarka",
    bestTime: "October - March",
    attractions: "Dwarkadhish Temple, Bet Dwarka, Gomati Ghat",
    popularFor: "Lord Krishna, Sacred Ghats, Coastal Temples",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Badrinath",
    bestTime: "May - June, September - October",
    attractions: "Badrinath Temple, Tapt Kund, Mana Village",
    popularFor: "Lord Vishnu, Char Dham Yatra, Himalayan Pilgrimage",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Haridwar",
    bestTime: "March - April, September - November",
    attractions: "Har Ki Pauri, Ganga Ghats, Chandi Devi Temple",
    popularFor: "Ganga Aarti, Holy Dips, Spiritual Festivals",
    currency: "Indian Rupee (INR)",
  },
  {
    place: "Ajmer",
    bestTime: "October - March",
    attractions: "Ajmer Sharif Dargah, Ana Sagar Lake, Adhai Din Ka Jhonpra",
    popularFor: "Sufi Pilgrimage, Harmony, Chishti Order",
    currency: "Indian Rupee (INR)",
  },
];

const PilgrimagePlaceTable = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-4 text-gray-200 py-4 uppercase underline decoration-yellow-500 underline-offset-8  italic">
        Details About Top Pilgrimage Places In India:
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full  text-gray-200 border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Pilgrimage Place</th>
              <th className="py-2 px-4 border-b">Best Time to Visit</th>
              <th className="py-2 px-4 border-b">Attractions</th>
              <th className="py-2 px-4 border-b">Popular For</th>
              <th className="py-2 px-4 border-b">Currency</th>
            </tr>
          </thead>
          <tbody>
            {pilgrimagePlaces.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.place}</td>
                <td className="py-2 px-4 border-b">{item.bestTime}</td>
                <td className="py-2 px-4 border-b">{item.attractions}</td>
                <td className="py-2 px-4 border-b">{item.popularFor}</td>
                <td className="py-2 px-4 border-b">{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PilgrimagePlaceTable;
