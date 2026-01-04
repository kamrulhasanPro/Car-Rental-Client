import React from "react";
import Greeting from "./greeting";
import Stats from "./Stats";
import Rechart from "./Rechart";

const Overview = () => {
  return (
    <section className="space-y-3">
      <title>Car Rental | Dashboard</title>

      {/* grating */}
      <Greeting />

      {/* stats */}
      <Stats />

      {/* rechart */}
      <Rechart />
    </section>
  );
};

export default Overview;
