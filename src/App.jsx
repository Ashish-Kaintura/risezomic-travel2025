/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ServiceDetail from "./Pages/ServiceDetail";
import DealsDetail from "./Pages/DealsDetails";
import IndianTourPackages from "./Pages/IndianTourPackages";
import MemorableHolidayDetails from "./Pages/MemorableHolidayDetails";
import HoneymoonIndiaDetails from "./Pages/HoneymoonIndiaDetails";
import InternationalTourPakages from "./Pages/InternationalTourPakages";
import TrendingInternationalTourDetails from "./Pages/TrendingInternationalTourDetails";
import InternationalHoneymoonDetails from "./Pages/InternationalHoneymoonDetails";
import MICE from "./Pages/MICE";
import Sustainability from "./Pages/Sustainability";
import Flight from "./Pages/Flight";
import Cruise from "./Pages/Cruise";
import Insurance from "./Pages/Insurance";
import MeetingAndEvent from "./Pages/MeetingAndEvent";
import VIsa from "./Pages/Visa";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blogs from "./Pages/Blogs";
import Career from "./Pages/Career";
import TravelOffers from "./Pages/TravelOffers";
import InternationalHoneymon from "./Pages/InternationalHoneymon";
import IndianHoneymon from "./Pages/IndianHoneymon";
import NewsAndMedia from "./Pages/NewsAndMedia";
import BusinessGrowth from "./Pages/BusinessGrowth";
import BusinessSuccess from "./Pages/BusinessSuccess";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/services/:UrlTitle" element={<ServiceDetail />} />
          <Route path="/holiday/:UrlTitle" element={<MemorableHolidayDetails />} />
          <Route
            path="/Indian-honeymoon-packages/:UrlTitle"
            element={<HoneymoonIndiaDetails />}
          />
          <Route
            path="/Indian-honeymoon-packages"
            element={<IndianHoneymon/> }
          />
          <Route
            path="/International-Honeymoon-packages/:UrlTitle"
            element={<InternationalHoneymoonDetails />}
          />
          <Route
            path="/International-Honeymoon-packages"
            element={<InternationalHoneymon/> }
          />
          <Route
            path="/International-Holiday/:UrlTitle"
            element={<TrendingInternationalTourDetails />}
          />
          <Route path="/Deals/:UrlTitle" element={<DealsDetail />} />
          <Route
            path="/Indian-Tour-Packages"
            element={<IndianTourPackages />}
          />
          <Route
            path="/International-Tour-Packages"
            element={<InternationalTourPakages />}
          />
          <Route path="/mice" element={<MICE />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/flights" element={<Flight />} />
          <Route path="/Cruise" element={<Cruise />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Meeting-And-Event" element={<MeetingAndEvent />} />
          <Route path="/Visa" element={<VIsa />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/News-And-Media" element={<NewsAndMedia />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/offers" element={<TravelOffers />} />
          <Route path="/Business-Growth" element={<BusinessGrowth />} />
          <Route path="/Business-success" element={<BusinessSuccess />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
