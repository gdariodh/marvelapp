import React from "react";
// children de AboutHeroe.js
export default function Comic({ serie }) {
   
  if (serie === null) return null;

  return (
    <>
      <div>
        <div className='max-w-sm w-64 rounded overflow-hidden shadow-lg mx-3 my-3'>
        <img
            className='w-full h-64'
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div
              className='bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4'
              role='alert'>
              <p className='font-bold text-center'>{serie.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
