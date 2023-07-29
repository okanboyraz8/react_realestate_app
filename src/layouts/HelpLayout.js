import { NavLink, Outlet } from "react-router-dom";
import React from "react";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>HELP | UK PROPERTY IN 2023 | 3 IMPORTANT THINGS</h2>
      <p>
        1. Low-Cost Houses Set To Rise: The video explains that despite
        recession, high interest rates, and the slow property market in London
        and the South, demand and prices for low cost properties in the North
        are set to rise, as Investors and buyers shift from high-cost properties
        that depend on mortgages, to low cost houses that can be purchased with
        cash. In a recession, demand for low-cost houses rises, whilst high-cost
        and average houses may fall in price.
      </p>
      <p>
        2. Inflation Will Reduce Your Bank Savings: Do not leave your funds in a
        bank account because in terms of real value, your £100,000 will become
        £80,000 within 2 years. Buy a secure low cost property that gives you
        income, gradually grows in value and protects you from inflation. Doing
        nothing or delaying is a risk
      </p>
      <p>
        3. Buy Now | Do It Passively: Our service allows you to do it all
        passively, with no maintenance or tenant costs, and no landlord
        liabilities. We do it all for you. You get guaranteed income, property
        growth in value, and no worries.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
