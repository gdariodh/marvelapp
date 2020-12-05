import React from "react";
// children de AboutHeroe.js
export default function Eventos({ evento }) {
  if (evento === null) return null;

  return (
    <>
      <div>
        <div className="md:max-w-sm md:w-64 w-full border-2 border-blue-100 rounded overflow-hidden shadow-lg mx-3 my-3">
          <img
            className="w-full h-64"
            src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div
              className="bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4"
              role="alert"
            >
              <p className="font-bold text-center">{evento.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
