import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ background: "lightblue", height: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default Layout;
