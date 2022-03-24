import React from "react";

//import'./style.css';

const InfoDivs = (props) => {
  return (
    <React.Fragment>
      <div className="px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem] py-[5rem]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.rev ? "md:flex-row-reverse" : "md:flex-row"
            } pt-[5rem]`}
          >
            <div className=" flex items-center justify-center h-[25rem]">
              <iframe
                title={item.title}
                className=" relative h-full z-10 pointer-events-none"
                src={item.frame}
              ></iframe>
            </div>
            <div className="flex items-center justify-center w-full px-[2rem]">
              <p className="text-[24px] font-semibold text-gray-800 dark:text-gray-200">
                {" "}
                <span className="text-[#0ac5a8] font-bold text-[40px]">
                  {item.title}&nbsp;
                </span>{" "}
                {item.subtitle}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const data = [
  {
    frame: "https://embed.lottiefiles.com/animation/70065",
    title: "Decentralized health platform",
    subtitle:
      "to aid in managing patient reports and provide seamless healthcare whenever and wherever needed across the globe",
  },
  {
    frame: "https://embed.lottiefiles.com/animation/70453",
    title: "Certified Labs and Doctors",
    subtitle:
      "to aid in managing patient reports and provide seamless healthcare  whenever and wherever needed across the globe",
    rev: true,
  },
  {
    frame: "https://embed.lottiefiles.com/animation/34758",
    title: " Connect Google fit",
    subtitle:
      "and send one week of wellness data along with the health report to enhance insights and treatment",
  },
];

export default InfoDivs;