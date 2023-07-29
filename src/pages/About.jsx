import React from "react";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

export default function About() {

  //const [user, setUser] = useState(null);
  const [user, setUser] = useState("Okan");
  
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name')
  // /about?name=okan => url bilgisinden ifadeyi browser'a çekme!!!

  if(!user){
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h1>About Us</h1>
      {name && <p>Hello {name}</p>}
      <p>WHAT WE DO! </p>
      <p>
        Find UK Property sell low cost houses to passive investors from the UK
        and all over the World. All of our properties are located in 28 towns in
        North East and North West England. After your purchase, we effectively
        become your long-term tenants and agree to pay you guaranteed rent and
        maintain the properties at our cost. You fully own the property, benefit
        from long term guaranteed rental income and future property capital
        growth, but do not need to do anything - we do it all. We treat the
        properties like our own and rent them out to our own tenants, becoming
        the landlord of the property and being liable for all tenants and
        property issues. We renovate properties well, and keep them in a good
        condition, with the aim of getting more rent from our tenants than we
        have to pay you. This way we can cover our costs and remain profitable.
      </p>
      <p>WHAT WE DON'T DO</p>
      <p>
        We do not sell properties for immediate “own use”. All of the houses we
        sell are already rented out to good long-term tenants and must remain so
        for at least the first 3 years. Even after this, our clients normally
        continue with the same system. However, you can of course give us notice
        if you wish, and we can move the tenants to another of our properties
        after the 3 years. Then you can take possession of your property and use
        it for your own use. We do not sell property in the Midlands or South -
        Only in the towns in the North East and in Lancashire in the North West.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
