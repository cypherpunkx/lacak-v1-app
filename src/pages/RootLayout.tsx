import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}
