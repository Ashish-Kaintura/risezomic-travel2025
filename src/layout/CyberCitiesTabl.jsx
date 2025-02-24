

const cyberCities = [
  {
    city: "Mumbai",
    industryFocus: "Financial Services, IT",
    notableCompanies: "TCS, Infosys, Wipro, HDFC Bank"
  },
  {
    city: "Hyderabad",
    industryFocus: "IT, Pharma, Biotechnology",
    notableCompanies: "Microsoft, Google, Amazon, Dr. Reddy's"
  },
  {
    city: "Bangalore",
    industryFocus: "IT, Startups, Aerospace",
    notableCompanies: "Infosys, Wipro, Boeing, Mu Sigma"
  },
  {
    city: "Chandigarh",
    industryFocus: "IT, Telecom, Manufacturing",
    notableCompanies: "Dell, Airtel, Godrej"
  },
  {
    city: "Delhi",
    industryFocus: "IT, Telecom, Media & Entertainment",
    notableCompanies: "HCL, Samsung, Sony, Viacom18"
  }
];

const CyberCitiesTable = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-200 py-4 uppercase underline decoration-yellow-500 underline-offset-8  italic">India Cyber Cities</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full  text-gray-200 border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Industry Focus</th>
              <th className="py-2 px-4 border-b">Notable Companies</th>
            </tr>
          </thead>
          <tbody>
            {cyberCities.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.city}</td>
                <td className="py-2 px-4 border-b">{item.industryFocus}</td>
                <td className="py-2 px-4 border-b">{item.notableCompanies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CyberCitiesTable;
