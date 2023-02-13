import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Branches } from "./Branches";
import { AccountTypes } from "./AccountTypes";
import { Cards } from "./Cards";
import { Loans } from "./Loans";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/acctypes" element={<AccountTypes />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<Loans />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
