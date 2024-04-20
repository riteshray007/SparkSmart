import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate , Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function Home() {
  const [sideBar, setSideBar] = useState("category");

  const navigate = useNavigate();

  useEffect(() => {
    if (sideBar == "category") {
      navigate("/category");
    } else if (sideBar == "product") {
      navigate("/product");
    } else {
      navigate("/order");
    }
  }, [sideBar]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
          </div>
          <div className="col-md-9">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
