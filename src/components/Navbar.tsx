import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white border-b p-2 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h3 className="text-2xl font-semibold tracking-wide text-orange-400">
          Logo
        </h3>
        <ul className="flex gap-3">
          <li>
            <Link className="text-xl text-gray-400 font-light" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl text-gray-400 font-light" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-xl text-gray-400 font-light"
              href={"/contact"}
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
