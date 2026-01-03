import React from "react";
import Greeting from "./greeting";
import Stats from "./Stats";

const Overview = () => {
  return (
    <section className="space-y-3">
      {/* grating */}
      <Greeting />

      {/* stats */}
      <Stats />
    </section>
  );
};

export default Overview;
