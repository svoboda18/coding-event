"use client";
import { useState } from "react";
import "../../app/globals.css";

const FAQ = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const toggleFaq = (n) => {
    setFaq1(false);
    setFaq2(false);
    setFaq3(false);
    setFaq4(false);
    if (n == 1) setFaq1(true);
    if (n == 2) setFaq2(true);
    if (n == 3) setFaq3(true);
    if (n == 4) setFaq4(true);
  };
  const Untoggle = () => {
    setFaq1(false);
    setFaq2(false);
    setFaq3(false);
    setFaq4(false);
  };
  return (
    <div className="px-[10vw] gap-[6vh] font-display text-white mt-10 flex flex-col items-center justify-center">
      <h1 className="uppercase font-['Gilroy'] font-extrabold text-xl sm:text-2xl xl:text-6xl lg:text-4xl md:text-2xl text-white">
        faq
      </h1>
      <ul className="space-y-10 w-full items-center">
        <li className="p-4  rounded-lg w-full flex flex-col justify-between">
          {/* Q1 */}
          <div
            onClick={() => (faq1 ? Untoggle() : toggleFaq(1))}
            className="font-semibold flex justify-between w-full text-2xl"
          >
            <div className="flex w-full space-x-12">
              <div className="flex space-x-4 items-center">
                <span className="text-[#def400] text-4xl">&#x2774;</span>
                <h1 className="">Who can register?</h1>
              </div>
            </div>
            <button className="space-x-2 flex items-center rounded-full hover:bg-gray-700 hover:cursor-pointer transition duration-400 ease-in-out">
              <h1>{faq1 ? "-" : "+"}</h1>
              <span className="text-[#def400] text-4xl">&#x2775;</span>
            </button>
          </div>
          {/* A1 */}
          {faq1 ? (
            <div className="animate-on-load translate-down-fade flex justify-between w-full text-xl">
              <div className="flex w-full space-x-12">
                <div className="flex space-x-1 items-center">
                  <h1 className="text-left font-thin">Anyone interested!</h1>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </li>

        <li className="p-4 ease-in-out rounded-lg w-full flex flex-col justify-between">
          {/* Q2 */}
          <div
            onClick={() => (faq2 ? Untoggle() : toggleFaq(2))}
            className="font-semibold flex justify-between w-full text-2xl"
          >
            <div className="flex w-full space-x-12">
              <div className="space-x-2 flex items-center">
                <span className="text-[#def400] text-4xl">&#x2774;</span>
                <h1>What is Coding Game?</h1>
              </div>
            </div>
            <button className="space-x-2 flex items-center rounded-full hover:bg-gray-700 hover:cursor-pointer transition duration-400 ease-in-out">
              <h1>{faq2 ? "-" : "+"}</h1>
              <span className="text-[#def400] text-4xl">&#x2775;</span>
            </button>
          </div>
          {/* A2 */}
          {faq2 ? (
            <div className="animate-on-load translate-down-fade flex justify-between w-full text-xl">
              <div className="flex w-full space-x-12">
                <div className="flex space-x-1 items-center">
                  <h1 className="text-left font-thin">
                    A coding game is like a playful adventure for sharpening
                    your programming skills, where you tackle challenges and
                    solve puzzles with the magic of code!
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </li>

        <li className="p-4 ease-in-out rounded-lg w-full flex flex-col justify-between">
          {/* Q3 */}
          <div
            onClick={() => (faq3 ? Untoggle() : toggleFaq(3))}
            className="font-bold flex justify-between w-full text-2xl"
          >
            <div className="flex w-full space-x-12">
              <div className="flex space-x-2 items-center">
                <span className="text-[#def400] text-4xl">&#x2774;</span>
                <h1 className="">Allowed programming languages?</h1>
              </div>
            </div>
            <button className="space-x-2 flex items-center rounded-full  hover:bg-gray-700 hover:cursor-pointer transition duration-400 ease-in-out">
              <h1>{faq3 ? "-" : "+"}</h1>
              <span className="text-[#def400] text-4xl">&#x2775;</span>
            </button>
          </div>
          {/* A3 */}
          {faq3 ? (
            <div className="mt-4 animate-on-load translate-down-fade flex justify-between w-full text-xl">
              <div className="flex w-full space-x-12">
                <div className="flex space-x-1 items-center">
                  <h1 className="text-left font-thin">
                    C, C++, C#, Haskell, Java, JavaScript, TypeScript,
                    Objective-C, Pascal, Python.
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </li>

        <li className="p-4 ease-in-out rounded-lg w-full flex flex-col justify-between">
          {/* Q4 */}
          <div
            onClick={() => (faq4 ? Untoggle() : toggleFaq(4))}
            className="font-bold flex justify-between w-full text-2xl"
          >
            <div className="flex w-full space-x-12">
              <div className="flex space-x-2 items-center">
                <span className="text-[#def400] text-4xl">&#x2774;</span>
                <h1 className="">Time and location?</h1>
              </div>
            </div>
            <button className="space-x-2 flex items-center rounded-full   hover:bg-gray-700 hover:cursor-pointer transition duration-400 ease-in-out">
              <h1>{faq4 ? "-" : "+"}</h1>
              <span className="text-[#def400] text-4xl">&#x2775;</span>
            </button>
          </div>
          {/* A4 */}
          {faq4 ? (
            <div className="animate-on-load translate-down-fade flex justify-between w-full text-xl">
              <div className="flex w-full space-x-12">
                <div className="flex space-x-1 items-center">
                  <h1 className="text-left font-thin">
                    The event will be at{" "}
                    <span className="font-bold">ESI Algiers</span> <br />
                    <span className="font-bold">28th Nov 2023</span>
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="absolute bottom-3 right-4 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>{" "}
        <div className="flex space-x-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>{" "}
        <div className="flex space-x-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>{" "}
        <div className="flex space-x-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>{" "}
        <div className="flex space-x-4">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
