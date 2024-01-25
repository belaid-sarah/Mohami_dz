import React, { useState } from "react";
import NavBar from "./NavBar";


const HomeLayout = ({ pageComponent }) => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <NavBar />

      <div className={`  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
