import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
