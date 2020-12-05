import React, { useEffect, useState } from "react";
// axios configurado
import clienteAxios from "../../../config/axios";
// components review
import Comic from "./Comic";
import Spinner from "../../spinner/Spinner";

export default function ListadoComics({ id_heroe }) {
  const [comics, setComics] = useState([]);
  const [spinner,setSpinner] = useState(false);
  useEffect(() => {
    const req = async () => {
      const key = `f2b9a3277c025b953471c3448f8c8905`;
      const url_comic = `/characters/${id_heroe}/comics?apikey=${key}`;
      const {
        data: {
          data: { results },
        },
      } = await clienteAxios(url_comic);

      setComics(results);
      setSpinner(true);
      setTimeout(() => setSpinner(false),800);
    };
    req();
  }, [id_heroe]);

  return (
    <>
      {spinner ? (
        <div className='mt-24 mx-auto'>
          <Spinner />
        </div>
      ) : (
        <div className='flex flex-col md:flex-row flex-wrap pt-4  md:justify-around'>
          {comics &&
            comics.map((comic, i) => (
              <Comic key={`${comic.id}-${i}`} comic={comic} />
            ))}
        </div>
      )}
    </>
  );
}
