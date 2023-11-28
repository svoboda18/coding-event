"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="w-full h-[136px] bg-[#444444] fixed top-0 z-[100]">
        <div className="flex items-center px-[10vw] h-full justify-between">
          <Image
            src={"/Logo.svg"}
            width={150}
            height={45}
            alt="logo"
            sizes="10vw"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "25%",
            }}
          />
          <ul className="hidden lg:flex gap-[3vw] text-white">
            <li>
              <Link href="/">
                <p className="text-[#DEF400] font-Gilroy">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-Gilroy">About</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Agenda</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Leaderboard</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>FAQ</p>
              </Link>
            </li>
          </ul>
          <button className="hidden lg:block bg-[#DEF400] px-[2vw] py-[2vh]">
            Register Now
          </button>

          <div
            className="flex flex-col lg:hidden items-center justify-center gap-[12px]"
            onClick={() => setToggle(!toggle)}
          >
            <div className="h-[2px] w-[48px] bg-white rounded-full"></div>
            <div className="h-[2px] w-[48px] bg-white rounded-full"></div>
            <div className="h-[2px] w-[48px] bg-white rounded-full"></div>
          </div>
        </div>

        <div className={toggle ? "bg-[#444444] block mt-2" : "hidden"}>
          <ul className="flex flex-col items-center gap-[5vh] text-white py-[4vh]">
            <li>
              <Link href="/">
                <p className="text-[#DEF400] font-Gilroy">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Agenda</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Leaderboard</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>FAQ</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
