import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {/* <MainContainer /> */}
      {/* outlet used for making the dynamic */}
      <Outlet />
    </div>
  );
};

export default Body;
