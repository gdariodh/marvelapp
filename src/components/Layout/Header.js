import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {peleasContext} from '../../context'
import Logo from "./Logo";
import Ranking from './Ranking'

export default function Header() {

  const {luchadoresranking} = useContext(peleasContext)
   
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
      {
        luchadoresranking.length >= 1 && (
          <Link to={'/heroes/peleadores'}>
            <Ranking/>
          </Link>
        )
      }
      
    </header>
  );
}
