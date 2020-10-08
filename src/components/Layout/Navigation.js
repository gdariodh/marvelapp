import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div className='md:mr-6 mb-8 lg:mb-2'>
        <Link
          className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700 rounded'
          to={"/heroes/eventos"}>
          Eventos
        </Link>
      </div>
      <div className='md:mr-6 mb-8 lg:mb-2'>
        <Link
          className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700 rounded'
          to={"/heroes/comics"}>
          Comics
        </Link>
      </div>
      <div className='md:mr-6'>
        <Link
          className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700 rounded'
          to={"/heroes/series"}>
          Series
        </Link>
      </div>
    </>
  );
}
