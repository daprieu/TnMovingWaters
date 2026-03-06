import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// import FishingReports from './FishingReports'

import { MWNavBar } from "./NavBar";

const Sponsors = lazy(() => import("./Sponsors"));
const FishingTripOptions = lazy(() => import("./FishingTripOptions"));
const Home = lazy(() => import("./Home"));
const Boats = lazy(() => import("./Boats"));
const Guides = lazy(() => import("./Guides"));
const ContactUs = lazy(() => import("./ContactUs"));
const Footer = lazy(() => import("./Footer"));

const fallback = <div>Loading...</div>;

const TnMovingWatersViews = () => {
  return (
    <>
      <MWNavBar />
      <Suspense fallback={fallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/fishing-trip-options"
            element={<FishingTripOptions />}
          />
          {/* <Route path="/fishing-reports" element={<FishingReports />} /> */}
          <Route path="/boats" element={<Boats />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Sponsors />

        <Footer />
      </Suspense>
    </>
  );
};

export default TnMovingWatersViews;
