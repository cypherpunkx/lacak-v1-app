import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-start items-center p-4 shadow">
      <Link
        to={"/"}
        className="text-2xl tracking-widest uppercase font-extrabold text-cyan-500"
      >
        lacak
      </Link>
    </div>
  );
}
