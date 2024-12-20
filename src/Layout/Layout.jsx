import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./../components/Navber/TopNav";
import DropNav from "../components/Navber/Dropnav";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <TopNav></TopNav>
      <DropNav></DropNav>
      {/* <DropNavbar></DropNavbar> */}
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Layout;
