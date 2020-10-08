import React from "react";

export default function Logo() {
  return (
    <div className='sm:mb-6'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <img
            className='w-48 h-24 lg:ml-6'
            src='https://www.flaticon.com/svg/static/icons/svg/1674/1674298.svg'
            alt='icon-deadpool'
          />
        </div>
        <div>
          <img
            className='w-32 h-16 border rounded-lg lg:mt-4 sm:mr-6 sm:mt-3 lg:mr-6 mb-6  lg:mb-none mb-6 lg:mb-2'
            src='https://www.tomosygrapas.com/wp-content/uploads/2016/02/reportada.jpg'
            alt='logo-marvel'
          />
        </div>
      </div>
    </div>
  );
}
