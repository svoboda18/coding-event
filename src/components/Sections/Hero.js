import Image from "next/image";
import "../../app/globals.css";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row w-full px-[10vw] lg:justify-between gap-[7vh]">
      <div className="flex flex-col gap-[10vh] order-last lg:order-first justify-center items-center lg:items-start">
        <p className="lg:text-6xl md:text-5xl xl:text-8xl text-5xl font-bold uppercase text-white leading-normal ">
          Are You Ready
          <br /> to be the <br />
          <Image src={"/Code.png"} alt="logo" width={720} height={110} />
        </p>
        <div className="flex gap-[1vw]">
          <button className=" bg-[#DEF400] border-2 border-[#DEF400] px-[2vw] py-[2vh]">
            Register Now
          </button>
          <button className=" bg-transparent border-2 border-[#DEF400] text-[#DEF400] px-[2vw] py-[2vh]">
            Solve the Challenge
          </button>
        </div>
      </div>
      <Image
        src={"/Frame.png"}
        alt="logo"
        width={640}
        height={640}
        sizes="40vw"
        style={{
          width: "auto",
          height: "auto",
        }}
      />
    </section>
  );
}

export default Hero;
