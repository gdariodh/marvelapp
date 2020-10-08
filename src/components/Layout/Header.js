import React from "react";
import { Link } from "react-router-dom";
// Separo en componente el header para tener el componente mas limpio
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      className='bg-auto text-white sm:bg-local py-4 flex flex-col md:flex-row justify-between items-center border rounded-lg'
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2903386.gif")`,
      }}>
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className='lg:mr-10 uppercase flex flex-col md:flex-row '>
        <Navigation />
      </div>
    </header>
  );
}
