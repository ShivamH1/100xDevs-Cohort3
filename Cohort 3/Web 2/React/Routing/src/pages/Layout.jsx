import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Header */}
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Outlet />{" "}
      {/* Outlet is a special component in React Router that will render the nested routes.
      i.e. When we navigate to a route, the component that is returned from that route will be rendered here.
      It's a generic way of inserting the matched child route component here. */}
      Footer
    </div>
  );
}

export default Layout;
