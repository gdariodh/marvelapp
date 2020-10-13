import React, { useEffect, useState } from "react";
// axios configurado
import clienteAxios from "../../../config/axios";
// components review
import Serie from "./Serie";
import Spinner from "../../spinner/Spinner";

export default function ListadoSeries({ id_heroe }) {
  const [series, setSeries] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    const req = async () => {
      const key = `f2b9a3277c025b953471c3448f8c8905`;
      const url_comic = `/characters/${id_heroe}/series?apikey=${key}`;
      const {
        data: {
          data: { results },
        },
      } = await clienteAxios(url_comic);

      setSeries(results);
      setSpinner(true);
      setTimeout(() => setSpinner(false), 800);
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
        <div className='flex justify-between flex-wrap'>
          {series &&
            series.map((serie, i) => (
              <Serie key={`${serie.id}-${i}`} serie={serie} />
            ))}
        </div>
      )}
    </>
  );
}
