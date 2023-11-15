import Image from "next/image";
import arrow from "../../../public/About&Agenda/arrow.png";
import time from "../../../public/About&Agenda/time.svg";
import date from "../../../public/About&Agenda/date.png";
import deco from "../../../public/About&Agenda/bg-deco.png";

function Agenda() {
  const agenda = [
    { time: "13h-13h30", title: "Check-in" },
    { time: "13h30-14h", title: "Opening ceremony" },
    { time: "14h-14h30", title: "Activity" },
    { time: "14h30-17h", title: "Hacking" },
    { time: "17h30-18h", title: "Closing ceremony" },
  ];
  return (
    <div className="relative flex items-center justify-center w-screen h-full mx-auto bg-[#141414] p-8">
      <div className="flex flex-col items-center justify-center px-[10vw] gap-[6vh]">
        <h1 className="font-['Gilroy'] font-extrabold text-xl sm:text-2xl xl:text-6xl lg:text-4xl md:text-2xl text-white">
          Agenda
        </h1>
        <div className="flex flex-col items-center justify-center gap-12">
          <ul className="flex flex-col gap-10 text-base sm:text-xl md:text-2xl xl:text-3xl font-normal uppercase font-['Gilroy']">
            {agenda.map((event) => (
              <li
                key={event.time}
                className="flex items-center justify-start gap-8 p-2 item-row"
              >
                <Image src={arrow} alt="arrow" className="w-4 md:w-8 xl:w-12" />
                <div className=" justify-start items-start gap-[34px]  ">
                  <h1 className="text-white tracking-[6px]">
                    {event.time}: {event.title}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-10 text-base sm:text-xl md:text-2xl xl:text-3xl  font-normal font-['Gilroy'] uppercase">
            <div className="flex items-center justify-start gap-8 p-2 item-row">
              <Image src={time} alt="time" className="w-4 md:w-8 lg:w-12" />
              <div className=" justify-start items-start gap-[34px]  ">
                <h1 className="text-white  tracking-[6px]">13h - 18h</h1>
              </div>
            </div>
            <div className="flex items-center justify-start gap-8 p-2 item-row">
              <Image src={date} alt="date " className="w-4 md:w-8 lg:w-12" />
              <div className=" justify-start items-start gap-[34px]  ">
                <h1 className="text-white tracking-[6px]">28/11/2023</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
