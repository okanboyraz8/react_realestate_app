import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Unexpected Application Error! - 404 Not Found</h2>
      <p>💿 Hey developer 👋;</p>
      <p>
        You can provide a way better UX than this when your app throws errors by
        providing your own "ErrorBoundary" or "errorElement" prop on your route.
      </p>
      <p>
        <NavLink to="/">Go to Homepage</NavLink>
      </p>
    </div>
  );
}
