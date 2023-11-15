import Image from "next/image";
import Logo from "../../../public/About&Agenda/Logo.svg";

function About() {
  return (
    <div className="relative flex items-center justify-center w-screen h-full mx-auto bg-[#141414]">
      <div className="flex flex-col items-center justify-center w-10/12 gap-[6vh]">
        <Image src={Logo} alt="Logo" className="sm:w-1/2" />
        <h1 className="w-full text-center text-white xl:text-4xl lg:text-2xl text-xl leading-10 md:leading-10 md:text-3xl font-normal font-['Gilroy'] 2xl:leading-[80px] xl:leading-[60px] inline-block">
          Code Masters is an electrifying coding game competition where
          programmers showcase their skills through challenges spanning various
          languages and problem domains. Participants, either solo or in teams,
          tackle algorithmic puzzles, debug code, and optimize solutions in a
          competitive yet collaborative environment. With rounds of increasing
          complexity, it offers a platform for networking, knowledge exchange,
          and exposure to industry practices, making it an exciting opportunity
          for coding enthusiasts to prove their prowess.
        </h1>
      </div>
    </div>
  );
}

export default About;
