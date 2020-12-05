import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <img
        className="w-32  h-20 md:h-24 md:-mb-4 md:-mt-3 -mb-1"
        src="https://www.flaticon.com/svg/static/icons/svg/1674/1674298.svg"
        alt="icon-deadpool"
      />

      <img
        className="w-32 h-14 border rounded-lg"
        src="https://logos-download.com/wp-content/uploads/2018/07/Marvel_logo_red.png"
        alt="logo-marvel"
      />
    </div>
  );
}
