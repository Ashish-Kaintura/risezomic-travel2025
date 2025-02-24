import { Helmet } from "react-helmet";
import img1 from "../images/Kerela banner (1).webp";
export default function TravelOffers() {
  return (
    <div>
      <Helmet>
        <title>Offers</title>
        <link rel="canonical" href="https://www.risezonictravel.com/" />
      </Helmet>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
