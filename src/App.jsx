/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import SideLinks from "./layout/SideLinks";
import Footer from "./layout/Footer";
import { MagneticCursor } from "./components/MagneticCursor";
import ErrorPage from "./Pages/ErrorPage";

// import { AirlineCursor, useAirlineCursor } from "./hooks/useAirlineCursor";

export default function App() {
  // const cursor = useAirlineCursor({
  //   trailLength: 20,
  //   cursorSize: 28,
  //   cursorColor: '#3b82f6'
  // });
  return (
    <>
      {/* <MagneticCursor> */}
      <BrowserRouter>
        {/* <AirlineCursor {...cursor} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services/:UrlTitle" element={<ServiceDetail />} />
          <Route path="/indian-holiday-packages/:UrlTitle" element={<MemorableHolidayDetails />} />
          <Route
            path="/indian-honeymoon-tour-packages/:UrlTitle"
            element={<HoneymoonIndiaDetails />}
          />
          <Route
            path="/indian-honeymoon-tour-packages"
            element={<IndianHoneymon />}
          />
          <Route
            path="/international-honeymoon-tour-packages/:UrlTitle"
            element={<InternationalHoneymoonDetails />}
          />
          <Route
            path="/international-honeymoon-tour-packages"
            element={<InternationalHoneymon />}
          />
          <Route
            path="/international-holiday-packages/:UrlTitle"
            element={<TrendingInternationalTourDetails />}
          />
          <Route path="/Deals/:UrlTitle" element={<DealsDetail />} />
          <Route
            path="/indian-Tour-Packages"
            element={<IndianTourPackages />}
          />
          <Route
            path="/international-holiday-packages"
            element={<InternationalTourPakages />}
          />
          <Route path="/mice" element={<MICE />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/flights-booking" element={<Flight />} />
          <Route path="/cruise-booking" element={<Cruise />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/corporate-event-booking" element={<MeetingAndEvent />} />
          <Route path="/visa" element={<VIsa />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/News-And-Media" element={<NewsAndMedia />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/offers" element={<TravelOffers />} />
          <Route path="/Business-Growth" element={<BusinessGrowth />} />
          <Route path="/Business-success" element={<BusinessSuccess />} />
          <Route path="*" element={<Navigate to="/" replace />} />


        </Routes>
        <SideLinks />
        <Footer />
      </BrowserRouter>
      {/* </MagneticCursor> */}
    </>
  );
}
