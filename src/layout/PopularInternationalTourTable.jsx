const destinations = [
  {
    destination: "Dubai Tour Packages",
    Days: "4 Nights/5 Days",
  },
  {
    destination: "Singapore Tour Packages",
    Days: "4 Nights/5 Days",
  },
  {
    destination: "Maldives Tour Packages",
    Days: "4 Nights/5 Days",
  },
  {
    destination: "Europe Tour Packages",
    Days: "7 Nights/8 Days",
  },
  {
    destination: "Bali Tour Packages",
    Days: "4 Nights/5 Days",
  },
  {
    destination: "Thailand Tour Packages",
    Days: "5 Nights/6 Days",
  },
  {
    destination: "South Africa Tour Packages",
    Days: "9 Nights/10 Days",
  },
  {
    destination: "Switzerland Tour Packages",
    Days: "7 Nights/8 Days",
  },
  {
    destination: "Egypt Tour Packagess",
    Days: "4 Nights/5 Days",
  },
  {
    destination: "Mauritius Tour Packages",
    Days: "6 Nights/7 Days",
  },
];

const PopularInternationalTourTable = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  py-4 uppercase underline decoration-yellow-500 underline-offset-8  italic">
        Most Popular International Tour Packages
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-black border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-black">
                International tour packages
              </th>
              <th className="py-2 px-4 border-b border-black">No. of Days</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-black">
                  {item.destination}
                </td>
                <td className="py-2 px-4 border-b border-black">{item.Days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularInternationalTourTable;
