import React from "react";
import { Route, Switch } from "react-router-dom";
// components routing
import ListadoHeroes from "../components/heroes/ListadoHeroes";
import AboutHeroe from "../components/heroes/about/AboutHeroe"
import Peleas from "../components/heroes/peleas/Peleas";
import ListadoPeleadores from "../components/heroes/peleas/Peleadores/ListadoPeleadores"; 


export default function Index() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={ListadoHeroes} />
        <Route exact path='/heroe' component={AboutHeroe} />
        <Route exact path='/heroes/peleas' component={Peleas} />
        <Route exact path='/heroes/peleadores' component={ListadoPeleadores} />
        <Route path='/' component={ListadoHeroes} />
      </Switch>
    </>
  );
}
