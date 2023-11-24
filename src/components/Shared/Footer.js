import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#444444] py-[10vh] px-[20vw]">
        <div className="flex flex-col items-center gap-[6vh]">
          <h2 className="font-bold text-white text-center text-3xl lg:text-6xl uppercase">
            Are You ready to Grow your Coding Skills ?
          </h2>
          <h2 className="font-bold text-[#DEF400] text-center text-xl lg:text-4xl uppercase">
            Let’s Keep in Touch
          </h2>
          <div className="flex gap-[6vw]">
            {/* <Image
              src={"/Fb.svg"}
              width={72}
              height={72}
              alt={"Facebook"}
              sizes="5vw"
              style={{
                width: "10%",
                height: "auto",
              }}
            /> */}
            <a href="https://www.instagram.com/codemasters55/?hl=fr">
              <Image
                src={"/In.svg"}
                width={270}
                height={270}
                alt={"Instagram"}
                sizes="5vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
            {/*<Image
              src={"/Th.svg"}
              width={72}
              height={72}
              alt={"Threads"}
              sizes="5vw"
              style={{
                width: "10%",
                height: "auto",
              }}
            />
            <Image
              src={"/X.svg"}
              width={72}
              height={72}
              alt={"X"}
              sizes="5vw"
              style={{
                width: "10%",
                height: "auto",
              }}
            />
            <Image
              src={"/Ds.svg"}
              width={72}
              height={72}
              alt={"Discord"}
              sizes="5vw"
              style={{
                width: "10%",
                height: "auto",
              }}
            />*/}
          </div>
        </div>
      </footer>
      <p className="text-center text-white py-[4vh] text-md lg:text-2xl">
        Copyright © 2023 Code Masters . All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
