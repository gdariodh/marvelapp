import React from "react";
export default function Logo() {
  return (
    <div className='sm:mb-6'>
      <div className='flex flex-col md:flex-row justify-around'>
        <div>
          <img
            className='w-32 h-16 border rounded-lg lg:mt-4 sm:mr-6 sm:mt-3 lg:mr-6 mb-6  lg:mb-none mb-2 lg:mb-2'
            src='https://www.flaticon.es/svg/static/icons/svg/1074/1074775.svg'
            alt='icon-ranking'
          />
            <h2 className='text-white text-center uppercase font-bold py-2 px-6 lg:mr-20'>
              Ranking
            </h2>
        </div>
      </div>
    </div>
  );
}
