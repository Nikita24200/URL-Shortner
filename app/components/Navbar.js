import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="flex  bg-pink-500 items-center p-2 justify-between ">
        <div className="logo font-bold text-2xl">  <Link href="/">
            <li className="list-none"> URL-SHORTNER</li>
          </Link></div>
        <ul className="flex gap-6 p-5 text-2xl items-center  ">
          <Link href="/">
            <li>Home</li> 
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/shortern">
            <li>Shortern</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <li className="flex gap-3">
          <Link href="/shortern">
            <button className="bg-pink-400 rounded-lg p-2 py-1 font-bold text-white ">
              Try Now
            </button>

          </Link>
          <Link href="/github">
            <button className="bg-pink-400 rounded-lg p-2 py-1 font-bold  text-white">
              Github
            </button>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
