
const experiences = {
  wonderfulMoments: [
    { place: "Maldives", description: "Go on a private sandbank picnic – it’s a rare and romantic experience that very few people get to have." },
    { place: "Bali", description: "Rent bikes and ride around the countryside, watch a traditional Balinese dance performance, and even take a class in Ubud!" },
    { place: "Italy", description: "Savor authentic wine tasting at a sun-kissed estate house, a few steps from the Renaissance." },
    { place: "Thailand", description: "Release a sky lantern together during the Yi Peng festival in Chiang Mai." },
    { place: "Santorini", description: "Hike from Fira to Oia, stopping at charming villages along the way." },
  ],
  adventurousCouples: [
    { activity: "Sleep in an ice hotel, in the heart of Finnish Lapland, to wake up to a view of the Northern Lights." },
    { activity: "Have an aerial view of the fairy chimneys at Cappadocia in the Hurzonen hot air balloon." },
    { activity: "Take a walk through the ancient city of Petra at night while holding candles." },
    { activity: "Discover the shocking beauty of cut virgin forest in Indonesia on the island of Bintan." },
    { activity: "Go for a Window and Roof of Africa tour in Serengeti National Park, Tanzania, and be astounded by the wildebeest migration." },
  ],
  honeymoonTips: [
    { tip: "Mix relaxation with adventure: It is advisable to alternate between days spent on the beach and days exploring the culture." },
    { tip: "Try local experiences: A cooking class or dance lesson can result in the formation of special memories." },
    { tip: "Capture the moments: Why not hire a professional photographer from the desired location for a romantic photoshoot?" },
    { tip: "Embrace spontaneity: Avoid scheduling the entire day because it is always a good idea to have some spare time to make new discoveries." },
    { tip: "Disconnect to reconnect: Reduce the time spent in front of the screens in order to pay attention to each other and the environment." },
  ],
};

const Fantasticloaction = () => {
  return (
    <div className="p-8">
      <Section title="Creating Wonderful Moments in Fantastic Locations" items={experiences.wonderfulMoments} />
      <Section title="Unique Experiences for Adventurous Couples" items={experiences.adventurousCouples} />
      <Section title="Tips to Have a Perfect Honeymoon" items={experiences.honeymoonTips} />
    </div>
  );
};

const Section = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-lg">
          {item.place ? `${item.place}: ` : ''}{item.description || item.activity || item.tip}
        </li>
      ))}
    </ul>
  </div>
);

export default Fantasticloaction;
