import React from "react";
export default function Logo() {
  return (
    <div className="w-full mt-4 md:mt-0 md:flex flex-wrap justify-center items-center md:mr-5">
 
       <img
        className="w-24 md:order-1 order-none h-12"
        src="https://www.flaticon.es/svg/static/icons/svg/1074/1074775.svg"
        alt="ranking"
      />
      <h2 className="text-white text-center uppercase font-bold mt-2 md:mt-0 md:-mr-2">
        Ranking
      </h2>
    </div>
  );
}
