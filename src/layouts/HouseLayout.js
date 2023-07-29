import React from "react";
import { Outlet } from "react-router-dom";

export default function HouseLayout() {
  return (
    <div className="house-layout">
      <h2>BEST BUY INVESTMENT PROPERTIES | HOUSES</h2>
      <p>
        These Best Buy investment properties listed below are already rented out
        and managed by us. They are low cost, give high rental yields, come with
        3 years net guaranteed rent (can be extended), are expected to grow well
        in value over the next few years and are easy to resell. We continually
        acquire, rent out, sell and subsequently manage such property. These are
        the most popular purchases made by our UK investors, expats and overseas
        buyers.
      </p>
      <Outlet />
    </div>
  );
}
