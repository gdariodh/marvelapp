import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { peleasContext } from "../../context";
import Logo from "./Logo";
import Ranking from "./Ranking";

export default function Header() {
  const { luchadoresranking } = useContext(peleasContext);

  return (
    <header
      className="bg-auto text-white sm:bg-local py-4 flex flex-col md:flex-row md:justify-between justify-center items-center md:p-4"
      style={{
        backgroundImage: `url("https://universocompartido.com.ar/wp-content/uploads/2019/03/vlcsnap-2019-03-14-18h17m39s535-1030x427.png")`,
      }}
    >
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      {luchadoresranking.length >= 1 && (
        <Link to={"/heroes/peleadores"}>
          <Ranking />
        </Link>
      )}
    </header>
  );
}
