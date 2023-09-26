import React from "react";
import logo from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-24 gap-4">
        <div className="space-y-6 p-4 rounded-lg text-center">
          <h1 className="text-6xl font-extrabold">
            Lacak barangmu disini aja kak anti{" "}
            <span className="text-red-500">ribet!</span>{" "}
          </h1>
          <p className="text-xl text-slate-700">
            Bingung nyari barang kesayangan kita ? lacak aja disini
          </p>
          <div>
            <Link
              to={"/cekresi"}
              className="bg-blue-500 text-white text-xl py-2 px-8 rounded font-bold"
            >
              Mulai Cek Yuk!
            </Link>
          </div>
        </div>
        <img src={logo} alt="hero" className="w-3/5 h-full mx-auto" />
      </div>
    </>
  );
}
