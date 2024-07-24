import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-2 border-b-2 border-gray-500 border-opacity-10 items-center h-[8vh] w-full">
        {/* Logo section */}
        <div className="grid text-center w-[10vw]">
          <h1 className="text-3xl uppercase font-bold font-serif">FP</h1>
          <p className="text-[12px] tracking-widest font-serif">
            Farmer Product
          </p>
        </div>

        {/* Navbar links  */}
        <div className="flex list-none gap-x-2 justify-center items-center transition-all ease-in-out duration-200">
          <li className="w-[8rem] text-center py-2 text-lg font-bold">
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li className="w-[8rem] text-center py-2 duration-300 transition-all ease-in-out text-sm font-light hover:text-lg hover:font-bold">
            <Link href="/products">Products</Link>
          </li>
          <li className="w-[8rem] text-center py-2 duration-300 transition-all ease-in-out text-sm font-light hover:text-lg hover:font-bold">
            <Link href="/about">About</Link>
          </li>
          <li className="w-[8rem] text-center py-2 duration-300 transition-all ease-in-out text-sm font-light hover:text-lg hover:font-bold">
            <Link href="/contact">Contacts</Link>
          </li>
          <li className="w-[8rem] text-center py-2 duration-300 transition-all ease-in-out text-sm font-light hover:text-lg hover:font-bold">
            <Link href="/carts">Carts</Link>
          </li>
        </div>

        {/* Login Button */}
        <Link
          href="/auth/login"
          className="border-2 px-10 h-10 border-purple-400 rounded list-none flex justify-center items-center"
        >
          <li>Login</li>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
