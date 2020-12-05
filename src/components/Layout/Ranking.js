import React from "react";
export default function Logo() {
  return (
    <div className="w-full mt-4 md:mt-0 md:flex flex-wrap items-center">
 
       <img
        className="w-32 md:order-1 order-none h-16"
        src="https://www.flaticon.es/svg/static/icons/svg/1074/1074775.svg"
        alt="icon-deadpool"
      />
      <h2 className="text-white text-center uppercase font-bold md:-mr-4">
        Ir a Ranking
      </h2>
    </div>
  );
}
